"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/utils/Auth/axiosInstance";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/custom-user/sign-in/", data);
      const { token, role } = response.data;

      login(token, role); // Set token and role in AuthContext

      // Navigate based on role
      switch (role) {
        case "Super Admin":
          router.push("/dashboard/super_admin/overview");
          break;
        case "Admin":
          router.push("/dashboard/admin/overview");
          break;
        case "User":
          router.push("/dashboard/user/overview");
          break;
        default:
          throw new Error("Unknown role");
      }
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login failed. Please try again.");
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
