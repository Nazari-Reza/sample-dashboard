import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/dummyjson/api";

const Login = () => {
  const [username, setUserName] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await loginUser(username, password);
      login(res.data);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid Credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex item-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-white mb-2 font-bold text-3xl">Welcome Back</h1>
          <p className="text-slate-400">Sign in to Dashboard</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700"
        >
          {error && (
            <div className="block text-sm font-medium text-slate-300 mb-2">
              {error}
            </div>
          )}
          <div className="mb-5">
            <label className="block text-slate-300 mb-2 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 
              text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Enter Username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-300 mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 
              text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            Test Credentials:
            <span className="text-slate-400">emilys / emilyspass</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
