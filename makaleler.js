/**
 * UTLU HUKUK & DANIŞMANLIK - MAKALE VERİ TABANI
 * =====================================================================
 * Yeni bir makale eklemek için bu dosyanın en üstüne (veya istediğiniz sıraya)
 * aşağıdaki nesne şablonunu kopyalayıp bilgileri doldurmanız yeterlidir.
 * Siteniz otomatik olarak yeni makaleyi kartlar ve okuma penceresiyle yayınlayacaktır.
 * =====================================================================
 */

const MAKALELER = [
  {
    id: 1,
    baslik: "İtirazın İptali Davalarında Hak Düşürücü Süreler ve %20 İcra İnkar Tazminatı",
    kategori: "İcra ve İflas Hukuku",
    tarih: "24 Ekim 2026",
    okumaSuresi: "4 dk okuma",
    yazar: "Av. Furkan UTLU",
    resim: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    ozet: "İlamsız icra takiplerinde borçlunun haksız itirazı sonrası açılacak itirazın iptali davasında 1 yıllık hak düşürücü sürenin başlangıcı, arabuluculuk dava şartı ve %20 icra inkar tazminatına hükmedilme koşulları.",
    icerik: `
      <p class="mb-4">İcra ve İflas Kanunu'nun (İİK) 67. maddesi uyarınca; takip talebine itiraz edilen alacaklı, itirazın tebliği tarihinden itibaren <strong>1 yıl içinde</strong> mahkemeye başvurarak, genel hükümler dairesinde alacağının varlığını ispat suretiyle itirazın iptalini talep edebilir.</p>
      
      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">1 Yıllık Hak Düşürücü Sürenin Niteliği</h4>
      <p class="mb-4">Bu 1 yıllık süre hak düşürücü süre niteliğindedir. Mahkeme tarafından re'sen (kendiliğinden) dikkate alınır. Sürenin başlangıcı, borçlunun itiraz dilekçesinin alacaklıya veya vekiline tebliğ edildiği tarihtir. İtiraz tebliğ edilmediği sürece hak düşürücü süre işlemeye başlamaz.</p>
      
      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">Zorunlu Arabuluculuk Dava Şartı</h4>
      <p class="mb-4">Ticari ve tüketici uyuşmazlıklarından kaynaklanan alacak takiplerinde itirazın iptali davası açılmadan önce zorunlu arabuluculuk sürecinin tüketilmesi dava şartıdır. Arabuluculuk bürosuna başvurulmadan açılan davalar usulden reddedilmektedir.</p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">%20 İcra İnkar Tazminatı Koşulları</h4>
      <p class="mb-4">Alacaklının icra inkar tazminatına hak kazanabilmesi için; alacağın likit (belirli veya belirlenebilir) olması, borçlunun itirazında haksız bulunması ve alacaklının dava dilekçesinde açıkça bu tazminatı talep etmiş olması şarttır. Haksız yere takibi uzatmak amacıyla yapılan itirazlarda mahkemeler borçluyu asıl alacağın %20'sinden aşağı olmamak üzere tazminata mahkum eder.</p>

      <div class="p-4 rounded-xl bg-gold-50 border-l-4 border-gold-500 text-xs text-navy-900 mt-6 leading-relaxed">
        <strong>Önemli Hatırlatma:</strong> İcra takiplerinde sürelerin kaçırılması telafisi imkansız hak kayıplarına yol açabileceğinden, sürecin uzman bir icra avukatı nezaretinde yürütülmesi hayati önem taşır.
      </div>
    `
  },
  {
    id: 2,
    baslik: "Anonim ve Limited Şirketlerde Yönetim Organlarının Hukuki ve Cezai Sorumluluğu",
    kategori: "Ticaret ve Şirketler Hukuku",
    tarih: "18 Ekim 2026",
    okumaSuresi: "6 dk okuma",
    yazar: "Av. Furkan UTLU",
    resim: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    ozet: "Türk Ticaret Kanunu (TTK) kapsamında şirket yöneticilerinin özen ve sadakat borcuna aykırılık halleri, basiretli tacir gibi davranma ilkesi ve şirket ortakları ile alacaklıların açabileceği sorumluluk davaları.",
    icerik: `
      <p class="mb-4">6102 sayılı Türk Ticaret Kanunu (TTK), anonim şirket yönetim kurulu üyeleri ve limited şirket müdürleri için oldukça kapsamlı bir sorumluluk rejimi öngörmüştür. TTK m. 369 uyarınca yöneticiler, şirketin menfaatlerini dürüstlük kuralı çerçevesinde gözetmek ve görevlerini <em>tedbirli bir yöneticinin özeniyle</em> yerine getirmekle yükümlüdür.</p>
      
      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">Farklılaştırılmış Teselsül İlkesi</h4>
      <p class="mb-4">Eski TTK'dan farklı olarak yürürlükteki mevzuatımızda 'farklılaştırılmış teselsül' ilkesi benimsenmiştir (TTK m. 557). Buna göre bir zararı tazminle yükümlü olan birden çok yönetici, zararın tamamından müştereken değil, kendi kusuruna ve durumun gereklerine göre şahsen kendisine isnat edilebildiği ölçüde müteselsilen sorumlu tutulur.</p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">İbra Kararının Sorumluluk Davalarına Etkisi</h4>
      <p class="mb-4">Genel kurul tarafından yöneticilerin ibra edilmesi, ibranın kapsadığı dönem ve eylemler açısından şirketin sorumluluk davası açma hakkını kural olarak ortadan kaldırır. Ancak olumsuz oy kullanarak muhalefetini tutanağa geçiren ortakların 6 ay içerisinde dava açma hakkı saklıdır.</p>

      <div class="p-4 rounded-xl bg-gold-50 border-l-4 border-gold-500 text-xs text-navy-900 mt-6 leading-relaxed">
        <strong>Kurumsal Tavsiye:</strong> Ticari şirketlerin yönetim organları kararlarını alırken önleyici hukuk danışmanlığı alması, hem kişisel malvarlığı risklerini önlemekte hem de ticari itibarı korumaktadır.
      </div>
    `
  },
  {
    id: 3,
    baslik: "Ceza Yargılamasında Hukuka Aykırı Deliller ve Yasak Sorgu Usulleri",
    kategori: "Ceza Hukuku",
    tarih: "12 Ekim 2026",
    okumaSuresi: "5 dk okuma",
    yazar: "Av. Kamer UTLU",
    resim: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    ozet: "Anayasa m.38 ve CMK m.217 gereğince hukuka aykırı elde edilmiş delillerin ceza muhakemesindeki yeri, zehirli ağacın meyvesi doktrini ve Yargıtay Ceza Genel Kurulu'nun güncel içtihatları.",
    icerik: `
      <p class="mb-4">Ceza muhakemesinin temel gayesi maddi gerçeğe ulaşmaktır; ancak maddi gerçeğe ulaşırken hukuk devleti ilkelerinden ve temel insan haklarından asla taviz verilemez. Anayasa'nın 38. maddesinin 6. fıkrası uyarınca <strong>'Kanuna aykırı olarak elde edilmiş bulgular, delil olarak kabul edilemez.'</strong></p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">CMK m. 148 Kapsamında Yasak Sorgu Yöntemleri</h4>
      <p class="mb-4">Şüpheli veya sanığın beyanı özgür iradesine dayanmalıdır. Kötü davranma, işkence, ilaç verme, yorma, aldatma, cebir veya tehditte bulunma gibi yasak usullerle alınan ifadeler rıza olsa dahi delil olarak değerlendirilemez. Ayrıca müdafi (avukat) hazır bulunmaksızın kollukça alınan ifade, hakim veya mahkeme huzurunda doğrulanmadıkça hükme esas alınamaz.</p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">Hukuka Aykırı Arama ve El Koyma</h4>
      <p class="mb-4">Usulüne uygun hakim kararı veya gecikmesinde sakınca bulunan hallerde yetkili merciin yazılı emri bulunmaksızın yapılan üst, araç ve konut aramalarında ele geçirilen materyaller hukuka aykırı delil niteliğindedir. Yargıtay Ceza Genel Kurulu istikrarlı kararlarında, bu bulguların hiçbir surette mahkumiyete esas alınamayacağını vurgulamaktadır.</p>

      <div class="p-4 rounded-xl bg-gold-50 border-l-4 border-gold-500 text-xs text-navy-900 mt-6 leading-relaxed">
        <strong>Savunma İlkesi:</strong> Soruşturma evresinde emniyet veya savcılık ifadesi öncesinde ve esnasında mutlaka bir ceza avukatının hukuki desteğinden faydalanılmalıdır.
      </div>
    `
  },
  {
    id: 4,
    baslik: "Kira Hukukunda İhtiyaç Sebebiyle Tahliye Davaları ve İki Haklı İhtar Kriteri",
    kategori: "Gayrimenkul ve Kira Hukuku",
    tarih: "05 Ekim 2026",
    okumaSuresi: "4 dk okuma",
    yazar: "Av. Kamer UTLU",
    resim: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    ozet: "6098 sayılı Türk Borçlar Kanunu kapsamında konut veya işyeri gereksinimi sebebiyle tahliye davası açma şartları, samimi ihtiyaç kriteri ve bir kira yılında iki haklı ihtarın usuli detayları.",
    icerik: `
      <p class="mb-4">Türk Borçlar Kanunu (TBK) m. 350 uyarınca kiraya veren; kiralananı kendisi, eşi, altsoyu, üstsoyu veya kanun gereği bakmakla yükümlü olduğu diğer kişiler için konut ya da işyeri gereksinimi sebebiyle kullanma zorunluluğu varsa, belirli süreli sözleşmelerde sürenin sonunda, belirsiz süreli sözleşmelerde fesih dönemlerine uyarak açacağı davayla kira sözleşmesini sona erdirebilir.</p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">İhtiyacın Gerçek, Samimi ve Zorunlu Olması</h4>
      <p class="mb-4">Yargıtay içtihatlarına göre iddia edilen ihtiyacın henüz doğmamış veya gerçekleşmesi uzun bir süreye bağlı olan varsayımsal bir gereksinim olmaması gerekir. İhtiyacın dava açıldığı andan hüküm kesinleşinceye kadar devam etmesi şarttır. Tahliye sonrasında taşınmazın haklı sebep olmaksızın 3 yıl boyunca başkasına kiralanması halinde eski kiracıya tazminat ödeme yükümlülüğü doğmaktadır.</p>

      <h4 class="text-lg font-serif font-bold text-navy-900 mt-6 mb-3">İki Haklı İhtar Sebebiyle Tahliye (TBK m. 352/2)</h4>
      <p class="mb-4">Kiracı, bir yıldan kısa süreli kira sözleşmelerinde kira süresi içinde; bir yıl ve daha uzun süreli sözleşmelerde ise bir kira yılı veya bir kira yılını aşan süre içinde kira bedelini ödemediği için kendisine yazılı olarak iki haklı ihtarda bulunulmasına sebep olmuşsa, kiraya veren kira yılının bitiminden başlayarak bir ay içinde dava yoluyla tahliye isteyebilir.</p>

      <div class="p-4 rounded-xl bg-gold-50 border-l-4 border-gold-500 text-xs text-navy-900 mt-6 leading-relaxed">
        <strong>Zorunlu Arabuluculuk:</strong> 1 Eylül 2023 itibarıyla kira uyuşmazlıklarında (tahliye ve kira tespit davaları) dava açılmadan önce arabulucuya başvurulması zorunlu dava şartıdır.
      </div>
    `
  }
];
