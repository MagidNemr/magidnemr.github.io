window.storeDatabase = window.storeDatabase || [];

// 1. مولدات الديزل الاحتياطية الكاتمة للصوت (Silent Diesel Generators 30kVA - 1000kVA)
var genKvaList = "30,50,75,100,150,200,250,350,500,750,1000".split(",");
for (var i = 0; i < genKvaList.length; i++) {
  var kva = Number(genKvaList[i]);
  window.storeDatabase.push({
    c: 'power', b: 'مولدات ديزل', s: 'GEN-' + kva + 'KVA',
    t: 'مولد كهرباء ديزل كاتم للصوت (Silent Canopy) قدرة ' + kva + ' kVA',
    d: 'مولد احتياطي 3 فاز تبريد مياه مع لوحة تحكم ديجيتال ديب سي (Deep Sea) وبطاريات تشغيل.',
    k1: 'القدرة الاحتياطية:', v1: kva + ' kVA (Standby)', k2: 'الجهد والتردد:', v2: '380/220V - 50Hz', p: Math.ceil(kva * 11) + 400
  });
}

// 2. أجهزة عدم انقطاع التيار (Online Double-Conversion UPS)
var upsList = [
  { cap: '1 kVA (900W)', ph: '1Ph In / 1Ph Out', p: 45 },
  { cap: '3 kVA (2.7kW)', ph: '1Ph In / 1Ph Out', p: 95 },
  { cap: '6 kVA (5.4kW)', ph: '1Ph In / 1Ph Out', p: 185 },
  { cap: '10 kVA (9kW)', ph: '1Ph / 3Ph Configurable', p: 290 },
  { cap: '20 kVA (18kW)', ph: '3Ph In / 3Ph Out', p: 540 },
  { cap: '40 kVA (36kW)', ph: '3Ph In / 3Ph Out', p: 980 },
  { cap: '80 kVA (72kW)', ph: '3Ph In / 3Ph Out', p: 1750 },
  { cap: '100 kVA (90kW)', ph: '3Ph In / 3Ph Out', p: 2150 }
];
for (var j = 0; j < upsList.length; j++) {
  var u = upsList[j];
  window.storeDatabase.push({
    c: 'power', b: 'أنظمة UPS', s: 'UPS-ONL-' + (j + 1),
    t: 'جهاز عدم انقطاع التيار (Online UPS) قدرة ' + u.cap,
    d: 'حماية فورية بدون زمن تحويل (Zero Transfer Time) للسيرفرات والأجهزة الطبية وخطوط الإنتاج الحساسة.',
    k1: 'القدرة:', v1: u.cap, k2: 'الأطوار:', v2: u.ph, p: u.p
  });
}

// 3. أنظمة التحكم في الدخول والصوتيات والإذاعة الداخلية (Access Control & Public Address)
window.storeDatabase.push(
  { c: 'auto', b: 'تحكم في الدخول', s: 'ACC-BIO-PRO', t: 'جهاز حضور وانصراف وتحكم في الأبواب بالبصمة والوجه والكارت (Access Control)', d: 'نظام تأمين أبواب الشركات والمصانع مع إمكانية الربط بالكالون المغناطيسي وبرامج الحضور.', k1: 'طرق التحقق:', v1: 'وجه + بصمة + كارت RFID', k2: 'الاتصال:', v2: 'TCP/IP + Wi-Fi + USB', p: 42 },
  { c: 'auto', b: 'تحكم في الدخول', s: 'MAG-LOCK-280', t: 'كالون مغناطيسي للأبواب (Electromagnetic Lock) قوة تحمل 280 كجم مع براكيت', d: 'قفل أمان إلكتروني صامت للأبواب الزجاجية والخشبية والمعدنية يعمل بنظام Fail-Safe.', k1: 'قوة الجذب:', v1: '280 kg (600 lbs)', k2: 'التغذية:', v2: '12V / 24V DC', p: 18 },
  { c: 'auto', b: 'أنظمة صوتيات PA', s: 'PA-AMP-240W', t: 'أمبليفاير إذاعة داخلية ونظام نداء عام (Public Address Mixer Amplifier) 240W', d: 'مضخم صوت للمصانع والمستشفيات والمساجد والمولات يدعم تقسيم المناطق (Zones) وبلوتوث.', k1: 'القدرة:', v1: '240 Watt (100V Line)', k2: 'المناطق:', v2: '6 مناطق مستقلة (6 Zones)', p: 78 },
  { c: 'auto', b: 'أنظمة صوتيات PA', s: 'PA-SPK-CEIL', t: 'سماعة سقف ديكورية للإذاعة الداخلية 6 وات / 10 وات (ترانس 100 فولت)', d: 'سماعة غاطس في الجبس بورد لصوت نقي في الممرات والمكاتب والمستشفيات.', k1: 'القدرة:', v1: '6W / 10W (100V)', k2: 'المقاس:', v2: '6.5 بوصة أبيض', p: 9 }
);
