import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight
} from 'lucide-react';
import { PageId, LegalModalType } from '../types';
import { SITE_CONFIG, getWhatsAppUrl, getPhoneCallUrl, getMailToUrl } from '../config/siteConfig';
import { CATEGORIES } from '../data/fabrics';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-[#0F172A] text-slate-300 border-t border-slate-800">
      {/* Target Audience Geometric Strip */}
      <div className="bg-[#1E293B] border-b border-slate-700/80 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1E3A8A] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-blue-300 font-bold">
                B2B KURUMSAL KUMAŞ TEDARİKÇİSİ
              </p>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                Tekstil üreticileri, konfeksiyon fabrikaları ve atölyelere profesyonel toptan kumaş satışı.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP’TAN ULAŞ</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold tracking-wider transition-all border border-slate-600 cursor-pointer"
            >
              <span>İLETİŞİME GEÇ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#1E3A8A] flex items-center justify-center text-white shadow-xs">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-extrabold text-lg tracking-tight text-white leading-none">
                  STAR DENİM
                </h3>
                <p className="text-[10px] font-bold tracking-widest text-blue-400 uppercase mt-0.5">
                  TOPTAN KUMAŞ SATIŞI
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              STAR DENİM, tekstil sektörüne yönelik kaliteli kumaş çeşitleri ve toptan kumaş satışı gerçekleştiren profesyonel bir işletmedir.
            </p>

            <div className="pt-1 text-[11px] text-slate-400 font-mono">
              Alan Adı: <span className="text-slate-200 font-semibold">{SITE_CONFIG.domain}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              KURUMSAL MENÜ
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Ana Sayfa</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('fabrics')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Kumaşlar Kataloğu</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('denim')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-blue-300 font-semibold hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Denim Kumaş Koleksiyonu</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('wholesale')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Toptan Satış</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>Hakkımızda</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('facility')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>İşletmemiz</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-white transition-colors flex items-center gap-1 text-slate-400 hover:translate-x-0.5 duration-150 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-blue-400" />
                  <span>İletişim</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Fabric Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              KUMAŞ GRUPLARI
            </h4>
            <div className="grid grid-cols-1 gap-1.5 text-xs">
              {CATEGORIES.slice(0, 7).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleNav('fabrics')}
                  className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-slate-500">Toptan</span>
                </button>
              ))}
              <button
                onClick={() => handleNav('fabrics')}
                className="text-left text-blue-400 hover:text-blue-300 font-semibold pt-1 cursor-pointer"
              >
                Tüm Kumaş Çeşitlerini Gör →
              </button>
            </div>
          </div>

          {/* Column 4: Facility & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase border-b border-slate-800 pb-2">
              İŞLETMEMİZ & İLETİŞİM
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.facility.address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={getPhoneCallUrl()} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium transition-colors">
                  {SITE_CONFIG.whatsapp} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={getMailToUrl()} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800/60">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p>{SITE_CONFIG.facility.workingHours}</p>
                  <p className="text-slate-500">{SITE_CONFIG.facility.closedDays}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Strip */}
      <div className="border-t border-slate-800/80 bg-[#0B1120] py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">STAR DENİM</strong>. Tüm Hakları Saklıdır. Toptan Kumaş Satışı.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Gizlilik Politikası
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('kvkk')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              KVKK Aydınlatma Metni
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Kullanım Koşulları
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

