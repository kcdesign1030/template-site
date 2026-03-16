import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: 'ri-dashboard-line', label: 'ダッシュボード', path: '/admin' },
    { icon: 'ri-settings-3-line', label: 'サイト設定', path: '/admin/settings' },
    { icon: 'ri-price-tag-3-line', label: '料金システム', path: '/admin/pricing' },
    { icon: 'ri-article-line', label: 'ブログ管理', path: '/admin/blog' },
    { icon: 'ri-question-answer-line', label: 'よくある質問', path: '/admin/faq' },
    { icon: 'ri-global-line', label: 'ドメイン設定', path: '/admin/domain' },
  ];

  const handleLogout = () => {
    if (confirm('ログアウトしますか？')) {
      logout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-gradient-to-b from-pink-600 to-purple-600 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/20">
          {isSidebarOpen && (
            <h1 className="text-xl font-bold">Grace Tokyo</h1>
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <i className={`${isSidebarOpen ? 'ri-menu-fold-line' : 'ri-menu-unfold-line'} text-xl`}></i>
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-white text-pink-600 shadow-lg'
                  : 'hover:bg-white/10'
              }`}
            >
              <i className={`${item.icon} text-xl`}></i>
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/20">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <i className="ri-logout-box-line text-xl"></i>
            {isSidebarOpen && <span className="font-medium">ログアウト</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}