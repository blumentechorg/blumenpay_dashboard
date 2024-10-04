import Sidebar from "@/components/Sidebar";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function SuperAdminLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  if (!user || user.role !== "super_admin") {
    router.push("/unauthorized");
    return null;
  }

  return (
    <>
      <div className="flex">
        {/* Sticky Sidebar */}
        <div className="flex-none border-r min-h-screen sticky top-0 md:block hidden">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Sticky Navbar */}
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto md:px-7 px-4 pt-7 space-y-5">
            <Breadcrumb />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
