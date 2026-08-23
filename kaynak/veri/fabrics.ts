import { Fabric, CategoryInfo, FabricCategoryType } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    name: 'Denim Kumaş',
    slug: 'denim-kumas',
    shortDesc: 'İndigo çözgü, klasik ve modern dokuma denim kumaş serisi.',
    image: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Geniş İndigo Serisi',
    iconName: 'Sparkles'
  },
  {
    name: 'Kot Kumaş',
    slug: 'kot-kumas',
    shortDesc: 'Klasik ve dayanıklı çözgü yapısına sahip kot kumaş çeşitleri.',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Ağır & Orta Gramaj',
    iconName: 'Shield'
  },
  {
    name: 'Gabardin',
    slug: 'gabardin',
    shortDesc: 'Sık dokunmuş, yüksek mukavemetli dimi gabardin kumaşlar.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'İş & Dış Giyim',
    iconName: 'Layers'
  },
  {
    name: 'Kanvas',
    slug: 'kanvas',
    shortDesc: 'Kalın, düz dokuma dayanıklı kanvas kumaş ruloları.',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Ağır Dokuma',
    iconName: 'Box'
  },
  {
    name: 'Pamuklu Kumaş',
    slug: 'pamuklu-kumas',
    shortDesc: 'Doğal pamuk elyaflı poplin, hambez ve dimi kumaş grupları.',
    image: 'https://images.unsplash.com/photo-1528458900705-59424b31c452?q=80&w=800&auto=format&fit=crop',
    highlightCount: '%100 Pamuk Dokuma',
    iconName: 'Feather'
  },
  {
    name: 'Keten',
    slug: 'keten',
    shortDesc: 'Nefes alan yapısı ve doğal dokusu ile premium keten kumaşlar.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Doğal Doku',
    iconName: 'Wind'
  },
  {
    name: 'Viskon',
    slug: 'viskon',
    shortDesc: 'Yumuşak tuşeli, dökümlü ve konforlu viskon dokuma kumaşlar.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Dökümlü Yapı',
    iconName: 'Activity'
  },
  {
    name: 'Polyester',
    slug: 'polyester',
    shortDesc: 'Yüksek mukavemetli, kırışmaz ve teknik dokuma polyester kumaşlar.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Teknik Dış Giyim',
    iconName: 'Cpu'
  },
  {
    name: 'Kadife',
    slug: 'kadife',
    shortDesc: 'Fitilli (corduroy) ve düz dokuma lüks kadife kumaş çeşitleri.',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Fitilli & Düz',
    iconName: 'Award'
  },
  {
    name: 'Karışımlı Kumaşlar',
    slug: 'karisimli-kumaslar',
    shortDesc: 'Pamuk-polyester, pamuk-keten, tencel-pamuk harmanlı kumaşlar.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Özel Harmanlar',
    iconName: 'Shuffle'
  },
  {
    name: 'Diğer Kumaşlar',
    slug: 'diger-kumaslar',
    shortDesc: 'Özel teknik dokuma, saten ve sektör spesifik kumaş seçenekleri.',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=800&auto=format&fit=crop',
    highlightCount: 'Spesifik Dokumalar',
    iconName: 'Grid'
  }
];

export const FABRICS: Fabric[] = [
  // 1. Denim Kumaş
  {
    id: 'std-denim-01',
    code: 'STD-DNM-101',
    name: 'Klasik İndigo Twill Denim Kumaş',
    category: 'Denim Kumaş',
    shortDesc: 'Geleneksel 3/1 sağ dimi dokumaya sahip, saf indigo boyalı yüksek kaliteli denim kumaşı.',
    description: 'Tekstil üreticileri ve konfeksiyon firmaları için özel olarak üretilen bu klasik indigo denim kumaş, zengin renk derinliği ve mükemmel yıkama performansı sunar. Pantolon, ceket ve dış giyim üretimlerinde ideal mukavemet sağlar.',
    images: [
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Koyu İndigo', hex: '#1e293b', code: 'IND-900' },
      { name: 'Klasik Mavi', hex: '#1e3a8a', code: 'IND-700' },
      { name: 'Açık Yıkama Mavi', hex: '#3b82f6', code: 'IND-400' }
    ],
    technicalInfo: {
      weaveType: '3/1 Z Dimi (Right Hand Twill)',
      stretchInfo: 'Rigid / Konforlu Dokuma',
      structureInfo: 'Sıkı çözgü, dayanıklı pamuk iplik yapısı',
      usageSeason: '4 Mevsim Üretim',
      careRecommendation: 'Endüstriyel denim yıkama proseslerine tam uyumludur.',
      note: 'Parti ve rulo bazlı toptan sevk edilir.'
    },
    applications: [
      'Kot Pantolon Üretimi',
      'Denim Ceket İmalatı',
      'Dış Giyim',
      'Tulum & Salopet',
      'Endüstriyel Konfeksiyon'
    ],
    featured: true,
    isDenim: true,
    denimWashTypes: ['Raw İndigo', 'Stone Wash', 'Rinse Wash', 'Vintage Effect']
  },
  {
    id: 'std-denim-02',
    code: 'STD-DNM-202',
    name: 'Konfor Streç Likralı Denim Kumaş',
    category: 'Denim Kumaş',
    shortDesc: 'Hassas esneme kabiliyetine sahip, yüksek geri toplama özellikli likralı denim kumaş.',
    description: 'Modern konfeksiyon taleplerine uygun olarak geliştirilen bu likralı denim, hareket rahatlığı ve form koruma dengesini kusursuz şekilde birleştirir. Slim fit ve standart kalıp üretimleri için mükemmel stabilite sağlar.',
    images: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Koyu Gece Mavisi', hex: '#0f172a', code: 'DNM-NIGHT' },
      { name: 'Orta Mavi', hex: '#2563eb', code: 'DNM-MED' },
      { name: 'Antrasit Yıkama', hex: '#334155', code: 'DNM-GREY' }
    ],
    technicalInfo: {
      weaveType: '3/1 Dimi Dokuma',
      stretchInfo: 'Likralı / Elastan Destekli Konfor Streç',
      structureInfo: 'Esneme sonrası formunu koruyan lif dengesi',
      usageSeason: '4 Mevsim',
      careRecommendation: 'Ağartıcı içermeyen endüstriyel yıkamaya uygundur.',
      note: 'Rulo metraj bilgisi için iletişime geçiniz.'
    },
    applications: [
      'Kadın & Erkek Kot Pantolon',
      'Streç Denim Etek',
      'Modern Giyim Koleksiyonları',
      'Konfeksiyon İmalatı'
    ],
    featured: true,
    isDenim: true,
    denimWashTypes: ['Enzim Yıkama', 'Silikon Yumuşatma', 'Buz Yıkama', 'Zımpara Efekti']
  },
  {
    id: 'std-denim-03',
    code: 'STD-DNM-303',
    name: 'Siyah Kükürt Boyalı Siyah Denim Kumaş',
    category: 'Denim Kumaş',
    shortDesc: 'Yoğun kükürt siyahı ve kalıcı renk stabilitesine sahip siyah denim kumaş.',
    description: 'Solmayan derin siyah tonu ve yıkama sonrası grileşme çeşitliliği sağlayan yüksek vasıflı siyah denim kumaşı. Fabrika ve atölye üretimlerinde yüksek metraj verimliliği sağlar.',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Derin Siyah', hex: '#000000', code: 'BLK-01' },
      { name: 'Koyu Grafit', hex: '#18181b', code: 'BLK-GRF' }
    ],
    technicalInfo: {
      weaveType: '3/1 S Dimi (Left Hand / Cross Twill)',
      stretchInfo: 'Rigid & Likralı Opsiyonlar',
      structureInfo: 'Sulphur Black boyama, homojen renk dağılımı',
      usageSeason: 'Sonbahar / Kış & 4 Mevsim',
      note: 'Parti bazlı ton garantili toptan sevk.'
    },
    applications: [
      'Siyah Pantolon İmalatı',
      'Dış Giyim & Yelek',
      'Kurumsal Üniforma & Ceket',
      'Giyim Fabrikaları'
    ],
    featured: true,
    isDenim: true,
    denimWashTypes: ['Black Rinse', 'Marble Wash', 'Used Effect', 'Overdye']
  },
  {
    id: 'std-denim-04',
    code: 'STD-DNM-404',
    name: 'Kenarlı Selvedge Stil Otantik Denim',
    category: 'Denim Kumaş',
    shortDesc: 'Geleneksel mekikli dokuma karakterine sahip, premium çözgü yapılı özel denim.',
    description: 'Yüksek kalite segmentindeki giyim üreticileri için tasarlanmış, sağlam kenar yapısı ve otantik dokusu ile öne çıkan toptan denim kumaş serisi.',
    images: [
      'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Ham İndigo (Raw)', hex: '#172554', code: 'RAW-IND' },
      { name: 'Koyu Lacivert', hex: '#1e3a8a', code: 'DRK-NAVY' }
    ],
    technicalInfo: {
      weaveType: 'Selvedge Dokuma Karakteri',
      stretchInfo: 'Rigid (Doğal Mukavemet)',
      structureInfo: 'Geleneksel çözgü sıklığı, kalın atkı ipliği',
      usageSeason: '4 Mevsim',
      note: 'Özel sipariş metrajları için iletişime geçiniz.'
    },
    applications: [
      'Premium Kot Koleksiyonları',
      'Otantik Denim Ceket',
      'Koleksiyon İmalatları'
    ],
    featured: false,
    isDenim: true,
    denimWashTypes: ['Raw Denim', 'One Wash', 'Dry Process']
  },

  // 2. Kot Kumaş
  {
    id: 'std-kot-01',
    code: 'STD-KOT-110',
    name: 'Dayanıklı Ağır Dokuma Kot Kumaşı',
    category: 'Kot Kumaş',
    shortDesc: 'Ağır şartlara ve yoğun kullanıma dayanıklı, sık dokunmuş kot kumaşı.',
    description: 'Tekstil üreticileri ve iş kıyafeti imalatçıları için üstün yırtılma direnci sunan sağlam kot kumaş rulo serisi. Sanforize edilmiş yapısı ile çekme yapmaz.',
    images: [
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Klasik Taş Mavisi', hex: '#2563eb', code: 'KOT-BLU' },
      { name: 'Petrol Mavisi', hex: '#0e7490', code: 'KOT-PET' },
      { name: 'Füme', hex: '#475569', code: 'KOT-FUM' }
    ],
    technicalInfo: {
      weaveType: 'Dimi Dokuma',
      stretchInfo: 'Yüksek Mukavemetli Sabit En',
      structureInfo: 'Ağır sanfor işleminden geçmiş stabil kumaş',
      usageSeason: '4 Mevsim',
      note: 'Top bazlı toptan teslimat.'
    },
    applications: [
      'İş & Güvenlik Kıyafetleri',
      'Ağır Hizmet Kot Pantolonu',
      'İş Montu ve Yelek İmalatı',
      'Tekstil Fabrikaları'
    ],
    featured: true
  },
  {
    id: 'std-kot-02',
    code: 'STD-KOT-120',
    name: 'İnce Dokuma Kot Gömleklik Kumaş',
    category: 'Kot Kumaş',
    shortDesc: 'Yumuşak dokulu, gömlek ve hafif dış giyim için optimize edilmiş ince kot kumaş.',
    description: 'Konfeksiyon atölyeleri ve gömlek üreticilerine yönelik dökümlü ve rahat işlenebilir ince kot kumaş serisi. Hassas dikiş kalitesine uygun yüzey pürüzsüzlüğü.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Açık Mavi İndigo', hex: '#60a5fa', code: 'SHT-01' },
      { name: 'Orta Mavi', hex: '#3b82f6', code: 'SHT-02' }
    ],
    technicalInfo: {
      weaveType: '2/1 İnce Dimi',
      stretchInfo: 'Yumuşak Tuşe / Dökümlü',
      structureInfo: 'İnce numara penye pamuk çözgü',
      usageSeason: 'İlkbahar / Yaz & 4 Mevsim'
    },
    applications: [
      'Denim Gömlek Üretimi',
      'Elbise & Tunik İmalatı',
      'Yazlık Ceket ve Dış Giyim'
    ]
  },

  // 3. Gabardin
  {
    id: 'std-gab-01',
    code: 'STD-GAB-201',
    name: 'Pamuklu Dimi Gabardin Kumaş',
    category: 'Gabardin',
    shortDesc: 'Sıkı dimi hatlarına sahip, tok duruşlu birinci sınıf pamuklu gabardin.',
    description: 'Pantolon, ceket, trençkot ve kurumsal üniforma üretimlerinde en çok tercih edilen tok yapılı profesyonel gabardin kumaş. Renk haslığı ve sürtünme dayanımı yüksektir.',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528458900705-59424b31c452?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Bej / Haki', hex: '#a3a380', code: 'GAB-BGE' },
      { name: 'Lacivert', hex: '#1e3a8a', code: 'GAB-NAV' },
      { name: 'Siyah', hex: '#111827', code: 'GAB-BLK' },
      { name: 'Taş Rengi', hex: '#d6d3d1', code: 'GAB-STN' }
    ],
    technicalInfo: {
      weaveType: '2/1 ve 3/1 Dimi Dokuma',
      stretchInfo: 'Sabit En / Opsiyonel Likralı',
      structureInfo: 'Yüksek çözgü sıklığı, tok ve pürüzsüz yüzey',
      usageSeason: '4 Mevsim',
      note: 'Reaktif boyalı, yüksek renk haslığı.'
    },
    applications: [
      'Chino & Klasik Pantolon',
      'Trençkot ve Kaban',
      'Kurumsal Üniforma',
      'İş Kıyafeti İmalatı'
    ],
    featured: true
  },
  {
    id: 'std-gab-02',
    code: 'STD-GAB-202',
    name: 'Likralı Konfor Gabardin Kumaş',
    category: 'Gabardin',
    shortDesc: 'Elastan katkılı, esnek ve dökümlü modern pantolonluk gabardin.',
    description: 'Konfeksiyon üreticilerinin slim ve modern kesim pantolon üretiminde yüksek verimlilik sağlayan elastan destekli gabardin kumaşı.',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Antrasit', hex: '#374151', code: 'LGAB-ANT' },
      { name: 'Koyu Haki', hex: '#3f4f3b', code: 'LGAB-HAK' },
      { name: 'Lacivert', hex: '#1e293b', code: 'LGAB-NAV' }
    ],
    technicalInfo: {
      weaveType: '3/1 Esnek Dimi',
      stretchInfo: 'Likralı / Enine Esnek',
      structureInfo: 'Esneme dirençli çözgü lifi',
      usageSeason: '4 Mevsim'
    },
    applications: [
      'Likralı Pantolon Üretimi',
      'Ceket & Yelek',
      'Kadın & Erkek Giyim Fabrikaları'
    ]
  },

  // 4. Kanvas
  {
    id: 'std-kan-01',
    code: 'STD-KAN-301',
    name: 'Ağır Hizmet Pamuk Kanvas Kumaş',
    category: 'Kanvas',
    shortDesc: 'Geleneksel bezayağı dokuma, yüksek gramaj dayanıklı kanvas kumaşı.',
    description: 'Mont, dış giyim, iş kıyafeti ve teknik aksesuar imalatçıları için en yüksek aşınma direncine sahip profesyonel pamuk kanvas rulo kumaş.',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Ham Ekru', hex: '#f5f5f4', code: 'KAN-RAW' },
      { name: 'Taba / Kahve', hex: '#78350f', code: 'KAN-BRN' },
      { name: 'Asker Yeşili', hex: '#365314', code: 'KAN-GRN' },
      { name: 'Siyah', hex: '#0f172a', code: 'KAN-BLK' }
    ],
    technicalInfo: {
      weaveType: 'Bezayağı (Plain Weave)',
      stretchInfo: 'Rigid Sabit Mukavemet',
      structureInfo: 'Çift kat bükümlü çözgü ve atkı ipliği',
      usageSeason: 'Sonbahar / Kış & 4 Mevsim',
      note: 'Toptan top ve rulo bazlı sevk edilir.'
    },
    applications: [
      'Dayanıklı Mont & Ceket İmalatı',
      'İş Tulumu & Pantolonu',
      'Tekstil Çanta & Aksesuar Üretimi',
      'Dış Mekan Tekstili'
    ],
    featured: true
  },

  // 5. Pamuklu Kumaş
  {
    id: 'std-pam-01',
    code: 'STD-PAM-401',
    name: 'Dokuma Pamuklu Poplin Kumaş',
    category: 'Pamuklu Kumaş',
    shortDesc: 'Pürüzsüz yüzeyli, nefes alabilen kaliteli pamuk dokuma poplin.',
    description: 'Gömlek, astar ve hafif konfeksiyon üreticileri için pürüzsüz apre ve homojen boya emilimi sunan pamuk poplin toptan kumaş serisi.',
    images: [
      'https://images.unsplash.com/photo-1528458900705-59424b31c452?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Optik Beyaz', hex: '#ffffff', code: 'POP-WHT' },
      { name: 'Açık Mavi', hex: '#93c5fd', code: 'POP-LBL' },
      { name: 'Lacivert', hex: '#1e3a8a', code: 'POP-NAV' },
      { name: 'Siyah', hex: '#18181b', code: 'POP-BLK' }
    ],
    technicalInfo: {
      weaveType: 'Düz Bezayağı Dokuma',
      stretchInfo: 'Doğal Pamuk Tuşesi',
      structureInfo: 'İnce taranmış penye pamuk lifi',
      usageSeason: 'İlkbahar / Yaz & 4 Mevsim'
    },
    applications: [
      'Gömlek İmalatı',
      'Hafif Dış Giyim',
      'Astar ve Ara Katmanlar',
      'Konfeksiyon Tesisleri'
    ]
  },
  {
    id: 'std-pam-02',
    code: 'STD-PAM-402',
    name: 'Hambez Pamuk Dokuma Kumaş',
    category: 'Pamuklu Kumaş',
    shortDesc: 'İşlem görmemiş doğal pamuk liflerinden üretilen dayanıklı hambez.',
    description: 'Baskı tesisleri, çanta üreticileri ve hazır giyim fabrikaları için ham dokuma pamuk kumaşı.',
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528458900705-59424b31c452?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Doğal Ham Pamuk', hex: '#e7e5e4', code: 'HAM-NAT' }
    ],
    technicalInfo: {
      weaveType: 'Bezayağı',
      stretchInfo: 'Rigid',
      structureInfo: 'Apresiz / Doğal Pamuk Tohumlu',
      usageSeason: '4 Mevsim'
    },
    applications: [
      'Baskılık & Boyalık Kumaş',
      'Promosyon & Bez Çanta Üretimi',
      'Astar & Ara Katman'
    ]
  },

  // 6. Keten
  {
    id: 'std-ket-01',
    code: 'STD-KET-501',
    name: 'Doğal Keten & Keten-Pamuk Dokuma Kumaş',
    category: 'Keten',
    shortDesc: 'Kendine has doğal pütürlü dokuya sahip, yüksek hava geçirgenlikli keten kumaşı.',
    description: 'Yazlık ve mevsimlik gömlek, pantolon ve ceket üreticilerine yönelik birinci sınıf doğal keten toptan kumaş çeşitleri.',
    images: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Keten Beji', hex: '#d6c7b2', code: 'KET-BEG' },
      { name: 'Haki', hex: '#4d533c', code: 'KET-HAK' },
      { name: 'Beyaz', hex: '#f8fafc', code: 'KET-WHT' },
      { name: 'İndigo Mavi', hex: '#2563eb', code: 'KET-BLU' }
    ],
    technicalInfo: {
      weaveType: 'Düz Keten Dokuma',
      stretchInfo: 'Doğal Lif Yapısı',
      structureInfo: 'Serin tutan lif kanalları, zengin dokusal yüzey',
      usageSeason: 'İlkbahar / Yaz'
    },
    applications: [
      'Keten Gömlek & Pantolon',
      'Yazlık Ceket & Safari Mont',
      'Hazır Giyim İmalatçıları'
    ],
    featured: true
  },

  // 7. Viskon
  {
    id: 'std-vis-01',
    code: 'STD-VIS-601',
    name: 'Dökümlü Düz Dokuma Viskon Kumaş',
    category: 'Viskon',
    shortDesc: 'İpeksi yumuşaklık ve zarif döküm sağlayan selülozik viskon kumaşı.',
    description: 'Giyim üreticileri ve kadın/erkek gömlek ve elbise konfeksiyonları için zengin renk skalası sunan dökümlü viskon kumaş.',
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Gece Mavisi', hex: '#172554', code: 'VIS-NAV' },
      { name: 'Zümrüt Yeşili', hex: '#064e3b', code: 'VIS-GRN' },
      { name: 'Bordo', hex: '#4c0519', code: 'VIS-BRD' }
    ],
    technicalInfo: {
      weaveType: 'Düz / Saten Dokuma Seçenekleri',
      stretchInfo: 'Doğal Döküm',
      structureInfo: 'Pürüzsüz apre, yüksek nefes alabilirlik',
      usageSeason: 'İlkbahar / Yaz / Sonbahar'
    },
    applications: [
      'Gömlek & Bluz İmalatı',
      'Elbise & Tunik Üretimi',
      'Hafif Dış Giyim'
    ]
  },

  // 8. Polyester
  {
    id: 'std-pol-01',
    code: 'STD-POL-701',
    name: 'Teknik Dış Giyim Polyester Dokuma Kumaş',
    category: 'Polyester',
    shortDesc: 'Kırışmazlık, su iticilik ve yüksek sürtünme dayanımlı teknik kumaş.',
    description: 'Mont, kaban, yelek ve fonksiyonel dış giyim imalatı yapan tekstil fabrikaları için özel apreli polyester toptan kumaşı.',
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Mat Siyah', hex: '#09090b', code: 'POL-BLK' },
      { name: 'Koyu Gri', hex: '#334155', code: 'POL-GRY' },
      { name: 'Haki Askeri', hex: '#27361b', code: 'POL-HAK' }
    ],
    technicalInfo: {
      weaveType: 'Ripstop / Düz Teknik Dokuma',
      stretchInfo: 'Boyut Sabiti',
      structureInfo: 'Su itici apreli dış katman koruması',
      usageSeason: 'Sonbahar / Kış'
    },
    applications: [
      'Mont & Yağmurluk İmalatı',
      'Teknik Dış Giyim',
      'İş Yeleği & Koruyucu Giysi'
    ]
  },

  // 9. Kadife
  {
    id: 'std-kad-01',
    code: 'STD-KAD-801',
    name: 'Fitilli Kadife (Corduroy) Kumaş',
    category: 'Kadife',
    shortDesc: 'Belirgin fitil hatlarına sahip, tok ve sıcak tutan pamuklu fitilli kadife.',
    description: 'Pantolon, gömlek-ceket (shacket) ve kışlık dış giyim koleksiyonları üreten konfeksiyon işletmeleri için toptan fitilli kadife serisi.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Koyu Taba', hex: '#5b2c15', code: 'KAD-TAB' },
      { name: 'Hardal / Camel', hex: '#b45309', code: 'KAD-CAM' },
      { name: 'Orman Yeşili', hex: '#14532d', code: 'KAD-GRN' },
      { name: 'Lacivert', hex: '#1e3a8a', code: 'KAD-NAV' }
    ],
    technicalInfo: {
      weaveType: 'Fitilli Kadife Dokuma (8-Wale & 14-Wale Opsiyonları)',
      stretchInfo: 'Rigid & Likralı Seçenekler',
      structureInfo: 'Yüksek hav sıklığı ve dökülmez fitil yapısı',
      usageSeason: 'Sonbahar / Kış'
    },
    applications: [
      'Fitilli Kadife Pantolon',
      'Gömlek-Ceket (Shacket)',
      'Kışlık Mont & Yelek',
      'Giyim İmalat Tesisleri'
    ],
    featured: true
  },

  // 10. Karışımlı Kumaşlar
  {
    id: 'std-kar-01',
    code: 'STD-KAR-901',
    name: 'Pamuk & Polyester Harmanı Dayanıklı Kumaş',
    category: 'Karışımlı Kumaşlar',
    shortDesc: 'Pamuğun nefes alabilirliği ile polyesterin mukavemetini birleştiren harman kumaş.',
    description: 'Yıkama dayanımı yüksek, çekme yapmayan ve endüstriyel konfeksiyon üretimine uygun çok yönlü karışımlı kumaş.',
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Çelik Grisi', hex: '#64748b', code: 'KAR-STL' },
      { name: 'Koyu Lacivert', hex: '#0f172a', code: 'KAR-NAV' }
    ],
    technicalInfo: {
      weaveType: 'Dimi Dokuma',
      stretchInfo: 'Boyut Sabiti',
      structureInfo: 'Homojen iplik harmanlama teknolojisi',
      usageSeason: '4 Mevsim'
    },
    applications: [
      'İş Elbiseleri & Üniforma',
      'Pantolon & Ceket İmalatı',
      'Konfeksiyon Fabrikaları'
    ]
  },

  // 11. Diğer Kumaşlar
  {
    id: 'std-dig-01',
    code: 'STD-DIG-999',
    name: 'Teknik Yırtılmaz Dokuma Ripstop Kumaş',
    category: 'Diğer Kumaşlar',
    shortDesc: 'Özel kare takviyeli ızgara dokuma yapısıyla yırtılma ilerlemesini engelleyen kumaş.',
    description: 'Özel projeler, teknik dış giyim ve dayanıklı tekstil ekipmanları üreten fabrikalar için toptan teknik kumaş çözümü.',
    images: [
      'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Haki', hex: '#3f4f3b', code: 'RIP-HAK' },
      { name: 'Siyah', hex: '#18181b', code: 'RIP-BLK' }
    ],
    technicalInfo: {
      weaveType: 'Ripstop Izgara Dokuma',
      stretchInfo: 'Yüksek Mukavemet',
      structureInfo: 'Takviyeli iplik örgü ağı',
      usageSeason: '4 Mevsim'
    },
    applications: [
      'Taktik & Teknik Dış Giyim',
      'Ağır Hizmet Pantolonu',
      'Özel Koruyucu Ekipman Üretimi'
    ]
  }
];

export const TARGET_AUDIENCES_DATA = [
  {
    title: 'Tekstil Üreticileri',
    subtitle: 'Endüstriyel Üretim Tesisleri',
    description: 'Yüksek metrajlı kumaş ihtiyacı duyan seri üretim tekstil kuruluşlarına düzenli parti ve parti devamlılığı güvencesi sunuyoruz.',
    icon: 'Factory'
  },
  {
    title: 'Konfeksiyon Firmaları',
    subtitle: 'Hazır Giyim İmalatçıları',
    description: 'İç piyasa ve ihracat koleksiyonları için standart kalitede, kesim ve dikim hatlarına uygun kumaş tedariki sağlıyoruz.',
    icon: 'Layers'
  },
  {
    title: 'Giyim Üreticileri',
    subtitle: 'Pantolon, Ceket, Dış Giyim İmalatı',
    description: 'Denim, gabardin, kanvas ve dokuma kumaş gruplarında model bazlı rulo tedariki ve renk seçenekleri sunuyoruz.',
    icon: 'Scissors'
  },
  {
    title: 'Tekstil Fabrikaları',
    subtitle: 'Entegre Üretim Merkezleri',
    description: 'Büyük ölçekli parti taleplerinde güvenilir lojistik altyapımızla kesintisiz hammadde akışı sağlıyoruz.',
    icon: 'Building2'
  },
  {
    title: 'Üretim Tesisleri',
    subtitle: 'Spesifik Dokuma & Kumaş İşleme',
    description: 'Özel teknik ve konstrüksiyona sahip dokuma kumaş ihtiyaçlarına profesyonel toptan çözümler geliştiriyoruz.',
    icon: 'Cpu'
  },
  {
    title: 'Tekstil Atölyeleri',
    subtitle: 'Kesim & Dikim Atölyeleri',
    description: 'Atölyelerin toptan top ve rulo bazlı kumaş teminini hızlı ve eksiksiz sevkiyatla karşılıyoruz.',
    icon: 'Briefcase'
  },
  {
    title: 'Profesyonel Tekstil İşletmeleri',
    subtitle: 'Kurumsal Kumaş Alıcıları',
    description: 'Tekstil tedarik zincirinde yer alan profesyonel B2B müşterilerimize kurumsal iş ortaklığı anlayışıyla hizmet veriyoruz.',
    icon: 'CheckCircle2'
  }
];

export const FACILITY_PHOTOS = [
  {
    title: 'Kumaş Rulo Depolama & Raf Sistemi',
    desc: 'Düzenli istiflenmiş toptan kumaş ruloları ve parti takip sistemi.',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Sevkiyat & Yükleme Alanı',
    desc: 'Lojistik araçlara hızlı ve korunaklı kumaş yükleme rampaları.',
    url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Numune İnceleme Masaları',
    desc: 'Kumaş dokularının, gramaj hissinin ve renk tonlarının incelendiği alan.',
    url: 'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Rulo Stok & Kontrol Bölümü',
    desc: 'Metraj ve kalite kontrolü tamamlanan sevkiyata hazır kumaş topları.',
    url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000&auto=format&fit=crop'
  }
];
