import React, { useEffect } from 'react';

function IframeModal({ onClose }) {
    useEffect(() => {
        const handleMessage = async (event) => {
          const postData = JSON.stringify(event.data);
    
          if (postData && postData.includes('{"source":"nftpay"')) {
            // Send the email
            await fetch('/api/sendEmail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                postData,
                passType: "VIP Day Pass",
              }),
            });
    
            // Perform the redirection to the '/' route
            window.location.href = '/success';
          }
        };
    
        window.addEventListener('message', handleMessage);
    
        return () => {
          window.removeEventListener('message', handleMessage);
        };
    }, []);     

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0"></div>
      <div className="z-50 bg-cover p-8 rounded-lg h-[70%] md:h-[60%] lg:w-[30%]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
        <iframe
          src="https://sandbox.nftpay.xyz/iframe/iframe_pay/7fa637a0-b3ff-4550-b9ac-adbc6e993b6d?&_tokenId=0&_currency=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&_pricePerToken=500000000000000&_allowlistProof={%22proof%22:[%220x0000000000000000000000000000000000000000000000000000000000000000%22],%22quantityLimitPerWallet%22:%220%22,%22pricePerToken%22:%220%22,%22currency%22:%220xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE%22}&_data=0x"
          width="100%"
          height="80%"
          style={{ border: 'none' }}
        />
        <button
          onClick={onClose}
          className="text-3xl mt-4 bg-amber-600 text-white font-bold py-1 px-3 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function VIPd() {
  const [showIframe, setShowIframe] = React.useState(false);

  const openIframe = () => {
    setShowIframe(true);
  };

  const closeIframe = () => {
    setShowIframe(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-clip">
      <div className="min-h-screen flex flex-col justify-center items-center">
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
                <button
                  onClick={openIframe}
                  className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 animate-text text-2xl w-min flex justify-center text-white font-bold py-2 px-4 rounded items-center gap-1"
                >
                  <div className="mt-[2.5px] text-5xl">Buy</div>
                </button>
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

export default VIPd;
