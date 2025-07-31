import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import cert1 from './physics_wallah.jpg';
import cert2 from './flipkart.jpg';
import cert3 from './aws.jpg';
import cert4 from './accenture.jpg';

const Certifications = () => {
    return (
        <section className="relative overflow-hidden text-white py-16 bg-black">
            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(120)].map((_, i) => {
                    const size = Math.random() * 2;
                    const left = `${Math.random() * 100}%`;
                    const top = `${Math.random() * 100}%`;
                    const opacity = Math.random();
                    const animationDelay = `${Math.random() * 5}s`;
                    const animationDuration = `${5 + Math.random() * 10}s`;
                    
                    return (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left,
                                top,
                                opacity,
                                animation: `twinkle ${animationDuration} infinite ${animationDelay}`,
                            }}
                        />
                    );
                })}
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center px-4 relative z-10">
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Let me <span className="text-blue-400">introduce</span> myself
                    </h2>
                    <div className="space-y-4">
                        <p className="text-lg text-gray-300">
                            I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
                        </p>
                        <p className="text-lg text-gray-300">
                            I am fluent in classics like <span className="text-blue-300">C++</span>, <span className="text-yellow-300">JavaScript</span> and <span className="text-green-300">React.js</span>.
                        </p>
                        <p className="text-lg text-gray-300">
                            My field of interest's are building new <span className="text-purple-300">Web Technologies</span> and <span className="text-blue-300">Products</span>, and also interested in <span className="text-green-300">Large LanguageModels</span>.
                        </p>
                        <p className="text-lg text-gray-300">
                            Whenever possible, I also apply my passion for developing products with <span className="text-green-400">Node.js</span> and modern JavaScript libraries and frameworks like <span className="text-blue-400">React.js</span>.
                        </p>
                    </div>
                </div>

                {/* Right Section - Certification Box - Now Properly Centered */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div
                        className="rounded-lg shadow-xl overflow-hidden w-full max-w-[320px] md:max-w-[380px]"
                        style={{ 
                            background: "rgba(30, 30, 30, 0.7)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(100, 100, 255, 0.2)"
                        }}
                    >
                        {/* Terminal-like Header */}
                        <div className="flex items-center bg-gray-900 p-3 border-b border-gray-700">
                            <div className="flex space-x-2 mr-4">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                            </div>
                            <span className="text-gray-300 font-mono text-xs">certifications --view</span>
                        </div>

                        {/* Swiper Certification Carousel */}
                        <div className="p-2">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{ 
                                    clickable: true,
                                    bulletClass: 'swiper-pagination-bullet bg-gray-600',
                                    bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
                                }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ 
                                    delay: 3000, 
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                                loop={true}
                                className="mySwiper rounded-lg"
                            >
                                {[cert1, cert2, cert3, cert4].map((cert, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full mx-auto">
                                            <img
                                                src={cert}
                                                alt={`Certificate ${index + 1}`}
                                                className="w-full h-auto rounded-md border border-gray-700 shadow-sm"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for the twinkling stars */}
            <style jsx>{`
                @keyframes twinkle {
                    0% { opacity: 0.2; }
                    50% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
                .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    width: 24px;
                    border-radius: 4px;
                }
            `}</style>
        </section>
    );
};

export default Certifications;
