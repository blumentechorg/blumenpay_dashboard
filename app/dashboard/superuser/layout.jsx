import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import UserSidebar from "@/components/Admin/AdminSidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        {/* Sticky Sidebar */}
        <div className="flex-none border-r min-h-screen sticky top-0 md:block hidden">
          <UserSidebar />
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
};

export default Layout;
