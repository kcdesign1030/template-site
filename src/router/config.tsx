import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import AdminLogin from "../pages/admin/login/page";
import AdminDashboard from "../pages/admin/dashboard/page";
import AdminSettings from "../pages/admin/settings/page";
import AdminPricing from "../pages/admin/pricing/page";
import AdminFAQ from "../pages/admin/faq/page";
import AdminBlog from "../pages/admin/blog/page";
import NewBlogPost from "../pages/admin/blog/new/page";
import EditBlogPost from "../pages/admin/blog/edit/page";
import BlogDetail from "../pages/blog/detail/page";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import DomainPage from '../pages/admin/domain/page';

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <ProtectedRoute>
        <AdminSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/pricing",
    element: (
      <ProtectedRoute>
        <AdminPricing />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/faq",
    element: (
      <ProtectedRoute>
        <AdminFAQ />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/blog",
    element: (
      <ProtectedRoute>
        <AdminBlog />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/blog/new",
    element: (
      <ProtectedRoute>
        <NewBlogPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/blog/:id/edit",
    element: (
      <ProtectedRoute>
        <EditBlogPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/domain",
    element: <ProtectedRoute><DomainPage /></ProtectedRoute>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;