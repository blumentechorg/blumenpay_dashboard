import React from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";

const TransactionTable = () => {
  const transactions = [
    {
      description: "Purchase of airtime",
      transactionId: "TRX001",
      type: "Debit", // Transaction type
      merchant: "Office Depot",
      date: "2024-09-10",
      amount: "$150.00",
      receiptUrl: "#", // Placeholder for receipt link
    },
    {
      description: "Payment Received",
      transactionId: "TRX002",
      type: "Credit", // Transaction type
      merchant: "Client",
      date: "2024-09-11",
      amount: "$200.00",
      receiptUrl: "#",
    },
    {
      description: "Payment Received",
      transactionId: "TRX002",
      type: "Credit", // Transaction type
      merchant: "Client",
      date: "2024-09-11",
      amount: "$200.00",
      receiptUrl: "#",
    },
    {
      description: "Payment Received",
      transactionId: "TRX002",
      type: "Credit", // Transaction type
      merchant: "Client",
      date: "2024-09-11",
      amount: "$200.00",
      receiptUrl: "#",
    },
    {
      description: "Payment Received",
      transactionId: "TRX002",
      type: "Credit", // Transaction type
      merchant: "Client",
      date: "2024-09-11",
      amount: "$200.00",
      receiptUrl: "#",
    },
    {
      description: "Payment Received",
      transactionId: "TRX002",
      type: "Credit", // Transaction type
      merchant: "Client",
      date: "2024-09-11",
      amount: "$200.00",
      receiptUrl: "#",
    },

    // Add more transactions here
  ];

  return (
    <div className="mb-36 w-full  md:px-5 py-5 px-2 bg-gray-50 rounded-xl shadow-md">
      <div className="overflow-x-auto bg-[#F7F9FB] rounded-xl px-3 py-5">
        <div className="text-[#05004E] font-semibold text-base px-4">
          Recent Transactions
        </div>
        <table className="min-w-full table-auto border-collapse text-xs md:text-sm  lg:w-[935px]">
          <thead>
            <tr className="border-b text-[#1C1C1C66]">
              <th className="px-2 py-2 md:px-4 text-left font-light">
                Description
              </th>
              <th className="px-2 py-2 md:px-4 text-left font-light">ID</th>
              <th className="px-2 py-2 text-left font-light hidden md:table-cell">
                Type
              </th>
              <th className="px-2 py-2 text-left font-light hidden lg:table-cell">
                Merchant
              </th>
              <th className="px-2 py-2 text-left font-light hidden lg:table-cell">
                Date
              </th>
              <th className="px-2 py-2 text-left font-light">Amount</th>
              <th className="px-2 py-2 text-left font-light">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-4 md:px-4  flex items-center">
                  {transaction.type === "Credit" ? (
                    <BsArrowUpCircle className="text-[#718EBF] mr-2 lg:w-5 lg:h-5" />
                  ) : (
                    <BsArrowDownCircle className="text-[#718EBF] mr-2 lg:w-5 lg:h-5" />
                  )}
                  {transaction.description}
                </td>
                <td className="px-2 py-2 md:px-4">
                  {transaction.transactionId}
                </td>
                <td className="px-2 py-2 hidden md:table-cell">
                  {transaction.type}
                </td>
                <td className="px-2 py-2 hidden lg:table-cell">
                  {transaction.merchant}
                </td>
                <td className="px-2 py-2 hidden lg:table-cell">
                  {transaction.date}
                </td>
                <td className="px-2 py-2 md:px-4">{transaction.amount}</td>
                <td className="px-2 py-2 md:px-4">
                  <a
                    href={transaction.receiptUrl}
                    download
                    className="border border-[#123288] text-[#123288] font-light px-2 py-1 lg:text-sm lg:py-1.5 lg:px-4  rounded-full"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
