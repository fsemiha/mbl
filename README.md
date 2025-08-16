# 🎮 Siber Macera - Teknofest Oyunu

<p align="center">
  <img src="assets/Asset 13.svg" width="400" alt="Siber Macera Logo">
</p>

## 🚀 Oyun Hakkında

**Siber Macera**, siber güvenlik bilginizi test eden interaktif bir eğitim oyunudur. Teknofest için özel olarak geliştirilmiştir.

### 🎯 Oyun Özellikleri

- **📱 Mobil Uyumlu**: Telefon ve tabletlerde mükemmel çalışır
- **🖥️ Responsive Tasarım**: Tüm ekran boyutlarına uyumlu
- **✨ Touch Desteği**: Dokunmatik ekranlar için optimize edildi
- **🏆 Gerçek Zamanlı Skorboard**: Firebase ile canlı skor takibi
- **🔒 PWA Desteği**: Telefona uygulama gibi kurulabilir

### 🎪 Oyun Modülleri

1. **🔐 Parola Gücü Testi**
   - Parola güvenliğini test edin
   - Gerçek zamanlı güç analizi
   - Kırılma süre tahmini

2. **🤝 Paylaş/Sakla Testi** 
   - Bilgi paylaşım güvenliği
   - Sosyal mühendislik farkındalığı
   - Çoktan seçmeli sorular

3. **🎣 Oltalama (Phishing) Testi**
   - Sahte e-postalar tanıma
   - Güvenli link tespiti
   - Siber saldırı farkındalığı

## 📱 Nasıl Oynanır?

### PC'de:
1. `index.html` dosyasını tarayıcıda açın
2. Kod adınızı girin
3. Testleri sırayla tamamlayın

### Mobilde:
1. QR kodu okutun veya link ile erişin
2. Telefona PWA olarak kurun (isteğe bağlı)
3. Touch kontrollerle oyunu oynayın

## 🛠️ Teknik Özellikler

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Firebase Realtime Database
- **PWA**: Service Worker, Web App Manifest
- **Responsive**: Mobile-first tasarım
- **Touch**: Haptic feedback, gesture desteği
- **Fonts**: Gilmer, Conthrax font aileleri

## 🔥 Firebase Kurulumu

Çoklu cihaz desteği için Firebase kurulumu:

1. `firebase-config.js` dosyasını düzenleyin
2. Firebase Console'dan proje bilgilerinizi ekleyin
3. Realtime Database kurallarını ayarlayın

Detaylar için: `FIREBASE_KURULUM.md`

## 🎨 Mobil Optimizasyonlar

- ✅ Touch event desteği
- ✅ 44px minimum touch target boyutu
- ✅ iOS Safari zoom engellemesi
- ✅ Android haptic feedback
- ✅ PWA kurulum desteği
- ✅ Offline çalışma yeteneği
- ✅ Responsive breakpoints

## 📊 Skorboard

- Gerçek zamanlı skor güncellemesi
- Sayfalama desteği
- Mobil optimized görünüm
- Firebase senkronizasyonu

## 🚀 Canlı Demo

**GitHub Pages**: [Oyunu Oyna](https://pages-link-burada)

### QR Kod ile Erişim
QR kodu okutarak doğrudan mobil cihazınızdan erişebilirsiniz.

## 📁 Dosya Yapısı

```
📦 Siber-Macera/
├── 📄 index.html          # Ana oyun dosyası
├── 📄 scoreboard.html     # Skor tablosu sayfası
├── 📄 style.css           # Stil dosyası (responsive)
├── 📄 manifest.json       # PWA manifest
├── 📄 sw.js              # Service Worker
├── 📄 firebase-config.js  # Firebase ayarları
├── 📁 assets/            # Oyun görselleri (SVG)
├── 📁 fonts/             # Font dosyaları
└── 📄 README.md          # Bu dosya
```

## 🎯 Teknofest İçin Hazır

Bu oyun Teknofest etkinliklerinde QR kod ile erişim için optimize edilmiştir:

- ⚡ Hızlı yükleme
- 📱 Mobil öncelikli
- 🔗 QR kod uyumluluğu
- 👥 Çoklu kullanıcı desteği
- 🏆 Anlık skorboard

## 📞 Destek

Teknik sorunlar için console log'larını kontrol edin:
- Chrome: F12 → Console
- Mobile: Ayarlar → Developer options

---

<p align="center">
  <strong>🎮 Teknofest 2024 - Siber Güvenlik Oyunu</strong><br>
  Made with ❤️ for cybersecurity education
</p>
