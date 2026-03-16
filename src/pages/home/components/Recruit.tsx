export default function Recruit() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">RECRUIT</h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <a
                href="https://kanto.qzin.jp/gracetokyo/?v=official"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img
                  src="https://gracetokyo-esthe.site/wp-content/uploads/2025/09/2025-09-29_09h42_54.jpg"
                  alt="上野メンズエステ Grace Tokyo 求人画像"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </a>
            </div>

            <div className="text-center md:text-left">
              <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                未経験大歓迎!
              </div>

              <ul className="mb-8 text-gray-700">
                <li className="mb-4">
                  上野駅から徒歩約5分圏内の好立地!<br />
                  時間効率良く働くならココ♪
                </li>
              </ul>

              <a
                href="https://kanto.qzin.jp/gracetokyo/?v=official"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                求人情報を今すぐチェック ▶︎
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}