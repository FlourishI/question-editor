import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Save to localStorage or backend here
    localStorage.setItem('studentName', name);
    navigate('/home');
  };

  const handleLoginPage = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
      <div className="w-full max-w-5xl h-[500px] flex bg-blue-800 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Section */}
        <div className="w-1/2 border border-white-500 flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl font-bold mb-6 text-center">Let's Get Started</h1>
          <h2 className="text-4xl font-bold mb-6 text-center">Create an account with us to enjoy the game</h2>
          <p className="text-sm p-3">Sign In here if you already have an account</p>
          <button
            onClick={handleLoginPage}
            className="bg-white w-20 text-blue-800 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
          >Sign In</button>
        </div>

        {/* Right Section (Form) */}
        <div className="w-1/2 border border-navyblue-500 bg-blue-600 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
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
          <label className="mb-2 text-sm">Confirm Password</label>
            <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            className="mb-6 p-3 rounded-lg w-full text-black"
          />
          <button
            onClick={handleSignup}
            className="bg-white text-blue-800 font-bold py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default Signup;