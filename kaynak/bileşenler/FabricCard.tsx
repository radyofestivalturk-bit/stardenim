import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Fabric } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

interface FabricCardProps {
  fabric: Fabric;
  onSelect: (fabric: Fabric) => void;
}

export const FabricCard: React.FC<FabricCardProps> = ({ fabric, onSelect }) => {
  return (
    <div 
      id={`fabric-card-${fabric.code.toLowerCase()}`}
      className="group bg-white rounded overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-[#1E3A8A] transition-all duration-200 flex flex-col flex-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onSelect(fabric)}>
        <img
          src={fabric.images[0]}
          alt={fabric.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        
        {/* Category & Code Overlay Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
          <span className="px-2 py-0.5 rounded bg-slate-900/90 text-white text-[10px] font-mono font-bold tracking-wider shadow-sm">
            {fabric.code}
          </span>
          {fabric.isDenim && (
            <span className="px-2 py-0.5 rounded bg-[#1E3A8A] text-white text-[10px] font-bold tracking-wide shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-blue-200" />
              DENİM
            </span>
          )}
        </div>

        {/* Color swatch floating preview */}
        <div className="absolute bottom-2.5 right-2.5 flex -space-x-1 bg-white/95 backdrop-blur-xs p-1 rounded border border-slate-200/80 shadow-xs">
          {fabric.colors.map((c, i) => (
            <span
              key={i}
              title={c.name}
              className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
          <span className="text-[11px] font-bold text-white flex items-center gap-1">
            Kumaş Detaylarını İncele <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#1E3A8A] tracking-wider uppercase">
              {fabric.category}
            </span>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
              Toptan Rulo
            </span>
          </div>

          <h3 
            onClick={() => onSelect(fabric)}
            className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#1E3A8A] transition-colors line-clamp-1 cursor-pointer"
          >
            {fabric.name}
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {fabric.shortDesc}
          </p>

          {/* Applications list */}
          <div className="pt-1">
            <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-1">
              Kullanım Alanları:
            </div>
            <div className="flex flex-wrap gap-1">
              {fabric.applications.slice(0, 3).map((app, idx) => (
                <span 
                  key={idx} 
                  className="text-[10px] bg-slate-50 text-slate-700 px-1.5 py-0.5 rounded border border-slate-200 font-medium"
                >
                  {app}
                </span>
              ))}
              {fabric.applications.length > 3 && (
                <span className="text-[10px] text-slate-400 self-center">
                  +{fabric.applications.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Card Footer: Price Notice & Action */}
        <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="text-[10px] text-slate-500 font-medium">
            {SITE_CONFIG.pricingNotice}
          </div>

          <button
            onClick={() => onSelect(fabric)}
            className="px-2.5 py-1 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wide transition-colors flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>İncele</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

