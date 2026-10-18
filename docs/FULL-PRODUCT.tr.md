# NAVRYNT tam ürün özellik rehberi

[English](FULL-PRODUCT.md) · [Türkçe](FULL-PRODUCT.tr.md) · [Aranabilir katalog](https://kaandevs-ops.github.io/navrynt-website-public/features.html?lang=tr)

İnceleme: **18 Ekim 2026**. Bu rehber kaynak, arayüz ve API tanımlarına dayalı ürün düzeyi envanterdir. Bu dokümantasyon güncellemesinde yeni canlı kabul testi yapılmadı. Kodda bulunması, kurulu veya doğrulanmış olduğu anlamına gelmez.

## Üç ayrı bileşen

| Bileşen | Görev |
|---|---|
| Web sitesi | Tam ürünü anlatır, gereksinimleri ve kaynaklı kayıtları gösterir |
| Statik demo | Kurgusal vaka/grafik/izler, gerçek yerel hash ve çalıştırılmayan model planı |
| Ayrı tam uygulama | Python backend, React arayüz, yapılandırılmış adaptörler ve model servisleri |

## Kanıt etiketleri

- **Tarihsel gerçek kayıt**: Yalnız bağlantılı tarihsel işlem gösterilir; ilgili bütün işlemler doğrulanmış sayılmaz.
- **Demo akışı örneklemesi**: Kurgusal demo örneklemesidir; tam backend için çalışma kanıtı değildir.
- **Kod incelemesi**: Kaynak/arayüz/API incelemesi yapılmıştır; burada işlem kaydı yayımlanmamıştır.

Gereksinimler kanıt etiketinden bağımsızdır. Yapılandırılmış bir adaptör veya sağlıklı servis, sağlayıcının bütün sorgularını ya da model doğruluğunu kanıtlamaz.

## Kullanım yolları

- **Kaynaktan vakaya**: Kaynak kaydet → topla → kanıtı incele → normalize et → çözümleme adaylarını değerlendir → grafiği incele → raporla.
- **Konum bağlamı**: İzinli kaynak sorgula veya gözlem ver → zaman/koordinatları incele → zaman-uzaklık pencerelerini karşılaştır → adayları değerlendir. Kesin konum garantisi verilmez.
- **Medya incelemesi**: Bayt/metadata incele → transkript/anahtar kare veya model adayını değerlendir → kaynak bağlamını koru → incelenen gözlemi vakaya bağla.
- **Biyometrik araştırma**: Yetkili örnek ve uygun model/galeri kullan → kaydet/karşılaştır → eşik ve protokolü incele → bağımsız doğrula. Demo bu akışı çalıştırmaz.
- **Model işlemleri**: Veri/model haklarını incele → desteklenen işlemi seç → ortamı yapılandır → günlük/çıktıları incele → hedef veride değerlendir. Katalogda bulunmak başarılı iş demek değildir.

## Özellik envanteri

**122 özellik girdisi · 14 grup · 25 ana gezinme ekranı.** Bu girdiler ilişkili işlemleri bir araya getirir; her iç fonksiyonun ayrı listesi değildir.

## Soruşturma çalışma alanı

Vakaları, varlıkları, ilişkileri ve analist bağlamını birlikte incele.

### Vaka yaşam döngüsü

Vaka oluştur, listele ve incele; beklet, yeniden aç veya kapat; vaka düzeyinde analiz veri çıkış politikasını belirle.

- **Kanıt**: Demo akışı örneklemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Bağlantılı demo bu akışı kurgusal verilerle örnekler; tam uygulamanın backend çalışmasını doğrulamaz.

### Vaka geçmişi ve anlık görüntüler

Eklemeli geçmiş olaylarını kaydet ve yeniden erişilebilir soruşturma anlık görüntüleri oluştur.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Analist kilitleri ve oturum görünürlüğü

Vaka düzenleme kilitlerini al ve bırak; yapılandırılmış REST/WebSocket yüzeyleri üzerinden oturum görünürlüğünü incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Oturum ve kilitleme arayüzleri çakışmasız düzenleme veya üretim çok kullanıcılı yük kapasitesini kanıtlamaz.

### Vaka yedekleme ve geri yükleme

Yedek kümeleri oluştur, dosya envanterini incele ve seçilen kümeyi geri yükle.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yedekleme zamanlamaları

Periyodik veya kalıcı vaka yedekleme zamanlamaları oluştur, incele ve iptal et.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yedek deposu ve gereken durumlarda çalışan zamanlayıcı/işçi.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Varlık çözümleme ve inceleme

Tanımlayıcıları normalize et, çözümleme adayları üret ve çözümlenmiş varlık kayıtlarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Çözümleme adayı veya ortak tanımlayıcı, iki kaydın aynı kişiye ait olduğunu kanıtlamaz.

### Bilgi ve kaynak grafikleri

Bağlı varlık ve kaynakları incele, grafik görünümleri türet ve soruşturma ilişkilerini görselleştir.

- **Kanıt**: Demo akışı örneklemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Bağlantılı demo bu akışı kurgusal verilerle örnekler; tam uygulamanın backend çalışmasını doğrulamaz.

### Zaman çizelgesi ve soruşturma haritası

Zamansal olayları düzenle ve vakaya bağlı gözlemleri haritada incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Arama ve erişim indeksi

Saklanan soruşturma içeriğinde ara ve yapılandırılmış erişim indeksini yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Notlar, etiketler ve kayıtlı sorgular

Analist notlarını, yer imlerini, etiketleri ve yeniden kullanılabilir sorgu tanımlarını yönet.

- **Kanıt**: Demo akışı örneklemesi.
- **Gereksinimler**: Yapılandırılmış backend, vaka deposu ve uygun çalışma alanı izinleri.
- **Sınır**: Bağlantılı demo bu akışı kurgusal verilerle örnekler; tam uygulamanın backend çalışmasını doğrulamaz.

## Kanıt ve yeniden üretilebilirlik

Kaynak bağlamını ve dönüşüm geçmişini sonuçla birlikte koru.

### Kanıt alımı ve özgün kayıtlar

Kanıt kayıtlarını, toplanan ham malzemeyi ve kaynak bağlamını sakla ve incele.

- **Kanıt**: Demo akışı örneklemesi.
- **Gereksinimler**: Kanıt deposu, kullanma yetkisi olan giriş dosyaları ve ilgili vaka izinleri.
- **Sınır**: Bağlantılı demo bu akışı kurgusal verilerle örnekler; tam uygulamanın backend çalışmasını doğrulamaz.

### Bütünlük ve kanıt yaşam döngüsü

Kanıt bütünlüğünü tara ve süresi dolan kanıtı yapılandırılmış politikaya göre arşivle.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Kanıt deposu, kullanma yetkisi olan giriş dosyaları ve ilgili vaka izinleri.
- **Sınır**: Bayt hash değeri kaynak gerçekliğini kanıtlamaz. Public demo ayrıca gerçek yerel SHA-256 hesabını gösterir.

### Dönüşüm geçmişi

İzlenebilir işleme için normalizasyon ve diğer dönüşüm adımlarını kaydet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Kanıt deposu, kullanma yetkisi olan giriş dosyaları ve ilgili vaka izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Soruşturma paketi dışa aktarımı

Destekleyen kanıt ve bağlamla yapılandırılmış soruşturma paketi oluştur.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Kanıt deposu, kullanma yetkisi olan giriş dosyaları ve ilgili vaka izinleri.
- **Sınır**: Demo özeti örnek bir JSON dışa aktarımıdır; tam ürün soruşturma paketinin kabul testi değildir.

### Güvenilir zaman damgası entegrasyonu

Kanıt zaman damgası akışlarında yapılandırılmış zaman damgası otoritesini kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun zaman damgası otoritesi adaptörü ve dış servis/ağ erişimi.
- **Sınır**: Zaman damgası seçilen otorite ve güven yapılandırmasına bağlıdır; genel hukuki kabul edilebilirlik iddiası değildir.

## Kaynaklar ve toplama akışları

Yönetilen kaynakları bağla; toplama, normalizasyon ve iş durumlarını incele.

### Kaynak kaydı ve sağlık görünümü

Kaynak kaydet, etkinleştir veya kapat; sağlık geçmişini, panoları ve puan kartlarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Toplama çalışmaları ve geçmiş

Yapılandırılmış toplayıcıyı çalıştır; iş durumunu ve kanıt çıktılarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Zamanlanmış ve artımlı toplama

Periyodik toplama zamanlamalarını ve yapılandırılmış artımlı işlemeyi yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### İş akışı düzenleme ve izleme

Toplama, normalizasyon, çözümleme, korelasyon ve bilgi grafiği aşamalarını çalışma izleriyle düzenle.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Alım tamponu ve karantina

Sonraki işleme geçmeden alım durumunu ve karantinaya alınmış kayıtları incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Kayıt normalizasyonu ve geçişi

Kayıtları normalize et, kanıta bağlı sürümleri getir ve desteklenen geçişleri uygula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Web tarama

Seçilen kaynak ve erişim politikaları altında yapılandırılmış web toplamayı çalıştır.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Site yapısı değişimi

Toplayıcı bakımında gözlenen site yapılarını karşılaştır ve gözlemleri koru.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Kalıcı iş durumu ve iptal

Desteklenen arka plan iş durumunu incele ve iptal iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Alan adı ve altyapı keşfi

Yapılandırılmış DNS, RDAP, sertifika şeffaflığı ve alt alan adı keşfi bileşenlerini kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış toplayıcılar, izinli hedef erişimi, ağ kullanılabilirliği ve gereken zamanlanmış işçiler.
- **Sınır**: Kapsam ve güncellik kaynağa bağlıdır; keşif tam envanter garantisi değildir.

## Dijital ayak izi ve iletişim

Belirsiz ilişkileri kesin kimlik sonucu gibi sunmadan bağlamsal sinyalleri incele.

### Parola sızıntı kontrolü

Hash önekiyle sızıntı sorgusu yap ve saklanan kontrol kayıtlarını yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Hash öneki sorgusu ayrı yapılandırılan HIBP e-posta ihlal hizmetinden farklıdır; public demo bu kontrolleri yapmaz.

### E-posta ihlal sorgusu

Yapılandırılmış HIBP entegrasyonu üzerinden desteklenen ihlal bilgisini sorgula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun HIBP hesabı/erişim bilgisi, etkin adaptör ve izinli kullanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Hesap varlığı sinyalleri

Yapılandırılmış sağlayıcıdan hesap varlığı sinyalleri iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Sağlayıcı sinyali hesap sahipliğini veya tam servis kapsamını kanıtlamaz.

### Kullanıcı adı araması

Yapılandırılmış site tanımları üzerinde desteklenen kullanıcı adı kontrollerini yap ve sonuçları incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Eşleşen adlar ortak sahipliği kanıtlamaz; site değişiklikleri ve hız sınırları sonuçları etkiler.

### E-posta desenleri ve yerel kısım çıkarımı

Yerel kısım ipuçları ve desteklenen kurumsal e-posta deseni adayları üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Çıkarılan desenler ve ad/yıl ipuçları adaydır; doğrulanmış kimlik veya teslim edilebilir adres değildir.

### Telefon numarası analizi

Verilen numaraları ayrıştır ve analiz et; isteğe bağlı operatör/konum metadatasını sorgula ve sonuçları sakla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Numara metadatası ve numaralandırma bölgesi ipuçları telefonun canlı GPS konumu değildir.

### IOC zenginleştirme

Verilen göstergeleri yapılandırılmış tehdit istihbaratı sağlayıcısıyla zenginleştir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış tehdit istihbaratı adaptörü; erişim bilgileri ve kotalar sağlayıcıya bağlıdır.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Pasif DNS

Yapılandırılmış kaynak üzerinden mevcut tarihsel DNS ilişkilerini sorgula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili girişler, yapılandırılmış adaptörler ve gerektiğinde sağlayıcı erişimi veya model bağımlılıkları.
- **Sınır**: Tarihsel ilişkiler eksik veya eski olabilir; mevcut altyapı sahipliğini kanıtlamaz.

### Belge çıkarımı

Soruşturma işlemesinde desteklenen belge içeriğini ve metadatasını çıkar.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Desteklenen giriş biçimleri ve ilgili ayrıştırıcı/OCR bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

## Kurumsal, taşıt ve kripto araştırması

Sicilleri ve açık kayıtları gerçek anlam ve kapsamlarıyla incele.

### Bildirilen şirket ilişkileri

Desteklenen şirket sicili verilerini ve bildirilen üst şirket ilişkilerini sorgula.

- **Kanıt**: Tarihsel gerçek kayıt.
- **Gereksinimler**: Yapılandırılmış sicil/sağlayıcı adaptörleri ve gereken kaynak erişimi.
- **Sınır**: Yayımlanan GLEIF kaydı muhasebesel üst şirket ilişkisini gösterir; gerçek kişi faydalanıcı sahipliğini veya her aracıyı göstermez.
- [Gerçek kayıt](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-companies)

### Yaptırım ve PEP taraması

Verilen özneleri yapılandırılmış yaptırım/PEP kaynağında tara.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış sicil/sağlayıcı adaptörleri ve gereken kaynak erişimi.
- **Sınır**: Eşleşmeler insan incelemesi ve kaynak kontrolü gerektirir; hukuki bulgu değildir.

### Faydalanıcı sahiplik zinciri sorgusu

Desteklenen UBO zincir bilgisi için yapılandırılmış sahiplik kaynaklarını kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış sicil/sağlayıcı adaptörleri ve gereken kaynak erişimi.
- **Sınır**: Kapsam sahiplik kaynağına bağlıdır; GLEIF muhasebesel konsolidasyon ilişkisi tam UBO zinciriyle eşdeğer değildir.

### Taşıt sicili sorgusu

Yapılandırılmış adaptörle desteklenen plaka/VIN sicil alanlarını sorgula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış sicil/sağlayıcı adaptörleri ve gereken kaynak erişimi.
- **Sınır**: Alanlar ve ülkeler sicile bağlıdır; sahip kimliği veya araç konumu ima edilmez.

### Salt okunur kripto cüzdan etkinliği

Yapılandırılmış kaynakla desteklenen cüzdan bakiye ve işlem kayıtlarını sorgula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış sicil/sağlayıcı adaptörleri ve gereken kaynak erişimi.
- **Sınır**: Salt okunur açık kayıtlar cüzdan sahibini belirlemez; ödeme veya cüzdan kontrol akışı gösterilmez.

## GEOINT ve konum bağlamı

Gözlemler, koordinat sistemleri ve model kaynaklı konum adaylarıyla çalış.

### Bölgesel uçuş gözlemleri

Desteklenen ADSB.lol uçuş durumlarını sorgula ve dönen koordinatları haritada göster.

- **Kanıt**: Tarihsel gerçek kayıt.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Tek tarihsel bölgesel anlık görüntü yayımlanmıştır; sürekli takip veya tam uçuş envanteri değildir.
- [Gerçek kayıt](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-aircraft)

### Açık deprem olay haritası

Desteklenen USGS olay kayıtlarını topla ve haritalanan gözlemleri incele.

- **Kanıt**: Tarihsel gerçek kayıt.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Kayıt en fazla ilk 150 konumu gösterir. Tarihsel olay verisi tahmin veya erken uyarı değildir.
- [Gerçek kayıt](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-earthquakes)

### Hava modeli sorgusu

Verilen koordinat için desteklenen Open-Meteo verisini iste ve dönen model ızgara noktasını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Hava modeli ızgarası yerinde sensör ölçümü değildir; açık kullanım kaynak koşullarına bağlıdır.

### OpenSky uçuş durumu entegrasyonu

Desteklenen uçuş durumu sorguları için yapılandırılmış OpenSky kaynağını kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun OpenSky erişimi/bilgileri, yapılandırılmış adaptör ve kullanılabilir kaynak kotası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### AIS gemi trafiği entegrasyonu

Yapılandırılmış AIS kaynağından desteklenen gemi konumlarını iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: AIS sağlayıcı erişimi, yapılandırılmış adaptör ve izinli veri kullanımı.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### GDELT olay akışı

Araştırma ve konumsal bağlam için desteklenen olay kayıtlarını topla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Bildirilen olaylar kaynak kayıtlarıdır; olayın bağımsız doğrulaması değildir.

### Uydu yörünge hesabı

Desteklenen TLE verisinden yapılandırılmış SGP4 akışıyla konum hesapla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Hesaplanan yörünge konumları canlı GPS telemetrisi veya uydu görüntüsü değildir.

### Koordinat dönüşümleri

Desteklenen işlemlerle WGS84, UTM ve ECEF girişlerini dönüştür.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Geçerli koordinatlar, doğru kaynak referans sistemi ve konumsal kütüphaneler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Vektör ve konumsal veritabanı

Desteklenen vektörleri incele, katmanları içe aktar ve konumsal depoda sınırlayıcı kutu sorgula.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Desteklenen konumsal dosyalar, veritabanı konumları ve içe aktarma/sorgu izinleri.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Hareket izi anomali göstergeleri

Verilen gözlemlerde yapılandırılmış konum sıçramalarını ve raporlama boşluklarını işaretle.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Eşik tabanlı göstergeler inceleme ipucudur; hukuka aykırı davranış veya sensör gerçekliği kanıtı değildir.

### Konumsal ve zamansal aday korelasyonu

Verilen gözlemleri uzaklık/zaman pencereleri ve olay-konum kısıtlarıyla karşılaştır.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kaynak adaptörleri, izinli ağ erişimi ve ilgili konumsal bağımlılıklar.
- **Sınır**: Konumsal çakışma aday üretir; kesin kimlik veya nedensellik oluşturmaz.

### Görsel konum adayları

Görsel konum adaylarını sıralamak için yapılandırılmış görsel model/eşleştirme adaptörünü kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uyumlu görsel model ağırlıkları, referans veri, eşleştirme adaptörü ve çalışma kapasitesi.
- **Sınır**: Aday sıralaması kesin konum kanıtı değildir; kaynak kodu veya sağlıklı servis doğruluk ölçümü değildir.

## Medya ve adli inceleme

Dosya özelliklerini, model çıktısını ve analist sonucunu ayır.

### Görsel metadata ve algısal hash

Desteklenen görsel metadatasını incele ve benzerlik amaçlı dosya tanımlayıcıları hesapla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Metadata değiştirilebilir; algısal benzerlik gerçeklik kararı değildir.

### Deepfake model değerlendirmesi

Desteklenen girişte yapılandırılmış tespit modelini çalıştır ve çıktısını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Model skoru kesin gerçek/sahte kararı değildir; model varlıkları ve bağımsız değerlendirme gerekir.

### Ses metadatası ve transkripsiyon

Desteklenen ses özelliklerini analiz et ve yapılandırılmış konuşma motorundan transkript al.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Transkriptler özel adları ve gürültülü konuşmayı yanlış tanıyabilir; kayıtla karşılaştırılmalıdır.

### Video metadatası ve anahtar kareler

Desteklenen video metadatasını incele ve anahtar kareleri çıkar veya gözden geçir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Manipülasyon göstergeleri ve ELA

Analist incelemesi için desteklenen hata seviyesi/manipülasyon göstergelerini üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Sıkıştırma izleri ve göstergeler tek başına manipülasyonu kanıtlamaz.

### Sahne ve nesne analizi

Desteklenen görüntülerde yapılandırılmış sahne/nesne adaptörünü kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Ters görsel arama entegrasyonu

Yapılandırılmış ters görsel sağlayıcısını sorgula ve dönen adayları incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Sonuçlar sağlayıcı indeksine bağlıdır; ilk yayın kaynağı garantisi değildir.

### Kaynak atfı adayları

Kaynak atfı adayları önermek için desteklenen yayın kanıtlarını karşılaştır.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Erişilebilir en erken gözlem her zaman özgün yayıncı değildir.

### Medya ve zaman çizelgesi köprüsü

Desteklenen medya gözlemlerini soruşturma zaman çizelgesi bağlamıyla ilişkilendir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili medya girdisi, desteklenen biçimler ve gereken ayrıştırıcılar/modeller veya dış sağlayıcılar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

## Altı biyometrik tür

Ayrı çıkarım servislerindeki tür bazlı işlemleri incele.

### Yüz vektörü ve galeri akışları

Vektör çıkar, karşılaştır, tanıma adaylarını incele ve çok şablonlu kayıt galerilerini yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Public demo bir örneklemedir; popülasyon doğruluğu, eşikler ve sahtecilik direnci burada doğrulanmış değildir.

### İris kaydı ve kimlik adayları

İris örneklerini kaydet ve yapılandırılmış servisten ilk-k kimlik adaylarını iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Parmak izi minutiae, kalite ve eşleştirme

Özellikleri çıkar, kaliteyi incele, izleri karşılaştır ve desteklenen tanıma/model yükleme yollarını kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Klasik/model kiplerinin gereksinimleri farklıdır; kalite sezgiseli NIST NFIQ2 sertifikasyonu değildir.

### Ses kaydı ve karşılaştırma

Araştırma konuşma örneklerini kaydet ve ses karşılaştırma sonucunu incele.

- **Kanıt**: Tarihsel gerçek kayıt.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Yayımlanan LibriSpeech örneği diller, cihazlar, gürültü veya tekrar oynatma saldırılarında doğruluğu kanıtlamaz.
- [Gerçek kayıt](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-voice)

### Ses galerileri ve ilk-k kimlik adayları

Ses kayıtlarını listele/sil ve desteklenen ilk-k konuşmacı kimlik adaylarını kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Yayımlanan kayıt/karşılaştırma videosu her galeri yönetimi veya kimlik adayı işlemini doğrulamaz.

### Yazar kimliği vektörleri ve arama

El yazısı vektörü çıkar, örnekleri karşılaştır ve yapılandırılmış yazar galerisinde ara.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Akış el yazısı karşılaştırmasını anlatır; kişilik çıkarımı veya adli kesinlik sağlamaz.

### Yürüyüş vektörü ve karşılaştırma

Desteklenen yürüyüş dizilerinden vektör çıkar ve ikili karşılaştırma iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Dizi biçimi, bakış açısı ve alan sonuçları etkiler; genel kimlik doğruluğu iddiası yapılmaz.

### Servis sağlığı ve geçit durumu

Erişilebilirlik/hazır durumunu incele ve onaylı işlemleri ayrı servislere yönlendir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yetkili örnekler, uygun eğitilmiş model/galeri, uyumlu servis ortamı ve izinler.
- **Sınır**: Erişilebilir veya kayıtlı servis gerçek tanıma doğruluğunu kanıtlamaz.

## Model Studio ve model işlemleri

Desteklenen model akışlarını hazırla, yapılandır ve incele.

### Yaşam döngüsü işleri ve iptal

Desteklenen işleri başlat, durum/günlükleri incele ve geçit üzerinden iptal iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Katalogda bulunması her eğitim, değerlendirme veya dışa aktarımın başarıyla çalıştırıldığı anlamına gelmez.

### Yönetilen ayarlar, veri kümeleri ve çıktılar

Onaylı veri kümelerini/çıktıları incele; yönetilen iş yapılandırmalarını oku veya kaydet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yüz model yaşam döngüsü kataloğu

Desteklenen hazırlık, sıfırdan eğitim/ince ayar, değerlendirme, galeri kurma ve ONNX aktarım girişleri.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### İris yaşam döngüsü kataloğu

Desteklenen metrik eğitim, ince ayar, değerlendirme, ölçüm ve ONNX aktarım girişleri.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Parmak izi yaşam döngüsü kataloğu

Desteklenen eğitim, ince ayar, kalite aracı ve model aktarım girişleri.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Ses yaşam döngüsü kataloğu

Desteklenen eğitim/ince ayar, eşik kalibrasyonu ve ONNX aktarım girişleri.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yazar kimliği yaşam döngüsü kataloğu

Desteklenen eğitim, ince ayar, zor negatif çıkarımı, değerlendirme ve aktarım girişleri.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yürüyüş yaşam döngüsü kataloğu

Desteklenen eğitim/ince ayar, sıfır örnek, CMC/mAP, açılar arası değerlendirme, görselleştirme ve aktarım yolları.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Model kaydı ve yönlendirme

Model kaydet, metadatayı incele ve desteklenen model/sağlayıcı yollarını seç.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yerel model yaşam döngüsü

Desteklenen yerel model indirme, sunucu başlatma/durdurma ve sağlık işlemlerini kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Donanım ve dağıtım profilleri

Donanım önerilerini/tespitini ve yapılandırılmış dağıtım profillerini incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Öneriler ölçülmüş üretim boyutlandırması veya gecikme garantisi değildir.

### Ölçümler ve A/B karşılaştırması

Desteklenen model/erişim ölçümlerini çalıştır, sonuçları sakla ve verilen örneklerde modelleri karşılaştır.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Deneyler ve veri kümesi kataloğu

Deneyleri/metrikleri ve desteklenen veri kümesi kayıtlarını/katalog girdilerini yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Model kullanım defteri

Desteklenen model kullanım girdilerini ve özetlerini kaydet ve incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Uygun model/veri lisansları, uyumlu bağımlılıklar, servis yetkisi, depolama ve donanım.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

## Yapay zekâ destekli analiz ve inceleme

Üretilen sinyalleri kaynak bağlamıyla incelenebilir adaylar olarak ele al.

### Adlandırılmış varlık çıkarımı

Desteklenen metinden varlık adayları çıkar ve kanıta bağlı sonuçları incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Metin sınıflandırma ve konular

Verilen metni sınıflandır ve konu tespiti adaylarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Duygu analizi adayları

Desteklenen duygu analizini çalıştır ve kanıta bağlı adayları getir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Metin vektörleri ve anlamsal arama

Desteklenen metnin vektörünü çıkar ve indeksli pasajlarda anlamsal benzerlikle ara.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Erişim destekli yanıtlar

Desteklenen pasajları al, sorgula ve saklanan yanıt geçmişini incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Özetler ve zenginleştirme

Yetkili içerikte yapılandırılmış özetleme ve zenginleştirme akışlarını kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Analist inceleme kuyruğu

Analiz adaylarını incele ve onay veya ret kararını kaydet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Açıklanabilirlik ve kaynağa dayandırma

Üretilen yanıtların desteklenen açıklamalarını ve kaynağa dayandırma değerlendirmesini incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kaynağa dayandırma kontrolleri belirsizliği azaltabilir; doğruluk veya hatalı üretimin yokluğunu garanti etmez.

### Doğal dil sorgu önizlemesi

İncelemek için desteklenen metinden sorgu önizlemeleri üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Üretilen sorgu önizlemesi otomatik sorgu çalıştırma veya yetkilendirme değildir.

### Faaliyet ve bağlamsal ipuçları

Desteklenen faaliyet/sınıflandırma ve bağlamsal zenginleştirme ipuçları üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Çıkarılan ilgi, meslek veya bağlam belirsiz ipuçlarıdır; doğrulanmış kişisel özellik değildir.

### Grafik topluluğu açıklamaları

Analist incelemesi için desteklenen grafik topluluğu gruplamalarını açıkla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Soruşturma önerileri

Verilen soruşturma bağlamından desteklenen sonraki adım önerileri üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Çok dilli hazırlık ve çeviri

Desteklenen çok dilli işlemeyi hazırla ve desteklenen rapor bölümlerini çevir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Dil ve rapor bölümü desteği seçilen ortama bağlıdır; çıktılar inceleme gerektirir.

### Aktif öğrenme geri bildirimi

Desteklenen akışlarda analist geri bildirimini kaydet ve geri bildirim raporlarını getir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Geri bildirim kaydı tek başına modeli yeniden eğitmez veya doğruluk artışını kanıtlamaz.

### Kanıt füzyonu

Desteklenen çok kaynaklı/model sinyallerini incelenebilir kanıt füzyonu çıktısında birleştir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış yerel algoritmalar veya model/sağlayıcı adaptörleri, indeksli veri ve yetkili veri çıkış politikası.
- **Sınır**: Birleşik skorlar model ve girdiye bağlı kalır; kesin kimlik sonucu değildir.

## İzleme, uyarılar ve raporlama

Tekrarlayan incelemeyi ve yapılandırılmış çıktıları analistlere görünür kıl.

### İzleme listeleri

İzleme listesi tanımları oluştur, etkinleştir/kapat ve zamanı gelenleri incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış zamanlayıcı/işçiler, olay girdileri, vaka verileri ve desteklenen çıktı bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Uyarı değerlendirme ve onayı

Desteklenen uyarı kurallarını değerlendir ve üretilen uyarıları onayla.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış zamanlayıcı/işçiler, olay girdileri, vaka verileri ve desteklenen çıktı bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Görevler ve bildirimler

Desteklenen analist görevlerini, bildirimleri ve otomasyon tanımlarını yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış zamanlayıcı/işçiler, olay girdileri, vaka verileri ve desteklenen çıktı bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Vaka kapsamlı raporlar

Desteklenen ilişki, kaynak, zaman çizelgesi ve diğer yapılandırılmış soruşturma raporlarını üret.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış zamanlayıcı/işçiler, olay girdileri, vaka verileri ve desteklenen çıktı bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yapılandırılmış istihbarat aktarımı

STIX yüzeyi üzerinden desteklenen soruşturma istihbaratını dışa aktar.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış zamanlayıcı/işçiler, olay girdileri, vaka verileri ve desteklenen çıktı bağımlılıkları.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

## Yönetim ve yönetişim

Sertifikasyon varsaymadan erişim, saklama ve işletim durumunu incele.

### Roller ve erişim kontrolleri

Desteklenen rol/izin kontrollerini ve erişim kayıtlarını yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Saklama, amaç ve silme akışları

Desteklenen saklama politikalarını, amaç kayıtlarını, kontrol listesi incelemelerini, erişim yetkilerini ve silme taleplerini yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Yönetişim araçları yasal uyumluluk sertifikası sağlamaz veya kuruma özgü incelemenin yerini almaz.

### Politika değerlendirme ve denetim

Politikaları sakla/değerlendir ve desteklenen denetim bilgisini incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Tenant, çalışma alanı ve kuruluşlar

Desteklenen tenant/çalışma alanı/kuruluş kayıtlarını ve kapsamlı yapılandırmayı yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### SSO başlatma ve kota yapılandırması

Desteklenen kimlik sağlayıcı, oturum başlatma ve kota yapılandırma yüzeylerini sun.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Yapılandırma veya oturum başlatma yüzeyi her kurumsal SSO kurulumunun doğrulandığı anlamına gelmez.

### Çalışma alanı lisans değerlendirmesi

Desteklenen çalışma alanı lisans kayıtlarını yönet ve değerlendir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Yerel ürün lisansı doğrulaması

Tam uygulama doğrulayıcısıyla etkinleştirme/durum/ayrıntı ve desteklenen devre dışı bırakmayı incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Bu uygulamanın doğrulama yüzeyidir. Özel lisans imzalama araçları ve anahtarlar yayımlanmaz veya değiştirilmez.

### Kullanım bütünlüğü sinyalleri

Desteklenen kullanım bütünlüğü uyarılarını ve ilgili işletim bağlamını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Sağlık, metrikler ve gözlemlenebilirlik

Desteklenen sağlık, metrik, yönetim özetleri ve çalışma ortamı yetenek kayıtlarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Sağlık ve adaptör kaydı uçtan uca sağlayıcı geçerliliğini veya üretime hazır olmayı kanıtlamaz.

### Başlangıç yapılandırma yüzeyleri

Desteklenen başlangıç ve ortam kurulum bilgisini kullan.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış kimlik, depolama, izin ve dağıtım politikası; gerektiğinde yetkin kurumsal inceleme.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

## Eklentiler, araştırma ve entegrasyon

Desteklenen entegrasyon ve araştırma yönetimi yüzeylerini incele.

### Eklenti sürümleri ve uyumluluk

Sürüm kaydet, uyumlu yayınları incele ve yükseltme planlarını gözden geçir.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Eklenti sertifikasyon kaydı ve statik inceleme

Desteklenen sertifikasyon öneri/kararlarını, statik taramaları ve sandbox ölçümlerini incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: İç sertifikasyon kayıtları ve sandbox sonuçları rastgele eklenti kodunun güvenli olduğunu garanti etmez.

### Tedarik zinciri kontrolleri

Desteklenen SBOM çıktıları üret; model imzalarını, bilinen hash kontrollerini ve eklenti tarama sonuçlarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Araştırma çalışma alanları

Desteklenen araştırma çalışma alanı revizyonlarını ve girdilerini kaydet ve incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Kodda incelenen yetenek; bu katalog bu işlemin yayımlanmış çalıştırma kanıtını içermez.

### Fikirler, katkılar ve planlama

Desteklenen platform API yüzeyleriyle fikir, katkı ve yol haritası kayıtlarını yönet.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Bu API yüzeyleri açık bir topluluk servisi veya otonom ürün geliştirme vaadi değildir.

### Optimizasyon önerileri

Desteklenen hedef analizini ve öneri kayıtlarını incele.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Öneriler ayrıca test edilmeden ölçülmüş performans artışı sayılmaz.

### REST, CLI, SDK ve tarayıcı eklentisi

Desteklenen uygulama akışlarına API/CLI ve sağlanan entegrasyon bileşenleriyle eriş.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Yalnız API üzerinden sunulan akışın özel bir görsel sayfası bulunmayabilir. Public web sitesi özel entegrasyon kaynaklarını içermez.

### Arayüz, backend ve dağıtım dosyaları

Özel uygulamada React/Vite arayüzü, Python servisleri ve Docker/Compose dağıtım dosyaları bulunur.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: Yapılandırılmış eklenti ortamı veya platform servisleri; gerektiğinde dış ikililer, erişim ve politikalar.
- **Sınır**: Donanım boyutlandırması, tam kurulum ve çok kullanıcılı üretim yükü ortama özgü doğrulama gerektirir.

## Dark web kaynak erişilebilirliği

Kaynak kontrollerini erişim, sahiplik ve içerik sonuçlarından ayır.

### Onion/I2P erişilebilirlik kontrolleri

Desteklenen yapılandırılmış uç noktaların erişilebilirliğini kontrol et.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: İzinli kaynak erişimi, uygun proxy/ağ yönlendirmesi ve yapılandırılmış toplayıcılar.
- **Sınır**: Erişilebilirlik servis kimliğini veya güvenli içeriği doğrulamaz; web sitesi canlı tarama yapmaz.

### Paste sitesi izleme

Yapılandırılmış kaynaktan desteklenen izleme gözlemlerini iste.

- **Kanıt**: Kod incelemesi.
- **Gereksinimler**: İzinli kaynak erişimi, uygun proxy/ağ yönlendirmesi ve yapılandırılmış toplayıcılar.
- **Sınır**: Kapsam kaynağa bağlıdır; tam dark web indeksleme veya özel içeriğe erişim değildir.

## Tam ürün ekranları

| Ekran | Uygulama yolu |
|---|---|
| Overview | `/dashboard` |
| Global Search | `/search` |
| Investigations | `/cases` |
| Entities | `/entities` |
| Graph | `/graph` |
| Timeline | `/timeline` |
| Map | `/map` |
| Evidence | `/evidence` |
| Sources | `/sources` |
| Collection Pipeline | `/pipeline` |
| Digital Footprint | `/digital-footprint` |
| Identity & Comms | `/identity-comms` |
| Corporate Intel | `/corporate-intel/sanctions` |
| GEOINT | `/geoint` |
| Media Forensics | `/media-forensics` |
| Biometric Lab | `/biometrics` |
| Dark Web & Crypto | `/dark-web-intel` |
| AI Platform | `/ai-platform` |
| Plugin Marketplace | `/plugins` |
| Watchlists & Alerts | `/watchlists` |
| Reports | `/reports` |
| Tenants & Workspaces | `/tenants` |
| Product License | `/product-license` |
| Compliance | `/compliance` |
| Settings | `/settings` |

Vaka ayrıntısı ana vaka ekranının altında ayrıca bulunur. API/CLI yüzeylerinin her biri için ayrı görsel ekran bulunması gerekmez.

## 32 Model Studio katalog işlemi

Aşağıdaki adlar yerel işlem kataloğundan incelendi. Bu 32 işlemin çalıştırıldığı veya başarıyla doğrulandığı anlamına gelmez; model, veri, yetkilendirme ve ortam gereksinimleri geçerlidir.

| Tür | Katalog işlemleri |
|---|---|
| Face | Sıfırdan eğitim, İnce ayar, Değerlendirme, ONNX aktarımı, Ön işleme / hizalama, Galeri veritabanı kurma |
| Iris | Sıfırdan eğitim, İnce ayar, Metrik eğitim, Değerlendirme, Ölçüm, ONNX aktarımı |
| Fingerprint | Sıfırdan eğitim, İnce ayar, ONNX aktarımı, Kalite aracı |
| Voiceprint | Sıfırdan eğitim, İnce ayar, Eşik kalibrasyonu, ONNX aktarımı |
| Writer-ID | Sıfırdan eğitim, İnce ayar, Değerlendirme, Zor negatif çıkarımı, ONNX aktarımı |
| Gait | Sıfırdan eğitim, İnce ayar, Sıfır örnek çalışması, Değerlendirme, Açılar arası değerlendirme, Vektör görselleştirme, ONNX aktarımı |

## Kurulum önkoşulları

1. Backend, veri deposu ve React arayüzünü uygun ortamda yapılandır.
2. Gereken adaptör, dış sağlayıcı erişimi ve kotaları kontrol et.
3. Biyometri ve model işleri için uygun model/veri hakları, servis yetkilendirmesi ve donanım gerekir.
4. Zamanlanmış işler çalışan işçi/zamanlayıcı ve kalıcı depolama gerektirebilir.
5. Yetkiler, saklama ve veri çıkışını kurumunun gereksinimlerine göre değerlendir.
6. Hedef veri doğruluğunu, kurulum bütünlüğünü ve çok kullanıcılı yükü ayrıca test et.

## Public pakete dahil olmayanlar

Özel tam uygulama kaynakları, lisans imzalama araçları/anahtarları, erişim bilgileri, müşteri/biyometrik verileri, model ağırlıkları ve kimlik galerileri bu public repolarda yoktur. Bu rehber bunları yayımlamaz. Yönetişim özellikleri yasal uyumluluk sertifikasyonu sağlamaz.

## Mevcut gerçek görüntüler

[Uçuş, deprem, şirket ve ses kayıtları](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html) · [Kaynak atıfları](MEDIA.md) · [Kurulum açıklaması](DEPLOYMENT.md)
