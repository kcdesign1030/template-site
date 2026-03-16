import AdminLayout from '../../../components/admin/AdminLayout';

export default function AdminDashboard() {
  const stats = [
    {
      label: 'サイト設定',
      value: '完了',
      icon: 'ri-settings-3-line',
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: '料金プラン',
      value: '8件',
      icon: 'ri-price-tag-3-line',
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'FAQ',
      value: '8件',
      icon: 'ri-question-answer-line',
      color: 'from-purple-500 to-purple-600',
    },
    {
      label: 'ブログ記事',
      value: '4件',
      icon: 'ri-article-line',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const quickLinks = [
    {
      title: 'サイト設定を編集',
      description: '店舗名、電話番号、営業時間などを設定',
      icon: 'ri-settings-3-line',
      path: '/admin/settings',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: '料金システムを編集',
      description: 'コース料金や延長料金を管理',
      icon: 'ri-price-tag-3-line',
      path: '/admin/pricing',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'FAQを編集',
      description: 'よくある質問を追加・編集',
      icon: 'ri-question-answer-line',
      path: '/admin/faq',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'ブログを管理',
      description: '新しい記事を投稿・編集',
      icon: 'ri-article-line',
      path: '/admin/blog',
      color: 'bg-pink-50 text-pink-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* ウェルカムメッセージ */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">ようこそ、管理画面へ</h1>
          <p className="text-white/90">Grace Tokyo のウェブサイトを管理できます</p>
        </div>

        {/* 統計カード */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-2xl text-white w-6 h-6 flex items-center justify-center`}></i>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* クイックリンク */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">クイックアクション</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${link.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <i className={`${link.icon} text-2xl w-6 h-6 flex items-center justify-center`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                  <i className="ri-arrow-right-line text-xl text-gray-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all w-6 h-6 flex items-center justify-center"></i>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* お知らせ */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="ri-information-line text-xl text-white w-5 h-5 flex items-center justify-center"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">テンプレートサイトについて</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                このサイトはテンプレートとして複数の店舗で使用できます。各店舗用のドメイン設定については「ドメイン設定」ページをご確認ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}