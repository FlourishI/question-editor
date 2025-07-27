import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import EditorLayout from './Components/EditorLayout';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editor" element={<EditorLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
