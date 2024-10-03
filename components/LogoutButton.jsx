// components/LogoutButton.jsx
"use client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
