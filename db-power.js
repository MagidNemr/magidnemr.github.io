window.storeDatabase = window.storeDatabase || [];

var contactorAmps =;
for (var i = 0; i < contactorAmps.length; i++) {
  var a = contactorAmps[i];
  window.storeDatabase.push({
    c: 'power', b: 'كونتاكتورات صناعية', s: 'CONT-' + a + 'A',
    t: 'كونتاكتور صناعي 3 فاز قدرة ' + a + ' أمبير (AC3)',
    d: 'كونتاكتور للخدمة الشاقة للمحركات والأحمال الصناعية، بوبينة 220V/380V مع نقاط مساعدة NO+NC.',
    k1: 'التيار المقنن:', v1: a + ' أمبير', k2: 'جهد التشغيل:', v2: '220V / 380V / 690V', p: Math.ceil(a * 0.45)
  });
}

var breakerAmps =;
for (var j = 0; j < breakerAmps.length; j++) {
  var ba = breakerAmps[j];
  var isACB = ba >= 1000;
  window.storeDatabase.push({
    c: 'power', b: isACB ? 'قواطع ACB هوائية' : 'قواطع MCCB مقولبة', s: (isACB ? 'ACB-' : 'MCCB-') + ba + 'A',
    t: (isACB ? 'قاطع هوائي رئيسي ACB ' : 'قاطع مقولب MCCB ') + ba + ' أمبير (3P/4P)',
    d: 'قاطع عمومي للوحات التوزيع الرئيسية بالمصانع والمنشآت مع وحدة فصل حراري ومغناطيسي/إلكتروني.',
    k1: 'التيار:', v1: ba + ' أمبير', k2: 'سعة القطع:', v2: isACB ? '65kA - 100kA' : '36kA - 85kA', p: Math.ceil(ba * 0.8)
  });
}

var softKw = [7.5, 11, 15, 18.5, 22, 30, 37, 45, 55, 75, 90, 110, 132, 160, 200, 250];
for (var k = 0; k < softKw.length; k++) {
  var kw = softKw[k];
  window.storeDatabase.push({
    c: 'power', b: 'سوفت ستارتر', s: 'SOFT-' + kw + 'KW',
    t: 'جهاز بدء ناعم للمحركات (Soft Starter) ' + kw + ' كيلووات',
    d: 'تقليل تيار البدء للمحركات الكبيرة وحماية المضخات والضواغط من الصدمات الميكانيكية.',
    k1: 'القدرة:', v1: kw + ' kW', k2: 'الجهد:', v2: '380V - 415V 3Ph', p: Math.ceil(kw * 1.8)
  });
}
