"use client";

import { useRouter } from "next/navigation";
import { users } from "../api/data"; // Assuming this is where the hardcoded users are
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Find the user in the hardcoded users array
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Store user information in cookies
      Cookies.set("user", JSON.stringify(user)); // Set user in cookies
      router.push("/dashboard/overview"); // Redirect all users to a general dashboard page
    } else {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 font-light">
      <div className="flex flex-col items-center w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <Image src={logo} width={80} height={80} alt="logo" />
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Login</h2>
        <p className="mb-6 text-sm text-gray-500 text-center">
          Please fill in your login details below
        </p>
        <div className="w-full">
          {error && <p className="mb-4 text-red-600">{error}</p>}
          <div className="grid gap-y-4">
            <label className="font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-10 w-full rounded-md border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <label className="font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10 w-full rounded-md border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <span
                className="absolute right-3 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </span>
            </div>
            <button className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </button>
            <button
              onClick={handleLogin}
              className="mt-4 h-10 w-full rounded-lg bg-black text-white hover:bg-gray-800"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
