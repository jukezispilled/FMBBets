function Excd() {

    return (
        <div className="h-screen bg-zinc-950">
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="relative mt-4 h-[300px] w-[290px] rounded-lg bg-cover flex justify-center items-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
                <div className="mx-[15%] absolute -left-[14%] -top-[20%]">
                    <div className="">
                            <a href="/plays" className="w-min  bg-amber-600 flex text-white font-bold py-1.5 px-2 rounded items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                            </svg>
                                Plays
                            </a>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="z-10 mt-4 mx-4 text-6xl text-white font-custom mb-8 text-center">Exclusive Day Pass
                        <div className="w-full flex justify-center">
                            <a href="/plays" className="bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 animate-text text-2xl w-min flex justify-center text-white font-bold py-1 px-3 rounded items-center gap-1">
                                <div className="mt-[1px] text-4xl">
                                    Buy
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-white font-custom text-4xl mt-4 text-left w-full px-[15%]">
                    <div className="">
                        Price: $500
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Excd;