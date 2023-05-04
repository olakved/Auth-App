import { data } from "autoprefixer";
import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  const date = new Date().getFullYear();
  // console.log(date);
  return (
    <div className="p-[30px] mt-[20px] bg-darky-col w-full text-white">
      <div className="flex flex-col justify-center items-center  ">
        <p className="text-center text-[40px] leading-none sm:text-[25px] ">
          Together
        </p>
        <p className="text-center text-[40px] mt-[5px] sm:text-[25px]">
          Let's make this work
        </p>
        <div className="flex justify-center h-[45px] w-[600px] sm:w-full mt-[10px]">
          <div className=" flex justify-between items-center gap-[30px] sm:gap-[10px] h-full w-full ">
            <input
              type="text"
              className=" bg-light-col outline-none h-full w-full px-[15px]"
            />
            <button className="bg-white text-darky-col h-full w-[30%] px-[10px] text-[10px] font-semibold">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center gap-[20px] mt-[30px] sm:flex-col  rounded-lg border-2 border-light-col p-[10px]">
          <p>+234 810 080 5056</p>
          <p className="sm:hidden">|</p>
          <p>olakved@gmail.com</p>
          <p className="sm:hidden">|</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[50px] sm:gap-[10px] sm:justify-center">
        <img src={logo} alt="" className="w-10 rounded-full" />
        <p>&#x00A9; {date} Olakved. All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
