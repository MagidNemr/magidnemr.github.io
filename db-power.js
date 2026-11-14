window.storeDatabase = window.storeDatabase || [];

// 1. الكونتاكتورات من 9A إلى 1000A
var cList = new Array(9, 12, 18, 25, 32, 40, 50, 65, 80, 95, 115, 150, 185, 225, 265, 330, 400, 500, 630, 800, 1000);
for (var i = 0; i < cList.length; i++) {
  var a = cList[i];
  window.storeDatabase.push({
    c: 'power', b: 'كونتاكتورات صناعية', s: 'CONT-' + a + 'A',
    t: 'كونتاكتور صناعي 3 فاز قدرة ' + a + ' أمبير (AC3)',
    d: 'كونتاكتور للخدمة الشاقة للمحركات والأحمال الصناعية، بوبينة 220V/380V مع نقاط مساعدة NO+NC.',
    k1: 'التيار المقنن:', v1: a + ' أمبير', k2: 'جهد التشغيل:', v2: '220V / 380V / 690V', p: Math.ceil(a * 0.45)
  });
}

// 2. قواطع MCCB و ACB من 16A إلى 4000A
var bList = new Array(16, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3200, 4000);
for (var j = 0; j < bList.length; j++) {
  var ba = bList[j];
  var isACB = ba >= 1000;
  window.storeDatabase.push({
    c: 'power', b: isACB ? 'قواطع ACB هوائية' : 'قواطع MCCB مقولبة', s: (isACB ? 'ACB-' : 'MCCB-') + ba + 'A',
    t: (isACB ? 'قاطع هوائي رئيسي ACB ' : 'قاطع مقولب MCCB ') + ba + ' أمبير (3P/4P)',
    d: 'قاطع عمومي للوحات التوزيع الرئيسية بالمصانع والمنشآت مع وحدة فصل حراري ومغناطيسي/إلكتروني.',
    k1: 'التيار:', v1: ba + ' أمبير', k2: 'سعة القطع:', v2: isACB ? '65kA - 100kA' : '36kA - 85kA', p: Math.ceil(ba * 0.8)
  });
}
