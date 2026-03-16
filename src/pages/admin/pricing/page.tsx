import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import { useSiteConfig } from '../../../contexts/SiteConfigContext';

interface PricingCourse {
  id: string;
  name: string;
  duration: string;
  price: string;
  description?: string;
}

export default function AdminPricing() {
  const { pricingCourses, updatePricingCourses } = useSiteConfig();
  const [courses, setCourses] = useState<PricingCourse[]>(pricingCourses);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleAdd = () => {
    const newCourse: PricingCourse = {
      id: Date.now().toString(),
      name: '',
      duration: '',
      price: '',
      description: ''
    };
    setCourses([...courses, newCourse]);
    setEditingId(newCourse.id);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleDelete = (id: string) => {
    if (confirm('このコースを削除してもよろしいですか？')) {
      setCourses(courses.filter(c => c.id !== id));
    }
  };

  const handleChange = (id: string, field: keyof PricingCourse, value: string) => {
    setCourses(courses.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const handleSave = () => {
    const validCourses = courses.filter(c => c.name && c.duration && c.price);
    updatePricingCourses(validCourses);
    setEditingId(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">料金システム管理</h1>
            <p className="text-gray-600">コース料金の追加・編集・削除ができます</p>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <i className="ri-add-line text-xl"></i>
            <span>新規コース追加</span>
          </button>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
            <span className="text-green-800 font-medium">料金システムを保存しました</span>
          </div>
        )}

        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
              {editingId === course.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        コース名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={course.name}
                        onChange={(e) => handleChange(course.id, 'name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                        placeholder="例: スタンダードコース"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        時間 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={course.duration}
                        onChange={(e) => handleChange(course.id, 'duration', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                        placeholder="例: 90分"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        料金 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={course.price}
                        onChange={(e) => handleChange(course.id, 'price', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                        placeholder="例: 15,000円"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      説明
                    </label>
                    <textarea
                      value={course.description || ''}
                      onChange={(e) => handleChange(course.id, 'description', e.target.value)}
                      rows={2}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="コースの説明を入力してください"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      キャンセル
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
                    >
                      完了
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                    <div className="flex items-center gap-6 text-gray-600 mb-2">
                      <div className="flex items-center gap-2">
                        <i className="ri-time-line"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-price-tag-3-line"></i>
                        <span className="text-lg font-semibold text-pink-600">{course.price}</span>
                      </div>
                    </div>
                    {course.description && (
                      <p className="text-gray-600 text-sm">{course.description}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(course.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      title="編集"
                    >
                      <i className="ri-edit-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="削除"
                    >
                      <i className="ri-delete-bin-line text-xl"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {courses.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <i className="ri-price-tag-3-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 mb-4">まだコースが登録されていません</p>
              <button
                onClick={handleAdd}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
              >
                最初のコースを追加
              </button>
            </div>
          )}
        </div>

        {courses.length > 0 && (
          <div className="mt-8 flex items-center justify-end">
            <button
              onClick={handleSave}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer text-lg font-semibold"
            >
              すべての変更を保存
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}