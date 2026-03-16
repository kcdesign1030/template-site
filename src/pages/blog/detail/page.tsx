import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBlog } from '../../../contexts/BlogContext';
import { useSiteConfig } from '../../../contexts/SiteConfigContext';
import Navigation from '../../home/components/Navigation';
import Footer from '../../home/components/Footer';

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const { getPost } = useBlog();
  const { config } = useSiteConfig();
  const [post, setPost] = useState<ReturnType<typeof getPost>>();

  useEffect(() => {
    if (id) {
      const foundPost = getPost(id);
      setPost(foundPost);
    }
  }, [id, getPost]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
          <div className="text-center py-12 px-4">
            <i className="ri-file-search-line text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">記事が見つかりません</h2>
            <p className="text-gray-500 mb-6">指定された記事は存在しないか、非公開になっています。</p>
            <a
              href="/#blog"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
            >
              ブログ一覧に戻る
            </a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <article className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <a
            href="/#blog"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8 cursor-pointer"
          >
            <i className="ri-arrow-left-line"></i>
            <span className="text-sm font-medium">ブログ一覧に戻る</span>
          </a>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <i className="ri-calendar-line"></i>
                  <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-building-line"></i>
                  <span>{config.storeName}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {config.storeName}へのご予約・お問い合わせ
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                      <i className="ri-phone-line text-pink-500 text-xl w-6 h-6 flex items-center justify-center"></i>
                      <a href={`tel:${config.phoneNumber}`} className="hover:text-pink-500 cursor-pointer">
                        {config.phoneNumber}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <i className="ri-time-line text-pink-500 text-xl w-6 h-6 flex items-center justify-center"></i>
                      <span>{config.businessHours}</span>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <a
                        href={`tel:${config.phoneNumber}`}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all text-center whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-phone-line mr-2"></i>
                        電話予約
                      </a>
                      <a
                        href={config.lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-green-500 text-white rounded-lg hover:shadow-lg transition-all text-center whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-line-fill mr-2"></i>
                        LINE予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}