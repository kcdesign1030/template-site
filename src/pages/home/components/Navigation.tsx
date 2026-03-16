interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a
                href="#top"
                className={`hover:text-pink-500 transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                TOP
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className={`hover:text-pink-500 transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                料金システム
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className={`hover:text-pink-500 transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                ブログ
              </a>
            </li>
            <li>
              <a
                href="#access"
                className={`hover:text-pink-500 transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                アクセス
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className={`hover:text-pink-500 transition-colors whitespace-nowrap cursor-pointer ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                よくある質問Q&amp;A
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}