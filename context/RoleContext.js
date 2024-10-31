"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Create Role Context
const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null); // 'super_admin', 'admin', or 'user'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching role (replace with actual API call)
    const fetchUserRole = async () => {
      const userRole = await getRoleFromAPI(); // Replace with actual role-fetching logic
      setRole(userRole);
      setLoading(false);
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white flex-col">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-700 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    ); // Loading spinner until role is fetched
  }

  return (
    <RoleContext.Provider value={{ role }}>{children}</RoleContext.Provider>
  );
};

export const useRole = () => {
  return useContext(RoleContext);
};

// Example function to simulate role fetching
const getRoleFromAPI = async () => {
  return "super_admin"; // Mock role for testing, replace with real data
};
