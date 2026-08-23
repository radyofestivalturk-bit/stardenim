import React from 'react';
import { Target, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page-view" className="space-y-12 sm:space-y-16 pb-16 bg-[#F8FAFC]">
      
      {/* Hero Header */}
      <section className="bg-[#0F172A] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>KURUMSAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            HAKKIMIZDA
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            STAR DENİM, tekstil sektörünün ihtiyaç duyduğu yüksek kaliteli kumaş çeşitlerini toptan satış modeliyle imalatçı ve üreticilere sunan kurumsal bir tekstil işletmesidir.
          </p>
        </div>
      </section>

      {/* Main Corporate Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
              TOPTAN KUMAŞ TEDARİK FELSEFEMİZ
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              Tekstil İmalatında Güvenilir ve Kesintisiz Kumaş Tedariki
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                STAR DENİM olarak temel faaliyetimiz; tekstil üreticileri, konfeksiyon firmaları, hazır giyim fabrikaları ve dikim atölyeleri için ihtiyaç duyulan dokuma kumaşları toptan rulo ve parti bazında temin etmektir.
              </p>
              <p>
                Koleksiyonumuzda yer alan denim kumaş, kot kumaşı, gabardin, kanvas, pamuklu kumaş, keten, viskon, kadife, polyester ve karışımlı kumaş gruplarında kalite standartlarını, parti tutarlılığını ve hızlı teslimatı ön planda tutuyoruz.
              </p>
              <p>
                Tekstil sanayisinin dinamik yapısına ve seri imalat hatlarının hassasiyetine uygun olarak, numuneden teslimata kadar tüm süreçlerde profesyonel iş ortaklığı anlayışıyla hareket ediyoruz.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('fabrics')}
                className="px-4 py-2.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>KUMAŞ ÇEŞİTLERİMİZİ İNCELEYİN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded overflow-hidden bg-[#0F172A] border border-slate-800 shadow-sm p-2">
              <img
                src="https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?q=80&w=800&auto=format&fit=crop"
                alt="STAR DENİM Kumaş Dokuları"
                className="w-full h-72 object-cover rounded"
              />
              <div className="p-3 text-center">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider block">
                  STAR DENİM Toptan Kumaş Satışı
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5 block font-mono">
                  stardenim.com.tr
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-[#0F172A] text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900 p-6 rounded border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded bg-[#1E3A8A] text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Misyonumuz</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Tekstil ve konfeksiyon sektöründeki imalatçıların kumaş ihtiyaçlarını kaliteli, standartlara uygun ve güvenilir toptan satış prensipleriyle karşılayarak üretim süreçlerine değer katmak.
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded bg-[#1E3A8A] text-white flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Vizyonumuz</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toptan kumaş tedarikinde kalite istikrarı, zengin dokuma portföyü ve kurumsal müşteri memnuniyeti ile tekstil sanayisinin öncelikli tercih edilen güvenilir iş ortağı olmak.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
            DEĞERLERİMİZ
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Kurumsal İlkelerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Kalite İstikrarı',
              desc: 'Tedarik edilen her parti ve rulo kumaşta standart dokuma ve boya kalitesini korumak.'
            },
            {
              title: 'Güvenilirlik',
              desc: 'Söz verilen metraj, parti ve teslimat sürelerine eksiksiz sadık kalmak.'
            },
            {
              title: 'Sektörel Uzmanlık',
              desc: 'Konfeksiyon, kesim, dikim ve yıkama süreçlerinin teknik gereksinimlerine hakim olmak.'
            },
            {
              title: 'Hızlı İletişim',
              desc: 'Müşterilerimizin stok ve metraj sorularına anında ve şeffaf bilgi sağlamak.'
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-5 rounded border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-[#1E3A8A]" />
              <h3 className="text-sm font-bold text-slate-900">{val.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

