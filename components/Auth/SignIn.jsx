"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { users } from "@/app/api/data"; // Import dummy data
import { userSchema } from "@/Validations/UserValidation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render the form when the component has mounted
  if (!isMounted) {
    return null;
  }

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Find user in dummy data
      const user = users.find(
        (u) => u.username === data.username && u.password === data.password
      );

      if (user) {
        login(user.token);
        toast.success("Login successful!");
        router.push("/dashboard/overview");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      toast.error("Failed to sign in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 font-light">
        <div className="flex flex-col items-center w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <Image src={logo} width={80} height={80} alt="logo" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">Login</h2>
          <p className="mb-6 text-sm text-gray-500 text-center">
            Please fill in your login details below
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="username" className="font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  placeholder="Enter your username"
                  className="h-10 w-full rounded-md border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                {errors.username && (
                  <span className="text-red-500 text-sm">
                    {errors.username.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password")}
                    placeholder="Enter your password"
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
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline text-left"
              >
                Forgot Password?
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 h-10 w-full rounded-lg bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>

          {/* ToastContainer for showing notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </>
  );
};

export default SignInForm;
