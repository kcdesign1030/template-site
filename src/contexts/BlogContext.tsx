import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  publishDate: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  getPost: (id: string) => BlogPost | undefined;
  getPublishedPosts: () => BlogPost[];
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: '上野メンズエステの予約方法を完全解説|LINE・電話・WEB予約もOK【Grace Tokyo】',
    content: 'お電話、LINE、WEB予約フォームから簡単にご予約いただけます。初めてのお客様でも安心してご利用いただけるよう、丁寧にご案内いたします。',
    thumbnailUrl: 'https://readdy.ai/api/search-image?query=Professional%20spa%20reception%20desk%20with%20phone%20and%20computer%20for%20booking%20appointments%2C%20modern%20minimalist%20interior%20design%20with%20soft%20pink%20and%20purple%20lighting%2C%20clean%20and%20elegant%20atmosphere%2C%20high%20quality%20photography&width=800&height=450&seq=blog1&orientation=landscape',
    publishDate: new Date().toISOString(),
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: '【2026年最新】上野メンズエステの料金完全解説|Grace Tokyo',
    content: 'Grace Tokyoの料金システムを詳しく解説します。スタンダードコースからプレミアムコースまで、お客様のニーズに合わせた多彩なプランをご用意しております。',
    thumbnailUrl: 'https://readdy.ai/api/search-image?query=Elegant%20spa%20price%20list%20display%20board%20in%20luxury%20salon%2C%20modern%20minimalist%20design%20with%20soft%20ambient%20lighting%2C%20professional%20photography%20with%20pink%20and%20purple%20accents%2C%20premium%20aesthetic&width=800&height=450&seq=blog2&orientation=landscape',
    publishDate: new Date().toISOString(),
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: '上野メンズエステを仕事帰りに!時間帯別おすすめコースと深夜営業|Grace Tokyo',
    content: '仕事帰りにリラックスできる時間帯別のおすすめコースをご紹介。深夜営業も行っておりますので、お忙しい方でもご利用いただけます。',
    thumbnailUrl: 'https://readdy.ai/api/search-image?query=Relaxing%20spa%20treatment%20room%20at%20night%20with%20soft%20ambient%20lighting%2C%20peaceful%20atmosphere%20for%20after%20work%20relaxation%2C%20modern%20interior%20design%20with%20calming%20colors%2C%20professional%20spa%20photography&width=800&height=450&seq=blog3&orientation=landscape',
    publishDate: new Date().toISOString(),
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: '【プロが伝授】上野メンズエステで最高の癒しを。失敗しないセラピストの選び方',
    content: 'プロのセラピストが教える、最高の癒し体験を得るためのセラピスト選びのポイントをご紹介します。',
    thumbnailUrl: 'https://readdy.ai/api/search-image?query=Professional%20spa%20therapist%20in%20elegant%20uniform%20providing%20massage%20treatment%2C%20serene%20spa%20environment%20with%20soft%20lighting%2C%20high%20quality%20professional%20photography%20with%20pink%20and%20purple%20tones&width=800&height=450&seq=blog4&orientation=landscape',
    publishDate: new Date().toISOString(),
    isPublished: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export function BlogProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('blogPosts');
    return saved ? JSON.parse(saved) : defaultPosts;
  });

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const updatePost = (id: string, updatedData: Partial<BlogPost>) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id
          ? { ...post, ...updatedData, updatedAt: new Date().toISOString() }
          : post
      )
    );
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const getPost = (id: string) => {
    return posts.find(post => post.id === id);
  };

  const getPublishedPosts = () => {
    return posts.filter(post => post.isPublished).sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePost,
        getPost,
        getPublishedPosts,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within BlogProvider');
  }
  return context;
}