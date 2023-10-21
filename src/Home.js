import Ticker from "framer-motion-ticker";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

function Home () {
    const images = ['./winners.png'];

    return (
        <><div className="relative h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/bghome1.png'})` }}
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
              className="-mt-24 flex justify-center text-white text-[84px] lg:text-[120px] leading-none md:-tracking-normal text-center font-custom mx-[10%]"
            >
              <div className="pl-3 pr-5 text-center flex items-center mb-3">Join the Winning Team</div>
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
                  className="text-white px-4 pt-1.5 pb-[3px] rounded-xl text-4xl lg:text-5xl font-custom flex w-min whitespace-nowrap bg-gradient-to-r from-amber-700 via-yellow-500 to-amber-700 animate-text"
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
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={30000} duration={2.5} suffix="+" separator="," className="inline" />
                            Partners
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-2.5 border-l border-r border-gray-200 w-1/3 h-full">
                        <div className="grid">
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={2500000} duration={2.5} prefix="$" suffix="+" separator="," className="inline" />
                            Bet
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center text-center p-2.5 w-1/3 h-full">
                        <div className="grid">
                            <CountUp scrollSpyOnce={true} enableScrollSpy={true} end={2000} duration={2.5} suffix="+" separator="," className="inline" />
                            Wins
                        </div>
                    </div>
                </div>
            </div><div className="relative h-min w-screen bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/blues.jpg'})` }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="h-full grid content-center pt-8 pb-10 lg:py-12">
                    <div className="px-[10%] py-4 lg:py-8 text-[44px] leading-none lg:text-6xl text-amber-500 font-custom z-10 text-center">Cashing Out on the Regular</div>
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
            <div className="relative h-[250px] w-screen bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 animate-text">
            <div className="absolute inset-0 bg-black opacity-5"></div>
                <div className="h-full flex justify-center items-center">
                    <div className="z-5 text-white font-custom text-5xl">
                        Ready to lock
                        <div className="flex justify-center w-full">
                            <a href="/plays" className="z-10 mt-4 text-3xl bg-white px-4 pt-1.5 pb-[3px] rounded-xl whitespace-nowrap w-min text-center text-slate-800">
                                <button className="">
                                    Let's Go
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <footer className="bg-slate-100 dark:bg-gray-900">
                  <div className="container items-center px-6 py-4 mx-auto lg:flex-row font-custom">
                    <a href="/" className="flex justify-center items-center stfont-custom text-gray-800 text-3xl lg:text-5xl">
                      FMB
                    </a>
            
                    <div className="mx-4 mt-2 flex flex-wrap text-xl items-center justify-center gap-2 lg:gap-6 lg:mt-0">
                      <a href="/" className="text-gray-700 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                        Home
                      </a>
            
                      <a href="/plays" className="text-gray-700 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                        Plays
                      </a>
            
                      <a href="/faqs" className="text-gray-700 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                        FAQs
                      </a>

                      <a href="#" className="text-gray-700 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                        Refund Policy
                      </a>

                      <a href="#" className="text-gray-700 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                        Terms and Conditions
                      </a>
                    </div>
            
                    <div className="mt-2 flex justify-center items-center space-x-1">
                      <a href="https://www.instagram.com/fortmannybets/?hl=en" className="flex justify-center items-center" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                              <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                          </svg>
                      </a>
              
                      <p className="mt-1 flex justify-center items-center text-gray-700 lg:mt-0 dark:text-gray-400">© Copyright 2023 FMB. Enterntainment purposes only.</p>
                    </div>
                  </div>
                </footer>
                    </div></>
    )
}

export default Home;