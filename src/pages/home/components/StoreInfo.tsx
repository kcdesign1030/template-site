import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function StoreInfo() {
  const { config } = useSiteConfig();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">店舗情報</h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-gray-700 w-32">
                    店名
                  </th>
                  <td className="py-4 px-6 text-gray-800">
                    {config.storeName}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-gray-700">
                    業種
                  </th>
                  <td className="py-4 px-6 text-gray-800">
                    {config.businessType || 'メンズエステ(※風俗店ではございません)'}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-gray-700">
                    営業時間
                  </th>
                  <td className="py-4 px-6 text-gray-800">{config.businessHours}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-gray-700">
                    電話番号
                  </th>
                  <td className="py-4 px-6 text-gray-800">
                    <a
                      href={`tel:${config.phoneNumber}`}
                      className="text-pink-500 hover:text-pink-600 cursor-pointer"
                    >
                      {config.phoneNumber}
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-6 text-left bg-gray-50 font-semibold text-gray-700">
                    公式サイト
                  </th>
                  <td className="py-4 px-6 text-gray-800">
                    <a
                      href={config.officialSiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-600 break-all cursor-pointer"
                    >
                      {config.officialSiteUrl}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
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
            href={config.officialSiteUrl}
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