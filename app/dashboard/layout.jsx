"use client";

import Loading from "./loading";
import { useState, useEffect } from "react";

const DashboardLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a 3-second timer to simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen if isLoading is true
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
