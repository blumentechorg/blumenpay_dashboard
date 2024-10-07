"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// Create UserContext
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user information from cookies
    const userCookie = Cookies.get("user");
    if (userCookie) {
      setUser(JSON.parse(userCookie));
    }
  }, []);

  // Logout function (optional)
  const logout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
