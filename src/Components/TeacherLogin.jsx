import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('studentName', name);
      navigate('/editor');
    } else {
      alert('Please enter your name to continue.');
    }
  };

  const handleSignUpPage = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-5xl h-[500px] flex bg-blue-800 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="w-1/2 border border-white-500 flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Welcome To<br />Trivial Compute <br/>Question Manager</h1>
          <p className="text-sm p-3">Please sign in to manage game. Click the button below if you do not have an existing account.</p>
          <button
            onClick={handleSignUpPage}
            className="bg-white w-20 text-blue-800 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
          >Sign Up</button>
        </div>

        {/* Right Section (Form) */}
        <div className="w-1/2 border border-white-500 bg-blue-600 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <label className="mb-2 text-sm">User Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mb-4 p-3 rounded-lg w-full text-black"
          />
          <label className="mb-2 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mb-6 p-3 rounded-lg w-full text-black"
          />
          <button
            onClick={handleLogin}
            className="bg-white text-blue-800 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;