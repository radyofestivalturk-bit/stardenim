import React from 'react';
import { 
  Sparkles, 
  Layers, 
  MessageCircle, 
  Send, 
  Scissors, 
  Info,
  Droplet
} from 'lucide-react';
import { Fabric, PageId } from '../types';
import { FABRICS } from '../data/fabrics';
import { FabricCard } from '../components/FabricCard';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface DenimPageProps {
  onNavigate: (page: PageId) => void;
  onSelectFabric: (fabric: Fabric) => void;
}

export const DenimPage: React.FC<DenimPageProps> = ({ onNavigate, onSelectFabric }) => {
  const denimFabrics = FABRICS.filter(f => f.isDenim);

  const denimWeaveTypes = [
    {
      title: '3/1 Z Sağ Dimi (Right Hand Twill)',
      desc: 'En yaygın geleneksel denim dokumasıdır. Sağdan sola çapraz fitil hatları ve sağlam kumaş tutumu sunar.',
      tag: 'Klasik Denim'
    },
    {
      title: '3/1 S Sol Dimi (Left Hand Twill)',
      desc: 'Daha yumuşak tuşe ve yıkama sonrası dökümlü yüzey sağlayan özel büküm dimi dokuması.',
      tag: 'Yumuşak Tuşe'
    },
    {
      title: 'Konfor Streç / Likralı Denim',
      desc: 'Elastan iplik katkısıyla dokunan, hareket rahatlığı sağlayan ve formunu koruyan esnek denim yapısı.',
      tag: 'Streç'
    },
    {
      title: 'Selvedge / Mekikli Dokuma Dokusu',
      desc: 'Geleneksel kenar yapısına sahip, yoğun çözgülü otantik ve prestijli denim kumaş dokusu.',
      tag: 'Premium'
    }
  ];

  const washEffects = [
    { name: 'Raw / Ham İndigo', desc: 'İşlem görmemiş, saf koyu indigo tonu ve doğal sertlik.' },
    { name: 'Stone Wash (Taş Yıkama)', desc: 'Klasik ponza taşı efekti ile dengeli renk açılması.' },
    { name: 'Enzyme Wash (Enzim Yıkama)', desc: 'Kumaş liflerini yıpratmadan ipeksi yumuşaklık ve net kontrast.' },
    { name: 'Black Sulphur / Siyah Seri', desc: 'Solmaya dayanıklı kükürt siyahı ve zengin gri yıkama skalası.' },
    { name: 'Bleach / Açık Buz Yıkama', desc: 'Yazlık ve açık tonlu koleksiyonlar için homojen renk açma.' },
    { name: 'Vintage / Used Effect', desc: 'Doğal eskimiş görünüm ve yüksek aşınma direnci.' }
  ];

  return (
    <div id="denim-page-view" className="space-y-12 sm:space-y-16 pb-16 bg-[#F8FAFC]">
      
      {/* ========================================================= */}
      {/* 1. DENİM PAGE HERO */}
      {/* ========================================================= */}
      <section className="relative bg-[#0F172A] text-white py-14 sm:py-20 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542272604-780c96856592?q=80&w=1800&auto=format&fit=crop"
            alt="Denim Kumaş Dokuları"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#1E3A8A]/70"></div>
          <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            <span>ÖZEL ÜRETİM SERİSİ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            DENİM KUMAŞ KOLEKSİYONU
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            STAR DENİM, tekstil üreticileri ve konfeksiyon firmaları için yüksek kaliteli, yıkama toleransı üstün ve farklı dokuma konstrüksiyonlarına sahip toptan denim kumaş tedariki sunar.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(undefined, undefined, 'Merhaba STAR DENİM, denim kumaş toptan satışı ve koleksiyonu hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP’TAN ULAŞ</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider transition-colors flex items-center gap-2 border border-blue-500/40 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>İLETİŞİME GEÇ</span>
            </button>
          </div>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-blue-200">
            <Info className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>{SITE_CONFIG.pricingNotice} Rulo ve top bazlı toptan teslimat.</span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DENİM FABRIC COLLECTION */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-3">
          <div>
            <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
              ÜRÜN LİSTESİ
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Denim Kumaş Çeşitleri
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-mono">
            Toplam {denimFabrics.length} özel denim kumaş modeli listeleniyor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {denimFabrics.map((fabric) => (
            <FabricCard
              key={fabric.id}
              fabric={fabric}
              onSelect={onSelectFabric}
            />
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DENİM WEAVE TEXTURES & CONSTRUCTIONS */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
            TEKNİK YAPI
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Denim Kumaş Dokuları & Yapısı
          </h2>
          <p className="text-xs text-slate-600">
            Giyim üreticilerinin farklı model ve kesim ihtiyaçlarına uygun çözgü ve atkı konstrüksiyonları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {denimWeaveTypes.map((type, idx) => (
            <div 
              key={idx}
              className="bg-white p-5 rounded border border-slate-200 shadow-xs space-y-2 hover:border-[#1E3A8A] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[#1E3A8A] text-[10px] font-bold font-mono">
                  {type.tag}
                </span>
                <Layers className="w-4 h-4 text-[#1E3A8A]" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {type.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WASHING & COLOR EFFECTS */}
      {/* ========================================================= */}
      <section className="bg-[#0F172A] text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
              RENK & YIKAMA SEÇENEKLERİ
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Endüstriyel Yıkama Proses Uyumluluğu
            </h2>
            <p className="text-xs text-slate-300">
              Kumaşlarımız tekstil yıkama fabrikalarının standart kimyasal ve mekanik yıkama süreçlerine tam uyumludur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {washEffects.map((wash, i) => (
              <div 
                key={i}
                className="bg-slate-900 p-4 rounded border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center gap-2 text-blue-400">
                  <Droplet className="w-3.5 h-3.5" />
                  <h4 className="text-xs font-bold text-white">{wash.name}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {wash.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. USAGE APPLICATIONS FOR GARMENT MANUFACTURERS */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
            ÜRETİM ALANLARI
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Denim Kumaş Kullanım Alanları
          </h2>
          <p className="text-xs text-slate-600">
            Konfeksiyon firmaları ve atölyelerin seri imalatında geniş kullanım alanı.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          {[
            { title: 'Kot Pantolon', desc: 'Slim, regular ve relaxed kalıplar' },
            { title: 'Denim Ceket', desc: 'Klasik trucker ve modern kesimler' },
            { title: 'Denim Gömlek', desc: 'Hafif ve yumuşak ince kumaşlar' },
            { title: 'Tulum & Salopet', desc: 'Dayanıklı kalın konstrüksiyon' },
            { title: 'Dış Giyim', desc: 'Mevsimlik mont ve yelekler' },
            { title: 'İş & Kurumsal Giyim', desc: 'Yüksek mukavemetli iş denimleri' }
          ].map((item, index) => (
            <div key={index} className="bg-white p-3.5 rounded border border-slate-200 shadow-xs space-y-1">
              <Scissors className="w-5 h-5 text-[#1E3A8A] mx-auto mb-1" />
              <h3 className="text-xs font-bold text-slate-900">{item.title}</h3>
              <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WHOLESALE SUPPLY NOTICE & CTA */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] text-white rounded p-6 sm:p-10 border border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
              TOPTAN DENİM TEDARİKİ
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Denim Kumaş Bilgi & Sipariş
            </h3>
            <p className="text-xs text-slate-300">
              Gerekli metraj, parti ton uyumu ve numune inceleme için işletmemizle irtibata geçebilirsiniz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={getWhatsAppUrl(undefined, undefined, 'Merhaba STAR DENİM, toptan denim kumaş çeşitleri ve rulo teslimatları hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP’TAN ULAŞ</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-4 py-2.5 rounded bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>İLETİŞİME GEÇ</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

