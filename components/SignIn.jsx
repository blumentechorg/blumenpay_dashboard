"use client"; // Add this at the top

import { useState } from "react";
import { userSchema } from "@/Validations/UserValidation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import eye icons

export default function SignIn() {
  const router = useRouter(); // Initialize useRouter
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    if (data.email && data.password) {
      router.push("/dashboard/overview"); // Redirect to the dashboard page
    }
  };

  return (
    <>
      <div className="">
        <div className="grid place-items-center  py-36">
          <div className="grid gap-y-8 rounded-lg bg-gray-50 lg:w-2/4 p-10 text-sm font-extralight text-gray-500 focus:ring-1 focus:ring-gray-700">
            <div>Please fill in your unique admin login details below</div>
            <div className="">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-3">
                  <div className="font-normal">Email</div>
                  <input
                    type="email"
                    name="email"
                    placeholder=""
                    className="h-8 rounded-md bg-gray-200 px-5 text-xs"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-rose-500 text-xs font-semibold">
                      * Email is required
                    </span>
                  )}

                  <div className="font-normal">Password</div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder=" "
                      className="h-8 w-full rounded-md bg-gray-200 px-5 text-xs"
                      {...register("password")}
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
                    <span className="text-rose-500 text-xs font-semibold">
                      * Password is required
                    </span>
                  )}

                  <div className="flex justify-end">Forgot Password?</div>
                  <Link href="/login/auth/signup">
                    <div className="flex justify-center">Create Account</div>
                  </Link>
                  <button
                    className="my-4 h-8 rounded-lg bg-black text-white"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
