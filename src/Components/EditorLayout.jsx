import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function EditorLayout() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);

  const addCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  const deleteCategory = (categoryToDelete) => {
    setCategories(categories.filter((cat) => cat !== categoryToDelete));
    setQuestions(questions.filter((q) => q.category !== categoryToDelete));
  };

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const deleteQuestion = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  };

  const updateQuestion = (index, updatedQuestion) => {
    const updated = [...questions];
    updated[index] = updatedQuestion;
    setQuestions(updated);
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6 space-y-6 font-sans">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-blue-800">🎓 Question Editor Dashboard</h2>
        <div className="space-x-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-800 rounded text-white shadow"
          >
            Back
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">🗂 Manage Categories</h3>
        <CategoryForm 
          onAddCategory={addCategory} 
          categories={categories} 
          onDeleteCategory={deleteCategory} 
        />
      </div>

      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">✍️ Add Question</h3>
        <QuestionForm categories={categories} onAddQuestion={addQuestion} />
      </div>

      <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">📋 Question List</h3>
        <QuestionList 
          questions={questions} 
          onDelete={deleteQuestion} 
          onUpdate={updateQuestion} 
          categories={categories} 
        />
      </div>
    </div>
  );
}

export default EditorLayout;
