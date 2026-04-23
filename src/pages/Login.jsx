import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() === "") {
    setError("Please enter your name");
    return;
    }
    setError(""); // clear error
    login(name);
    navigate("/");
    };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-blue-900 to-black text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">
          Hire<span className="text-blue-400">Hub</span>
        </h1>
        <p className="text-lg text-gray-300">
          Lets Hire With Us
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center">
        
        <div className="w-full max-w-md p-8 border-2 border-blue-500 rounded-2xl">

          <h2 className="text-3xl font-semibold mb-2 text-center">
            Welcome Back 😀
          </h2>

          <p className="text-gray-400 text-center mb-6">
            Enter your details below
          </p>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => {setName(e.target.value); setError("")}}
            className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
          />
        {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
        )}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            Login
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;