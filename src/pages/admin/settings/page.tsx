import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import { useSiteConfig } from '../../../contexts/SiteConfigContext';

export default function AdminSettings() {
  const { config, updateConfig } = useSiteConfig();
  const [formData, setFormData] = useState(config);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">サイト設定</h1>
          <p className="text-gray-600">店舗の基本情報を設定します</p>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
            <span className="text-green-800 font-medium">設定を保存しました</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              店舗名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="例: Grace Tokyo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                placeholder="例: 08012345678"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                メールアドレス
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                placeholder="例: info@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              LINE URL
            </label>
            <input
              type="url"
              name="lineUrl"
              value={formData.lineUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="例: https://line.me/R/ti/p/@example"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              住所
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="例: 東京都台東区上野"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              営業時間 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="businessHours"
              value={formData.businessHours}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="例: 11:00～翌5:00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Googleマップ埋め込みURL
            </label>
            <textarea
              name="mapEmbedUrl"
              value={formData.mapEmbedUrl}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="Googleマップの「共有」→「地図を埋め込む」からURLをコピーして貼り付けてください"
            />
            <p className="mt-2 text-xs text-gray-500">
              Googleマップで店舗を検索 → 共有ボタン → 「地図を埋め込む」タブ → HTMLをコピー → src属性の値を貼り付け
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">カラーテーマ</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  プライマリーカラー
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    name="primaryColor"
                    value={formData.primaryColor}
                    onChange={handleChange}
                    className="w-16 h-12 rounded-lg border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.primaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="#ec4899"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  セカンダリーカラー
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    name="secondaryColor"
                    value={formData.secondaryColor}
                    onChange={handleChange}
                    className="w-16 h-12 rounded-lg border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={formData.secondaryColor}
                    onChange={(e) => setFormData(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    placeholder="#a855f7"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => setFormData(config)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              キャンセル
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}