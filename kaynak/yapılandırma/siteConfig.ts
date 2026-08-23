/**
 * STAR DENİM - Merkezi Kurumsal Yapılandırma ve İletişim Bilgileri
 * Tüm iletişim, adres ve WhatsApp parametreleri buradan kolayca tek bir noktadan yönetilir.
 */

export const SITE_CONFIG = {
  brandName: 'STAR DENİM',
  legalName: 'STAR DENİM TOPTAN KUMAŞ SANAYİ VE TİCARET',
  domain: 'stardenim.com.tr',
  tagline: 'TOPTAN KUMAŞ SATIŞI',
  description: 'STAR DENİM, tekstil üreticileri ve profesyonel tekstil işletmeleri için toptan kumaş satışı ve kumaş tedariki sunar.',
  
  // İletişim Bilgileri (Gerektiğinde buradan kolayca güncellenebilir)
  phone: '+90 (212) 555 00 00',
  phoneDisplay: '0212 555 00 00',
  phoneClean: '+902125550000',
  
  whatsapp: '+90 532 000 00 00',
  whatsappClean: '905320000000',
  
  email: 'info@stardenim.com.tr',
  salesEmail: 'toptan@stardenim.com.tr',
  
  // İşletme Lokasyonu & Çalışma Saatleri (İşletmemiz Bölümü)
  facility: {
    title: 'STAR DENİM İŞLETMEMİZ & DEPO MERKEZİ',
    address: 'Tekstilciler Sanayi Bölgesi, Kumaşçılar Caddesi No: 42, Güngören / İstanbul',
    city: 'İstanbul, Türkiye',
    postalCode: '34160',
    workingHours: 'Pazartesi - Cuma: 08:30 - 18:30 | Cumartesi: 09:00 - 14:00',
    closedDays: 'Pazar Günleri Kapalıdır',
    directionsText: 'İşletmemiz tekstil sanayi aksında, kumaş yükleme ve sevkiyat rampalarına sahip merkezi lojistik konumdadır. Tır ve kamyonet sevkiyatına uygundur.',
    googleMapsSearchUrl: 'https://maps.google.com/?q=Gungoren+Tekstil+Sanayi+Istanbul',
  },

  // Hedef Müşteri Grupları (B2B Tekstil Üreticileri)
  targetAudiences: [
    {
      title: 'Tekstil Üreticileri',
      description: 'Endüstriyel ölçekte seri üretim yapan büyük ve orta ölçekli tekstil üretim tesisleri.',
      icon: 'Factory'
    },
    {
      title: 'Konfeksiyon Firmaları',
      description: 'İç ve dış piyasaya yönelik hazır giyim imalatı gerçekleştiren kurumsal konfeksiyon kuruluşları.',
      icon: 'Layers'
    },
    {
      title: 'Giyim Üreticileri',
      description: 'Pantolon, ceket, gömlek, dış giyim ve kurumsal kıyafet koleksiyonları üreten üreticiler.',
      icon: 'Scissors'
    },
    {
      title: 'Tekstil Fabrikaları',
      description: 'Geniş metrajlı parti kumaş ihtiyacı olan tam entegre tekstil fabrikaları.',
      icon: 'Building2'
    },
    {
      title: 'Üretim Tesisleri',
      description: 'Özel teknik ve dokuma kumaşlarla üretim yapan uzmanlaşmış tekstil tesisleri.',
      icon: 'Cpu'
    },
    {
      title: 'Tekstil Atölyeleri',
      description: 'Toplu metraj ve düzenli kumaş temini sağlayan profesyonel fason ve kesim-dikim atölyeleri.',
      icon: 'Briefcase'
    },
    {
      title: 'Profesyonel Tekstil İşletmeleri',
      description: 'İhracat ve toptan tedarik zincirinde yer alan profesyonel kumaş alıcıları.',
      icon: 'CheckCircle2'
    }
  ],

  // Kumaş Fiyatlandırma Politikası Kurumsal Uyarısı
  pricingNotice: 'Fiyat bilgisi için bizimle iletişime geçin.',
  technicalNotice: 'Metraj, parti uygunluğu ve detaylı teknik bilgiler için işletmemizle irtibata geçebilirsiniz.'
};

/**
 * WhatsApp üzerinden önceden doldurulmuş kurumsal mesaj bağlantısı oluşturur
 */
export function getWhatsAppUrl(customText?: string, fabricCode?: string, fabricName?: string): string {
  let message = `Merhaba STAR DENİM, toptan kumaş satışı ve tedariki hakkında bilgi almak istiyorum.`;
  if (fabricName || fabricCode) {
    message = `Merhaba STAR DENİM, [${fabricCode ? fabricCode + ' - ' : ''}${fabricName || 'Kumaş'}] hakkında toptan metraj ve detaylı bilgi almak istiyorum.`;
  } else if (customText) {
    message = customText;
  }
  return `https://wa.me/${SITE_CONFIG.whatsappClean}?text=${encodeURIComponent(message)}`;
}

/**
 * Telefon arama bağlantısı
 */
export function getPhoneCallUrl(): string {
  return `tel:${SITE_CONFIG.phoneClean}`;
}

/**
 * E-posta gönderme bağlantısı
 */
export function getMailToUrl(subject?: string): string {
  const sub = subject ? encodeURIComponent(subject) : encodeURIComponent('STAR DENİM - Toptan Kumaş Bilgi Talebi');
  return `mailto:${SITE_CONFIG.email}?subject=${sub}`;
}
