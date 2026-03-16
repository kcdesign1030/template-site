import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function About() {
  const { config } = useSiteConfig();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {config.aboutTitle || `${config.storeName}|上野で癒しを体験`}
          </h2>

          <p className="text-gray-700 mb-6">
            {config.aboutDescription1 || `上野でメンズエステ(メンエス)をお探しなら「${config.storeName}」へ。JR上野駅から徒歩数分という好立地で、厳選された日本人セラピストによる極上のアロママッサージをご提供しています。日常の疲れを癒し、心と体をリフレッシュできる上質なリラクゼーション空間です。`}
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
            {config.aboutSection1Title || `${config.storeName}の魅力`}
          </h3>
          <p className="text-gray-700 mb-6">
            {config.aboutSection1Content || `${config.storeName}には20代を中心としたセラピストが多数在籍。スタイルや施術技術はもちろん、ホスピタリティあふれるおもてなしをご体感いただけます。アロマオイルマッサージやリンパケアを通じて、溜まった疲労やストレスを解消し、深い癒しのひとときをお届けします。`}
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
            {config.aboutSection2Title || '上野で選ばれる多彩なエステコース'}
          </h3>
          <p className="text-gray-700 mb-6">
            {config.aboutSection2Content || `当店では基本コースに加え、より癒しを高めるための特別オプションをご用意。お客様一人ひとりに合わせた施術を行うため、細やかなヒアリングのうえで最適なコースをご案内いたします。営業時間は${config.businessHours}、予約は公式LINEまたはお電話にて承っております。`}
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
            {config.aboutSection3Title || '上野でNo.1の癒しを目指すメンズエステ'}
          </h3>
          <p className="text-gray-700 mb-6">
            {config.aboutSection3Content || `${config.storeName}は地域No.1の癒しを追求。新人セラピストも続々と入店し、清潔感あふれるプライベート空間で非日常のひとときをお楽しみいただけます。仕事帰りや休日に、心身ともにリフレッシュしたい方に最適なメンズエステです。`}
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
            アクセスとご予約
          </h3>
          <p className="text-gray-700 mb-6">
            {config.aboutAccessContent || `JR上野駅・御徒町駅などからアクセス抜群の${config.storeName}。セラピスト情報は公式サイトにて随時更新中です。最新情報は公式Xでも発信しております。`}
          </p>
          <p className="text-gray-700">
            ご予約は <strong>公式サイトの予約フォーム・LINE・お電話</strong> にてお気軽にどうぞ。
          </p>
        </div>
      </div>
    </section>
  );
}