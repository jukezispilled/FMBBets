import Ticker from "framer-motion-ticker";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function Home () {
    const images = ['./winner.png'];

    return (
        <><div className="relative h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/home2.png'})` }}
        ></div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
  
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="-mt-24 text-white text-[76px] lg:text-[120px] leading-none text-center tracking-[0.0175em] font-semibold font-custom mx-[10%]"
            >
              Bet With the Best
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-screen flex justify-center"
            >
              <a href="/plays">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white px-4 pt-1.5 pb-[3px] rounded-xl text-3xl lg:text-5xl font-custom flex w-min whitespace-nowrap bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 animate-text"
                >
                  Lock In
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div><div className="bg-slate-100">
                <div className="flex items-center text-[30px] leading-none lg:text-[47px] lg:h-[130px] text-slate-800 bg-slate-100 my-5 font-custom">
                    <div className="flex flex-wrap justify-center items-center text-center p-2.5 w-1/3 h-full">
                        <div className="grid">
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={50000} duration={2.5} suffix="+" separator="," className="inline" />
                            Partners
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-2.5 border-l border-r border-gray-200 w-1/3 h-full">
                        <div className="grid">
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={5000000} duration={2.5} prefix="$" suffix="+" separator="," className="inline" />
                            Bet
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-2.5 w-1/3 h-full">
                        <div className="grid">
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={10000} duration={2.5} suffix="+" separator="," className="inline" />
                            Wins
                        </div>
                    </div>
                </div>
            </div><div className="relative h-min w-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="h-full grid content-center pt-8 pb-10 lg:py-12">
                    <div className="px-[10%] py-4 lg:py-8 text-[44px] leading-none lg:text-6xl text-[#37c857] font-custom z-10 text-center">Cashing Out on the Regular</div>
                    <Ticker duration={5}>
                        {images.map((imagePath, index) => (
                            <div
                                className='rounded-xl'
                                key={index}
                                style={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL + imagePath})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    margin: '5px',
                                    height: '300px',
                                    width: '240px',
                                }} />
                        ))}
                    </Ticker>
                </div>
            </div>
            <div className="relative h-[300px] w-screen bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 animate-text">
            <div className="absolute inset-0 bg-black opacity-5"></div>
                <div className="h-full flex justify-center items-center">
                    <div className="z-5 text-white font-custom text-5xl">
                        Join the Crew
                        <div className="flex justify-center w-full">
                            <a href="/plays" className="z-10 mt-4 text-3xl bg-white px-4 pt-1.5 pb-[3px] rounded-xl whitespace-nowrap w-min text-center text-slate-800">
                                <button className="">
                                    Let's Go
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                    </div></>
    )
}

export default Home;