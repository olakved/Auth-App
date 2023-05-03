import React from "react";
import homeBg from "../../assets/homeBg.jpg";
import { useNavigate } from "react-router-dom";
import securityUser from "../../assets/securityUser.png";
import { securityTypes } from "./mockData";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-[75px]">
      <div className="w-full h-[530px]  relative">
        <img src={homeBg} alt="homeBg" className="h-full w-full object-cover" />
        <div className="absolute w-full h-full bg-black opacity-60 top-0"></div>
        <div className="absolute left-0 top-0 text-white mt-[60px] ml-[40px] p-5 w-[500px] sm:w-[400px] sm:ml-0">
          <h1 className="text-[50px] leading-none sm:text-[35px] ">
            Introducing
          </h1>
          <h1 className="  leading-tight text-[80px] sm:text-[55px] ">Auth</h1>
          <p className="text-[18px]  mt-[10px] ">
            We offer a range of security services, including vulnerability
            assessments, penetration testing, code review, security training,
            and more. We work with businesses of all sizes and industries to
            provide customized security solutions that meet their unique needs
            and requirements
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-[15px] py-[8px] px-[15px] bg-light-col rounded hover:bg-darky-col duration-500"
          >
            Get started
          </button>
        </div>
      </div>
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
      <div className="px-[30px]">
        <div></div>
        <p className="text-darky-col">Homepage</p>
      </div>
    </div>
  );
}

export default Homepage;
