window.storeDatabase = window.storeDatabase || [];

// 1. الألواح الشمسية (Monocrystalline N-Type / Half-Cell)
[
  { w: 450, eff: '21.3%', p: 42 }, { w: 550, eff: '21.8%', p: 52 },
  { w: 585, eff: '22.5%', p: 58 }, { w: 610, eff: '22.8%', p: 64 }, { w: 700, eff: '23.1%', p: 75 }
].forEach(function(panel) {
  window.storeDatabase.push({
    c: 'solar', b: 'ألواح شمسية', s: 'PV-' + panel.w + 'W',
    t: 'لوح طاقة شمسية مونو كريستالين ' + panel.w + ' وات (Tier-1)',
    d: 'لوح شمسي عالي الكفاءة مقاوم للعوامل الجوية والغبار مع ضمان أداء خطي 25 عاماً.',
    k1: 'القدرة:', v1: panel.w + ' Watt', k2: 'الكفاءة:', v2: panel.eff, p: panel.p
  });
});

// 2. إنفرتر طاقة شمسية هجين (Hybrid Solar Inverter) للمنازل والمصانع
[3.6, 5.5, 6.2, 8, 10, 12, 15, 20, 30, 50].forEach(function(kw) {
  window.storeDatabase.push({
    c: 'solar', b: 'إنفرتر هجين', s: 'SOL-HYB-' + kw + 'KW',
    t: 'إنفرتر طاقة شمسية هجين MPPT قدرة ' + kw + ' كيلووات',
    d: 'يعمل مع البطاريات وبدون بطاريات مع إمكانية الربط على الشبكة ومراقبة Wi-Fi.',
    k1: 'القدرة:', v1: kw + ' kW', k2: 'الشاحن:', v2: 'MPPT مزدوج عالي الجهد', p: Math.ceil(kw * 28) + 60
  });
});

// 3. بطاريات ليثيوم فوسفات الحديد (LiFePO4) وأنظمة الحماية DC
[
  { s: 'BAT-5KWH', b: 'بطاريات ليثيوم', t: 'بطارية ليثيوم شمسية LiFePO4 سعة 5.12 kWh (51.2V 100Ah)', d: 'بطارية تخزين طاقة ذكية مزودة بنظام BMS وعمر افتراضي يتجاوز 6000 دورة شحن.', k1: 'السعة:', v1: '5.12 kWh', k2: 'الجهد:', v2: '51.2V (16S)', p: 320 },
  { s: 'BAT-10KWH', b: 'بطاريات ليثيوم', t: 'بطارية ليثيوم جدارية LiFePO4 سعة 10.24 kWh (51.2V 200Ah)', d: 'حل تخزين متكامل للمنازل والشركات مع شاشة عرض واتصال CAN/RS485.', k1: 'السعة:', v1: '10.24 kWh', k2: 'العمر:', v2: '6000+ Cycles', p: 590 },
  { s: 'SPD-DC-1000V', b: 'حماية شمسية DC', t: 'مانع صواعق تيار مستمر Solar DC SPD 1000V (2P/3P)', d: 'حماية الألواح الشمسية والإنفرتر من التفريغ الكهربائي وارتفاع الجهد المفاجئ.', k1: 'الجهد:', v1: '1000V DC', k2: 'تيار التفريغ:', v2: '20kA - 40kA', p: 14 }
].forEach(function(item) {
  window.storeDatabase.push({
    c: 'solar', b: item.b, s: item.s, t: item.t, d: item.d,
    k1: item.k1, v1: item.v1, k2: item.k2, v2: item.v2, p: item.p
  });
});
