import React from 'react';

function PlaysHome() {
  const uniqueMessages = [
    "VIP Day",
    "VIP Week",
    "Exclusive Day",
    "Exclusive Week",
  ];

  const uniqueRoutes = [
    "/plays/vipday",
    "/plays/vipweek",
    "/plays/exclusiveday",
    "/plays/exclusiveweek",
  ];

  const uniquePrices = ["$200", "$500", "$500", "$2000"];

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="min-h-screen flex justify-center items-center">
        <div className="flex flex-wrap justify-center text-center px-2 pb-4">
          {[1, 2, 3, 4].map((boxNumber, index) => (
            <a
              key={boxNumber}
              href={uniqueRoutes[index]} // Unique route for each box
              className="relative w-2/5 h-[190px] rounded-lg bg-slate-400 bg-cover m-2 p-3 flex items-center justify-center font-custom text-white text-[42px] leading-none"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}
            >
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="grid ">
                <p className="z-10">{uniqueMessages[index]}</p>
                <p className="-mt-1 z-10 text-3xl">{uniquePrices[index]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaysHome;
