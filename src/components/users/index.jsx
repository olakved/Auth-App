import React, { useState } from "react";
import blogImg from "../../assets/profileImg.jpg";
import arrowUp from "../../assets/arrowUp.png";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import blogBg from "../../assets/blogBg.jpg";
import searchIcon from "../../assets/Search.png";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "../../components/common/spinner";
import moment from "moment/moment";
import { debounce } from "lodash";
import useDebounce from "../../utils/hooks/debounce";

function UsersPage() {
  const navigate = useNavigate();

  // const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [page, setPage] = useState(1);

  //   const fetchProjects = (page) =>
  //     fetch("https://api.punkapi.com/v2/beers?page=" + page).then((res) =>
  //       res.json()
  //     );

  const fetchProjects = (page) => {
    return axios.get(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=30`
    );
  };

  const {
    isLoading: userLoading,
    isError: isUserError,
    error: userError,
    data: userData,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchProjects(page),
    keepPreviousData: true,
  });

  console.log(userData?.data);

  //   const { isLoading, error, data } = useQuery(["blopposts"], () =>
  //     axios
  //       .get(
  //         "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=982bb4f800184deab23f0a93423b0aea"
  //         // "https://db-kappa-nine.vercel.app/news"
  //         // "http://localhost:3001/news"
  //         // "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=982bb4f800184deab23f0a93423b0aea"
  //       )
  //       .then((res) => res.data)
  //   );

  //   const articles = data?.articles;
  //   console.log(articles);

  // setPosts(data);

  //   const srcValue = data?.filter((value) => {
  //     if (searchTitle === "") {
  //       return value;
  //     } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())) {
  //       return value;
  //     }
  //   });

  //   console.log(data);

  return (
    <div className="p-20 md:px-5">
      <div className=" py-3 px-20 mb-[60px] md:px-5 sm:px-2">
        <div className="flex justify-center">
          <div className="flex items-center gap-[20px] h-[45px] w-[600px] border-b-2 py-1 px-5 md:px-2 sm:px-2 rounded-md border-2 ">
            <img src={searchIcon} alt="" className="sm:py-1 sm:px-3" />
            <input
              type="text"
              onChange={(e) => setSearchTitle(e.target.value)}
              placeholder="Search our blog"
              className="w-full h-full text-[18px] outline-none "
            />
            {/* <button>Search</button> */}
          </div>
        </div>
        <div className="flex justify-center p-2 relative">
          {/* <div
            className={`${
              !searchTitle ? "invisible" : "visible"
            } w-[600px] sm:w-full absolute z-40 bg-white h-[200px] overflow-hidden px-4 scrollbar-thin scrollbar-thumb-darky-col scrollbar-track-gray-100 scrollbar-track-rounded-md scrollbar-thumb-rounded-md overflow-y-auto`}
          >
            {srcValue?.map((item) => (
              <h5
                key={item.id}
                className="py-2 border-b-[1px] cursor-pointer"
                onClick={() => navigate(`/blog/${item?.id}`)}
              >
                {item.title}
              </h5>
            ))}
          </div> */}
        </div>
        <div>
          <h1 className="font-medium text-4xl text-center mt-5 sm:text-2xl text-darky-col">
            Writings from our team
          </h1>
          <p className="mt-3 mb-3 text-center">
            The latest industry news, interviews & technologies.
          </p>
          <img
            src={blogBg}
            alt=""
            className="h-[400px] w-full object-cover sm:h-[250px]"
          />
        </div>
      </div>
      {/* {isLoading ? (
        <div className="flex gap-4">
          <p className="animate-ping rounded-full h-4 w-4 bg-light-green font-extrabold  text-[30px]"></p>
          <div className="absolute top-[50%] bottom-[50%] left-[50%] right-[50%]">
            <Spinner />
          </div>
        </div>
      ) : error ? (
        <p>Error while fetching blog data.</p>
      ) : data ? (
        <div>
          <div
            on
            className="grid grid-cols-3 mt-5 gap-5 lg:grid-cols-2 lg:gap-2 lg:gap-y-6 md:grid-cols-2 md:gap-2 md:gap-y-6 sm:grid-cols-1 cursor-pointer"
          >
            {data?.articles?.map((item, index) => (
              <div
                key={index}
                className=""
                onClick={() => navigate(`/blog/${item?.id}`)}
              >
                <div className=" w-[350px] md:w-full  ">
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
                    <p className="font-bold text-darky-col text-lg line-clamp-2">
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
                    <p className="border-2 border-darky-col rounded-lg px-2 text-[12px] font-bold">
                      Product
                    </p>
                    <p className="border-2 border-darky-col rounded-lg px-2 text-[12px] font-bold">
                      Research
                    </p>
                    <p className="border-2 border-darky-col rounded-lg px-2 text-[12px] font-bold">
                      Frameworks
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null} */}
      <div>
        {userLoading ? (
          "loading Users"
        ) : isUserError ? (
          "error Fetching Users"
        ) : userData ? (
          <div>
            {userData?.data?.map((project) => (
              <p key={project.id}>{project.name}</p>
            ))}
            <div className="mt-4">
              <div>
                <span>Current Page: {page}</span>
              </div>
              <div className="flex gap-[10px]">
                <button
                  onClick={() => setPage((old) => Math.max(old - 1, 1))}
                  disabled={page === 1}
                  className="px-2 py-1 border-2 border-darky-col cursor-pointer"
                >
                  Prev page
                </button>
                <button
                  onClick={() => {
                    if (!isPreviousData) {
                      setPage((old) => old + 1);
                    }
                  }}
                  disabled={userData?.data === ""}
                  className="px-2 py-1 bg-darky-col text-white cursor-pointer"
                >
                  Next page
                </button>
              </div>
              {/* {isFetching ? <span> Loading...</span> : null}{" "} */}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UsersPage;
