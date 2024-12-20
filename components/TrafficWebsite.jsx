export default function TrafficWebsite() {
  const websites = [
    { name: "Aimedicare", progress: 70 },
    { name: "Algorizmih", progress: 50 },
    { name: "Goal Pass", progress: 90 },
    { name: "Squid Energy", progress: 60 },
    { name: "Amal Tech", progress: 40 },
    { name: "City Med", progress: 80 },
  ];

  return (
    <div>
      <div className="px-7 text-xs py-10 space-y-5 h-[320px] md:h-[420px] bg-gray-50 font-light rounded-xl shadow-md hover:cursor-pointer hover:shadow-lg w-full min-w-[350px]  ">
        <div className="font-semibold ">Traffic by Website</div>

        {websites.map((website, index) => (
          <div key={index} className="flex px-5 ">
            <div className="basis-1/2">{website.name}</div>
            <div className="basis-1/2 pt-2">
              <div className="relative w-full h-2 bg-gray-200 rounded">
                <div
                  className={`absolute top-0 left-0 h-full rounded bg-gray-800`}
                  style={{ width: `${website.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
