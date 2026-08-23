import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Info, 
  Check, 
  Send
} from 'lucide-react';
import { Fabric } from '../types';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';

interface FabricDetailModalProps {
  fabric: Fabric | null;
  onClose: () => void;
  onNavigateToContactWithFabric: (fabric: Fabric) => void;
}

export const FabricDetailModal: React.FC<FabricDetailModalProps> = ({
  fabric,
  onClose,
  onNavigateToContactWithFabric,
}) => {
  if (!fabric) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(fabric.colors[0]?.name || '');

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl(
      undefined,
      fabric.code,
      `${fabric.name} (Seçilen Renk: ${selectedColor || 'Belirtilmedi'})`
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleContact = () => {
    onNavigateToContactWithFabric(fabric);
    onClose();
  };

  return (
    <div 
      id="fabric-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="fabric-detail-modal-content"
        className="relative w-full max-w-3xl bg-white text-slate-900 rounded shadow-2xl overflow-hidden border border-slate-200 my-auto flex flex-col max-h-[90vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-[#0F172A] text-white sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded bg-[#1E3A8A] text-white font-mono text-[11px] font-bold tracking-wider">
              {fabric.code}
            </span>
            <span className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider font-mono">
              {fabric.category}
            </span>
          </div>
          <button
            id="close-fabric-modal-btn"
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: Gallery & Images (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-3">
              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-slate-100 border border-slate-200 group">
                <img
                  src={fabric.images[activeImageIndex] || fabric.images[0]}
                  alt={fabric.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {fabric.isDenim && (
                  <div className="absolute top-2.5 left-2.5 bg-[#1E3A8A] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs">
                    DENİM SERİSİ
                  </div>
                )}
                
                <div className="absolute bottom-2.5 right-2.5 bg-[#0F172A]/80 text-white text-[9px] font-mono px-2 py-0.5 rounded">
                  STAR DENİM
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {fabric.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {fabric.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-12 rounded overflow-hidden shrink-0 border transition-all cursor-pointer ${
                        activeImageIndex === idx 
                          ? 'border-[#1E3A8A] ring-1 ring-[#1E3A8A]' 
                          : 'border-slate-200 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={imgUrl} 
                        alt={`${fabric.name} ${idx + 1}`} 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* B2B Supply Notice */}
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded flex items-start gap-2.5 text-xs text-blue-950">
                <Info className="w-3.5 h-3.5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Toptan Satış Bilgisi:</strong> Bu kumaş rulo ve top bazında tekstil üreticileri ve konfeksiyon atölyelerine toptan sevk edilmektedir.
                </p>
              </div>
            </div>

            {/* Right Column: Information & Details (lg:col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-tight">
                  {fabric.name}
                </h2>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {fabric.description}
                </p>
              </div>

              {/* Color Options */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center justify-between font-mono">
                  <span>Renk Seçenekleri</span>
                  {selectedColor && (
                    <span className="text-[#1E3A8A] font-semibold">
                      {selectedColor}
                    </span>
                  )}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {fabric.colors.map((c) => {
                    const isSelected = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-[11px] font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#1E3A8A] bg-blue-50/80 text-[#1E3A8A]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full border border-slate-300 shrink-0" 
                          style={{ backgroundColor: c.hex }} 
                        />
                        <span>{c.name}</span>
                        {c.code && <span className="text-[9px] text-slate-400 font-mono">({c.code})</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Denim Wash Types if Denim */}
              {fabric.denimWashTypes && fabric.denimWashTypes.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                    Uyumlu Denim Yıkama & Efekt Prosesleri
                  </label>
                  <div className="flex flex-wrap gap-1">
                    {fabric.denimWashTypes.map((wash, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-medium border border-slate-200"
                      >
                        {wash}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications for Garment Manufacturers */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                  Kullanım Alanları
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700">
                  {fabric.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded border border-slate-100">
                      <Check className="w-3 h-3 text-[#1E3A8A] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider font-mono">
                  Teknik Dokuma Bilgileri
                </label>
                <div className="bg-slate-50 rounded p-3 border border-slate-200 space-y-1.5 text-[11px]">
                  <div className="flex justify-between py-0.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Dokuma Tipi:</span>
                    <span className="font-semibold text-slate-800 text-right">{fabric.technicalInfo.weaveType}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Esneklik Yapısı:</span>
                    <span className="font-semibold text-slate-800 text-right">{fabric.technicalInfo.stretchInfo}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Doku & Konstrüksiyon:</span>
                    <span className="font-semibold text-slate-800 text-right">{fabric.technicalInfo.structureInfo}</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200/80">
                    <span className="text-slate-500">Sezon Uygunluğu:</span>
                    <span className="font-semibold text-slate-800 text-right">{fabric.technicalInfo.usageSeason}</span>
                  </div>
                  {fabric.technicalInfo.careRecommendation && (
                    <div className="flex justify-between py-0.5">
                      <span className="text-slate-500">Proses Tavsiyesi:</span>
                      <span className="font-semibold text-slate-800 text-right">{fabric.technicalInfo.careRecommendation}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price Notice */}
              <div className="p-2.5 bg-amber-50/80 border border-amber-200 rounded text-amber-900 text-xs font-medium flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>{SITE_CONFIG.pricingNotice}</span>
                </span>
                <span className="text-[10px] text-amber-700 font-mono font-semibold">Toptan Metraj</span>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-2.5">
          <button
            id="modal-whatsapp-action-btn"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-all cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WHATSAPP’TAN ULAŞ</span>
          </button>

          <button
            id="modal-contact-action-btn"
            onClick={handleContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wide transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>İLETİŞİME GEÇ</span>
          </button>
        </div>
      </div>
    </div>
  );
};

