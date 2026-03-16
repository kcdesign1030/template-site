import AdminLayout from '../../../components/admin/AdminLayout';

export default function DomainPage() {
  return (
    <AdminLayout>
      <div className="max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">ドメイン設定ガイド</h1>
          <p className="text-gray-600">各店舗用のドメイン設定とテンプレート複製の手順</p>
        </div>

        <div className="space-y-6">
          {/* マルチサイト運用について */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">マルチサイト運用について</h2>
                <p className="text-gray-600">
                  このテンプレートを使用して、複数の店舗用サイトを簡単に展開できます。
                  各店舗ごとに独自のドメインを設定し、管理画面から個別にコンテンツを管理できます。
                </p>
              </div>
            </div>
          </div>

          {/* ステップ1: プロジェクトの複製 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">プロジェクトの複製</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">方法A: Readdy.aiでの複製</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>現在のプロジェクトをエクスポート</li>
                      <li>新しいプロジェクトを作成</li>
                      <li>エクスポートしたファイルをインポート</li>
                      <li>管理画面から店舗情報を更新</li>
                    </ol>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">方法B: Gitリポジトリでの管理</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                      <li>プロジェクトをGitリポジトリにプッシュ</li>
                      <li>新しいブランチまたはリポジトリを作成</li>
                      <li>各店舗用にデプロイ設定を行う</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ2: ドメインの取得 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ドメインの取得</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    各店舗用に独自ドメインを取得します。推奨レジストラ:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>お名前.com</li>
                    <li>ムームードメイン</li>
                    <li>Google Domains</li>
                    <li>Cloudflare</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>💡 ヒント:</strong> 店舗名や地域名を含むドメインを選ぶとSEO効果が高まります。
                      例: gracetokyo-esthe.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ3: DNS設定 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">DNS設定</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    取得したドメインのDNS設定を行い、デプロイ先のサーバーに接続します。
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">一般的なDNS設定例:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-200">
                          <tr>
                            <th className="px-4 py-2 text-left">タイプ</th>
                            <th className="px-4 py-2 text-left">ホスト名</th>
                            <th className="px-4 py-2 text-left">値</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-2">A</td>
                            <td className="px-4 py-2">@</td>
                            <td className="px-4 py-2">サーバーのIPアドレス</td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">CNAME</td>
                            <td className="px-4 py-2">www</td>
                            <td className="px-4 py-2">yourdomain.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>⚠️ 注意:</strong> DNS設定の反映には最大48時間かかる場合があります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ4: デプロイ設定 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">デプロイ設定</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    プロジェクトをホスティングサービスにデプロイします。推奨サービス:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Vercel</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>自動デプロイ</li>
                        <li>無料SSL証明書</li>
                        <li>カスタムドメイン対応</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Netlify</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>継続的デプロイ</li>
                        <li>フォーム機能</li>
                        <li>無料プラン充実</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Cloudflare Pages</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>高速CDN</li>
                        <li>無制限帯域幅</li>
                        <li>DDoS保護</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">AWS Amplify</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>スケーラブル</li>
                        <li>CI/CD統合</li>
                        <li>バックエンド連携</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ステップ5: 管理画面での設定 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">管理画面での設定</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    デプロイ後、各店舗の管理画面にログインして以下の設定を行います:
                  </p>
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <strong className="text-gray-800">サイト設定:</strong>
                          <span className="text-gray-700"> 店舗名、電話番号、営業時間、LINE URL、Googleマップなど</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <strong className="text-gray-800">料金システム:</strong>
                          <span className="text-gray-700"> 各店舗のコース内容と料金</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <strong className="text-gray-800">よくある質問:</strong>
                          <span className="text-gray-700"> 店舗固有のFAQ</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <i className="ri-check-line text-green-500 text-xl mt-1"></i>
                        <div>
                          <strong className="text-gray-800">ブログ:</strong>
                          <span className="text-gray-700"> 各店舗のお知らせや記事</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEO対策 */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-search-line text-2xl text-white"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4">SEO対策のポイント</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="ri-map-pin-line text-pink-500"></i>
                        ローカルSEO
                      </h4>
                      <p className="text-sm text-gray-700">
                        店舗の住所、営業時間、電話番号を正確に設定し、Googleマイビジネスと連携させましょう。
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="ri-file-text-line text-pink-500"></i>
                        コンテンツ最適化
                      </h4>
                      <p className="text-sm text-gray-700">
                        各ページに適切なキーワードを含め、定期的にブログを更新してコンテンツを充実させましょう。
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="ri-speed-line text-pink-500"></i>
                        ページ速度
                      </h4>
                      <p className="text-sm text-gray-700">
                        画像を最適化し、不要なスクリプトを削除してページの読み込み速度を向上させましょう。
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <i className="ri-smartphone-line text-pink-500"></i>
                        モバイル対応
                      </h4>
                      <p className="text-sm text-gray-700">
                        このテンプレートはレスポンシブ対応済みですが、各デバイスでの表示を確認しましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* サポート情報 */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl shadow-md p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="ri-customer-service-2-line text-2xl"></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-4">サポートが必要ですか？</h3>
                <p className="mb-4 opacity-90">
                  ドメイン設定やデプロイに関してご不明な点がございましたら、お気軽にお問い合わせください。
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:support@example.com"
                    className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-mail-line"></i>
                    メールで問い合わせ
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-book-line"></i>
                    ドキュメントを見る
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}