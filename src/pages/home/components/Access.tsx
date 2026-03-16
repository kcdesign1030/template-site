import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function Access() {
  const { config } = useSiteConfig();

  return (
    <section id="access" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ACCESS</h2>
          <h4 className="text-xl font-semibold text-gray-700">{config.roomName || '上野ルーム'}</h4>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="w-full h-96">
            <iframe
              src={config.googleMapEmbedUrl || "https://maps.google.com/maps?q=%E3%80%92110-0005%20%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%8F%B0%E6%9D%B1%E5%8C%BA%E4%B8%8A%E9%87%8E%EF%BC%97%E4%B8%81%E7%9B%AE&t=m&z=15&output=embed&iwloc=near"}
              title={config.address || "〒110-0005 東京都台東区上野7丁目"}
              aria-label={config.address || "〒110-0005 東京都台東区上野7丁目"}
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}