import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function Footer() {
  const { config } = useSiteConfig();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-6 text-sm mb-6">
            <a href="#top" className="hover:text-pink-400 transition-colors cursor-pointer">
              TOP
            </a>
            <span className="text-gray-500">|</span>
            <a href="#pricing" className="hover:text-pink-400 transition-colors cursor-pointer">
              料金システム
            </a>
            <span className="text-gray-500">|</span>
            <a href="#access" className="hover:text-pink-400 transition-colors cursor-pointer">
              アクセス
            </a>
            <span className="text-gray-500">|</span>
            <a href="#faq" className="hover:text-pink-400 transition-colors cursor-pointer">
              よくある質問
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center gap-6 text-sm mb-6 flex-wrap">
            <a
              href={config.termsUrl || "https://gracetokyo-esthe.site/tokusho/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              特定商取引法の表記
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={config.privacyUrl || "https://gracetokyo-esthe.site/privacy-policy/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              プライバシーポリシー
            </a>
            <span className="text-gray-500">|</span>
            <a
              href={config.rulesUrl || "https://gracetokyo-esthe.site/riyoukiyaku/"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              利用規約
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 {config.storeName}</p>
        </div>
      </div>
    </footer>
  );
}