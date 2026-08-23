import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  Truck, 
  ExternalLink,
  Maximize2,
  X
} from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, getPhoneCallUrl } from '../config/siteConfig';
import { FACILITY_PHOTOS } from '../data/fabrics';

export const FacilityPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const facilityFeatures = [
    {
      title: 'Kumaş Rulo Depolama & Raf Alanı',
      desc: 'Denim, kot, gabardin, kanvas ve diğer dokuma kumaş rulolarının partilerine göre düzenli depolandığı yüksek kapasiteli raf sistemi.'
    },
    {
      title: 'Numune & Kartela Masaları',
      desc: 'Tekstil üreticilerinin kumaş tuşesini, gramaj hissini ve renk tonlarını detaylıca inceleyebileceği aydınlatmalı numune alanı.'
    },
    {
      title: 'Rulo Kontrol & Sevkiyat Hazırlık',
      desc: 'Sevkiyat öncesi metraj, etiket ve ambalaj kontrollerinin yapıldığı korumalı çıkış bölümü.'
    },
    {
      title: 'Lojistik Yükleme Rampaları',
      desc: 'Kamyon, tır ve panelvan araçlara hızlı, güvenli ve hava koşullarından korunaklı kumaş yükleme imkanı.'
    }
  ];

  return (
    <div id="facility-page-view" className="space-y-12 sm:space-y-16 pb-16 bg-[#F8FAFC]">
      
      {/* Hero Banner */}
      <section className="bg-[#0F172A] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>DEPO & SEVKİYAT MERKEZİ</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            İŞLETMEMİZ
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            STAR DENİM işletmesi, kumaş rulo stoklarımız, depolama raflarımız ve tekstil üreticilerine yönelik toptan sevkiyat altyapımız.
          </p>
        </div>
      </section>

      {/* Facility Overview & Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Details & Address */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
                İŞLETMEMİZİN DETAYLARI
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Toptan Kumaş Depolama ve Sevkiyat Alanımız
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                İşletmemiz tekstil sanayi aksında merkezi bir konumda yer almaktadır. Kumaş stoklarımız düzenli raflarda, partilerine göre ayrılmış olarak muhafaza edilmekte ve fabrikalara güvenle sevk edilmektedir.
              </p>
            </div>

            {/* Address & Hours Card */}
            <div className="bg-white rounded p-5 border border-slate-200 shadow-xs space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">İşletme Adresi:</strong>
                  <span>{SITE_CONFIG.facility.address}</span>
                  <span className="block text-slate-500 text-[11px] mt-0.5">{SITE_CONFIG.facility.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Çalışma Saatleri:</strong>
                  <span>{SITE_CONFIG.facility.workingHours}</span>
                  <span className="block text-slate-500 text-[11px] mt-0.5">{SITE_CONFIG.facility.closedDays}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                <Phone className="w-4 h-4 text-[#1E3A8A] shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">Telefon:</strong>
                  <a href={getPhoneCallUrl()} className="hover:text-[#1E3A8A] transition-colors font-medium">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <strong className="block text-slate-900 font-bold">WhatsApp Bilgi:</strong>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-medium">
                    {SITE_CONFIG.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Directions & Logistics Note */}
            <div className="p-4 bg-blue-50/60 border border-blue-100 rounded space-y-1.5 text-xs text-blue-950">
              <div className="flex items-center gap-2 font-bold text-[#1E3A8A]">
                <Truck className="w-3.5 h-3.5 text-[#1E3A8A]" />
                <span>Yol Tarifi & Lojistik Ulaşım Bilgisi</span>
              </div>
              <p className="leading-relaxed text-slate-600">
                {SITE_CONFIG.facility.directionsText}
              </p>
              <div className="pt-1">
                <a
                  href={SITE_CONFIG.facility.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#1E3A8A] hover:text-blue-900 underline text-xs"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Haritada Yol Tarifi Al (Google Maps)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map Box */}
          <div className="lg:col-span-6 space-y-3">
            <div className="bg-[#0F172A] text-white rounded overflow-hidden border border-slate-800 shadow-sm">
              <div className="p-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  <span>STAR DENİM LOKASYON HARİTASI</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">İstanbul / Tekstil Sanayi</span>
              </div>

              {/* Visual Interactive Map Representation with real directions button */}
              <div className="relative aspect-[16/10] bg-[#020617] flex items-center justify-center p-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-geometric-grid opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-40 h-40 rounded-full border border-blue-500/20"></div>
                </div>

                <div className="relative z-10 space-y-3 max-w-sm">
                  <div className="w-12 h-12 rounded bg-[#1E3A8A] text-white mx-auto flex items-center justify-center shadow-md border border-blue-400/30">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-white">STAR DENİM İŞLETMEMİZ</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {SITE_CONFIG.facility.address}
                    </p>
                  </div>
                  <a
                    href={SITE_CONFIG.facility.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Haritada Aç ve Yol Tarifi Al</span>
                  </a>
                </div>
              </div>

              <div className="p-3 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
                <span>Konum Bilgisi: Tekstil Sanayi Merkezi</span>
                <span className="font-mono text-slate-300">{SITE_CONFIG.facility.postalCode}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Facility Photos Gallery */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1">
            <div>
              <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
                GÖRSELLER
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                İşletme İçi & Kumaş Rulo Depolama Fotoğrafları
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Kumaş raflarımız, depo düzenimiz ve sevkiyat alanlarımız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FACILITY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo.url)}
                className="group relative rounded overflow-hidden bg-white border border-slate-200 shadow-xs hover:border-[#1E3A8A] transition-all duration-200 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                    <span className="text-[10px] text-white font-semibold flex items-center gap-1">
                      <Maximize2 className="w-3 h-3" /> Büyüt
                    </span>
                  </div>
                </div>
                <div className="p-3 bg-white space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-900">{photo.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilityFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white p-4 rounded border border-slate-200 shadow-xs space-y-1.5">
              <div className="w-6 h-6 rounded bg-blue-50 text-[#1E3A8A] flex items-center justify-center font-bold font-mono text-xs">
                {idx + 1}
              </div>
              <h4 className="text-xs font-bold text-slate-900">{feat.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Image Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded border border-slate-800 bg-[#0F172A]">
            <img src={selectedPhoto} alt="İşletme Görseli" className="w-full h-full object-contain max-h-[85vh]" />
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 rounded bg-slate-900/80 text-white hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs cursor-pointer"
            >
              <X className="w-4 h-4" /> Kapat
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

