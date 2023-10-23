function Success() {

    return (
        <div className="h-screen bg-zinc-950">
            <div className="h-screen flex flex-col justify-center items-center">
                <div className="grid">
                    <div className="font-custom text-4xl text-white mx-12 md:mx-[25%] text-center">
                        Your purchase was successful. Be on the lookout for emails regarding when plays will be sent out.
                    </div>
                    <div className="flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Success;