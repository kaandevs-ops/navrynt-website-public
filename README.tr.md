<p align="center"><img src="site/assets/brand/navrynt-logo.png" alt="NAVRYNT logosu" width="76"></p>
<h1 align="center">NAVRYNT · Proje Web Sitesi</h1>
<p align="center"><strong>Kanıtı incele. Kontrol sende kalsın.</strong></p>
<p align="center">NAVRYNT çalışma alanını; bağlantılı iş akışları, kaynaklı gerçek ürün kayıtları ve etkileşimli demo üzerinden tanıtan statik web sitesi.</p>
<p align="center"><a href="README.md">English</a> · <a href="https://kaandevs-ops.github.io/navrynt-website-public/">Web sitesini aç ↗</a> · <a href="https://kaandevs-ops.github.io/navrynt-demo-public/">Demoyu dene ↗</a></p>

![NAVRYNT web sitesi ana ekranı](docs/media/home.png)

> Bu repo bir tanıtım sitesidir; tam ürünün backend veya biyometrik modellerini çalıştırmaz. Ürün kayıtları tarihsel gerçek uygulama görüntüleridir. Bağlantı verilen demo ise kurgusal veriler ve tarayıcıda çalışan örnek etkileşimler kullanır. Kayıtların kaynakları ve sınırlamaları ayrıca belirtilir.

## Ürünü izle

[![Kaynaklı tam ürün filminden bölüm](docs/media/product-excerpt.gif)](site/assets/recordings/navrynt-real-product-tour.mp4)

**[▶ 24 saniyelik ürün filmini izle](site/assets/recordings/navrynt-real-product-tour.mp4)** · [Kayıt kütüphanesi](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html)

Film dört gerçek kayıttan düzenlenmiştir. Kaynak görüntüler genellikle 3–4 fps’dir; kısa kayıtların son karesi okunabilirlik için tutulur. Kesintisiz canlı oturum değildir. [Çekim yöntemi ve kaynaklar](docs/MEDIA.md).

## Neler bulunuyor?

| Bölüm | İçerik |
|---|---|
| Ana sayfa | Proje tanıtımı, demo/tam ürün ayrımı ve seçilebilir kayıtlar |
| Platform | Şirket ilişkisi, deprem ve uçuş gözlemlerinin bağlamı |
| Biyometri | Altı iş akışı, statik önizlemeler ve araştırma sınırları |
| Gerçek kayıtlar | Dört kayıtta kategori filtresi, metin araması, görüntü ve video |
| Dağıtım | Ayrı backend, arayüz, modeller ve sağlayıcı gereksinimleri |
| Kapsam | Belgelenmiş sonuçlar, önkoşullar ve doğrulanmayan kombinasyonlar |
| Gizlilik ve koşullar | Tarayıcı, barındırma ve dış bağlantı açıklamaları |

## Site, demo ve tam ürün

| Bileşen | Görevi |
|---|---|
| Bu web sitesi | Projeyi açıklar, gerçek kayıtları ve kaynaklarını gösterir |
| Etkileşimli demo | Kurgusal vaka, seçilebilir grafik, örnek izler ve gerçek yerel hash hesabı sunar |
| Ayrı tam uygulama | Gerekli kurulum, modeller, veri ve sağlayıcı erişimleriyle iş akışlarını çalıştırır |

Bu public repoda özel tam ürün kodu, lisans oluşturma araçları, imza anahtarları, kimlik galerileri, model ağırlıkları veya erişim bilgileri bulunmaz. Ödeme veya sipariş akışı içermez.

[![Kurgusal demodaki gerçek tarayıcı etkileşimleri](docs/media/demo-workflow.gif)](https://kaandevs-ops.github.io/navrynt-demo-public/)

**[Canlı demo](https://kaandevs-ops.github.io/navrynt-demo-public/)** · [Demo reposu](https://github.com/kaandevs-ops/navrynt-demo-public) · [Demo içindeki tam ürün kayıtları](https://kaandevs-ops.github.io/navrynt-demo-public/#proof)

Demo biyometri sekmeleri ve Model Studio birer önizlemedir; çıkarım veya eğitim çalıştırmaz.

## Gerçek ürün kayıtları

16 Ekim 2026 tarihli dört özgün MP4/PNG çifti değiştirilmeden eklenmiştir:

| Kayıt | Kaynak | Sınır |
|---|---|---|
| Bölgesel uçuş gözlemleri | ADSB.lol / OpenStreetMap | Tarihsel konum anlık görüntüsü; sürekli takip değil |
| Deprem haritası | USGS / OpenStreetMap | Kayıtta en fazla ilk 150 konum gösterilir |
| Şirket ilişkisi | GLEIF | Muhasebesel üst şirket ilişkisi; gerçek kişi sahipliği tespiti değil |
| Ses karşılaştırması | LibriSpeech / CC BY 4.0 | Araştırma örneği; genel kimlik doğruluğu ölçümü değil |

Diğer biyometrik bölümler, model çalıştırmayan statik demo görsellerini açıkça etiketler. Bir kaydın başarılı olması bütün servislerin veya üretim kurulumlarının doğrulandığı anlamına gelmez. [Ayrıntılı kaynaklar](docs/MEDIA.md).

## Ekran görüntüleri

| Kayıt kütüphanesi | Biyometri açıklamaları |
|---|---|
| ![Aranabilir kayıt kütüphanesi](docs/media/library.png) | ![Biyometri önizlemesi ve çalışma sınırları](docs/media/biometrics.png) |

<details>
<summary><strong>Mobil görünüm</strong></summary>

<img src="docs/media/mobile.png" alt="390 piksel genişlikte ana sayfa" width="300">

</details>

## Bilgisayarda açma

Backend, API hesabı, npm kurulumu veya derleme gerekmez. Python 3 ile:

```bash
git clone https://github.com/kaandevs-ops/navrynt-website-public.git
cd navrynt-website-public
python3 -m http.server 4174 --bind 127.0.0.1 --directory site
```

**[http://127.0.0.1:4174/](http://127.0.0.1:4174/)** adresini aç. Demo ayrı olarak 4173 portunda çalışabilir.

## Kontrol ve yayın

```bash
python3 scripts/validate.py
```

Kontrol; dosya bağlantılarını, HTML kimliklerini, görsel alternatif metinlerini, özgün medya hashlerini ve yayın sınırlarını inceler. Node.js varsa JavaScript sözdizimi de kontrol edilir. Node.js siteyi açmak için zorunlu değildir.

GitHub Pages iş akışı kontrollerden sonra yalnızca `site/` klasörünü yayımlar. Pull request’ler yayın yapmadan kontrol edilir. [Yayın ve yapılandırma rehberi](docs/DEPLOYMENT.md).

## Dosya düzeni

```text
site/                       Yayımlanan sekiz sayfa ve statik dosyalar
site/assets/                Marka, gerçek kayıtlar ve etiketli önizlemeler
site/config.js              Website ve demo bağlantıları
docs/                       Kaynak notları ve yayın rehberi
docs/media/                 README ekranları ve GIF’ler
scripts/validate.py         Yerel kontroller
.github/workflows/pages.yml Doğrulama ve Pages yayını
LICENSE                     Apache License 2.0
```

[Hata bildir](https://github.com/kaandevs-ops/navrynt-website-public/issues) · [Katkı rehberi](CONTRIBUTING.md) · [Güvenlik](SECURITY.md)

**Lisans:** [Apache License 2.0](LICENSE). Görüntülerdeki üçüncü taraf verilerin kendi atıf ve koşulları geçerlidir. **Proje sahibi:** [kaandevs-ops](https://github.com/kaandevs-ops).
