# Bozkır Surfers

İç Anadolu'da geçen, Three.js ile yapılmış yerel 3B sonsuz koşu oyunu. Bilgisayar ve mobil tarayıcı kontrolleri vardır.

Hikâye, oyun tasarımı, Tripo3D üretim metni ve mevcut kapsam: [Oyun tasarımı ve varlık notları](docs/OYUN_TASARIMI.md).

## Çalıştırma

Node.js 20.19+ veya 22.12+ gerekir.

```powershell
npm install
npm run dev
```

Terminaldeki yerel adresi açın. Başka bir program 5173 portunu kullanıyorsa `npm run dev -- --port 5174` çalıştırın. Üretim çıktısı için `npm run build`, mantık testleri için `npm test`.

## Kontroller

- Sol/sağ ok veya A/D: köy yolunda yön değiştir.
- Yukarı ok veya W: zıpla. Yaylı nallar varken daha yükseğe çık.
- Aşağı ok veya S: çardak altında eğil; havadaysan hızla yere in.
- Space: eski kilimi aç. Tur başına iki hak, her biri yedi saniye koruma.
- P veya Escape: duraklat/devam et.
- Telefonda kaydırma: aynı hareketler; çift dokunma: kilim.

Salça, tarhana, saman, koyun, kaz, kerpiç duvar, el arabası, römork, dam ve çardak engelleri vardır. Her engel sırasında en az bir yol açık kalır. Tuz taşı 10 saniye yonca çeker, şeker 10 saniye iki kat yonca verir, yaylı nallar 12 saniye sürer. Dükkân eşyaları kozmetiktir; bakiye, rekor ve satın alımlar aynı tarayıcının yerel depolamasında saklanır. Sekmeden ayrılmak oyunu duraklatır.

## Tripo3D modeli

10 Ekim 2026'da kullanıcı hesabında 55 mevcut krediyle eşek modeli üretildi:

https://studio.tripo3d.ai/tr/workspace/generate/c366b1be-b36e-4d0c-8e94-3e0f0a098781

GLB dışa aktarma ücretli abonelik ekranıyla engellendi; satın alma yapılmadı. Bu sürümdeki karakter ve çevre geometrileri özgün, kodla oluşturulmuş geçici modellerdir. Tripo modeli oyuna dahil edilmiş değildir. Üretilen model yaklaşık 1.91 milyon üçgen içeriyor; dışa aktarmadan önce oyun için 10–30 bin üçgene ve 1K dokuya düşürülmesi önerilir.

Erişilebilir bir GLB dışa aktarıldığında `public/assets/donkey.glb` olarak kopyalayın ve `public/assets/manifest.json` içindeki `donkey` alanını `/assets/donkey.glb` yapın. Model otomatik ortalanır ve boyutlandırılır; yön için `rotationY` radyan değerini ayarlayın. Başarısız yükleme yerel modeli korur. İçe aktarılan model rig animasyonu içermezse gövde hareketi uygulanır; ayrıntılı bacak animasyonu yerel modelde vardır. İçe aktarılan modele kozmetik eşyaların rig uyarlaması ayrıca gerekir.

## Dosyalar

- `src/main.js`: sahne, oyun döngüsü, kontroller ve arayüz.
- `src/models.js`: özgün 3B modeller ve ortak geometri/materyal önbelleği.
- `src/logic.js`: çarpışma eşikleri, güç süreleri, kayıt ve alışveriş mantığı.
- `tests/logic.test.js`: çarpışma, koruma, alışveriş ve kayıt kurtarma testleri.

Google Fonts yüklenemezse sistem fontu kullanılır. Oyun için sürekli bir ağ servisi veya hesap gerekmez. Dağıtım dosyaları `dist/` içine üretilir; `file://` yerine HTTP sunucusundan açılmalıdır.
