import React, { useState } from 'react';
import logo from "../../assets/logo.png"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="h-screen overflow-auto bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-sm">
        <div className="bg-gray-100 rounded-lg p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xl font-medium text-gray-900">Welcome Kisan Saathi,</h2>
            <p className="text-gray-600">Admin</p>
          </div>
          {/* Decorative illustration */}
          <img
            src={logo}
            alt="kisan saathi logo"
            className="absolute right-0 top-0 h-full w-1/3 object-cover opacity-50"
          />
        </div>


        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Keep me logged in
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              LOGIN
            </button>
          </div>

          <div className="text-center">
            <a href="#" className="text-sm text-gray-600 hover:text-green-500">
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="text-center text-sm text-gray-500">
          © 2024 - Kisan Saathi Dashboard
        </div>
      </div>
    </div>
  );
}

export default Login;