import React from 'react';
import { 
  Factory, 
  Layers, 
  Scissors, 
  Building2, 
  Cpu, 
  Briefcase, 
  CheckCircle2, 
  MessageCircle, 
  Check
} from 'lucide-react';
import { PageId } from '../types';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface WholesalePageProps {
  onNavigate: (page: PageId) => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ onNavigate }) => {
  const customerGroups = [
    {
      title: 'Tekstil Üreticileri',
      desc: 'Büyük ölçekli parti kumaş ihtiyacı duyan ve yüksek metrajda çalışan seri üretim tekstil tesisleri.',
      icon: <Factory className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Konfeksiyon Firmaları',
      desc: 'İç ve dış pazar koleksiyonları için standart kalitede, kesim ve dikim hatlarına uygun kumaş tedariki sağlayan firmalar.',
      icon: <Layers className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Giyim Üreticileri',
      desc: 'Pantolon, ceket, gömlek, dış giyim ve kurumsal üniforma üreten hazır giyim üreticileri.',
      icon: <Scissors className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Tekstil Fabrikaları',
      desc: 'Geniş metrajlı parti kumaş gereksinimi olan tam entegre üretim merkezleri.',
      icon: <Building2 className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Üretim Tesisleri',
      desc: 'Özel teknik ve dokuma kumaşlarla üretim yapan uzmanlaşmış tekstil tesisleri.',
      icon: <Cpu className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Tekstil Atölyeleri',
      desc: 'Toplu metraj ve düzenli kumaş temini sağlayan profesyonel fason ve kesim-dikim atölyeleri.',
      icon: <Briefcase className="w-5 h-5 text-[#1E3A8A]" />
    },
    {
      title: 'Profesyonel Tekstil İşletmeleri',
      desc: 'İhracat ve toptan tedarik zincirinde yer alan kurumsal kumaş alıcıları.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#1E3A8A]" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Kumaş & Doku İnceleme',
      desc: 'İhtiyaç duyduğunuz kumaş türü (denim, gabardin, kanvas vb.), dokuma yapısı ve renk kartelası üzerinden seçim yapılır.'
    },
    {
      step: '02',
      title: 'Metraj & Parti Tespiti',
      desc: 'Üretim planınıza uygun top ve rulo bazlı metraj ihtiyacı belirlenir, parti ton uyumu kontrol edilir.'
    },
    {
      step: '03',
      title: 'Rulo Kontrolü & Hazırlık',
      desc: 'Kumaş ruloları depomuzda etiketlenerek sevkiyata hazır hale getirilir.'
    },
    {
      step: '04',
      title: 'Lojistik & Sevkiyat',
      desc: 'Fabrika veya atölyenizin teslimat adresine güvenli ve hızlı lojistik araçlarla sevk edilir.'
    }
  ];

  return (
    <div id="wholesale-page-view" className="space-y-12 sm:space-y-16 pb-16 bg-[#F8FAFC]">
      
      {/* ========================================================= */}
      {/* 1. HERO & POSITIONING */}
      {/* ========================================================= */}
      <section className="bg-[#0F172A] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>B2B TEKSTİL TEDARİKÇİSİ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            TOPTAN KUMAŞ SATIŞI
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            STAR DENİM, tekstil üreticileri ve profesyonel tekstil işletmeleri için toptan kumaş satışı ve kumaş tedariki sunar.
          </p>

          {/* Direct CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl(undefined, undefined, 'Merhaba STAR DENİM, toptan kumaş satışı ve parti siparişleri hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP’TAN ULAŞIN</span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider transition-colors flex items-center gap-2 border border-blue-500/40 cursor-pointer"
            >
              <span>BİZE ULAŞIN</span>
            </button>
          </div>

          <div className="pt-1 text-[11px] text-slate-400">
            {SITE_CONFIG.pricingNotice} Rulo ve top bazlı kurumsal teslimat.
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TARGET CUSTOMER GROUPS DETAILED */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
            HEDEF MÜŞTERİ GRUPLARIMIZ
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Hizmet Verdiğimiz Profesyonel Tekstil Müşterileri
          </h2>
          <p className="text-xs text-slate-600">
            Hizmetlerimiz yalnızca ticari ve endüstriyel üretim gerçekleştiren kuruluşlara yöneliktir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customerGroups.map((grp, i) => (
            <div 
              key={i}
              className="bg-white p-5 rounded border border-slate-200 shadow-xs space-y-2 hover:border-[#1E3A8A] transition-colors"
            >
              <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center">
                {grp.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                {grp.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {grp.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SUPPLY PROCESS */}
      {/* ========================================================= */}
      <section className="bg-[#0F172A] text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
              İŞLEYİŞ & DÜZEN
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Toptan Kumaş Tedarik Süreci
            </h2>
            <p className="text-xs text-slate-300">
              Siparişten sevkiyata adım adım şeffaf ve güvenilir lojistik süreçlerimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 p-5 rounded border border-slate-800 space-y-2 relative"
              >
                <span className="text-2xl font-extrabold text-blue-500/50 font-mono block">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. WHOLESALE PRINCIPLES */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded p-6 sm:p-8 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
              KURUMSAL TAAHHÜT
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Toptan Kumaş Tedarik Standartlarımız
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              STAR DENİM olarak tekstil imalat sektörünün hız, ton hassasiyeti ve kalite beklentilerini biliyoruz. Tüm kumaşlarımız profesyonel üretim kriterlerine uygun olarak sunulur.
            </p>

            <div className="space-y-2 pt-1 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                <span>Rulo ve top bazlı eksiksiz sarım ve metraj</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                <span>Kesimhane ve dikim hatlarına uygun yüzey stabilizasyonu</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                <span>Parti devamlılığı ve ton tutarlılığı güvencesi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                <span>Lojistik araçlara uygun ambalajlı sevkiyat</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded border border-slate-200 space-y-3">
            <h3 className="text-sm font-bold text-slate-900">
              Kumaş İhtiyaçlarınız İçin Bilgi Alın
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              İmalatınız için gerekli metraj, rulo adetleri ve renk alternatifleri hakkında doğrudan müşteri temsilcimizle görüşün.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP’TAN ULAŞIN</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BİLGİ ALIN / İLETİŞİME GEÇİN</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

