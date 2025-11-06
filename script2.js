// script2.js dosyasının içeriği:

// 1. İlk script'ten gelen 'toplanan_deger' değişkenini kullanıyoruz ve değiştiriyoruz.
// SİTE BUNU ÇOK RAHAT GÖREBİLİR VE KULLANABİLİR!
toplanan_deger = toplanan_deger + 50;

// 2. İkinci script'in çalıştığını ve değerin değiştiğini gösteriyoruz.
let eski_metin = document.getElementById('sonuc').innerHTML;

document.getElementById('sonuc').innerHTML = 
    eski_metin + "<br><br>" + 
    "Script 2 de çalıştı. Script 1'den gelen değerle toplama yapıldı.<br>" +
    "Yeni ve son değer: " + toplanan_deger;
