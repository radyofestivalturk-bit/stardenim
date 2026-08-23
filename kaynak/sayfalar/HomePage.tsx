import React from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  Factory, 
  Layers, 
  Scissors, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Cpu, 
  ChevronRight
} from 'lucide-react';
import { Fabric, PageId } from '../types';
import { SITE_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from '../config/siteConfig';
import { CATEGORIES, FABRICS, TARGET_AUDIENCES_DATA, FACILITY_PHOTOS } from '../data/fabrics';
import { FabricCard } from '../components/FabricCard';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectFabric: (fabric: Fabric) => void;
  onSelectCategory: (categoryName: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectFabric,
  onSelectCategory,
  onOpenSearch,
}) => {
  const featuredDenimFabrics = FABRICS.filter(f => f.isDenim).slice(0, 3);

  const getTargetIcon = (iconName: string) => {
    switch (iconName) {
      case 'Factory': return <Factory className="w-5 h-5 text-[#1E3A8A]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#1E3A8A]" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-[#1E3A8A]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#1E3A8A]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#1E3A8A]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#1E3A8A]" />;
    }
  };

  return (
    <div id="home-page-view" className="space-y-16 sm:space-y-20 pb-16">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Geometric Balance Aesthetic) */}
      {/* ========================================================= */}
      <section 
        id="hero-section"
        className="relative bg-white border-b border-slate-200 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Geometric Balance Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 border-l-4 border-[#1E3A8A] bg-blue-50/80 px-3 py-1 text-xs font-bold text-[#1E3A8A] tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"></span>
                <span>TEKSTİL SEKTÖRÜNE TOPTAN KUMAŞ TEDARİKÇİSİ</span>
              </div>

              {/* Main Title & Subtitle */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  STAR DENİM
                  <span className="block text-[#1E3A8A] mt-1 text-3xl sm:text-5xl">
                    TOPTAN KUMAŞ SATIŞI
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Tekstil üreticileri, konfeksiyon firmaları ve atölyeler için birinci sınıf dokuma ve denim kumaş tedariki. Parti devamlılığı, standart rulo sarımı ve güvenilir toptan satış.
              </p>

              {/* Action Buttons: Geometric sharp corners with high-contrast styling */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  id="hero-explore-fabrics-btn"
                  onClick={() => onNavigate('fabrics')}
                  className="px-7 py-3.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs sm:text-sm font-bold tracking-wider transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>KUMAŞLARI KEŞFET</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-contact-btn"
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 rounded bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold tracking-wider transition-all border border-slate-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>İLETİŞİME GEÇ</span>
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold tracking-wider transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </div>

              {/* Quick Key Highlights with Geometric check marks */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Top & Rulo Bazlı</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <Factory className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Parti Devamlılığı</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-5 h-5 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center shrink-0">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-800">Hızlı Lojistik</span>
                </div>
              </div>

            </div>

            {/* Right Showcase Area (Geometric Balance Composition) */}
            <div className="lg:col-span-5 relative">
              
              {/* Geometric Balance Composition container */}
              <div className="relative aspect-[4/3] rounded bg-slate-100 overflow-hidden border border-slate-200 shadow-lg">
                
                {/* Textile Base Image */}
                <img
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=1000&auto=format&fit=crop"
                  alt="STAR DENİM Toptan Kumaş Dokuları"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>

                {/* Top Geometric Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E3A8A]"></span>
                  <span>B2B TOPTAN KUMAŞ DEPOSU</span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded border border-slate-200 p-4 shadow-md space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#1E3A8A] uppercase tracking-wider">İndigo Denim & Dokuma Serisi</span>
                    <span className="text-slate-500 font-mono text-[11px] font-semibold">Toptan Rulo</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Konfeksiyon üreticileri için yüksek mukavemetli ve yıkamaya uygun toptan kumaşlar.
                  </p>
                  <button
                    onClick={() => onNavigate('denim')}
                    className="w-full py-2 rounded bg-slate-900 hover:bg-[#1E3A8A] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Denim Koleksiyonunu İncele</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating Metric Badge in Geometric Balance Style */}
              <div className="absolute -bottom-4 -left-4 bg-[#1E3A8A] text-white p-3.5 rounded shadow-lg hidden sm:flex items-center gap-3 border border-blue-400/30">
                <Layers className="w-5 h-5 text-blue-200" />
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider">12+ Kumaş Grubu</div>
                  <div className="text-[10px] text-blue-200">Geniş Stok Çeşitliliği</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TARGET CUSTOMERS SECTION (Strict B2B Alignment) */}
      {/* ========================================================= */}
      <section id="target-customers-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
          
          <div className="border-l-4 border-[#1E3A8A] pl-4 space-y-1">
            <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest block">
              HEDEF KİTLEMİZ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Kimler İçin Kumaş Tedariki Sağlıyoruz?
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              STAR DENİM, yalnızca profesyonel ve ticari tekstil müşterilerine toptan kumaş satışı gerçekleştirmektedir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TARGET_AUDIENCES_DATA.map((item, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded p-5 space-y-3 hover:border-[#1E3A8A] transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  {getTargetIcon(item.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider block">
                Parti ve Rulo Siparişleri İçin İletişim
              </span>
              <p className="text-sm text-slate-600">
                Fabrikanız veya atölyeniz için ihtiyaç duyduğunuz kumaş metrajı ve renkleri hakkında doğrudan bilgi alın.
              </p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider whitespace-nowrap transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP’TAN ULAŞIN</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FABRIC CATEGORIES SHOWCASE (Geometric Balance Style) */}
      {/* ========================================================= */}
      <section id="categories-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="border-l-4 border-[#1E3A8A] pl-3 space-y-1">
            <span className="text-xs font-bold text-[#1E3A8A] tracking-widest uppercase block">
              TOPTAN KUMAŞ ÇEŞİTLERİ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Kumaş Koleksiyonları
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tekstil imalatçılarına yönelik zengin dokuma ve örme kumaş çeşitleri.
            </p>
          </div>

          <button
            onClick={() => onNavigate('fabrics')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#152a63] transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>Tüm Kataloğu İncele</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid (Geometric Balance Category Card Layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((category, idx) => {
            const indexStr = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={category.name}
                onClick={() => {
                  onSelectCategory(category.name);
                  onNavigate('fabrics');
                }}
                className="group relative rounded overflow-hidden bg-white border border-slate-200 hover:border-[#1E3A8A] transition-all duration-200 cursor-pointer flex flex-col shadow-xs hover:shadow-md"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={category.image}
                    alt={`${category.name} Toptan Kumaş`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                  
                  {/* Category Step Tag (KATEGORİ 01) */}
                  <div className="absolute top-2 left-2 bg-slate-900/90 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                    KOD {indexStr}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider block">
                      {category.highlightCount}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                      {category.name}
                    </h3>
                  </div>
                </div>

                <div className="p-3 bg-white flex-1 flex flex-col justify-between space-y-2">
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {category.shortDesc}
                  </p>
                  
                  {/* Geometric balance indicator bar */}
                  <div className="pt-1">
                    <div className="h-0.5 w-6 bg-[#1E3A8A] group-hover:w-full transition-all duration-300 mb-1"></div>
                    <div className="text-[11px] font-bold text-[#1E3A8A] flex items-center justify-between">
                      <span>Koleksiyonu Gör</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DENİM KUMAŞ SPECIAL SPOTLIGHT (High-Impact Theme) */}
      {/* ========================================================= */}
      <section id="denim-spotlight-section" className="bg-[#0F172A] text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 border-l-4 border-blue-400 bg-blue-950/80 px-3 py-1 text-xs font-bold text-blue-300 tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ÖZEL KOLEKSİYON</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                DENİM KUMAŞ SERİSİ
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                İndigo boyama kalitesi, dayanıklı dimi dokuma konstrüksiyonu ve farklı yıkama efektlerine uyumlu denim kumaş çeşitlerimizle tekstil üreticilerinin yanındayız.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Rigid Denim</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Konfor Streç Likralı</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Siyah Denim</span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-xs text-slate-300 border border-slate-700">Selvedge Doku</span>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('denim')}
                  className="px-6 py-3 rounded bg-[#1E3A8A] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>DENİM KUMAŞ SAYFASINA GİT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=600&auto=format&fit=crop"
                  alt="Denim Doku"
                  className="rounded object-cover h-36 w-full border border-slate-800"
                />
                <img
                  src="https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=600&auto=format&fit=crop"
                  alt="Denim Rulo"
                  className="rounded object-cover h-36 w-full border border-slate-800"
                />
                <img
                  src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&auto=format&fit=crop"
                  alt="Siyah Denim"
                  className="rounded object-cover h-36 w-full border border-slate-800"
                />
                <img
                  src="https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=600&auto=format&fit=crop"
                  alt="İndigo Dokuma"
                  className="rounded object-cover h-36 w-full border border-slate-800"
                />
              </div>
            </div>
          </div>

          {/* Featured Denim Fabrics Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Öne Çıkan Denim Kumaşlar
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDenimFabrics.map((fabric) => (
                <FabricCard
                  key={fabric.id}
                  fabric={fabric}
                  onSelect={onSelectFabric}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHOLESALE ADVANTAGES & SUPPLY PROCESS */}
      {/* ========================================================= */}
      <section id="wholesale-advantages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-l-4 border-[#1E3A8A] pl-3 space-y-1">
          <span className="text-xs font-bold text-[#1E3A8A] tracking-widest uppercase block">
            GÜVENİLİR TEKSTİL PARTNERİ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Toptan Kumaş Tedarik Avantajlarımız
          </h2>
          <p className="text-sm text-slate-600">
            Seri üretim yapan tekstil fabrikaları ve konfeksiyon atölyeleri için kesintisiz çözümler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Parti ve Ton Devamlılığı
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Yüksek metrajlı kesim ve dikim siparişlerinizde ton farkı riskini ortadan kaldıran parti kontrollü kumaş sevkiyatı.
            </p>
          </div>

          <div className="bg-white p-6 rounded border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Rulo ve Top Bazlı Sevkiyat
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standart sarım kalitesine sahip, etiketli ve korumalı ambalajında hasarsız teslim edilen toptan kumaş ruloları.
            </p>
          </div>

          <div className="bg-white p-6 rounded border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center">
              <Truck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Hızlı Lojistik Koordinasyon
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tekstil sanayi bölgesindeki merkezimizden şehir içi ve şehirler arası atölye ve fabrikalara organize sevkiyat.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. İŞLETMEMİZ PREVIEW (Facility & Warehouse) */}
      {/* ========================================================= */}
      <section id="facility-preview-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="border-l-4 border-[#1E3A8A] pl-3 space-y-1">
                <span className="text-xs font-bold text-[#1E3A8A] uppercase tracking-widest block">
                  İŞLETMEMİZ & DEPO ALANIMIZ
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  STAR DENİM İşletmesi
                </h2>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                Kumaş stoklarımızın düzenli olarak muhafaza edildiği depo alanımız, kumaş raflarımız ve rulo kontrol merkezimizle tekstil sektörüne hizmet veriyoruz.
              </p>
              
              <div className="space-y-2 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1E3A8A]"></span>
                  <span>Kumaş Rulo Depolama ve Sevkiyat Rampaları</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1E3A8A]"></span>
                  <span>Numune ve Kartela İnceleme Alanı</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#1E3A8A]"></span>
                  <span>Merkezi Tekstil Sanayi Lokasyonu</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('facility')}
                  className="px-6 py-3 rounded bg-slate-900 hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>İŞLETMEMİZİ VE YOL TARİFİNİ GÖR</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-2.5">
                {FACILITY_PHOTOS.slice(0, 4).map((photo, i) => (
                  <div key={i} className="relative rounded overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2 left-2 text-[10px] text-white font-semibold drop-shadow">
                      {photo.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FAST CONTACT & WHATSAPP BANNER (Geometric High-Contrast) */}
      {/* ========================================================= */}
      <section id="contact-cta-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded p-8 sm:p-10 border border-slate-800 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              TOPTAN KUMAŞ İHTİYAÇLARINIZ İÇİN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Kumaş metrajı, rulo stok durumu ve detaylı bilgi için işletmemize ulaşabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP’TAN ULAŞIN</span>
            </a>
            
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded bg-white hover:bg-slate-100 text-slate-900 text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>İLETİŞİME GEÇ</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

