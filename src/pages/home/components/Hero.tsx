import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function Hero() {
  const { config } = useSiteConfig();

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/50"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-4">{config.storeName}|完全個室で癒やす公式情報</p>
        </div>

        <div className="mb-12">
          <img
            src={config.logoUrl || "https://gracetokyo-esthe.site/wp-content/uploads/2025/09/35555_20250212131112878.jpg"}
            alt={`${config.storeName} ロゴ`}
            className="mx-auto max-w-full h-auto"
            style={{ maxWidth: '650px' }}
          />
        </div>

        <div className="border-t border-gray-300 my-8"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          {config.heroTitle || `上野のメンズエステなら${config.storeName}`}
        </h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            <strong>{config.heroSubtitle || '上野・御徒町エリアで「失敗しない」お店選びのために。'}</strong>
          </p>
          <p className="text-gray-600 mb-4">
            {config.heroDescription1 || `激戦区・上野で多くの支持を集める「${config.storeName}」です。`}
          </p>
          <p className="text-gray-600 mb-6">
            {config.heroDescription2 || '当店がこだわる「採用基準」や「サービスの特徴」、初心者の方に向けた「利用の流れ」を分かりやすく解説します。'}
          </p>

          <div className="mb-8">
            <p className="text-xl font-bold text-pink-600 mb-4">↓オフィシャルページ↓</p>
            <a href={config.officialSiteUrl || "https://gracetokyo-esthe.com/"} target="_blank" rel="noopener noreferrer">
              <img
                src={config.officialSiteImageUrl || "https://gracetokyo-esthe.site/wp-content/uploads/2025/10/2025-10-02_22h36_51-768x524.jpg"}
                alt={`${config.storeName} サイトTOP`}
                className="mx-auto rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              />
            </a>
          </div>

          <a
            href={`${config.officialSiteUrl || "https://gracetokyo-esthe.com/"}/girl`}
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
          >
            在籍セラピストを見る ▶
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <a
            href={`tel:${config.phoneNumber}`}
            className="block hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="https://gracetokyo-esthe.site/wp-content/uploads/2025/09/e5a93ff8e75abf22817f3ad0fe948699-1024x287.png"
              alt="電話予約"
              className="w-full h-auto"
            />
          </a>
          <a
            href={config.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="https://gracetokyo-esthe.site/wp-content/uploads/2025/09/f8e5c83cccb7dcf43655f23721729a44-1024x287.png"
              alt="LINE予約"
              className="w-full h-auto"
            />
          </a>
          <a
            href={config.officialSiteUrl || "https://gracetokyo-esthe.com/"}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img
              src="https://gracetokyo-esthe.site/wp-content/uploads/2025/10/3-1024x287.png"
              alt="WEB予約"
              className="w-full h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}