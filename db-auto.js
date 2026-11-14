window.storeDatabase = window.storeDatabase || [];

// 1. أجهزة الإنفرتر (VFD)
[
  { kw: '0.75kW (1HP)', v: '220V Single Phase', p: 45 },
  { kw: '1.5kW (2HP)', v: '220V Single Phase', p: 58 },
  { kw: '2.2kW (3HP)', v: '220V Single Phase', p: 72 },
  { kw: '4kW (5.5HP)', v: '380V Three Phase', p: 95 },
  { kw: '7.5kW (10HP)', v: '380V Three Phase', p: 135 },
  { kw: '11kW (15HP)', v: '380V Three Phase', p: 180 }
].forEach(function(inv, i) {
  window.storeDatabase.push({
    c: 'auto', b: 'إنفرتر VFD', s: 'VFD-' + (i + 1) + '00',
    t: 'مغير سرعة محركات (إنفرتر) ' + inv.kw,
    d: 'تحكم دقيق في سرعة وعزم المحركات الحثية مع حماية مدمجة من زيادة التيار والجهد.',
    k1: 'القدرة:', v1: inv.kw, k2: 'جهد الدخل:', v2: inv.v, p: inv.p
  });
});

// 2. وحدات التحكم المنطقي المبرمج (PLC) والشاشات (HMI)
[
  { s: 'PLC-14R', b: 'وحدات PLC', t: 'وحدة PLC صناعية 14 نقطة (8 دخل / 6 خرج ريلاي)', d: 'وحدة تحكم مبرمجة للماكينات وخطوط الإنتاج تدعم بروتوكول Modbus RS485.', k1: 'التغذية:', v1: '24V DC', k2: 'المخارج:', v2: 'Relay 2A', p: 65 },
  { s: 'PLC-24T', b: 'وحدات PLC', t: 'وحدة PLC صناعية 24 نقطة (14 دخل / 10 خرج ترانزستور)', d: 'وحدة عالية السرعة للتحكم في محركات السيرفو والستيبر والعمليات المتزامنة.', k1: 'التغذية:', v1: '24V DC', k2: 'المخارج:', v2: 'Transistor', p: 88 },
  { s: 'HMI-7IN', b: 'شاشات HMI', t: 'شاشة لمس صناعية HMI مقاس 7 بوصة ملونة', d: 'واجهة تشغيل ومراقبة للماكينات عالية الدقة مع منفذ USB و RS485/RS232.', k1: 'المقاس:', v1: '7 Inch TFT', k2: 'الحماية:', v2: 'IP65', p: 75 },
  { s: 'SENS-IND', b: 'حساسات صناعية', t: 'حساس تقاربي حثي (Inductive Proximity Sensor) M12', d: 'حساس استشعار المعادن بدون تلامس مسافة 4 مم، نوع NPN/PNP مقاوم للأتربة.', k1: 'الجهد:', v1: '10-30V DC', k2: 'المسافة:', v2: '4 mm', p: 7 },
  { s: 'SSR-40DA', b: 'ريلاي إلكتروني', t: 'سوليد ستيت ريلاي (Solid State Relay) 40 أمبير', d: 'مفتاح إلكتروني صامت للتحكم في السخانات الصناعية والأحمال السريعة بدون شرارة.', k1: 'التحكم:', v1: '3-32V DC', k2: 'الحمل:', v2: '40A / 380V AC', p: 9 }
].forEach(function(item) {
  window.storeDatabase.push({
    c: 'auto', b: item.b, s: item.s, t: item.t, d: item.d,
    k1: item.k1, v1: item.v1, k2: item.k2, v2: item.v2, p: item.p
  });
});
