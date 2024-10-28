import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoleProvider } from "@/context/RoleContext";

export const metadata = {
  title: "BlumenPay",
  description: "Online Payment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <RoleProvider>
          <body className={`antialiased`}>
            <div>{children}</div>
            <div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </body>
        </RoleProvider>
      </AuthProvider>
    </html>
  );
}
