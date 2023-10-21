import React, { useState } from 'react';

function IframeModal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="z-50 bg-cover p-8 rounded-lg" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
        <iframe
          src="https://sandbox.nftpay.xyz/iframe/iframe_pay/7fa637a0-b3ff-4550-b9ac-adbc6e993b6d?&_tokenId=0&_currency=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&_pricePerToken=0.0005&_allowlistProof=xxxxxxxx&_data=[]"
          width="100%"
          height="550"
          style={{ border: 'none' }}
        />
        <button
          onClick={onClose}
          className="text-3xl mt-4 bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 text-white font-bold py-1 px-3 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Excm() {
  const [showIframe, setShowIframe] = useState(false);

  const openIframe = () => {
    setShowIframe(true);
  };

  const closeIframe = () => {
    setShowIframe(false);
  };

  return (
    <div className="h-screen bg-zinc-950 overflow-x-clip">
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="text-white font-custom text-4xl mb-4 text-left w-full px-[15%]">
            <a href="/plays" className="w-min text-xl bg-amber-600 hidden md:flex text-white font-bold py-1.5 px-2 rounded items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                Plays
            </a>
        </div>
        <div className="relative mt-4 h-[300px] w-[290px] rounded-lg bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
          <div className="mx-[15%] absolute -left-[14%] -top-[20%]">
            <div className="">
              <a href="/plays" className="w-min font-custom text-2xl bg-amber-600 flex md:hidden text-white font-bold py-1.5 px-2 rounded items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
                Plays
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="z-10 mt-4 mx-4 text-6xl text-white font-custom mb-8 text-center">VIP Day Pass
            <div className="w-full flex justify-center">
              {showIframe ? (
                <IframeModal onClose={closeIframe} />
              ) : (
                <div
                  onClick={openIframe}
                  className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 animate-text text-2xl w-min flex justify-center text-white font-bold py-2 px-4 rounded items-center gap-1"
                >
                  <div className="mt-[2.5px] text-5xl">Buy</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-white font-custom text-4xl mt-4 text-left w-full px-[15%]">
          <div className="">
            Price: $200
          </div>
        </div>
      </div>
    </div>
  );
}

export default Excm;