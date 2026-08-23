import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  MessageCircle, 
  Phone, 
  ChevronRight 
} from 'lucide-react';
import { PageId } from '../types';
import { SITE_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from '../config/siteConfig';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenSearch 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; highlight?: boolean }[] = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'fabrics', label: 'Kumaşlar' },
    { id: 'denim', label: 'Denim Kumaş', highlight: true },
    { id: 'wholesale', label: 'Toptan Satış' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'facility', label: 'İşletmemiz' },
    { id: 'contact', label: 'İletişim' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="header-nav"
      className={`sticky top-0 z-40 transition-all duration-200 bg-white border-b border-slate-200 ${
        isScrolled 
          ? 'shadow-md shadow-slate-200/50' 
          : ''
      }`}
    >
      {/* Top Bar with Geometric Industrial Context */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#1E3A8A] border border-blue-400"></span>
            <span className="font-semibold tracking-wider text-slate-200 uppercase text-[11px]">
              Endüstriyel Tekstil Çözümleri & Toptan Kumaş Tedariki
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-400 text-xs">
            <a 
              href={getPhoneCallUrl()} 
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
              title="Telefon ile Ulaşın"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={getWhatsAppUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 text-[#25D366] font-bold"
              title="WhatsApp Toptan Bilgi Hattı"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Bilgi Hattı</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* STAR DENİM Logo (Geometric Balance style) */}
          <button 
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none rounded p-1"
          >
            <div className="w-10 h-10 bg-[#1E3A8A] flex items-center justify-center rounded shadow-sm group-hover:bg-[#152a63] transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#1E3A8A] leading-none">
                STAR DENİM
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mt-1">
                Toptan Kumaş Satışı
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-slate-600 uppercase tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors cursor-pointer py-1 ${
                    isActive
                      ? 'text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-1'
                      : 'hover:text-[#1E3A8A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Direct Buttons */}
          <div className="flex items-center gap-3 border-l border-slate-200 pl-4 sm:pl-6 h-10">
            {/* Quick Search */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Kumaş Ara"
              aria-label="Kumaş Arama"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick WhatsApp Action (Theme exact style) */}
            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded text-xs font-bold transition-colors shadow-sm"
              title="WhatsApp Toptan Kumaş Hattı"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>

            {/* Quick Contact Action Button */}
            <button
              id="header-contact-btn"
              onClick={() => handleNavClick('contact')}
              className="hidden xl:flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#152a63] text-white px-4 py-2 rounded text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>İLETİŞİME GEÇ</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <div className="pb-2 border-b border-slate-100 text-xs font-bold text-[#1E3A8A] px-2 tracking-widest uppercase">
            STAR DENİM TOPTAN KUMAŞ SATIŞI
          </div>

          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-bold tracking-wider uppercase text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-50 text-[#1E3A8A] border-l-4 border-[#1E3A8A]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#1E3A8A]' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-2 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
            <a
              href={getPhoneCallUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-2 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider text-center"
            >
              <Phone className="w-4 h-4" />
              <span>ARA</span>
            </a>
          </div>

          <div className="pt-1 text-center text-[11px] text-slate-500 font-semibold">
            {SITE_CONFIG.domain} | {SITE_CONFIG.phoneDisplay}
          </div>
        </div>
      )}
    </header>
  );
};

