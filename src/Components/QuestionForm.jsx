import { useState } from 'react';

function QuestionForm({ categories, onAddQuestion }) {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && answer && category) {
      onAddQuestion({
        category,
        question,
        options,
        answer,
      });
      setQuestion('');
      setCategory('');
      setOptions(['', '', '', '']);
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {options.map((opt, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={`Option ${idx + 1}`}
          value={opt}
          onChange={(e) => {
            const updated = [...options];
            updated[idx] = e.target.value;
            setOptions(updated);
          }}
          className="w-full border p-2 rounded"
        />
      ))}

      <input
        type="text"
        placeholder="Correct Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded">
        Add Question
      </button>
    </form>
  );
}

export default QuestionForm;
