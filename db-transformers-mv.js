window.storeDatabase = window.storeDatabase || [];

var trKva =;
for (var i = 0; i < trKva.length; i++) {
  var kva = trKva[i];
  window.storeDatabase.push({
    c: 'transformers', b: 'محولات توزيع', s: 'TR-OIL-' + kva,
    t: 'محول توزيع كهربائي زيتي قدرة ' + kva + ' ك.ف.أ (11/0.4 kV)',
    d: 'محول ثلاثي الأوجه ملفات نحاس بالكامل مع مغير جهد (Tap Changer) وحماية بوخلز.',
    k1: 'القدرة:', v1: kva + ' kVA', k2: 'نسبة التحويل:', v2: '11kV / 400V Dyn11', p: Math.ceil(kva * 1.4)
  });
}

var capKvar = [5, 10, 12.5, 15, 20, 25, 30, 40, 50, 60];
for (var j = 0; j < capKvar.length; j++) {
  var kvar = capKvar[j];
  window.storeDatabase.push({
    c: 'transformers', b: 'مكثفات معامل القدرة', s: 'CAP-' + kvar + 'KVAR',
    t: 'مكثف تحسين معامل القدرة الأسطواني الجاف ' + kvar + ' KVAR',
    d: 'مكثف ثلاثي الأوجه لتقليل القدرة غير الفعالة وتجنب غرامات شركة الكهرباء.',
    k1: 'القدرة:', v1: kvar + ' KVAR', k2: 'الجهد:', v2: '400V / 440V 50Hz', p: Math.ceil(kvar * 0.9)
  });
}

var ctAmps =;
for (var k = 0; k < ctAmps.length; k++) {
  var ct = ctAmps[k];
  window.storeDatabase.push({
    c: 'transformers', b: 'محولات تيار CT', s: 'CT-' + ct + '-5A',
    t: 'محول تيار قياس وحماية (Current Transformer) ' + ct + '/5A',
    d: 'محول تيار دقة Class 0.5 للعدادات وأجهزة القياس ولوحات تحسين معامل القدرة.',
    k1: 'نسبة التحويل:', v1: ct + ' / 5 A', k2: 'الدقة:', v2: 'Class 0.5 / 15VA', p: 8 + Math.floor(ct / 200)
  });
}

window.storeDatabase.push(
  { c: 'transformers', b: 'موزعات RMU', s: 'RMU-3WAY', t: 'وحدة ربط حلقي RMU 3 خلايا (2 دخول/خروج + 1 محول) 12/24kV', d: 'موزع جهد متوسط معزول بغاز SF6 مدمج مع قاطع حماية للمحول.', k1: 'الجهد:', v1: '12 / 24 kV', k2: 'التيار المقنن:', v2: '630A / 20kA', p: 850 },
  { c: 'transformers', b: 'موزعات RMU', s: 'RMU-4WAY', t: 'وحدة ربط حلقي RMU 4 خلايا كاملة للربط الشبكي', d: 'وحدة توزيع جهد متوسط مجهزة بمؤشرات أعطال الأرضي والقصر FPI.', k1: 'الجهد:', v1: '12 / 24 kV', k2: 'الحماية:', v2: 'IP65 داخلي/خارجي', p: 1120 }
);
