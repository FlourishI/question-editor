
// SaveForm.jsx
import React, { useState } from "react";

const SaveForm = () => {
  const [categoryId, setCategoryId] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      category_id: parseInt(categoryId),
      question: questionText,
      answer: answerText,
    };

    try {
      const response = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.error) {
        console.error("Submission Error:", data.error);
      } else {
        console.log("Question saved:", data);
        setQuestionText("");
        setAnswerText("");
        setCategoryId("");
      }
    } catch (error) {
      console.error("Failed to submit:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Answer"
        value={answerText}
        onChange={(e) => setAnswerText(e.target.value)}
        required
      />
      <button type="submit">Save Question</button>
    </form>
  );
};

export default SaveForm;

// function SaveForm({ questions }) {
//   const handleSave = () => {
//     localStorage.setItem('trivial-questions', JSON.stringify(questions));
//     alert('Saved locally!');
//   };

//   const handlePost = async () => {
//     for (let q of questions) {
//       await fetch('http://localhost:3001/questions', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(q),
//       });
//     }
//     alert('Posted to backend!');
//   };

//   return (
//     <div>
//       <button onClick={handleSave}>💾 Save</button>
//       <button onClick={handlePost}>🚀 Post</button>
//     </div>
//   );

//   const submitQuestion = async (e) => {
//   e.preventDefault();

//   const payload = {
//     category_id: selectedCategoryId,
//     question: questionText,
//     answer: answerText,
//   };

//   try {
//     const response = await fetch("http://localhost:5000/api/questions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     });

//     const data = await response.json();
//     if (data.error) {
//       console.error("Error:", data.error);
//     } else {
//       console.log("Question saved:", data);
//     }
//   } catch (error) {
//     console.error("Failed to submit:", error);
//   }
// };
// }

// export default SaveForm;
