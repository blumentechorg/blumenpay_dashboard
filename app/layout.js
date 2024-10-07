import { UserProvider } from "@/context/UserContext";
import "./globals.css";

export const metadata = {
  title: "BlumenPay",
  description: "Online Payment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`antialiased`}>{children}</body>
      </UserProvider>
    </html>
  );
}
