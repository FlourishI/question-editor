import { useState } from 'react';

function QuestionList({ questions, onDelete, onUpdate }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedQuestion, setEditedQuestion] = useState({});

  const startEdit = (idx) => {
    setEditIndex(idx);
    setEditedQuestion(questions[idx]);
  };

  const handleChange = (field, value) => {
    setEditedQuestion({ ...editedQuestion, [field]: value });
  };

  const handleSave = () => {
    onUpdate(editIndex, editedQuestion);
    setEditIndex(null);
    setEditedQuestion({});
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditedQuestion({});
  };

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-2 text-white">Question List</h3>
      <div className="grid grid-cols-5 gap-4 font-bold text-blue-200 px-4">
        <span>Category</span>
        <span>Question</span>
        <span>Answer</span>
        <span className="col-span-2 text-right">Actions</span>
      </div>

      <ul className="mt-2 space-y-2">
        {questions.map((q, idx) => (
          <li
            key={idx}
            className="grid grid-cols-5 gap-4 items-center bg-blue-50 border px-4 py-2 rounded shadow"
          >
            {editIndex === idx ? (
              <>
                <input
                  value={editedQuestion.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="p-1 rounded border text-black"
                />
                <input
                  value={editedQuestion.question}
                  onChange={(e) => handleChange('question', e.target.value)}
                  className="p-1 rounded border text-black"
                />
                <input
                  value={editedQuestion.answer}
                  onChange={(e) => handleChange('answer', e.target.value)}
                  className="p-1 rounded border text-black"
                />
                <button
                  onClick={handleSave}
                  className="text-sm bg-blue-800 text-white font-bold px-3 py-1 rounded hover:bg-blue-800"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="text-sm bg-gray-600 text-white font-bold px-3 py-1 rounded hover:bg-gray-800"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="text-blue-900">{q.category}</span>
                <span className="text-gray-800">{q.question}</span>
                <span className="text-green-700">{q.answer}</span>
                <button
                  onClick={() => startEdit(idx)}
                  className="text-sm bg-blue-600 text-white font-bold px-3 py-1 rounded hover:bg-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(idx)}
                  className="text-sm bg-red-500 text-white font-bold px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
