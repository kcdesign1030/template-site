import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PricingCourse {
  id: string;
  name: string;
  duration: string;
  price: string;
  description?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface SiteConfig {
  storeName: string;
  phoneNumber: string;
  lineUrl: string;
  businessHours: string;
  mapEmbedUrl: string;
  primaryColor: string;
  secondaryColor: string;
  address: string;
  email: string;
}

interface SiteConfigContextType {
  config: SiteConfig;
  pricingCourses: PricingCourse[];
  faqItems: FAQItem[];
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  updatePricingCourses: (courses: PricingCourse[]) => void;
  updateFAQItems: (items: FAQItem[]) => void;
}

const defaultConfig: SiteConfig = {
  storeName: 'Grace Tokyo',
  phoneNumber: '08012345678',
  lineUrl: 'https://line.me/R/ti/p/@gracetokyo',
  businessHours: '11:00～翌5:00',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4!2d139.7744!3d35.7089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzMyLjAiTiAxMznCsDQ2JzI3LjgiRQ!5e0!3m2!1sja!2sjp!4v1234567890',
  primaryColor: '#ec4899',
  secondaryColor: '#a855f7',
  address: '東京都台東区上野',
  email: 'info@gracetokyo.com'
};

const defaultPricingCourses: PricingCourse[] = [
  {
    id: '1',
    name: 'スタンダードコース',
    duration: '90分',
    price: '15,000円',
    description: '全身リラクゼーション'
  },
  {
    id: '2',
    name: 'Graceコース',
    duration: '120分',
    price: '20,000円',
    description: 'プレミアムコース'
  }
];

const defaultFAQItems: FAQItem[] = [
  {
    id: '1',
    question: '初めての利用ですが、どのように予約すればいいですか?',
    answer: 'お電話、LINE、またはWEB予約フォームからご予約いただけます。初めてのお客様には、ご来店前に簡単なカウンセリングを行いますので、お気軽にお問い合わせください。'
  },
  {
    id: '2',
    question: '料金の支払い方法は何がありますか?',
    answer: '現金でのお支払いのみとなっております。クレジットカードや電子マネーには対応しておりませんので、ご了承ください。'
  }
];

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('siteConfig');
    return saved ? JSON.parse(saved) : defaultConfig;
  });

  const [pricingCourses, setPricingCourses] = useState<PricingCourse[]>(() => {
    const saved = localStorage.getItem('pricingCourses');
    return saved ? JSON.parse(saved) : defaultPricingCourses;
  });

  const [faqItems, setFAQItems] = useState<FAQItem[]>(() => {
    const saved = localStorage.getItem('faqItems');
    return saved ? JSON.parse(saved) : defaultFAQItems;
  });

  useEffect(() => {
    localStorage.setItem('siteConfig', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('pricingCourses', JSON.stringify(pricingCourses));
  }, [pricingCourses]);

  useEffect(() => {
    localStorage.setItem('faqItems', JSON.stringify(faqItems));
  }, [faqItems]);

  const updateConfig = (newConfig: Partial<SiteConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const updatePricingCourses = (courses: PricingCourse[]) => {
    setPricingCourses(courses);
  };

  const updateFAQItems = (items: FAQItem[]) => {
    setFAQItems(items);
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        pricingCourses,
        faqItems,
        updateConfig,
        updatePricingCourses,
        updateFAQItems
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig must be used within SiteConfigProvider');
  }
  return context;
}