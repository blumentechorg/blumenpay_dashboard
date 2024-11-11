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
    <div className="flex justify-center items-center  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
          Create New Role
        </h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2" htmlFor="name">
            Role Name
          </label>
          <input
            {...register("name")}
            id="name"
            placeholder="Enter role name"
            className={`w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 ${
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
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Role..." : "Create Role"}
        </button>
        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default CreateRoleForm;
