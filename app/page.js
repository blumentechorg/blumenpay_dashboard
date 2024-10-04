// import SignIn from "@/components/SignIn";
// import Image from "next/image";
// import logo from "../public/images/logo.png";

// export default function Home() {
//   return (
//     <>
//       <div className="grid lg:grid-cols-6 md:grid-cols-4  lg:min-h-screen">
//         <div className="grid col-span-1 lg:border-r px-20 py-10 md:block hidden">
//           <Image src={logo} alt="" width={50} height={50} />
//         </div>
//         <div className="grid col-span-5 ">
//           <div className="p-5 md:text-center lg:text-left ">Login</div>
//           <div className="px-5 lg:px-0 md:px-2">
//             <SignIn />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
// pages/index.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth"); // Redirect to the login page
  }, [router]);

  return null; // Don't render anything on this page since it redirects
};

export default HomePage;
