import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "BlumenPay",
  description: "Online Payment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`antialiased`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
