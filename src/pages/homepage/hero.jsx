import React, { useEffect, useRef, useState } from "react";
import styles from "./home.module.css";
import heroSmA from "../../assets/heroSmA.png";
import heroSmB from "../../assets/heroSmB.png";
import heroSmC from "../../assets/heroSmC.png";
import heroImg1 from "../../assets/heroImg1.png";
import heroImg2 from "../../assets/heroImg2.png";
import heroImg3 from "../../assets/heroImg3.png";
import appStore from "../../assets/appStore.svg";
import appleIcon from "../../assets/appleIcon.svg";
import googlePlayIcon from "../../assets/googlePlayIcon.svg";
import googlePlay from "../../assets/googlePlay.svg";

const heroData = [
  {
    id: 0,
    img: heroSmA,
  },
  {
    id: 1,
    img: heroSmB,
  },
  {
    id: 2,
    img: heroSmC,
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageData = heroData[currentIndex];
  const progressRefDiv = useRef;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData?.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const rotateLeft = scrollY * -0.01;
  const rotateRight = scrollY * 0.01;

  return (
    <div>
      <div className="max-content">
        <div className="container mt-[60px]">
          <div className="py-[50px] xlsm:pb-0 flex justify-center">
            <div>
              <div className="flex justify-center">
                <div className="w-[750px] md:w-full">
                  <h1 className=" text-[#041E44] font-[900]  text-[60px] md:text-[54px] xlsm:text-[40px] sm:text-[34px]  xlsm:leading-[50px] sm:leading-[42px] leading-[70px] text-center">
                    <span className="text-[#0050C8]">Boost</span> Your Business,
                    Locally & Across Borders
                  </h1>
                  <p className="font-[400]  text-[#434F61] text-[20px] mt-[10px] leading-[30px] xlsm:text-[16px] xlsm:leading-[24px] text-center">
                    From your own resources, grow your company. Maintain
                    constant awareness of your items, clients, and never run out
                    of stock to sell.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-[12px] mt-[25px] sm:flex-wrap">
                <div className="flex justify-center items-center py-[12px] px-[16px] xlsm:w-full rounded-[4px] gap-[12px] bg-[#1f1f1f]">
                  <div className="w-[21px] h-[24px]">
                    <img src={googlePlayIcon} alt="google" />
                  </div>
                  <div className="w-[90px] h-[24px] ">
                    <img src={googlePlay} alt="hero" />
                  </div>
                </div>
                <div className="flex justify-center items-center py-[12px] xlsm:w-full px-[16px] rounded-[4px] gap-[12px] bg-[#1f1f1f]">
                  <div className="w-[21px] h-[24px] ">
                    <img src={appleIcon} alt="apple" />
                  </div>
                  <div className="w-[90px] h-[24px] ">
                    <img src={appStore} alt="apple" />
                  </div>
                </div>
              </div>
              <div className="mt-[60px]">
                <div>
                  <div
                    className={`flex gap-[30px] items-start md:hidden transform ${
                      scrollY > 0
                        ? "transition-transform duration-300 ease-in-out"
                        : ""
                    }`}
                  >
                    <div
                      style={{ transform: `rotate(${rotateLeft}deg)` }}
                      className={`w-[329px] h-[437px] lg:w-[250px] lg:h-[340px] md:w-full z-20 transform ${
                        scrollY > 0 && "mt-[20px] ease-out"
                      } transition-transform duration-300 `}
                    >
                      <img src={heroImg1} alt="hero" />
                    </div>
                    <div className="w-[329px] h-[437px] lg:w-[250px] lg:h-[340px] md:w-full z-30">
                      <img src={heroImg2} alt="hero" />
                    </div>
                    <div
                      style={{ transform: `rotate(${rotateRight}deg)` }}
                      className={`w-[329px] h-[437px] lg:w-[250px] lg:h-[340px] md:w-full z-20 transform ${
                        scrollY > 0 && "mt-[20px] ease-out"
                      } transition-transform duration-300 `}
                    >
                      <img src={heroImg3} alt="hero" />
                    </div>
                  </div>
                </div>
                {/* Mobile STart */}
                <div className="hidden md:block mt-[40px] relative">
                  <div className=" w-full">
                    <div className=" md:w-full md:h-[500px] overflow-hidden xlsm:h-[325px]   rounded-t-[8px] border-[1px] border-[#E6E6E6] b-[#E6E6E6] shadow-md">
                      <div className="w-full h-full ">
                        <img
                          src={imageData?.img}
                          alt="hero"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* ))} */}

                    <div className="flex justify-center">
                      <div className="w-[100%] bg-gray-300 h-[4px] rounded-b-[8px] -mt-[3px] overflow-hidden">
                        <div
                          className={styles.progressDiv}
                          // ref={progressRefDiv}
                        >
                          <div className={styles.progressAction}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:block hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex justify-center mt-[30px]">
                      <div className="flex items-center gap-[5px]">
                        {heroData?.map((item, index) => (
                          <p
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={` ${
                              currentIndex === index
                                ? "h-[4px] w-[48px] rounded-[24px]  bg-[#FFFFFF] "
                                : "h-[4px] w-[16px] rounded-[24px]  border-[1px] bg-[#FFFFFF]"
                            }`}
                          ></p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Mobile End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
