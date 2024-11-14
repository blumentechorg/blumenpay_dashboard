"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axiosInstance from "@/utils/Auth/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation schema for role creation form
const roleSchema = Yup.object().shape({
  name: Yup.string().required("Role name is required"),
});

const CreateRoleForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(roleSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axiosInstance.post("/role/role/", data);
      toast.success("Role created successfully!");
    } catch (error) {
      toast.error("Failed to create role. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-10 bg-white rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105"
      >
        <h2 className="text-3xl font-semibold  mb-8 text-center tracking-wide">
          Create New Role
        </h2>
        <div className="mb-6">
          <label
            className="block text-gray-600 text-lg font-medium mb-2"
            htmlFor="name"
          >
            Role Name
          </label>
          <input
            {...register("name")}
            id="name"
            placeholder="Enter role name"
            className={`w-full px-4 py-2 border-2 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:border-indigo-500 transition-colors duration-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 bg-gray-950 hover:bg-gray-900 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Role..." : "Create Role"}
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default CreateRoleForm;
