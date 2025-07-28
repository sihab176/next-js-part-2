"use client";

import { useState } from "react";
import registerUser from "../actions/auth/registerUser";

const RegistrationForm = async () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const payload = { username, email, password };

    const result = await registerUser(payload);
    if (result.insertedId) {
      alert("user created successfully");
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="mt-2 w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-2 border rounded-xl text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Create a password"
              className="mt-2 w-full px-4 py-2 pr-12 border rounded-xl text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-8 text-gray-500 bg-amber-400 rounded p-1 hover:text-indigo-500 focus:outline-none"
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-500 font-medium hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
