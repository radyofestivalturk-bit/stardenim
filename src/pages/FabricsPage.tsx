import React, { useState, useMemo } from 'react';
import { Search, Layers, MessageCircle, Info, Sparkles, X } from 'lucide-react';
import { Fabric } from '../types';
import { FABRICS, CATEGORIES } from '../data/fabrics';
import { FabricCard } from '../components/FabricCard';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface FabricsPageProps {
  selectedCategoryName: string | null;
  onSelectCategoryName: (name: string | null) => void;
  onSelectFabric: (fabric: Fabric) => void;
}

export const FabricsPage: React.FC<FabricsPageProps> = ({
  selectedCategoryName,
  onSelectCategoryName,
  onSelectFabric,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const filteredFabrics = useMemo(() => {
    return FABRICS.filter(fabric => {
      // Category filter
      const matchCat = !selectedCategoryName || fabric.category === selectedCategoryName;
      
      // Search term filter
      const term = searchTerm.toLowerCase().trim();
      let matchSearch = true;
      if (term) {
        matchSearch = 
          fabric.name.toLowerCase().includes(term) ||
          fabric.code.toLowerCase().includes(term) ||
          fabric.description.toLowerCase().includes(term) ||
          fabric.category.toLowerCase().includes(term) ||
          fabric.applications.some(app => app.toLowerCase().includes(term));
      }

      // Color filter
      const matchColor = !selectedColor || fabric.colors.some(c => c.name === selectedColor);

      return matchCat && matchSearch && matchColor;
    });
  }, [selectedCategoryName, searchTerm, selectedColor]);

  const activeCategoryInfo = useMemo(() => {
    if (!selectedCategoryName) return null;
    return CATEGORIES.find(c => c.name === selectedCategoryName);
  }, [selectedCategoryName]);

  return (
    <div id="fabrics-page-view" className="space-y-8 pb-16 bg-[#F8FAFC]">
      
      {/* Page Header Banner */}
      <section className="relative bg-[#0F172A] text-white py-12 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>TOPTAN KUMAŞ KATALOĞU</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Kumaş Koleksiyonları
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Tekstil üreticileri, konfeksiyon imalatçıları ve fabrikalar için özenle seçilmiş toptan rulo kumaş çeşitleri.
          </p>

          {/* Quick Notice */}
          <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-blue-400" />
            <span>{SITE_CONFIG.pricingNotice} Top ve rulo bazında toptan teslimat yapılır.</span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded border border-slate-200 shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Kumaş adı, kodu (örn. STD-DNM), kullanım alanı arayın..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] focus:bg-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Results count & WhatsApp Fast Link */}
            <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-700 font-mono">
                {filteredFabrics.length} kumaş bulundu
              </span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp Toptan Hattı</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Category Tabs List */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Kumaş Kategorileri:
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <button
                onClick={() => onSelectCategoryName(null)}
                className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryName === null
                    ? 'bg-[#1E3A8A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Tümü ({FABRICS.length})
              </button>

              {CATEGORIES.map((cat) => {
                const count = FABRICS.filter(f => f.category === cat.name).length;
                const isSelected = selectedCategoryName === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => onSelectCategoryName(cat.name)}
                    className={`px-3 py-1 rounded text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#1E3A8A] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${isSelected ? 'bg-[#152a63] text-blue-100' : 'bg-slate-200 text-slate-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Description if selected */}
          {activeCategoryInfo && (
            <div className="p-3 bg-blue-50/80 border border-blue-200 rounded flex items-center justify-between gap-3 text-xs text-blue-950">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0" />
                <span><strong>{activeCategoryInfo.name}:</strong> {activeCategoryInfo.shortDesc}</span>
              </div>
              <button
                onClick={() => onSelectCategoryName(null)}
                className="text-[#1E3A8A] hover:text-[#152a63] font-semibold underline text-[11px] shrink-0 cursor-pointer"
              >
                Filtreyi Temizle
              </button>
            </div>
          )}

        </div>

        {/* Fabrics Grid */}
        {filteredFabrics.length === 0 ? (
          <div className="bg-white rounded p-12 text-center border border-slate-200 shadow-xs space-y-4">
            <Layers className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">
              Seçilen kriterlere uygun kumaş bulunamadı
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Arama kriterlerinizi değiştirerek veya tüm kategorileri görüntüleyerek kumaş kataloğumuzu inceleyebilirsiniz.
            </p>
            <button
              onClick={() => {
                onSelectCategoryName(null);
                setSearchTerm('');
                setSelectedColor(null);
              }}
              className="px-5 py-2 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFabrics.map((fabric) => (
              <FabricCard
                key={fabric.id}
                fabric={fabric}
                onSelect={onSelectFabric}
              />
            ))}
          </div>
        )}

        {/* Bottom B2B Supply Info Box */}
        <div className="bg-[#0F172A] text-white rounded p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
              ÖZEL METRAJ VE PARTİ TALEPLERİ
            </span>
            <h3 className="text-lg font-bold text-white">
              Aradığınız Özel Dokuma Kumaş mı Var?
            </h3>
            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Katalogda yer almayan özel dokuma konstrüksiyonları, ham kumaş veya parti bazlı siparişleriniz için işletmemizle iletişime geçebilirsiniz.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(undefined, undefined, 'Merhaba STAR DENİM, özel dokuma kumaş ve parti metrajı hakkında bilgi almak istiyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WHATSAPP’TAN ULAŞIN</span>
          </a>
        </div>

      </div>
    </div>
  );
};

