import React, { useState } from "react";
import NavBar from "./NavBar";
import { styles } from "../styles";
import chairImg from '/assets/img/IMG_7068A.jpg';
import bgImg from '/assets/img/bung-02.jpg';
import { chairMansMEssage } from "../constants/text";
import  PortfolioCarousel  from "./PortfolioCarousel";


function HomePage() {
    const [expanded, setExpanded] = useState(false);

    const prevText = chairMansMEssage.slice(0, 310)
    const prevTextDs = chairMansMEssage.slice(0, 500)


    return (
        <>
            <NavBar />

            {/* Hero Section */}
            <section
                id="hero"
                className="relative min-h-screen w-full flex items-center justify-center 
                bg-cover bg-center overflow-hidden pt-16"
                style={{ backgroundImage: `url(${bgImg})` }}
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
                        Explore Our Journey
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen w-full pt-16 flex flex-col justify-start items-center bg-white text-center">


                <div className="py-3 font-bold text-lg font-urbanist mt-10 mb-3 tracking-widest">
                    ABOUT US <div className="border border-meezanGold mt-1"></div>
                </div>

                <div className="font-messiri text-meezanGold-dark font-semibold mb-3 mx-2 text-4xl md:text-5xl">
                    Excellence, Collaboration, and Sustainability
                </div>

                <div className="justify-center px-10 md:mx-20 md:px-20 mb-6 text-justify">
                    <p className="font-semibold text-gray-500">
                        Our core values shape our approach to tea production, hardware supply, export
                        activities, and our hospitality offerings. Our dedicated leadership team fosters
                        sustainable growth and ensures superior quality and enduring value in all our
                        endeavors by committing to these values.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div
                    className="relative min-h-[70vh] w-full bg-cover bg-center mt-10 bg-fixed rounded-lg flex justify-center items-center"
                    style={{ backgroundImage: `url(${chairImg})` }}
                >
                    <div className="absolute inset-0 bg-black/70 z-0 rounded-lg"></div>

                    <div className="relative z-10 flex flex-col md:flex-row w-full px-4 md:px-0 py-20 text-white">
                        {/* Vision */}
                        <div className="flex-1 p-6 mb-6 group cursor-pointer transition-all duration-500 md:hover:-translate-y-2">
                            <h2 className="text-left uppercase text-xl mb-2 font-poppins text-red md:text-right">
                                Our <br />
                                <span className="font-bold text-5xl text-meezanGold-light font-messiri">Vision</span>
                            </h2>
                            <p className="md:hidden mt-2  text-left">
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                            <p className="hidden md:block text-left md:text-right  text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                        </div>

                        <div className=" md:block border-l border-white mx-4"></div>

                        {/* Mission */}
                        <div className="flex-1 p-6 mb-6 group cursor-pointer transition-all duration-500 md:hover:-translate-y-2">
                            <h2 className="text-left uppercase text-xl mb-2 font-poppins">
                                Our <br />
                                <span className="font-bold text-5xl text-meezanGold-light font-messiri">Mission</span>
                            </h2>
                            <p className="md:hidden mt-2  text-left">
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                            <p className="hidden md:block text-left  text-xl opacity-0 md:group-hover:opacity-100 transition-opacity duration-700">
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section>
                <div className="min-h-screen flex flex-col bg-yellow-200/20  p-7 md:p-10 items-center justify-center">
                    <div className={`${styles.headText} text-center mb-3 `}>
                        Let's hear from <span className="tracking-wide font-messiri text-3xl text-meezanGold-dark"><br /> the chairman</span>
                        <div className="border border-meezanGold mt-2"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="md:px-40 ">
                            <img src="/assets/img/chair.jpg" alt="chairman" className="rounded-lg  shadow-xl " />


                            <div className="flex flex-col md:px-1 px-4 relative  mt-3 w-full">

                                <p className=" text-justify tracking-tighter md:hidden ">
                                    {expanded ? chairMansMEssage : `${prevText}...`}</p>

                                <p className=" text-justify tracking-wider hidden md:block">
                                    {expanded ? chairMansMEssage : `${prevTextDs}...`}</p>

                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className=" flex items-center text-blue-500"
                                >
                                    {expanded ? "View Less" : "View More"}
                                </button>

                                <div className="text-right">
                                    <div className="font-urbanist font-semibold mt-3">Thank you,</div>
                                    <div className="font-urbanist font-semibold text-blue-950 ">Ihithisham Meezan</div>
                                    <div className="font-urbanist  ">Chairman</div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Image grid */}
            <section className="relative min-h-screen bg-red-50/10 flex flex-col p-7 justify-center items-center border overflow-hidden">

            <div className="absolute -bottom-40 md:bottom-0 bg-meezanGold-dark left-0 w-full h-1/2 -z-10 overflow-y-hidden"/>

                <div className={`${styles.headText} text-center mt-5`}> Our <span className="tracking-wide font-messiri text-3xl text-meezanGold-dark"> <br />portfolio </span>
                <div className="border border-meezanGold mt-2 mb-5"></div>
                </div>

                <p className="font-semibold text-gray-500 mx-3 md:px-10 md:mx-40 text-center md:text-center tracking-tighter md:tracking-normal">
                        Our diversified portfolio spans across plantations, hardware, hospitality, and 
                        international trade — each built on a foundation of integrity and excellence. 
                        From nurturing the finest Ceylon tea to delivering high-quality construction materials and
                         providing exceptional guest experiences, every venture reflects our commitment to quality, innovation, and sustainability. 
                         This multi-sector presence enables us to serve communities holistically while continuously creating long-term value for stakeholders.
                </p>

                <div className=" w-full">
                        < PortfolioCarousel/>
                </div>
                 


                

            </section>
        </>
    );
}

export default HomePage;
