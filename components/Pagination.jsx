"use client";

const Pagination = ({ totalPages, currentPage, paginate }) => {
  // Render page numbers dynamically with "123 ... 40" logic
  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      // If total pages are less than or equal to 5, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={` py-1 mx-1 ${
              currentPage === i
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Display logic: "123 ... last page numbers"
      pageNumbers.push(
        <button
          key={1}
          onClick={() => paginate(1)}
          className={`px-3 py-1 mx-1 ${
            currentPage === 1
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          1
        </button>
      );
      pageNumbers.push(
        <button
          key={2}
          onClick={() => paginate(2)}
          className={`px-3 py-1 mx-1 ${
            currentPage === 2
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          2
        </button>
      );
      pageNumbers.push(
        <button
          key={3}
          onClick={() => paginate(3)}
          className={`px-3 py-1 mx-1 ${
            currentPage === 3
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          3
        </button>
      );

      // Ellipsis if current page is less than total pages minus a few
      if (currentPage < totalPages - 3) {
        pageNumbers.push(
          <span key="ellipsis" className="px-3 py-1 mx-1">
            ...
          </span>
        );
      }

      // Show the last few pages if we're near the end, or current page's neighbors
      for (
        let i = Math.max(totalPages - 2, currentPage);
        i <= totalPages;
        i++
      ) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => paginate(i)}
            className={`px-3 py-1 mx-1 ${
              currentPage === i
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    return pageNumbers;
  };

  return <div className="flex ">{renderPageNumbers()}</div>;
};

export default Pagination;
