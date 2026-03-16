export default function Terms() {
  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 border-b-4 border-amber-500 pb-3 mb-8 text-center">
            ご利用について
          </h1>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-amber-600 mb-5 flex items-center">
              <span className="mr-2 text-3xl">■</span>注意事項
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded-lg shadow-sm">
                当店は<strong>アロマオイルマッサージのみ</strong>を行っているリラクゼーションサロンです。
                <br />
                <span className="font-bold text-red-600">(当サロンは風俗店ではございません)</span>
              </p>
              <p>
                医療法が定める病院や診療所・治療院・按摩マッサージ・鍼灸による施術所ではございません。
              </p>
              <p className="font-semibold text-red-700 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-md">
                また、性的強要する方のご利用は固くお断りさせて頂きます。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-amber-600 mb-5 flex items-center">
              <span className="mr-2 text-3xl">■</span>禁止事項
            </h2>
            <ul className="space-y-3 text-gray-700 text-sm md:text-base list-disc list-inside">
              <li className="font-semibold text-red-700">
                18歳未満の方のご利用はできません。
              </li>
              <li className="font-semibold text-red-700">
                スタッフに対する暴言、嫌がらせ・性的サービスの強要は禁止しております。
              </li>
              <li>
                大声を上げたり、他のお客様や近隣の迷惑になる行為を禁止しております。
              </li>
              <li className="font-semibold text-red-700">
                泥酔されている方、薬物使用者のご利用を禁止しております。
              </li>
              <li>
                セラピストとの個人的な連絡先交換や外へのお誘い、他店様の引抜きを目的とした行為は堅くお断りいたします。
              </li>
              <li className="font-semibold text-red-700">
                盗撮・盗聴などの行為を禁止しております。
              </li>
              <li className="font-semibold text-red-700">
                心臓疾患・伝染病・感染症(水虫・性病)にかかっている方のご利用はできません。
              </li>
              <li>
                公衆電話、非通知でのお電話はお受けできませんのでご了承ください。
              </li>
              <li>
                セラピストをご指名の場合、体調等の理由でご希望のセラピストが欠席や遅刻等がある場合もございます。
              </li>
              <li>
                万一、ご希望のセラピストが欠席した場合等は、キャンセルもしくはフリーでのご案内となりますので予めご了承ください。
              </li>
              <li>
                無断キャンセルや、直前のキャンセル等繰り返された場合、ご予約をお取りできなくなります。
              </li>
              <li>
                また、ご連絡があった場合でも、コースのお時間を短縮させていただく事もございます。
              </li>
              <li>コースの変更はできかねます。</li>
            </ul>

            <p className="mt-8 p-6 bg-red-100 text-red-800 border-l-8 border-red-600 rounded-xl text-base md:text-lg font-medium shadow-lg">
              当店のご利用規約に対いて違反行為があった場合には、<strong>施術中であっても退店して頂き</strong>、次回からのご予約をお断りさせて頂きますのでご理解頂きますようお願いいたします。
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}