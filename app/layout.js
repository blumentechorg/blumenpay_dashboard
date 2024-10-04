import "./globals.css";

export const metadata = {
  title: "BlumenPay",
  description: "Online Payment ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
