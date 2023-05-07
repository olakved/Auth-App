import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { UserContext } from "../../context/userContext";
// import DashHeader from "../../components/dashHeader/index";

function AppLayout() {
  const [openUser, setOpenUser] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  return (
    <div className="w-full">
      {/* <DashHeader /> */}
      {/* Header */}
      <div>
        <div className="shadow-md  w-full fixed top-0 left-0 z-50">
          <div className="flex justify-between items-center bg-white py-4 md:px-[20px] px-7 ">
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
                      navigate("/profile") ? false : setOpen(!openUser);
                    }
                  }}
                >
                  Profile
                </p>
                <p
                  className="px-[10px] py-[5px] cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Layout */}
      <div className="overflow-hidden overscroll-none h-screen">
        <div className="flex md:flex-col justify-between mt-[70px] px-[50px] md:px-[10px] sm:px-[0px] relative  h-screen overflow-hidden ">
          <div className="w-[15%] relative md:absolute z-40 md:w-full bg-white">
            <div
              className={`${
                !open ? "md:hidden" : ""
              }  px-[10px] mt-[40px] sm:mt-[10px]`}
            >
              <div className=" rounded-b-lg">
                <p
                  onClick={() => {
                    {
                      navigate("/profile") ? false : setOpen(!open);
                    }
                  }}
                  className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col"
                >
                  Profile
                </p>
                <p
                  onClick={() => {
                    {
                      navigate("coins") ? false : setOpen(!open);
                    }
                  }}
                  className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col"
                >
                  Coins
                </p>
                <p
                  onClick={() => {
                    {
                      navigate("/profile") ? false : setOpen(!open);
                    }
                  }}
                  className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col"
                >
                  Settings
                </p>
              </div>
            </div>
          </div>
          <div className=" pb-[100px] sm:px-5 pt-[10px]   w-full h-full overflow-y-auto scrollbar-hide">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
