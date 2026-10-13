// pi-payments.js - ملف نظام مدفوعات باي الشامل لجميع الأزرار

// 1. تهيئة مكتبة Pi وتحديد النسخة المستهدفة (بيئة الاختبار)
Pi.init({ version: "2.0", sandbox: true });

// 2. تفعيل تسجيل دخول المستخدم تلقائياً عند فتح التطبيق
async function authUser() {
    try {
        const scopes = ['username', 'payments'];
        const authResult = await Pi.authenticate(scopes, onIncompletePaymentFound);
        console.log("تم تسجيل دخول المستخدم بنجاح:", authResult.user.username);
    } catch (error) {
        console.error("خطأ في تسجيل الدخول عبر شبكة باي:", error);
    }
}

// 3. دالة معالجة المدفوعات المعلقة التي لم تكتمل سابقاً
function onIncompletePaymentFound(payment) {
    console.log("تم العثور على دفعة معلقة، جاري تسويتها:", payment);
}

// 4. الدالة الرئيسية لإنشاء وإتمام عملية الدفع عند الضغط على أي زر
function requestPiPayment(buttonCallback) {
    Pi.createPayment({
        amount: 0.1, // السعر التجريبي بالـ Test-Pi لكل ضغطة زر
        memo: "رسوم استخدام ميزات حاسبة المستشار الكهربائي الذكي",
        metadata: { action: "button_click_access" }
    }, {
        onReadyForServerApproval: function(paymentId) {
            console.log("الدفعة جاهزة للموافقة، معرف الدفع:", paymentId);
        },
        onReadyForServerCompletion: function(paymentId, txid) {
            console.log("اكتملت المعاملة بنجاح، رقم الحركة:", txid);
            // بعد نجاح الدفع، نقوم بتنفيذ الوظيفة الأصلية للزر
            buttonCallback();
        },
        onCancel: function(paymentId) {
            alert("تم إلغاء عملية الدفع، لا يمكنك استخدام هذه الميزة بدون الدفع.");
        },
        onError: function(error, payment) {
            console.error("حدث خطأ أثناء معالجة الدفع:", error);
            alert("فشلت عملية الدفع، يرجى المحاولة مجدداً.");
        }
    });
}

// 5. ربط الكود بجميع أزرار التطبيق تلقائياً بمجرد تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // تشغيل تسجيل الدخول فوراً
    authUser();

    // جلب جميع أزرار وعناصر الضغط في الصفحة
    const allButtons = document.querySelectorAll("button, .btn, [role='button']");

    allButtons.forEach(button => {
        // حفظ الوظيفة الأصلية للزر 
        const originalClick = button.onclick;

        // اعتراض حدث الضغط وتغييره لطلب الدفع أولاً
        button.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();

            // طلب الدفع من محفظة المستخدم
            requestPiPayment(() => {
                if (originalClick) {
                    originalClick.call(button, event);
                } else {
                    alert("تم تأكيد الدفع بنجاح! جاري تشغيل الميزة الفنية الآن.");
                }
            });
        }, true); 
    });
});
