import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function PricingSystem() {
  const { config } = useSiteConfig();

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            SYSTEM
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {config.storeName}
            <br />
            <br />
            <strong>料金システム</strong>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {config.pricingCourses && config.pricingCourses.length > 0 ? (
            config.pricingCourses.map((course, index) => (
              <div key={index}>
                <div className={`rounded-xl shadow-lg p-8 ${
                  course.isSpecial 
                    ? 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-400' 
                    : 'bg-white'
                }`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {course.name}
                  </h3>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full">
                      <tbody>
                        {course.items.map((item, itemIndex) => (
                          <tr key={itemIndex} className={itemIndex % 2 === 1 ? 'bg-gray-50' : ''}>
                            <td className="py-4 px-6 text-center font-semibold text-gray-700">{item.duration}</td>
                            <td className="py-4 px-6 text-gray-800 font-bold">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {course.description && (
                    <p className="text-center text-gray-700 text-sm whitespace-pre-line">
                      {course.description}
                    </p>
                  )}
                </div>
                {index < config.pricingCourses.length - 1 && (
                  <div className="w-full h-px bg-gray-300"></div>
                )}
              </div>
            ))
          ) : (
            <>
              {/* スタンダードコース */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  スタンダードコース
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">70分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">14,000円</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">90分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">18,000円</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">120分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">23,000円</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">150分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">28,000円</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">180分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">32,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              {/* 仰向けメインコース */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  仰向けメインコース
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">70分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">16,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              {/* Graceコース */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-lg p-8 border-2 border-yellow-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  ★Graceコース★
                </h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">80分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">25,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center text-gray-700 text-sm">
                  仰向けメイン<br />
                  オールタイムディープリンパ<br />
                  5000円衣装、オイル増量、パウダー<br />
                  ホイップがセットの超お得なコース☆
                </p>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              {/* 女神コース */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 border-2 border-pink-400">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  ☆女神コース☆
                </h3>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-4 px-6 text-center font-semibold text-gray-700">80分</td>
                        <td className="py-4 px-6 text-gray-800 font-bold">23,000円</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-center text-gray-700 text-sm">
                  仰向けメイン<br />
                  オールタイムディープリンパ<br />
                  3000円衣装、オイル増量、パウダー<br />
                  ホイップがセットの超お得なコース☆
                </p>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              {/* 指名料/延長料金 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  指名料/延長料金
                </h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>写真指名料 1,000円</p>
                  <p>本指名料 2,000円</p>
                  <p className="pt-4">GOLD 1,000円</p>
                  <p>PLATINUM 2,000円</p>
                  <p>DIAMOND 3,000円</p>
                  <p className="pt-4">延長20分 4,000円☆</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-300"></div>

              {/* オプション */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  オプション
                </h3>
                <div className="text-center text-gray-700 space-y-2">
                  <p>ディープリンパ10分 1,000円</p>
                  <p>パウダー 1,000円</p>
                  <p>ホイップ 1,000円</p>
                  <p>オイル増量 2,000円</p>
                  <p>衣装チェンジ 3,000円~</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}