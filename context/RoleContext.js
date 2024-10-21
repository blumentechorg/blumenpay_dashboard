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
    return <div>Loading...</div>; // Loading spinner until role is fetched
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
