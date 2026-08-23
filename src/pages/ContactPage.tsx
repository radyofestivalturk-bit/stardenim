import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { ContactFormData, Fabric } from '../types';
import { SITE_CONFIG, getWhatsAppUrl, getPhoneCallUrl, getMailToUrl } from '../config/siteConfig';

interface ContactPageProps {
  prefilledFabric?: Fabric | null;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledFabric }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: '',
    authorizedPerson: '',
    phone: '',
    email: '',
    message: prefilledFabric 
      ? `Merhaba, [${prefilledFabric.code} - ${prefilledFabric.name}] kumaşı için toptan parti/metraj bilgisi almak istiyoruz.` 
      : '',
    interestedFabricCode: prefilledFabric?.code || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate immediate smooth form submission confirmation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      authorizedPerson: '',
      phone: '',
      email: '',
      message: '',
      interestedFabricCode: ''
    });
    setSubmitted(false);
  };

  return (
    <div id="contact-page-view" className="space-y-12 sm:space-y-16 pb-16 bg-[#F8FAFC]">
      
      {/* Page Header Banner */}
      <section className="bg-[#0F172A] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric-grid opacity-15"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1E3A8A] text-blue-200 text-[10px] font-mono font-bold uppercase tracking-widest">
            <span>BİZE ULAŞIN</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            İLETİŞİM
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            STAR DENİM toptan kumaş satışı, parti metrajları ve rulo stok bilgileri için iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div>
              <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest font-mono">
                KURUMSAL İLETİŞİM FORMU
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Kumaş Talebinizi İletin
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Formu doldurarak kumaş ihtiyaçlarınız hakkında bize mesaj bırakabilirsiniz. En kısa sürede yetkilimiz sizinle irtibata geçecektir.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-3 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-emerald-950">
                  Mesajınız Başarıyla Alındı
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Sayın <strong>{formData.authorizedPerson || 'Yetkili'}</strong> ({formData.companyName || 'Firmanız'}), iletmiş olduğunuz toptan kumaş bilgi talebi kayıt altına alınmıştır. Müşteri temsilcimiz en kısa sürede <strong>{formData.phone}</strong> üzerinden size dönüş yapacaktır.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {prefilledFabric && (
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900 flex items-center justify-between">
                    <span>İlgili Kumaş: <strong>{prefilledFabric.code} - {prefilledFabric.name}</strong></span>
                    <span className="text-[10px] text-[#1E3A8A] font-semibold">{prefilledFabric.category}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Firma Adı */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Firma Adı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn. ABC Tekstil San. Tic."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* Yetkili */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Yetkili Adı Soyadı <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={formData.authorizedPerson}
                      onChange={(e) => setFormData({ ...formData, authorizedPerson: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Telefon */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                    />
                  </div>

                  {/* E-posta */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      E-posta Adresi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adiniz@firmaniz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                    />
                  </div>
                </div>

                {/* Mesaj */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    Mesajınız & Kumaş Talebiniz <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="İhtiyaç duyduğunuz kumaş türü, yaklaşık metraj veya parti gereksinimlerinizi belirtebilirsiniz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#1E3A8A] focus:border-[#1E3A8A] resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[10px] text-slate-500">
                    Bilgileriniz sadece toptan kumaş iletişimi amacıyla işlenir.
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-2.5 rounded bg-[#1E3A8A] hover:bg-[#152a63] text-white text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{loading ? 'GÖNDERİLİYOR...' : 'GÖNDER'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Contact Info Cards & Direct WhatsApp (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Contact Info Card */}
            <div className="bg-[#0F172A] text-white rounded p-5 sm:p-6 border border-slate-800 shadow-sm space-y-5">
              <div>
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest font-mono">
                  İLETİŞİM KANALLARI
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5">
                  STAR DENİM İletişim Bilgileri
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                {/* Telefon */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#1E3A8A] flex items-center justify-center text-blue-200 shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Telefon</span>
                    <a href={getPhoneCallUrl()} className="text-white hover:text-blue-300 font-bold transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">WhatsApp Toptan Hattı</span>
                    <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors">
                      {SITE_CONFIG.whatsapp}
                    </a>
                  </div>
                </div>

                {/* E-posta */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#1E3A8A] flex items-center justify-center text-blue-200 shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Kurumsal E-posta</span>
                    <a href={getMailToUrl()} className="text-white hover:text-blue-300 font-semibold transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Adres */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-[#1E3A8A] flex items-center justify-center text-blue-200 shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">İşletme Adresi</span>
                    <span className="text-white font-medium">
                      {SITE_CONFIG.facility.address}
                    </span>
                    <span className="block text-slate-400 text-[11px] mt-0.5">{SITE_CONFIG.facility.city}</span>
                  </div>
                </div>

                {/* Çalışma Saatleri */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Çalışma Saatleri</span>
                    <span className="text-white font-medium">{SITE_CONFIG.facility.workingHours}</span>
                    <span className="block text-slate-400 text-[11px] mt-0.5">{SITE_CONFIG.facility.closedDays}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WHATSAPP’TAN ULAŞIN</span>
                </a>
              </div>
            </div>

            {/* Google Maps Card */}
            <div className="bg-white rounded p-4 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900">Harita ve Konum</h4>
                <a
                  href={SITE_CONFIG.facility.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1E3A8A] hover:underline font-bold flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div className="aspect-[16/9] bg-slate-50 rounded overflow-hidden relative flex items-center justify-center border border-slate-200 text-center p-3">
                <div className="space-y-1">
                  <MapPin className="w-6 h-6 text-[#1E3A8A] mx-auto" />
                  <p className="text-xs font-bold text-slate-800">{SITE_CONFIG.facility.title}</p>
                  <p className="text-[11px] text-slate-500">{SITE_CONFIG.facility.city}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

