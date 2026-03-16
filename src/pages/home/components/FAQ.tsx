import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: '初めての利用ですが、どのように予約すればいいですか?',
    answer: 'お電話、LINE、またはWEB予約フォームからご予約いただけます。初めてのお客様には、ご来店前に簡単なカウンセリングを行いますので、お気軽にお問い合わせください。'
  },
  {
    id: 2,
    question: '料金の支払い方法は何がありますか?',
    answer: '現金でのお支払いのみとなっております。クレジットカードや電子マネーには対応しておりませんので、ご了承ください。'
  },
  {
    id: 3,
    question: 'シャワーは利用できますか?',
    answer: 'はい、施術前後にシャワーをご利用いただけます。清潔なタオルやアメニティもご用意しておりますので、手ぶらでお越しいただけます。'
  },
  {
    id: 4,
    question: 'セラピストの指名はできますか?',
    answer: 'はい、セラピストの指名が可能です。指名料は1,000円となります。お気に入りのセラピストがいらっしゃる場合は、ご予約時にお申し付けください。'
  },
  {
    id: 5,
    question: 'キャンセルや変更はできますか?',
    answer: 'ご予約のキャンセル・変更は、ご予約時間の3時間前までにご連絡ください。無断キャンセルの場合、次回以降のご予約をお断りする場合がございます。'
  },
  {
    id: 6,
    question: '駐車場はありますか?',
    answer: '専用駐車場はございませんが、近隣にコインパーキングが複数ございます。お車でお越しの際は、近隣のパーキングをご利用ください。'
  },
  {
    id: 7,
    question: '延長はできますか?',
    answer: 'はい、当日の空き状況により延長が可能です。延長料金は30分7,000円となります。ご希望の場合は、施術中にセラピストにお申し付けください。'
  },
  {
    id: 8,
    question: '女性の利用はできますか?',
    answer: '申し訳ございませんが、当店はメンズエステ専門店となっておりますので、男性のお客様のみのご利用とさせていただいております。'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600">
            お客様からよくいただくご質問をまとめました
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    Q
                  </span>
                  <span className="text-gray-800 font-medium text-base leading-relaxed">
                    {faq.question}
                  </span>
                </div>
                <i
                  className={`ri-arrow-down-s-line text-2xl text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                ></i>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="flex items-start gap-4 pl-0">
                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      A
                    </span>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            その他ご不明な点がございましたら、お気軽にお問い合わせください
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="tel:08012345678"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line text-lg"></i>
              <span className="font-medium">電話で問い合わせ</span>
            </a>
            <a
              href="https://line.me/R/ti/p/@gracetokyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-line-line text-lg"></i>
              <span className="font-medium">LINEで問い合わせ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}