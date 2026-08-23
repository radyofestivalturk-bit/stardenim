import React, { useState, useMemo } from 'react';
import { Search, X, Layers, ArrowRight } from 'lucide-react';
import { Fabric } from '../types';
import { FABRICS } from '../data/fabrics';

interface FabricSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFabric: (fabric: Fabric) => void;
}

export const FabricSearchModal: React.FC<FabricSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectFabric
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const set = new Set(FABRICS.map(f => f.category));
    return ['all', ...Array.from(set)];
  }, []);

  const filteredResults = useMemo(() => {
    return FABRICS.filter(fabric => {
      const matchCat = selectedCategory === 'all' || fabric.category === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      if (!term) return matchCat;

      const matchName = fabric.name.toLowerCase().includes(term);
      const matchCode = fabric.code.toLowerCase().includes(term);
      const matchDesc = fabric.description.toLowerCase().includes(term);
      const matchApps = fabric.applications.some(app => app.toLowerCase().includes(term));
      const matchColors = fabric.colors.some(c => c.name.toLowerCase().includes(term));

      return matchCat && (matchName || matchCode || matchDesc || matchApps || matchColors);
    });
  }, [searchTerm, selectedCategory]);

  if (!isOpen) return null;

  return (
    <div 
      id="fabric-search-modal-overlay"
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Search Bar Input */}
        <div className="p-3.5 sm:p-4 border-b border-slate-200 bg-[#0F172A] flex items-center gap-2.5 text-white">
          <Search className="w-4 h-4 text-blue-300 shrink-0" />
          <input
            id="fabric-search-input"
            type="text"
            placeholder="Kumaş adı, kodu (örn. STD-DNM), dokuma veya kullanım alanı arayın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-white placeholder:text-slate-400 text-xs sm:text-sm font-medium focus:outline-none"
          />
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="text-[11px] text-slate-400 hover:text-slate-200 px-1.5 py-0.5"
            >
              Temizle
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            aria-label="Aramayı Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-3 py-2 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-500 font-mono font-bold uppercase text-[10px] tracking-wider mr-1 shrink-0">
            Kategori:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-0.5 rounded text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {cat === 'all' ? 'Tümü' : cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[55vh] overflow-y-auto divide-y divide-slate-100 p-1">
          {filteredResults.length === 0 ? (
            <div className="text-center py-10 px-4">
              <Layers className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs font-semibold text-slate-700">Kriterlere uygun kumaş bulunamadı.</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Farklı bir arama kelimesi veya kumaş kodu deneyebilirsiniz.</p>
            </div>
          ) : (
            filteredResults.map((fabric) => (
              <button
                key={fabric.id}
                onClick={() => {
                  onSelectFabric(fabric);
                  onClose();
                }}
                className="w-full text-left p-2.5 hover:bg-blue-50/60 rounded transition-all flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                    <img 
                      src={fabric.images[0]} 
                      alt={fabric.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 text-[#1E3A8A]">
                        {fabric.code}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {fabric.category}
                      </span>
                      {fabric.isDenim && (
                        <span className="text-[9px] font-bold text-[#1E3A8A] bg-blue-50 px-1 py-0.2 rounded border border-blue-200">
                          Denim
                        </span>
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors mt-0.5">
                      {fabric.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      {fabric.applications.join(' • ')}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-[11px] font-semibold text-[#1E3A8A] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>İncele</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between items-center px-3.5">
          <span>Toplam {filteredResults.length} kumaş listeleniyor</span>
          <span className="font-mono font-semibold text-[#1E3A8A]">STAR DENİM Toptan</span>
        </div>

      </div>
    </div>
  );
};

