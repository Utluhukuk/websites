# UTLU HUKUK & DANIŞMANLIK - WEB SİTESİ KURULUM & YÖNETİM REHBERİ

Bu proje, **Av. Furkan UTLU** ve **Av. Kamer UTLU** için GitHub Pages üzerinde sıfır maliyetle, yüksek prestij ve hızla yayınlanmak üzere tasarlanmış modern bir tek sayfa (SPA) web sitesidir.

---

## 📁 Proje Dosya Yapısı

- `index.html`: Web sitesinin tüm tasarım, responsive menü, form, harita ve animasyon kodlarını içeren ana dosya.
- `makaleler.js`: Sitedeki makalelerin ve hukuki yazıların tutulduğu veri tabanı dosyası.
- `logo.jpg`: Büronun FKU monogram logosu.

---

## 🚀 1. GitHub Pages'te Canlıya Alma (2 Dakika)

1. [GitHub](https://github.com) üzerinde ücretsiz bir hesapla yeni bir depo (repository) açın (Örn: `utlu-hukuk-web`).
2. Deponun içine `index.html`, `makaleler.js` ve `logo.jpg` dosyalarını yükleyin.
3. Deponun **Settings > Pages** sekmesine gidin.
4. **Branch** kısmından `main` (veya `master`) ve `/ (root)` seçip **Save** deyin.
5. Siteniz 1-2 dakika içinde `https://kullaniciadiniz.github.io/utlu-hukuk-web/` adresinde canlıya geçer!

---

## 📧 2. Danışmanlık Formunun İlk Kurulumu (İlk Mail Aktivasyonu)

Sitedeki iletişim formu, form doldurulduğunda doğrudan **av.furkanutlu@gmail.com** adresine bildirim maili gönderir.

- İlk kez form doldurulduğunda, **FormSubmit** sistemi güvenlik amacıyla `av.furkanutlu@gmail.com` adresinize tek seferlik bir onay e-postası (*"Confirm your email"*) gönderir.
- Gelen maildeki **"Activate Form"** butonuna bir kez tıkladıktan sonra, siteden gelen tüm danışmanlık talepleri doğrudan gelen kutunuza düşer.

---

## ✍️ 3. Yeni Makale Nasıl Eklenir?

Sitenize yeni bir makale eklemek için hiçbir HTML veya CSS bilmenize gerek yoktur.

### Yöntem A: Sitedeki "Yeni Makale Kodu Üret" Sihirbazını Kullanmak (Önerilen)

> ⚠️ **Güvenlik Notu:** Makale ekleme sihirbazı ziyaretçilere gizlidir. Açmak için sitenizin URL'sine `?admin=1` eklemeniz gerekir:
> `https://siteadresi.github.io/utlu-hukuk-web/?admin=1`

1. Yukarıdaki admin URL ile siteyi açın.
2. **Hukuki Gündem / Makaleler** bölümünün sağ üstünde beliren **"Yeni Makale Kodu Üret"** butonuna tıklayın.
3. Açılan pencerede:
   - Başlığı yazın,
   - Kategoriyi ve Yazarı (Av. Furkan UTLU veya Av. Kamer UTLU) seçin,
   - Makale metnini yapıştırın.
4. **"Kodu Kopyala"** butonuna basın.
5. GitHub üzerinde `makaleler.js` dosyasını açıp düzenle (kalem simgesi ✏️) deyin, en üstteki makalenin hemen üzerine yapıştırın ve **Commit Changes** deyin.
6. Siteniz saniyeler içinde yeni makaleyi kartı ve tam metin okuma penceresiyle yayınlar!

### Yöntem B: Doğrudan `makaleler.js` Dosyasına Yapıştırmak
`makaleler.js` dosyası içindeki `const MAKALELER = [` dizisinin içine şu şablonu kopyalayıp bilgileri yazmanız yeterlidir:

```javascript
  {
    id: Date.now(),
    baslik: "Yeni Makalenin Başlığı",
    kategori: "İcra ve İflas Hukuku",
    tarih: "29 Ekim 2026",
    okumaSuresi: "4 dk okuma",
    yazar: "Av. Furkan UTLU", // veya Av. Kamer UTLU
    resim: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    ozet: "Makalenin kısa özeti buraya gelecek...",
    icerik: `
      <p class="mb-4">Makalenin ilk paragrafı...</p>
      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">Ara Başlık</h4>
      <p class="mb-4">İkinci paragraf...</p>
    `
  },
```

---

## 🏢 Ofis & İletişim Bilgileri

- **Avukatlar:** Av. Furkan UTLU & Av. Kamer UTLU
- **Adres:** Gevhernesibe Mah. Gür Sok. OFİSİM KAYSERİ B BLOK No: 34 Kocasinan / Kayseri
- **Telefon / WhatsApp:** 0532 155 53 54
- **E-Posta:** av.furkanutlu@gmail.com
- **Baro:** Kayseri Barosu
