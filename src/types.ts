export type PageId = 
  | 'home' 
  | 'fabrics' 
  | 'denim' 
  | 'wholesale' 
  | 'about' 
  | 'facility' 
  | 'contact';

export type LegalModalType = 'privacy' | 'kvkk' | 'terms' | null;

export type FabricCategoryType = 
  | 'Denim Kumaş'
  | 'Kot Kumaş'
  | 'Gabardin'
  | 'Kanvas'
  | 'Pamuklu Kumaş'
  | 'Keten'
  | 'Viskon'
  | 'Polyester'
  | 'Kadife'
  | 'Karışımlı Kumaşlar'
  | 'Diğer Kumaşlar';

export interface FabricColor {
  name: string;
  hex: string;
  code?: string;
}

export interface TechnicalInfo {
  weaveType: string;         // Dokuma Tipi (örn. Twill 3/1 Sağ Dimi, Bezayağı, Saten vb.)
  stretchInfo: string;       // Esneklik Bilgisi (örn. Rigid / Likralı / Konfor Streç)
  structureInfo: string;     // Doku & Yapı Bilgisi (örn. Dayanıklı Çözgü-Atkı Dokuma)
  usageSeason: string;       // Sezon Uygunluğu (örn. 4 Mevsim, Sonbahar/Kış, İlkbahar/Yaz)
  careRecommendation?: string;// Bakım & Yıkama Tavsiyesi
  note?: string;             // Kurumsal Bilgilendirme
}

export interface Fabric {
  id: string;
  code: string;
  name: string;
  category: FabricCategoryType;
  shortDesc: string;
  description: string;
  images: string[];
  colors: FabricColor[];
  technicalInfo: TechnicalInfo;
  applications: string[];    // Kullanım Alanları (Tekstil Üreticileri için)
  featured?: boolean;
  isDenim?: boolean;
  denimWashTypes?: string[]; // Denim yıkama efektleri (Raw, Stonewash, Bleach, Vintage, Dark Indigo vb.)
}

export interface CategoryInfo {
  name: FabricCategoryType;
  slug: string;
  shortDesc: string;
  image: string;
  highlightCount: string;
  iconName: string;
}

export interface ContactFormData {
  companyName: string;
  authorizedPerson: string;
  phone: string;
  email: string;
  message: string;
  interestedFabricCode?: string;
}

export interface TargetAudienceItem {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
