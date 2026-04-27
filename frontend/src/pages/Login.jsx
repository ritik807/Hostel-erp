import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./services/api";

const Login = () => {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
        role,
      });

      // 💾 SAVE TOKEN + ROLE (IMPORTANT FIX)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role); // 🔥 ADD THIS

      // 🔥 ROLE BASED REDIRECT (FIXED ROUTES)
      if (res.data.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/student", { replace: true });
      }

    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-80 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;