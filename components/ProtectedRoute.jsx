import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect to unauthorized if user is not allowed or not logged in
    if (!user || !allowedRoles.includes(user.role)) {
      router.push("/unauthorized");
    }
  }, [user, allowedRoles, router]);

  // Render children if user is allowed
  return allowedRoles.includes(user?.role) ? children : null;
};

export default ProtectedRoute;
