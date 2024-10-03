export default function MerchantCard() {
  const cardData = [
    {
      companyName: "Paystack",
      amount: "N100,000",
      description: "Money In",
      change: "+8% from yesterday",
    },
    {
      companyName: "Paga",
      amount: "N200,000",
      description: "Money In",
      change: "+12% from yesterday",
    },

    // Add more data objects here
  ];

  return (
    <div className="container py-16 text-[10px]  ">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-y-5 place-items-center ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="grid rounded-3xl lg:w-[320px] lg:h-[330px] w-72 bg-gray-50 p-5 gap-y-16 lg:gap-y-36 text-gray-800 shadow-md "
          >
            <div className=" text-3xl font-semibold text-center">
              {card.companyName}
            </div>
            <div className="mx-5 lg:mx-3 place-items-center flex space-x-4 rounded-2xl lg:w-[259px] lg:h-[110px] w-52 justify-center  bg-red-50 p-5">
              <div className="h-10 w-10 rounded-full p-3 bg-[#FA5A7D]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.79116 0.58255C1.61936 0.58255 0.669434 1.5325 0.669434 2.70428V17.5564C0.669434 18.7282 1.61936 19.6781 2.79116 19.6781H17.6433C18.8151 19.6781 19.765 18.7282 19.765 17.5564V2.70428C19.765 1.5325 18.8151 0.58255 17.6433 0.58255H2.79116ZM5.97376 11.1912C5.97376 10.6053 5.49879 10.1303 4.91289 10.1303C4.32699 10.1303 3.85203 10.6053 3.85203 11.1912V15.4347C3.85203 16.0206 4.32699 16.4955 4.91289 16.4955C5.49879 16.4955 5.97376 16.0206 5.97376 15.4347V11.1912ZM10.2172 6.94774C10.8031 6.94774 11.2781 7.42268 11.2781 8.0086V15.4347C11.2781 16.0206 10.8031 16.4955 10.2172 16.4955C9.63131 16.4955 9.15635 16.0206 9.15635 15.4347V8.0086C9.15635 7.42268 9.63131 6.94774 10.2172 6.94774ZM16.5824 4.82601C16.5824 4.24008 16.1074 3.76514 15.5215 3.76514C14.9356 3.76514 14.4607 4.24008 14.4607 4.82601V15.4347C14.4607 16.0206 14.9356 16.4955 15.5215 16.4955C16.1074 16.4955 16.5824 16.0206 16.5824 15.4347V4.82601Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <div className="lg:text-2xl md:text-xl font-semibold">
                  {card.amount}
                </div>
                <div className="text-gray-700">{card.description}</div>
                <div className=" text-blue-700">{card.change}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
