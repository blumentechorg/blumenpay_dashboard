import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useFilters,
} from "react-table";
import { BsArrowDownCircle, BsArrowUpCircle, BsDownload } from "react-icons/bs";
import "tailwindcss/tailwind.css";

// Define a default filter UI (search input)
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <div className="mb-4 w-full">
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:border-[#123288]"
      />
    </div>
  );
};

// New component for column filtering
const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder={`Filter ${column.render("Header")}`}
      className="w-full px-2 py-1 text-xs border rounded"
    />
  );
};

const EnhancedTable = ({
  columnsData = [],
  rowData = [],
  title = "Table Title",
}) => {
  const columns = useMemo(
    () =>
      (columnsData || []).map((column) => ({
        ...column,
        Filter: ColumnFilter,
        // Special handling for Receipt column
        Cell:
          column.Header === "Receipt"
            ? ({ value }) => (
                <button
                  onClick={() => handleDownload(value)}
                  className="flex items-center border hover:bg-[#123288] hover:text-white bg-white px-3 py-2  border-blue-950 rounded-full"
                >
                  <BsDownload className="mr-1" /> Download
                </button>
              )
            : column.Cell || (({ value }) => String(value)), // Default cell renderer
      })),
    [columnsData]
  );
  const data = useMemo(() => rowData || [], [rowData]);

  const handleDownload = (receiptUrl) => {
    if (receiptUrl) {
      const link = document.createElement("a");
      link.href = receiptUrl; // Ensure receiptUrl is the correct URL for the PDF
      link.download = "receipt.pdf"; // Optionally set a default filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("No receipt URL provided");
    }
  };

  const [sortOrder, setSortOrder] = useState("newest");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 }, // Set initial page size to 5
    },
    useFilters,
    useGlobalFilter, // For global search filtering
    useSortBy, // For sorting
    usePagination // For pagination
  );

  return (
    <div className="w-full md:px-5 py-5 px-2 bg-gray-50 hover:shadow-lg rounded-xl shadow-md ">
      {/* Title, Search, and Sort Controls */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#123288]">{title}</h2>
        <div className="flex items-center space-x-4 text-xs">
          <input
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:border-[#123288]"
          />
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              if (e.target.value === "oldest") {
                gotoPage(0);
                setPageSize(pageCount * pageSize);
              } else {
                gotoPage(pageCount - 1);
                setPageSize(pageCount * pageSize);
              }
            }}
            className="px-3 py-2 border rounded-lg focus:outline-none focus:border-[#123288]"
          >
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#F7F9FB] rounded-xl px-3 py-5">
        <table
          {...getTableProps()}
          className="min-w-full table-auto border-collapse text-xs md:text-sm lg:w-[935px]"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
                className="border-b text-[#1C1C1C66]"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="px-2 py-2 md:px-4 text-left font-light"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsArrowDownCircle className="inline-block ml-2" />
                        ) : (
                          <BsArrowUpCircle className="inline-block ml-2" />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={row.id}
                  className="border-b hover:bg-gray-100"
                >
                  {row.cells.map((cell) => (
                    <td
                      key={cell.column.id}
                      {...cell.getCellProps()}
                      className="px-2 py-2 md:px-4 text-gray-600"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        {/* Page Size Selection */}
        <div className="mt-2 flex space-x-2">
          <label className="block mb-2 text-sm pt-2">Rows per page:</label>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-3 py-1 flex border rounded-lg focus:outline-none focus:border-[#123288]"
          >
            {[5, 10, 20, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="px-2 py-1 bg-[#123288] text-white rounded-md disabled:bg-gray-300"
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-2 py-1 bg-[#123288] text-white rounded-md disabled:bg-gray-300"
            >
              {"<"}
            </button>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => gotoPage(i)}
                className={`px-3 py-1 rounded-md ${
                  pageIndex === i
                    ? "bg-[#123288] text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-2 py-1 bg-[#123288] text-white rounded-md disabled:bg-gray-300"
            >
              {">"}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="px-2 py-1 bg-[#123288] text-white rounded-md disabled:bg-gray-300"
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedTable;
