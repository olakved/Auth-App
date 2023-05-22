import React from "react";
import blogImg from "../../assets/profileImg.jpg";
import arrowUp from "../../assets/arrowUp.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import blogBg from "../../assets/blogBg.jpg";
import searchIcon from "../../assets/Search.png";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

function NewsSect() {
  const { isLoading, error, data } = useQuery(["blopposts"], () =>
    axios.get("https://db-kappa-nine.vercel.app/news").then((res) => res.data)
  );

  // console.log(data);

  const navigate = useNavigate();

  return (
    <div className="px-20 py-10 md:px-5">
      <div className="flex justify-center">
        <div className="w-[800px] md:w-full bg-darky-col">
          <p className="font-semibold text-white text-center text-[30px] sm:text-[20px]">
            News
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="flex gap-4">
          <p className="animate-ping rounded-full h-4 w-4 bg-light-green font-extrabold  text-[30px]"></p>
          <p className="font-bold ">loading...</p>
        </div>
      ) : error ? (
        <p>Error while fetching blog data.</p>
      ) : data ? (
        <div>
          <div className="grid grid-cols-3 mt-5 gap-5 lg:grid-cols-2 lg:gap-2 lg:gap-y-6 md:grid-cols-2 md:gap-2 md:gap-y-6 sm:grid-cols-1">
            {data?.slice(0, 3)?.map((item, index) => (
              <div key={index} className="">
                <div
                  className=" w-[350px] md:w-full cursor-pointer"
                  onClick={() => navigate(`/blog/${item?.id}`)}
                >
                  <div className="h-[220px]">
                    <img
                      src={item?.urlToImage || blogImg}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-3 mb-2">
                    <span className="mr-2 text-sm font-bold text-dark-green">
                      {item?.author || `News Source: ${item?.source?.name}`}
                    </span>
                    <span className="mr-2 font-bold ">.</span>
                    <span className="text-sm font-bold">
                      {moment(item?.publishedAt).format("MMM Do YY")}
                    </span>
                  </p>

                  <div className="flex justify-between items-center mb-2">
                    <p className="font-bold text-lg line-clamp-2">
                      {item?.title}
                    </p>
                    <img src={arrowUp} alt="" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </div>
                  <div className="mt-3 flex gap-x-2">
                    <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                      Product
                    </p>
                    <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                      Research
                    </p>
                    <p className="border-2 border-gray-800 rounded-lg px-2 text-[12px] font-bold">
                      Frameworks
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div
        className="flex justify-center mt-[30px]"
        onClick={() => navigate("/blog")}
      >
        <div className="px-5 py-1 bg-light-col hover:bg-darky-col cursor-pointer rounded-md shadow-md">
          <p className="font-semibold text-white text-center text-[20px] sm:text-[14px]">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsSect;
