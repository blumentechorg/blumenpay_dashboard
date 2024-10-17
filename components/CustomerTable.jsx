"use client";

import React, { useMemo, useState } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useFilters,
} from "react-table";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

// Define a default filter UI for each column
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

// Define a default UI for global filtering
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <input
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder="Search all columns..."
      className="w-full px-2 py-1 text-xs border rounded mb-2"
    />
  );
};

const CustomerTable = () => {
  const customers = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@example.com",
      services: "Premium",
      status: "Active",
    },
    {
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane@example.com",
      services: "Basic",
      status: "Inactive",
    },
    {
      name: "Michael Johnson",
      phone: "456-789-0123",
      email: "michael@example.com",
      services: "Standard",
      status: "Active",
    },
    {
      name: "Emily Davis",
      phone: "321-654-0987",
      email: "emily@example.com",
      services: "Premium",
      status: "Inactive",
    },
    {
      name: "David Brown",
      phone: "789-012-3456",
      email: "david@example.com",
      services: "Basic",
      status: "Active",
    },
    {
      name: "Sarah Wilson",
      phone: "654-321-9870",
      email: "sarah@example.com",
      services: "Standard",
      status: "Active",
    },
    {
      name: "Chris Martin",
      phone: "012-345-6789",
      email: "chris@example.com",
      services: "Premium",
      status: "Inactive",
    },
    {
      name: "Jessica Taylor",
      phone: "543-210-9876",
      email: "jessica@example.com",
      services: "Basic",
      status: "Active",
    },
    {
      name: "Matthew Anderson",
      phone: "678-901-2345",
      email: "matthew@example.com",
      services: "Standard",
      status: "Inactive",
    },
    {
      name: "Olivia Martinez",
      phone: "890-123-4567",
      email: "olivia@example.com",
      services: "Premium",
      status: "Active",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone Number",
        accessor: "phone",
        Filter: ColumnFilter,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "Service",
        accessor: "services",
        Filter: ColumnFilter,
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: ColumnFilter,
        Cell: ({ value }) => (
          <button
            className={`px-2 py-1 rounded ${
              value === "Active"
                ? "bg-green-300 border border-[#008767] text-[#008767]"
                : "bg-red-300 border border-[#DF0404] text-[#DF0404]"
            }`}
          >
            {value}
          </button>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => customers, []);

  const [sortBy, setSortBy] = useState("name");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    setSortBy: setReactTableSortBy,
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
      initialState: {
        pageIndex: 0,
        pageSize: 8,
        sortBy: [{ id: sortBy, desc: false }],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy);
    setReactTableSortBy([{ id: newSortBy, desc: false }]);
  };

  return (
    <div className="lg:p-10 py-10 shadow-md bg-gray-50 rounded-xl lg:w-full md:w-[500px] text-[10px] md:text-xs hover:cursor-pointer hover:shadow-lg">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Customers</h2>
        <div className="flex items-center space-x-4">
          <GlobalFilter
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="border rounded p-1"
          >
            <option value="name">Sort by Name</option>
            <option value="email">Sort by Email</option>
            <option value="services">Sort by Service</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-4">
        <table
          {...getTableProps()}
          className="min-w-full table-auto border-collapse"
        >
          <thead className="font-light">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={headerGroup.id}
                className="text-left text-[#1C1C1C66] font-light px-2"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="md:p-4 p-1"
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
                <tr key={row.id} {...row.getRowProps()} className="border-t">
                  {row.cells.map((cell) => (
                    <td
                      key={cell.column.id}
                      {...cell.getCellProps()}
                      className="md:p-4 p-1"
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

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="border rounded p-1"
          >
            {[5, 10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-x-2">
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
  );
};

export default CustomerTable;
