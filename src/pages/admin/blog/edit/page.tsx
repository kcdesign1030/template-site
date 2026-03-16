import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../../../../contexts/BlogContext';
import AdminLayout from '../../../../components/admin/AdminLayout';

export default function EditBlogPost() {
  const { id } = useParams<{ id: string }>();
  const { getPost, updatePost } = useBlog();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [saved, setSaved] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      const post = getPost(id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setThumbnailUrl(post.thumbnailUrl);
        setPublishDate(new Date(post.publishDate).toISOString().split('T')[0]);
        setIsPublished(post.isPublished);
      } else {
        setNotFound(true);
      }
    }
  }, [id, getPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !thumbnailUrl.trim()) {
      alert('タイトル、本文、サムネイルURLは必須です');
      return;
    }

    if (id) {
      updatePost(id, {
        title,
        content,
        thumbnailUrl,
        publishDate: new Date(publishDate).toISOString(),
        isPublished,
      });

      setSaved(true);
      setTimeout(() => {
        window.REACT_APP_NAVIGATE('/admin/blog');
      }, 1000);
    }
  };

  if (notFound) {
    return (
      <AdminLayout>
        <div className="text-center py-12">
          <i className="ri-file-search-line text-6xl text-gray-300 mb-4"></i>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">記事が見つかりません</h2>
          <p className="text-gray-500 mb-6">指定された記事は存在しないか、削除されました。</p>
          <a
            href="/admin/blog"
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
          >
            ブログ一覧に戻る
          </a>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <a
            href="/admin/blog"
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </a>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            記事編集
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              タイトル <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="記事のタイトルを入力"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              本文 <span className="text-red-500">*</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm resize-none"
              placeholder="記事の本文を入力"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              サムネイルURL <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              placeholder="https://example.com/image.jpg"
              required
            />
            {thumbnailUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">プレビュー:</p>
                <div className="w-full max-w-md h-48 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={thumbnailUrl}
                    alt="サムネイルプレビュー"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Invalid+URL';
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                公開日
              </label>
              <input
                type="date"
                value={publishDate}
                onChange={(e) => setPublishDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                公開ステータス
              </label>
              <div className="flex items-center gap-4 h-12">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={isPublished}
                    onChange={() => setIsPublished(true)}
                    className="w-4 h-4 text-pink-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">公開</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={!isPublished}
                    onChange={() => setIsPublished(false)}
                    className="w-4 h-4 text-pink-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-700">非公開</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <a
              href="/admin/blog"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
            >
              キャンセル
            </a>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              <i className="ri-save-line mr-2"></i>
              変更を保存
            </button>
          </div>

          {saved && (
            <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              <i className="ri-check-line mr-2"></i>
              変更を保存しました
            </div>
          )}
        </form>
      </div>
    </AdminLayout>
  );
}