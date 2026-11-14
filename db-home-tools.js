window.storeDatabase = window.storeDatabase || [];

var trList = new Array(100, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500);
for (var i = 0; i < trList.length; i++) {
  var kva = trList[i];
  window.storeDatabase.push({
    c: 'transformers', b: 'محولات توزيع', s: 'TR-OIL-' + kva,
    t: 'محول توزيع كهربائي زيتي قدرة ' + kva + ' ك.ف.أ (11/0.4 kV)',
    d: 'محول ثلاثي الأوجه ملفات نحاس بالكامل مع مغير جهد وحماية بوخلز.',
    k1: 'القدرة:', v1: kva + ' kVA', k2: 'نسبة التحويل:', v2: '11kV / 400V Dyn11', p: Math.ceil(kva * 1.4)
  });
}

var ctList = new Array(50, 100, 150, 200, 250, 300, 400, 500, 600, 800, 1000, 1250, 1600, 2000, 3000);
for (var k = 0; k < ctList.length; k++) {
  var ct = ctList[k];
  window.storeDatabase.push({
    c: 'transformers', b: 'محولات تيار CT', s: 'CT-' + ct + '-5A',
    t: 'محول تيار قياس وحماية (Current Transformer) ' + ct + '/5A',
    d: 'محول تيار دقة Class 0.5 للعدادات وأجهزة القياس ولوحات تحسين معامل القدرة.',
    k1: 'نسبة التحويل:', v1: ct + ' / 5 A', k2: 'الدقة:', v2: 'Class 0.5 / 15VA', p: 8 + Math.floor(ct / 200)
  });
}
