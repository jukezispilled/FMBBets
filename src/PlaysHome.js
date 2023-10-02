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
        <div className="grid">
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
        <div className="z-20 w-screen bg-slate-200 h-[10%] absolute bottom-[0%]">
          <div className="flex justify-around items-center h-full">
            <div className="text-center text-2xl font-custom border">
              Sign In
              <div className='w-full flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl font-custom">
              Feed
              <div className='w-full flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl font-custom">
              Checkout
              <div className='w-full flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
            </div>
            <div className="text-center text-2xl font-custom">
              Plays
              <div className='w-full flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PlaysHome;
