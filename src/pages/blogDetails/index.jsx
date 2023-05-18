import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import logo from "../../assets/logo.png";
import blogBg from "../../assets/blogBg.jpg";
import { getRequest } from "../../utils/apiCalls";
import { CiCalendarDate, CiStopwatch } from "react-icons/ci";
import { AiOutlineArrowLeft } from "react-icons/ai";
import moment from "moment";

function BlogDetails() {
  const { id } = useParams();
  //   const blogid = id;
  const navigate = useNavigate();

  //   console.log(blogid);

  const { data, isLoading, isError } = useQuery(["blog"], () =>
    getRequest({
      url: `https://db-kappa-nine.vercel.app/news/${id}`,
    })
  );

  // console.log(data);

  const news = data?.data;
  // const post = data?.data?.content;
  // console.log(post);

  return (
    <div className="py-[20px] md:py-[30px] px-[30px] md:px-[10px]">
      <div className="flex">
        <p
          className="mt-[100px] text-white cursor-pointer px-4 py-1 bg-darky-col"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft size={30} />
        </p>
      </div>
      <div className="flex px-[200px] lg:px-[40px] sm:px-[10px] pt-[50px] pb-[30px]">
        <div className="">
          <p className="font-bold text-[30px] sm:text-[20px]">{news?.title}</p>
          <p className="mt-5 flex items-center">
            <span className="mr-8 sm:mr-[20px] flex items-center gap-[5px]">
              <CiCalendarDate size={20} />{" "}
              {moment(news?.publishedAt).startOf("hour").fromNow()}
            </span>
            <span className="flex items-center gap-[5px]">
              <CiStopwatch size={20} /> 2 mins read
            </span>
          </p>
          <img
            src={news?.urlToImage || blogBg}
            alt="bg"
            className="mt-5 h-[500px] sm:h-[300px]"
          />
          <div>
            <p className="mt-5 ">Author: {news?.source?.name}</p>
          </div>
          <div className="mt-5">
            <p className="tracking-normal leading-[34px] text-justify text-[18px] sm:text-[14px]">
              {news?.content}
            </p>
          </div>
          <div className="flex justify-center mt-[80px]">
            <div>
              <p className="font-bold">Was this article helpful?</p>
              <div className="flex justify-center gap-[20px] mt-2">
                <p className="border-light-col border-2 hover:border-darky-col rounded-md px-2 py-1 cursor-pointer">
                  Yes
                </p>
                <p className="border-light-col border-2 hover:border-darky-col rounded-md px-2 py-1 cursor-pointer">
                  No
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
