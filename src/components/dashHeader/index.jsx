import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";
import menuIcon from "../../assets/menuIcon.png";

function DashHeader() {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const navigate = useNavigate();

  return (
    // <div className="shadow-md  w-full fixed top-0 left-0 z-50">
    //   <div className="flex justify-between items-center bg-white py-4 md:px-10 px-7 ">
    //     <div className="font-bold text-2xl cursor-pointer flex items-center text-dark-green">
    //       <span className="mr-3 ml-8">
    //         <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
    //       </span>
    //       <span className="text-light-col">AUTH</span>
    //     </div>
    //     <div className="mr-[50px] md:mr-[20px]">
    //       <img
    //         src={user}
    //         alt=""
    //         className="w-5 h-5 cursor-pointer"
    //         onClick={() => setOpen(!open)}
    //       />
    //       <div
    //         className={`${
    //           !open ? "hidden" : ""
    //         } absolute mt-5  p-[3px] shadow-lg text-[16px] md:text-[12px] bg-white`}
    //       >
    //         <p
    //           className="px-[10px] py-[5px] cursor-pointer"
    //           onClick={() => {
    //             {
    //               navigate("/profile") ? false : setOpen(!open);
    //             }
    //           }}
    //         >
    //           Profile
    //         </p>
    //         <p
    //           className="px-[10px] py-[5px] cursor-pointer"
    //           onClick={() => {
    //             {
    //               navigate("/login") ? false : setOpen(!open);
    //             }
    //           }}
    //         >
    //           Login
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="shadow-md  w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center bg-white py-4 md:px-[20px] px-7 ">
        {/* <div className="flex items-center">
            <img
              src={menuIcon}
              alt=""
              onClick={() => setOpen(!open)}
              className="h-[50px] w-[50px] md:h-[20px] md:w-[20px] bg-white absolute cursor-pointer  invisible md:visible"
            />
          </div> */}
        <div className="font-bold text-2xl cursor-pointer flex items-center text-dark-green">
          <span className="md:mr-[50px] flex items-center">
            <img
              src={menuIcon}
              alt=""
              onClick={() => setOpen(!open)}
              className="h-[50px] w-[50px] md:h-[20px] md:w-[20px] bg-white absolute cursor-pointer  invisible md:visible"
            />
          </span>

          <span className="mr-3 ml-8">
            <img
              src={logo}
              alt="logo"
              className="rounded-full w-10 h-10 sm:h-[30px] sm:w-[30px]"
            />
          </span>
          <span className="text-light-col sm:text-[20px]">AUTH</span>
        </div>
        <div className="mr-[50px] md:mr-[40px]">
          <img
            src={user}
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={() => setOpenUser(!openUser)}
          />
          <div
            className={`${
              !openUser ? "hidden" : ""
            } absolute mt-5  p-[3px] shadow-lg text-[16px] md:text-[12px] bg-white`}
          >
            <p
              className="px-[10px] py-[5px] cursor-pointer"
              onClick={() => {
                {
                  navigate("/dashboard") ? false : setOpen(!openUser);
                }
              }}
            >
              Profile
            </p>
            <p
              className="px-[10px] py-[5px] cursor-pointer"
              onClick={() => {
                {
                  navigate("/login") ? false : setOpen(!openUser);
                }
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashHeader;
