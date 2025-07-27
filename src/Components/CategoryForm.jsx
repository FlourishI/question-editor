import { useState } from 'react';

function CategoryForm({ onAddCategory, categories, onDeleteCategory }) {
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim()) {
      onAddCategory(category);
      setCategory('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3 mb-4">
        <input 
          type="text" 
          placeholder="New Category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 rounded-lg w-64 border text-black"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Add Category
        </button>
      </form>

      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li key={index} className="flex justify-between items-center bg-blue-50 border px-4 py-2 rounded shadow">
            <span className="text-blue-800 font-medium">{cat}</span>
            <button 
              onClick={() => onDeleteCategory(cat)} 
              className="text-sm bg-red-500 text-white font-bold px-3 py-1 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryForm;
