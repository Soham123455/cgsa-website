import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import logo from "../assets/cgsa-logo.png";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      if (
        email === "admin@cgsa.in" &&
        password === "admin123"
      ) {
        localStorage.setItem("adminToken", "cgsa_admin");
        navigate("/dashboard");
      } else {
        alert("Invalid Email or Password");
      }

      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        {/* Logo */}

        <div className="flex justify-center">

          <img
            src={logo}
            alt="CGSA Logo"
            className="w-28 h-28 object-contain"
          />

        </div>

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-[#0B6E4F] mt-4">
          CGSA CMS
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Centre of Gandhian Studies & Action
        </p>

        <p className="text-center text-sm text-gray-400 mt-1">
          Content Management System
        </p>

        <div className="w-20 h-1 bg-[#0B6E4F] rounded-full mx-auto mt-5"></div>

        <h2 className="text-xl font-semibold text-center mt-6">
          Administrator Login
        </h2>

        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Email */}

          <div className="mt-8">

            <label className="font-semibold">
              Email Address
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                placeholder="admin@cgsa.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                required
              />

            </div>

          </div>

          {/* Password */}

          <div className="mt-6">

            <label className="font-semibold">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl py-3 pl-11 pr-12 outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-3 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Remember Me */}

          <div className="flex justify-between items-center mt-6">

            <label className="flex items-center gap-2 text-sm text-gray-600">

              <input type="checkbox" />

              Remember Me

            </label>

            <span className="text-sm text-[#0B6E4F] cursor-default">
              Forgot Password?
            </span>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 bg-[#0B6E4F] hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Secure Login"}
          </button>

        </form>

        {/* Footer */}

        <div className="border-t mt-8 pt-6">

          <p className="text-center text-xs text-gray-500 uppercase tracking-wider">
            Powered by
          </p>

          <p className="text-center text-sm font-semibold text-[#0B6E4F] mt-2">
            Centre of Gandhian Studies & Action
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;