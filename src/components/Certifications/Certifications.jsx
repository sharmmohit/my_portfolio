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
        <section
            className="text-white py-16"
            style={{
                background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)",
            }}
        >
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap items-start px-4"> {/* Added flex-wrap and px-4 */}
                {/* Left Section - Text Content */}
                <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0"> {/* Removed px-6 */}
                    <h2 className="text-3xl font-semibold mb-4">
                        Let me <span className="text-blue-500">introduce</span> myself
                    </h2>
                    <p className="text-lg">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    </p>
                    <p className="text-lg mt-4">
                        I am fluent in classics like C++, Javascript and MERN Stack.
                    </p>
                    <p className="text-lg mt-4">
                        My field of Interest's are building new Web Technologies and Products and also interested in Algorithms.
                    </p>
                    <p className="text-lg mt-4">
                        Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js.
                    </p>
                </div>

                {/* Right Section - Certification Box */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0"> {/* Added mt-8 for spacing */}
                    <div
                        className="rounded-lg p-4 shadow-lg max-w-full md:max-w-[400px]" // Adjusted max-w
                        style={{ background: "linear-gradient(135deg, #121212, #2c2c2c, #121212)" }}
                    >
                        {/* Terminal-like Header */}
                        <div className="flex items-center bg-gray-800 rounded-t-lg p-2">
                            <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500 mr-4"></div>
                            <span className="text-white font-mono text-sm">bash</span>
                        </div>

                        {/* Swiper Certification Carousel */}
                        <div className="p-3">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="mySwiper"
                            >
                                {[cert1, cert2, cert3, cert4].map((cert, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="w-full mx-auto">
                                            <img
                                                src={cert}
                                                alt={`Certificate ${index + 1}`}
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;