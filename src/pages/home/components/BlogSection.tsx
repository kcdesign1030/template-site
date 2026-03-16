import { useBlog } from '../../../contexts/BlogContext';

export default function BlogSection() {
  const { getPublishedPosts } = useBlog();
  const blogs = getPublishedPosts().slice(0, 4);

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.thumbnailUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-500 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}