import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const[message,setMessage]=useState('')

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === 'user' && password === 'password') {
      navigate('/home');
    } else {
      setMessage('Invalid credentials')
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-8 bg-[#f5e6d3] flex flex-col justify-center">
        <div className="max-w-md mx-auto">
          <img
            src="/api/placeholder/50/50"
            alt="FastData Geo logo"
            className="mb-8"
          />
          <h1 className="text-2xl font-bold mb-4">Sign in</h1>
          <p className="mb-6">Enter your details below</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
              Sign in
            </button>
            <div className='red'>{message}</div>
              
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm">
                  Remember me?
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
          </form>
          <p className="mt-4 text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/api/placeholder/800/600')" }}
      />
    </div>
  );
};

export default LoginPage;
