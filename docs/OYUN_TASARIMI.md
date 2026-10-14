# Bozkır Surfers — tasarım ve varlık notları

## Oyun fikri

İç Anadolu'nun tozlu, sapsarı kerpiç köyleri ve bozkır vadilerinde geçen bir sonsuz koşu oyunu. Oyuncu, yonca toplayarak kaçan bir eşeği yönetir. Yollar köy sokakları, patikalar ve harman yerlerinden esinlenir; eski kara tren demiryolu çevrenin bir parçasıdır.

Görsel atmosfer: sarı tepe yamaçları, dönen paslı su kuyusu rüzgargülü, kavak ağaçları ve güneşte parlayan teneke çatılı kerpiç evler.

## Engeller ve ekonomi

- Salça tepsileri ve tarhana örtüleri: üzerinden zıplanır.
- Saman balyaları, el arabaları, koyunlar, kazlar ve kerpiç duvarlar: kaçınılır veya yeterince yükseğe zıplanır.
- Kurumuş asma çardakları: altından eğilerek geçilir.
- Damlar ve traktör römorkları: yaylı nallarla yüksek sıçrayış yapılır.
- Dört yapraklı yeşil yoncalar: dükkânda nazarlık, semer ve yeni nallar için kullanılır.
- Tuz taşı: çevredeki yoncaları çeker.
- Küp şeker: toplanan yoncaları geçici olarak iki kat sayar.
- Yaylı nallar: zıplama yüksekliğini artırır.
- Eski kilim: çift dokunma veya Space ile açılır, süre boyunca engellerden korur. İlk fikirdeki sac tava alternatifi bu sürümde bulunmaz.

Kesin süreler, kontroller ve kayıt davranışı için ana README ve `src/logic.js` dosyasına bakın.

## Kovalamaca ve barışma

Kovalayan dayının başında kasket, üzerinde yelek ve şalvar vardır. Elinde yonca ve su dolu bakır tas taşır:

> Dur la dur, vallahi bilmeden bastım kuyruğuna!

Yanında, eşeğe kıyamayan tombik bir Kangal yavrusu koşar. Yakalanma bir şiddet sahnesi değildir: dayı eşeğe yaklaşır, sarılma/öpücük fikrini temsil eden kısa bir barışma animasyonu oynar, kalpler görünür ve yavru etraflarında döner. Sonuç ekranı:

> Kırık kalpler tamir oldu: [Skor] Yonca toplandı.

Mevcut sürümde bu sahne basit geometriler ve kodla hareket ettirilen parçalarla gerçekleştirilir. Ayrıntılı karakter rigleri ve sinematik animasyonlar henüz yoktur. Tarayıcı destekliyorsa Türkçe konuşma sentezi kullanılır.

## Tripo3D üretim kaydı

- Üretim tarihi: 10 Ekim 2026.
- Model: `c366b1be-b36e-4d0c-8e94-3e0f0a098781`.
- Bağlantı: https://studio.tripo3d.ai/tr/workspace/generate/c366b1be-b36e-4d0c-8e94-3e0f0a098781
- Model seçimi: H3.1, geometri ve doku.
- Kullanılan mevcut kredi: 55.
- Arayüzde görülen yaklaşık geometri: 1.910.671 üçgen, 982.131 köşe.
- GLB dışa aktarma abonelik ekranıyla engellendi. Abonelik satın alınmadı; GLB dosyası repoda bulunmaz.
- Oyundaki mevcut modeller `src/models.js` içinde kodla üretilmiştir. Bunlar Tripo3D'den indirilmiş modeller değildir.

Kullanılan üretim metni:

```text
A single charming stylized low-poly Anatolian donkey, full body, standing on four separate legs in neutral pose, long upright ears, gray warm fur, cream muzzle and belly, dark short mane, expressive kind eyes, traditional red Turkish kilim saddle blanket with small turquoise evil eye beads. Cute chunky proportions, handcrafted miniature clay aesthetic, clean game-ready mesh, diffuse earthy colors, no base, no ground, no background, no accessories apart from saddle, facing forward.
```

GLB erişilebilir olduğunda entegrasyon yolu ve mevcut animasyon sınırlamaları README'de açıklanmıştır. Modeli mobil oyun için sadeleştirmek gerekir.

## Teslim kapsamı

Bu repo yerel tarayıcıda oynanan Three.js/Vite sürümünü, kaynak kodunu, testlerini ve dokümantasyonunu içerir. Native Android/iOS paketi veya çevrimiçi sunucu dağıtımı içermez. Oyun ilerlemesi tarayıcıda tutulur; oyuncuların yerel kayıtları repoya yüklenmez.
