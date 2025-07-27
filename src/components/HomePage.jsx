import React, { useState } from "react";
import NavBar from "./NavBar";
import { styles } from "../styles";
import chairImg from '/assets/img/IMG_7068A.jpg';
import bgImg from '/assets/img/bung-02.jpg';
import { chairMansMEssage } from "../constants/text";
import PortfolioCarousel from "./PortfolioCarousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function HomePage() {
    const [expanded, setExpanded] = useState(false);

    const prevText = chairMansMEssage.slice(0, 310)
    const prevTextDs = chairMansMEssage.slice(0, 500)


    return (
        <>
            <NavBar />

            <section
                id="newHero"
                className="relative min-h-screen w-full bg-[url(/assets/img/bung-02.jpg)] bg-cover bg-center "
            >
                <div className="absolute inset-0 bg-slate-900/40 md:bg-slate-900/40  z-0"></div>

                <div className="relative flex z-10 flex-col w-screen h-screen text-white justify-center items-center  px-6 md:px-32 py-32">
                    <div className="flex flex-col items-center justify-center md:justify-end md:items-start   w-full h-full ">
                        <div className="flex flex-row justify-center items-center">
                            <div className=" hidden  md:block h-px w-6 bg-white my-4 mx-2 "></div>
                            <p className="py-3 text-lg  " >Welcome</p>
                        </div>
                        <h1 className=" md:tracking-wide text-5xl text-center md:text-left md:text-6xl font-urbanist font-extrabold ">Explore our <br /><span className=" ">Legacy</span></h1>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row  w-full h-full items-center md:items-end justify-between ">
                        <div className="md:w-[85%] flex flex-row gap-3 ">
                            <a href="" className=""> <img src="/assets/img/tik-tok.png" alt="tiktok-icon " className="h-5 invert hover:-translate-y-1 transition-transform " /></a>
                            <a href="" className=""> <img src="/assets/img/instagram.png" alt="tiktok-icon " className="h-5 invert  hover:-translate-y-1 transition-transform" /></a>
                            <a href="" className=""> <img src="/assets/img/facebook.png" alt="tiktok-icon " className="h-5 invert hover:-translate-y-1 transition-transform" /></a>

                        </div>
                        <div className="flex flex-col text-center justify-start items-center md:justify-end md:items-end md:text-right h-full md:w-[20%]">
                            <p>Discover a century of Ceylon tea mastery,
                                community and sustainability cultivated within
                                Meezan’s mist‑shrouded highland estates.</p>
                            <a href="#about"><p className="pt-3 underline decoration-2 font-semibold hover:text-blue-200" > Discover more</p>    </a>
                        </div>
                    </div>

                </div>


            </section>


            {/* Hero Section */}
            {/* <section
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
            </section> */}

            {/* About Section */}
            <section id="about" className="min-h-screen w-full pt-16 flex flex-col justify-start items-center bg-white text-center">


                <div className="py-3 font-bold text-lg font-urbanist mt-10 mb-3 text-[#778da9] tracking-widest">
                    ABOUT US <div className="border border-mzBlue-borderBl mt-1"></div>
                </div>

                <div className="font-messiri text-[#284b63] font-semibold mb-3 mx-2 text-4xl md:text-5xl">
                    Excellence, Collaboration, and Sustainability
                </div>

                <div className="justify-center px-10 md:mx-20 md:px-20 mb-6 text-justify">
                    <p className="font-semibold text-[#58667e]">
                        Our core values shape our approach to tea production, hardware supply, export
                        activities, and our hospitality offerings. Our dedicated leadership team fosters
                        sustainable growth and ensures superior quality and enduring value in all our
                        endeavors by committing to these values.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div
                    className="group relative min-h-[70vh] w-full bg-cover bg-center mt-10 bg-fixed rounded-lg flex justify-center items-center"
                    style={{ backgroundImage: `url(${chairImg})` }}
                >
                    <div className="absolute inset-0 bg-black/70 z-0 "></div>

                    <div className="relative z-10 flex flex-col md:flex-row w-full px-4 md:px-0 py-20 text-white">
                        {/* Vision */}
                        <div className="flex-1 p-6 mb-6 transition-all duration-500 group-hover:-translate-y-2">
                            <h2 className="text-left uppercase text-xl mb-2 font-poppins md:text-right text-red">
                                Our <br />
                                <span className="font-bold text-5xl text-[#99c1de] font-messiri">Vision</span>
                            </h2>
                            <p className="md:hidden mt-2 text-left">
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                            <p className="hidden md:block text-left md:text-right text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                Cultivate excellence and deliver value across our diverse portfolio,
                                empowering progress in the communities we serve.
                            </p>
                        </div>

                        <div className="block border-l border-white mx-4"></div>

                        {/* Mission */}
                        <div className="flex-1 p-6 mb-6 transition-all duration-500 group-hover:-translate-y-2">
                            <h2 className="text-left uppercase text-xl mb-2 font-poppins">
                                Our <br />
                                <span className="font-bold text-5xl text-[#99c1de] font-messiri">Mission</span>
                            </h2>
                            <p className="md:hidden mt-2 text-left">
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                            <p className="hidden md:block text-left text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                Be a dynamic and respected Sri Lankan conglomerate, renowned for our commitment
                                to quality, innovation, and sustainable development.
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Section 3 */}
            <section>
                <div className="min-h-screen flex flex-col bg-blue-200/20  p-7 md:p-10 items-center justify-center">
                    <div className={`${styles.headText} text-center mb-3 text-[#778da9]`}>
                        Let's hear from <span className="tracking-wide font-messiri text-3xl text-mzBlue-specialText"><br /> the chairman</span>
                        <div className="border border-mzBlue-borderBl mt-2"></div>
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

            {/* porfolio */}
            <section className="relative min-h-screen w-full bg-red-50/10 flex flex-col p-7 justify-center items-center  overflow-hidden">

                <div className="absolute -bottom-40 md:bottom-0 bg-mzBlue-specialText left-0 w-full h-1/2 -z-10 overflow-y-hidden" />

                <div className={`${styles.headText} text-center mt-5`}> Our
                    <span className="tracking-wide font-messiri text-3xl text-mzBlue-specialText"> <br />portfolio </span>
                    <div className="border border-meezanGold mt-2 mb-5"></div>
                </div>

                <p className="font-semibold text-gray-500 mx-3 md:px-10 md:mx-40 text-center md:text-center tracking-tighter md:tracking-normal">
                    Our diversified portfolio spans across plantations, hardware, hospitality, and
                    international trade — each built on a foundation of integrity and excellence.
                    From nurturing the finest Ceylon tea to delivering high-quality construction materials and
                    providing exceptional guest experiences, every venture reflects our commitment to quality, innovation, and sustainability.
                    This multi-sector presence enables us to serve communities holistically while continuously creating long-term value for stakeholders.
                </p>

                <div className=" w-full ">
                    < PortfolioCarousel />
                </div>





            </section>

            <section className="h-60 flex justify-center  items-center text-center  ">

                <div className={`${styles.heroHeadText} text-mzBlue-specialText text-3xl mx-3 drop-shadow-md`}>
                   <h1 className=""> Integrity, Innovation, and Resilience</h1>
                </div>


            </section>

            <section className="w-screen h-auto flex flex-col md:flex-row justify-center bg-fixed bg-cover items-center bg-[url(/assets/img/new-hero-img.png)]  ">

                <div className="flex flex-col justify-center text-white px-16 md:px- py-36 w-full ">
                    {/* <div className="absolute inset-1 bg-slate-900/40 md:bg-slate-900/40  z-0"></div> */}
                    <p className="uppercase">Reach us </p>
                    <h1 className="text-4xl font-black font-urbanist shadow-xl ">We are just <br /> one click away</h1>
                    <div className="flex flex-row">
                        <div className="w-10 h-30 ">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="text-w"><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 128C512 92.7 483.3 64 448 64L192 64zM304 416L336 416C353.7 416 368 430.3 368 448L368 528L272 528L272 448C272 430.3 286.3 416 304 416zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z" /></svg> */}
                        </div>

                    </div>
                </div>

                <div className="flex justify-center items-center w-full bg-blue-200/20 backdrop-blur-sm ">
                    <div className="py-8 lg:py-16 max-w-screen-md text-white md:w-96 w-screen mx-8 items-center" >

                        <h2 className="font-bold text-xl pb-5 uppercase underline font-poppins">Contact form</h2>

                        <form action="#" className="space-y-4 w-full  justify-center items-center">
                            <div className=" ">
                                <label for="email" className="block mb-2 text-md font-semibold ">
                                    Your email
                                </label>
                                <input type="email" id="email" className="shadow-xl bg-gray-50/30 border border-gray-300 text-white  
                                rounded-lg focus:ring-blue-900 focus:border-mzBlue-specialText w-full p-2 placeholder-white/50 font-medium
                                " placeholder="your@email.com" required />
                            </div>
                            <div >
                                <label for="email" className="block mb-2 text-md font-semibold ">
                                    Subject
                                </label>
                                <input type="email" id="email" className="shadow-xl bg-gray-50/30 border border-gray-300 text-white font-medium 
                                rounded-lg focus:ring-blue-900 focus:border-blue-200 w-full p-2 placeholder-white/50
                                " placeholder="Let us know how we can help you..." required />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-md font-semibold">Your message</label>
                                <textarea id="message" rows="6" className="shadow-xl bg-gray-50/30 border border-gray-300 text-white font-medium 
                                rounded-lg focus:ring-blue-900 focus:border-blue-200 w-full p-3 placeholder-white/50
                                "  placeholder="Leave a comment..."></textarea>
                            </div>

                            <button type="submit" class="py-3 px-5 text-sm sm:w-fit hover:bg-blue-800/80 hover:backdrop-blur-sm focus:ring-4 border rounded-full focus:ring-primary-300  
">Send message</button>


                        </form>

                    </div>
                </div>



            </section >

            <footer className="bg-slate-800 text-white py-8 px-4 ">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
                    <div>
                        <img
                        src="/assets/img/meez-logo.png"
                        alt="Logo"
                        className="h-20 py-4 pr-3 flex justify-cen items-center md:pr-3"
                    />
                
                        <p className="mt-2 text-sm text-gray-400">Brewing tradition. Building the future.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about/story">The Meezan Story</a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Our Empire</h4>
                        <ul className="mt-2 space-y-1 text-sm text-gray-300">
                            
                            <li><a href="/plantations">Plantations</a></li>
                            <li><a href="/hardware">Tea Factory</a></li>
                            <li><a href="/hardware">Hardware Division</a></li>
                            <li><a href="/hardware">Hospitality</a></li>
                            <li><a href="/hardware">Education</a></li>
                            <li><a href="/hardware">Hospitality</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Connect</h4>
                        <p className="text-sm text-gray-400 mt-2">Sri Lanka</p>
                        <p className="text-sm text-gray-400">Email: info@meezangroup.lk</p>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500 mt-8">
                    &copy; 2025 Meezan Group. All rights reserved.
                </div>
            </footer>
        


        </>
    );
}

export default HomePage;
