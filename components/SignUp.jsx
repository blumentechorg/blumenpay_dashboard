"use client"; // Add this at the top

import { registerSchema } from "@/Validations/RegisterValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);

    if (data.email && data.password) {
      router.push("/"); // Redirect to the dashboard page
    }
  };

  return (
    <>
      <div className="">
        <div className="grid place-items-center">
          <div className="grid gap-y-8 rounded-lg bg-gray-50 w-2/4 p-10 text-sm font-extralight text-gray-500 focus:ring-1 focus:ring-gray-700">
            <div>Please fill in your details below</div>
            <div className="">
              <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-3">
                  <div className="font-normal">Name</div>
                  <input
                    type="text"
                    name="name"
                    placeholder=""
                    className="h-8 rounded-md bg-gray-200 px-5 text-xs"
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-rose-500 text-xs font-semibold">
                      * Name is required
                    </span>
                  )}
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
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    className="h-8 rounded-md bg-gray-200 px-5 text-xs"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-rose-500 text-xs font-semibold">
                      * Password is required
                    </span>
                  )}
                  <div className="font-normal"> Confirm Password</div>
                  <input
                    type="password"
                    name="password"
                    placeholder=" "
                    className="h-8 rounded-md bg-gray-200 px-5 text-xs"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-rose-500 text-xs font-semibold">
                      * Password Dont Match
                    </span>
                  )}

                  <button
                    className="my-4 h-8 rounded-lg bg-black text-white"
                    type="submit"
                  >
                    Sign Up
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
