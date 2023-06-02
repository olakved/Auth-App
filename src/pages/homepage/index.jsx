import React, { useContext, useEffect, useState } from "react";
import homeBg from "../../assets/homeBg.jpg";
import homeBg2 from "../../assets/homeBg2.jpg";
import homeBg3 from "../../assets/homeBg3.jpg";
import salesman from "../../assets/salesman.jpg";
import { useNavigate } from "react-router-dom";
import securityUser from "../../assets/securityUser.png";
import { offerTypes, securityTypes } from "./mockData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Modal from "../../components/modal";
import NewsSect from "./news";
import moment from "moment/moment";
import TrendingNews from "./trendingNews";

function Homepage() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // const changeNavBg = () => {
  //   window.scrollY >= 70 ? setOpen(true) : setOpen(false);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNavBg);
  //   return () => {
  //     window.removeEventListener("scroll", changeNavBg);
  //   };
  // }, []);
  // console.log(open);

  const autoplayOptions = {
    delay: 15000,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <>
      <div className="w-full pt-[75px]">
        <div
          className="w-full h-[530px] overflow-hidden  relative"
          ref={emblaRef}
        >
          <div className="flex h-full w-full ">
            <img
              src={homeBg}
              alt="homeBg"
              className="object-cover min-w-full min-h-full"
            />
            <img
              src={homeBg2}
              alt="homeBg"
              className=" object-cover min-w-full min-h-full"
            />
            <img
              src={homeBg3}
              alt="homeBg"
              className=" object-cover min-w-full min-h-full"
            />
          </div>
          <div className="absolute w-full h-full bg-black opacity-60 top-0"></div>
          <div className="absolute left-0 top-0 text-white mt-[60px] sm:mt-[100px] ml-[40px] p-5 w-[500px] sm:w-full sm:ml-0">
            <h1 className="text-[50px] leading-none sm:text-[35px] ">
              Introducing
            </h1>
            <h1 className="  leading-tight text-[80px] sm:text-[55px] ">
              Kolubo
            </h1>
            <p className="text-[18px]  mt-[10px] sm:text-[16px] ">
              We offer a range of security services, including vulnerability
              assessments, penetration testing, code review, security training,
              and more. We work with businesses of all sizes and industries to
              provide customized security solutions that meet their unique needs
              and requirements
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="mt-[15px] py-[8px] px-[15px] bg-light-col rounded hover:bg-darky-col duration-500"
            >
              Get started
            </button>
          </div>
        </div>

        {/* Modal scroll *IMPORTANT */}

        {/* <div className="relative w-full">
          <div className="absolute top-0 w-full">
            <div className="w-full h-[70px] sticky top-0 z-50">
              <Modal open={open} />
            </div>
          </div>
        </div> */}

        <div className="px-[30px] mt-[30px] flex justify-center gap-[30px] md:gap-[10px] sm:flex-col sm:gap-[30px]">
          {securityTypes?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center px-[10px] text-center"
            >
              <img src={item?.logoUrl} alt="" className="w-10 h-10 mb-[8px]" />
              <p className="text-light-col font-semibold text-[25px] mb-[8px]">
                {item?.title}
              </p>
              <p className="text-light-col ">{item?.text}</p>
            </div>
          ))}
        </div>
        <div>
          <TrendingNews />
          <NewsSect />
        </div>
        <div className="w-full bg-darky-col mt-[0px]">
          <h1 className="font-bold text-center text-white text-[40px] sm:text-[25px]">
            What We Offer
          </h1>
        </div>
        <div className=" px-[60px] mt-[10px] mb-[80px] lg:px-[20px] h-[700px] lg:h-full">
          <div className="flex justify-start items-start sm:flex-col">
            <div className="w-1/2 h-[700px]  sm:w-full sm:h-[400px]">
              <img src={salesman} alt="" className="h-full w-full" />
            </div>
            <div className="px-[30px] sm:mt-[30px]  flex flex-col justify-center gap-[30px] md:gap-[10px] sm:flex-col sm:gap-[30px] w-1/2 sm:w-full ">
              {offerTypes?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center px-[10px] text-center"
                >
                  <img
                    src={item?.logoUrl}
                    alt=""
                    className="w-10 h-10 mb-[8px]"
                  />
                  <p className="text-light-col font-semibold text-[25px] mb-[8px]">
                    {item?.title}
                  </p>
                  <p className="text-light-col px-[60px] md:px-[10px] lg:px-[30px] sm:px-0 ">
                    {item?.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
