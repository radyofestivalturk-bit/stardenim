import React from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';
import { LegalModalType } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap: Record<NonNullable<LegalModalType>, { title: string; icon: React.ReactNode; body: React.ReactNode }> = {
    privacy: {
      title: 'GİZLİLİK POLİTİKASI',
      icon: <Lock className="w-4 h-4 text-blue-300" />,
      body: (
        <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed">
          <p>
            <strong>{SITE_CONFIG.legalName}</strong> (“STAR DENİM”) olarak, {SITE_CONFIG.domain} web sitemizi ziyaret eden ve toptan kumaş satışı hizmetlerimiz kapsamında bizimle iletişime geçen profesyonel ticari müşterilerimizin gizliliğine büyük önem vermekteyiz.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">1. Toplanan Ticari Bilgiler</h4>
          <p>
            Web sitemizdeki iletişim formları ve doğrudan iletişim kanalları (telefon, WhatsApp, e-posta) aracılığıyla paylaştığınız firma unvanı, yetkili adı soyadı, telefon numarası ve e-posta adresi gibi bilgiler yalnızca toptan kumaş sipariş süreçleri ve bilgilendirme amacıyla işlenir.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">2. Bilgilerin Kullanım Amacı</h4>
          <p>
            Toplanan veriler; kumaş metrajı, stok durumu, sevkiyat koordinasyonu ve müşteri ilişkileri yönetimini sağlamak amacıyla kullanılır. Üçüncü şahıs veya ilgisiz kurumlarla ticari amaçla paylaşılmaz.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">3. Güvenlik</h4>
          <p>
            STAR DENİM, kurumsal verilerinizin yetkisiz erişim, ifşa veya değiştirilmesine karşı endüstri standardı güvenlik önlemlerini uygulamaktadır.
          </p>
        </div>
      )
    },
    kvkk: {
      title: 'KVKK AYDINLATMA METNİ',
      icon: <ShieldCheck className="w-4 h-4 text-blue-300" />,
      body: (
        <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed">
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>{SITE_CONFIG.legalName}</strong> Veri Sorumlusu sıfatıyla, ticari faaliyetlerimiz kapsamında elde edilen verilerinizi kanuna uygun şekilde işlemektedir.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">1. Veri Sorumlusunun Kimliği</h4>
          <p>
            STAR DENİM Toptan Kumaş Sanayi ve Ticaret ({SITE_CONFIG.domain})
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">2. Kişisel Verilerin İşlenme Amaçları</h4>
          <p>
            Tekstil üreticileri, konfeksiyon kuruluşları ve atölyelerle toptan kumaş tedarik sözleşmelerinin kurulması, ifası, faturalandırma ve lojistik sevkiyat süreçlerinin yürütülmesi amaçlarıyla işlenmektedir.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">3. Haklarınız</h4>
          <p>
            KVKK’nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini talep etme ve kanunda belirtilen tüm haklarınızı {SITE_CONFIG.email} adresi üzerinden bize iletebilirsiniz.
          </p>
        </div>
      )
    },
    terms: {
      title: 'KULLANIM KOŞULLARI',
      icon: <FileText className="w-4 h-4 text-blue-300" />,
      body: (
        <div className="space-y-3.5 text-xs text-slate-600 leading-relaxed">
          <p>
            Bu web sitesi ({SITE_CONFIG.domain}) STAR DENİM’e aittir ve toptan kumaş satışı faaliyetlerini tanıtmak amacıyla hazırlanmıştır.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">1. Ticari Nitelik</h4>
          <p>
            STAR DENİM hazır giyim, perakende veya e-ticaret satışı yapmamaktadır. Sitede yer alan tüm kumaş ürünleri tekstil üreticileri, konfeksiyon firmaları ve kurumsal işletmelere toptan rulo ve parti bazında tedarik edilmektedir.
          </p>
          <h4 className="font-bold text-slate-900 text-xs font-mono uppercase">2. Fikri Mülkiyet</h4>
          <p>
            Sitede yer alan STAR DENİM logosu, metinler, görseller ve katalog düzeni telif hakları ile korunmaktadır. İzinsiz çoğaltılamaz veya kopyalanamaz.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div 
      id="legal-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-white rounded shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[80vh]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-[#0F172A] text-white">
          <div className="flex items-center gap-2">
            {current.icon}
            <h3 className="text-xs font-bold text-white font-mono tracking-wider">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto bg-white">
          {current.body}
        </div>

        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-[#0F172A] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};

