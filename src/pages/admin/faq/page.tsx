import { useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import { useSiteConfig } from '../../../contexts/SiteConfigContext';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function AdminFAQ() {
  const { faqItems, updateFAQItems } = useSiteConfig();
  const [items, setItems] = useState<FAQItem[]>(faqItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const handleAdd = () => {
    const newItem: FAQItem = {
      id: Date.now().toString(),
      question: '',
      answer: ''
    };
    setItems([...items, newItem]);
    setEditingId(newItem.id);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleDelete = (id: string) => {
    if (confirm('この質問を削除してもよろしいですか？')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const handleChange = (id: string, field: keyof FAQItem, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    const validItems = items.filter(item => item.question && item.answer);
    updateFAQItems(validItems);
    setEditingId(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
  };

  const moveDown = (index: number) => {
    if (index === items.length - 1) return;
    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">よくある質問管理</h1>
            <p className="text-gray-600">FAQの追加・編集・削除ができます</p>
          </div>
          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <i className="ri-add-line text-xl"></i>
            <span>新規質問追加</span>
          </button>
        </div>

        {saved && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <i className="ri-checkbox-circle-line text-2xl text-green-600"></i>
            <span className="text-green-800 font-medium">FAQを保存しました</span>
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
              {editingId === item.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      質問 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={item.question}
                      onChange={(e) => handleChange(item.id, 'question', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="質問を入力してください"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      回答 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={item.answer}
                      onChange={(e) => handleChange(item.id, 'answer', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      placeholder="回答を入力してください"
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
                <div className="flex items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      className={`p-1 rounded ${index === 0 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100 cursor-pointer'}`}
                      title="上に移動"
                    >
                      <i className="ri-arrow-up-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      disabled={index === items.length - 1}
                      className={`p-1 rounded ${index === items.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:bg-gray-100 cursor-pointer'}`}
                      title="下に移動"
                    >
                      <i className="ri-arrow-down-line text-xl"></i>
                    </button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        Q
                      </span>
                      <p className="text-gray-800 font-medium text-base leading-relaxed flex-1">
                        {item.question}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        A
                      </span>
                      <p className="text-gray-600 leading-relaxed text-base flex-1">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      title="編集"
                    >
                      <i className="ri-edit-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
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

          {items.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <i className="ri-question-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 mb-4">まだ質問が登録されていません</p>
              <button
                onClick={handleAdd}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all whitespace-nowrap cursor-pointer"
              >
                最初の質問を追加
              </button>
            </div>
          )}
        </div>

        {items.length > 0 && (
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