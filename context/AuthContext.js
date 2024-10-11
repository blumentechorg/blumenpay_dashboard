"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if there's a token in cookies on initial load
    const token = Cookies.get("token");
    if (token) {
      // You might want to verify the token with your backend here
      setUser({ token });
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 7 }); // Store token for 7 days
    setUser({ token });
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
