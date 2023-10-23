import React from 'react';

function PlaysHome() {
  const uniqueMessages = [
    "VIP Day Pass",
    "VIP Week Pass",
    "Exclusive Day",
    "Exclusive Week",
    "Exclusive Month"
  ];

  const uniqueRoutes = [
    "/plays/vipdaypass",
    "/plays/vipweekpass",
    "/plays/exclusiveday",
    "/plays/exclusiveweek",
    "/plays/exclusivemonth",
  ];

  const uniquePrices = ["$200", "$500", "$500", "$2000", "$10,000"];

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="min-h-screen md:pt-[7%] flex justify-center items-center">
        <div className="flex flex-wrap justify-center text-center px-2 pb-4">
          {[1, 2, 3, 4, 5].map((boxNumber, index) => (
            <a
              key={boxNumber}
              href={uniqueRoutes[index]} // Unique route for each box
              className="relative w-2/5 h-[170px] rounded-lg bg-slate-400 bg-cover m-2 p-3 flex items-center justify-center font-custom text-white text-[42px] leading-none"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="grid ">
                <p className="z-10">{uniqueMessages[index]}</p>
                <p className="-mt-1 z-10 text-3xl text-green-400">{uniquePrices[index]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaysHome;
