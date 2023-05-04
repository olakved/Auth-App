import React from "react";
import error from "../../assets/errorGif3.gif";
import back from "../../assets/back.png";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img src={error} alt="" className=" object-cover relative" />
      <div className="bg-darky-col w-full h-screen absolute opacity-80"></div>
      <div className="absolute top-0 mt-[20%] text-white font-bold text-[40px]">
        <p className="text-[red] text-center">Error 404!</p>
        <p className="text-[20px] mb-3 text-center">page not found</p>
        <div
          className="flex justify-center items-center gap-[15px] cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <img src={back} alt="" className="w-5 h-5" />
          <p className="text-[25px] text-center">Go Back</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
