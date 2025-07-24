import React from "react";
import NavBar from "./NavBar";
import { styles } from "../styles";

function HomePage() {
    return (
        <>
            <NavBar />

            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen w-full flex items-center justify-center bg-[url('src/assets/img/bung-02.jpg')] bg-cover bg-center overflow-hidden pt-16"
            >
                <div className="absolute inset-0 bg-slate-900/20 md:bg-slate-900/40 z-0"></div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                    <h1 className={`${styles.heroHeadText} text-4xl border-[#ffc83b] p-5 drop-shadow-md`}>
                        Brewing a Legacy <br />
                        <span className="text-[#f8c952] text-5xl">Since 1925</span>
                    </h1>

                    <p className="font-semibold w-25 border rounded-lg mx-3 md:px-5 py-2 bg-slate-400/40 drop-shadow-md">
                        A Sri Lankan legacy built on excellence, collaboration, and sustainability <br />
                        <span className="text-a">spanning generations and industries.</span>
                    </p>

                    <a
                        href="#about"
                        className="mt-8 px-3 py-4 border font-outfit border-meezanGold rounded-xl bg-meezanGold-dark/60 animate-bounce drop-shadow-md"
                    >
                        Explore Our Jouney
                    </a>
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="h-screen w-full pt-16 flex flex-col justify-start items-center  md:px- text-center bg-white"
            >
                <div className="py-3 font-bold text-lg font-urbanist mt-10 mb-3 md:pt-30 tracking-widest ">ABOUT US <div className="border border-meezanGold"></div></div>

                <div className="font-messiri text-meezanGold-dark font-semibold  mb-3 text-4xl md:text-5xl items-center justify-center  ">
                    Excellence, Collaboration, and Sustainability
                </div>

                <div className="justify-center px-10 md:mx-20 md:px-20 md:w-30 mb-3 text-justify">
                    <p className="font-semibold text-gray-500">
                        Our core values shape our approach to tea production, hardware supply, export
                        activities, and our hospitality offerings. Our dedicated leadership team fosters
                        sustainable growth and ensures superior quality and enduring value in all our
                        endeavors by committing to these values.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="relative h-screen bg-[url('src/assets/img/IMG_7068A.jpg')] 
  bg-cover bg-center mt-10 bg-fixed rounded-lg flex justify-center items-center">

                    <div className="absolute inset-0 bg-black/70 z-0"></div>

                    <div className="relative z-10 flex flex-col md:flex-row w-full px-4 md:px-0 py-20 text-white ">

                        {/* Vision */}
                        <div className="flex-1 p-6 mb-6 group cursor-pointer transition-all duration-500 md:hover:-translate-y-2 ">

                            <h2 className="text-left uppercase text-xl mb-2 font-poppins text-red md:text-right  ">
                                Our <br />
                                <span className="font-bold text-5xl text-meezanGold-light font-messiri  ">Vision</span>
                            </h2>
                            <p className="md:hidden mt-2 font-semibold text-left">
                                
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                            <p className="hidden md:block text-left md:text-right font-semibold text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                                
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                        </div>

                        <div className="border md:border-l border-white mx-4  md:block"></div>

                        {/* Mission */}
                        <div className="flex-1 p-6 mb-6 group cursor-pointer transition-all duration-500 md:hover:-translate-y-2 ">

                            <h2 className="text-left uppercase text-xl mb-2 font-poppins">
                                Our <br />
                                <span className="font-bold text-5xl text-meezanGold-light font-messiri">Mission</span>
                            </h2>
                            <p className="md:hidden mt-2 font-semibold text-left">
                               
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                            <p className="hidden md:block text-left font-semibold text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                                
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                        </div>

                    </div>
                </div>




            </section>

            <section>
                <div className="min-h-screen bg-green-100"></div>
            </section>
        </>
    );
}

export default HomePage;
