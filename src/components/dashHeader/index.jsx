import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import user from "../../assets/user.png";

function DashHeader() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shadow-md  w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center bg-white py-4 md:px-10 px-7 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-dark-green">
          <span className="mr-3 ml-8">
            <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
          </span>
          <span className="text-light-col">AUTH</span>
        </div>
        <div className="mr-[50px] md:mr-[20px]">
          <img
            src={user}
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <div
            className={`${
              !open ? "hidden" : ""
            } absolute mt-5  p-[3px] shadow-lg text-[16px] md:text-[12px] bg-white`}
          >
            <p
              className="px-[10px] py-[5px] cursor-pointer"
              onClick={() => {
                {
                  navigate("/profile") ? false : setOpen(!open);
                }
              }}
            >
              Profile
            </p>
            <p
              className="px-[10px] py-[5px] cursor-pointer"
              onClick={() => {
                {
                  navigate("/login") ? false : setOpen(!open);
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
