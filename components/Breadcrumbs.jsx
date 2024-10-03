"use client";

// components/Breadcrumbs.js
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // Keep only the last two segments
  const lastTwoSegments = pathSegments.slice(-2);

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {lastTwoSegments.map((segment, index) => {
        // Capitalize the segment text
        const breadcrumbName =
          segment.charAt(0).toUpperCase() + segment.slice(1);

        // Conditionally apply text color:
        // - Gray for the second-to-last segment
        // - Black for the last/current segment
        const textColor =
          index === lastTwoSegments.length - 1
            ? "text-black font-semibold" // Current path: black and bold
            : "text-gray-500"; // Previous path: gray

        return (
          <div key={index} className="flex items-center space-x-2">
            {index > 0 && <span>/</span>}{" "}
            {/* Add separator except for the first */}
            <span className={textColor}>{breadcrumbName}</span>
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
