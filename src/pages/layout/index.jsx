import React, { useState } from "react";
import DashHeader from "../../components/dashHeader";
import { Outlet, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";

function AppLayout() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <DashHeader />
      <div className="overflow-hidden overscroll-none h-screen">
        <div className="flex md:flex-col justify-between mt-[70px] relative  h-screen overflow-hidden ">
          <div className="w-[15%] relative md:w-full">
            <img
              src={menuIcon}
              alt=""
              onClick={() => setOpen(!open)}
              className="h-[50px] w-[50px] md:h-[30px] md:w-[30px] bg-white absolute cursor-pointer z-40  left-1 top-1 p-[5px] mb-1 invisible md:visible"
            />
            <div className={`${!open ? "md:hidden" : ""} `}>
              <div className="p-2 shadow-md rounded-b-lg md:mt-[50px]">
                <p
                  onClick={() => navigate("/profile")}
                  className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col"
                >
                  Profile
                </p>
                <p
                  onClick={() => navigate("coins")}
                  className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col"
                >
                  Coins
                </p>
                <p className="py-[8px] px-1 text-darky-col bg-white mb-[5px] cursor-pointer hover:bg-slate-100 hover:border-l-2 border-light-col">
                  Settings
                </p>
              </div>
            </div>
          </div>
          <div className="px-[50px] sm:px-5 pt-[10px]   w-full h-full overflow-y-auto scrollbar-hide">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
