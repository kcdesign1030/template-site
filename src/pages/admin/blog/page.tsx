import { useState } from 'react';
import { useBlog } from '../../../contexts/BlogContext';
import AdminLayout from '../../../components/admin/AdminLayout';

export default function AdminBlog() {
  const { posts, deletePost, updatePost } = useBlog();
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    deletePost(id);
    setDeleteConfirm(null);
  };

  const togglePublish = (id: string, currentStatus: boolean) => {
    updatePost(id, { isPublished: !currentStatus });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            ブログ管理
          </h1>
          <a
            href="/admin/blog/new"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
          >
            <i className="ri-add-line mr-2"></i>
            新規記事作成
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-pink-50 to-purple-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">サムネイル</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">タイトル</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">公開日</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">ステータス</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      記事がありません。新規記事を作成してください。
                    </td>
                  </tr>
                ) : (
                  posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="w-24 h-16 rounded-lg overflow-hidden">
                          <img
                            src={post.thumbnailUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-md">
                          <p className="text-sm font-medium text-gray-900 line-clamp-2">
                            {post.title}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{formatDate(post.publishDate)}</p>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => togglePublish(post.id, post.isPublished)}
                          className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap cursor-pointer ${
                            post.isPublished
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {post.isPublished ? '公開中' : '非公開'}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <a
                            href={`/admin/blog/${post.id}/edit`}
                            className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                            title="編集"
                          >
                            <i className="ri-edit-line text-lg"></i>
                          </a>
                          {deleteConfirm === post.id ? (
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDelete(post.id)}
                                className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 whitespace-nowrap cursor-pointer"
                              >
                                削除
                              </button>
                              <button
                                onClick={() => setDeleteConfirm(null)}
                                className="px-3 py-1 bg-gray-300 text-gray-700 text-xs rounded hover:bg-gray-400 whitespace-nowrap cursor-pointer"
                              >
                                キャンセル
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteConfirm(post.id)}
                              className="w-8 h-8 flex items-center justify-center text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="削除"
                            >
                              <i className="ri-delete-bin-line text-lg"></i>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}