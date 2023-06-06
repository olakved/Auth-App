import React, { useEffect, useRef, useState } from "react";
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
import SmallSpinner from "../common/spinner/smallSpinner";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function UsersPage() {
  const navigate = useNavigate();

  const [searchTitle, setSearchTitle] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(1);

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

  //   const srcValue = userData?.data?.filter((value) => {
  //     if (searchTitle === "") {
  //       return value;
  //     } else if (
  //       value?.name?.toLowerCase().includes(searchTitle?.toLowerCase())
  //     ) {
  //     } else if (
  //       value?.first_brewed?.toLowerCase().includes(searchTitle?.toLowerCase())
  //     ) {
  //       return value;
  //     }
  //   });

  const handleChangeValue = (title) => {
    setSearchTitle(title);
  };

  const testRef = useRef(null);
  const scrollToElement = () => testRef.current.scrollIntoView();
  useEffect(() => {
    if (isFetching) {
      scrollToElement();
    }
  }, [isFetching]);

  useEffect(() => {
    let filterData = userData?.data.length > 0 ? userData?.data : [];
    if (searchTitle !== "") {
      filterData = userData?.data.filter((item) => {
        return (
          item?.name?.toLowerCase()?.includes(searchTitle?.toLowerCase()) ||
          item?.first_brewed
            ?.toLowerCase()
            ?.includes(searchTitle?.toLowerCase()) ||
          item?.food_pairing[0]
            ?.toLowerCase()
            ?.includes(searchTitle?.toLowerCase())
        );
      });
    }
    // if (searchTitle !== "") {
    //   filterData = userData?.data.filter((item) => {
    //     return item?.first_brewed
    //       ?.toLowerCase()
    //       ?.includes(searchTitle?.toLowerCase());
    //   });
    // }

    setDataArray(filterData);
  }, [searchTitle]);

  console.log(dataArray);

  return (
    <div ref={testRef} className="p-20 md:px-5">
      <div className=" py-3 px-20 mb-[60px] md:px-5 sm:px-2">
        <div className="flex justify-center">
          <div className="flex items-center gap-[20px] sm:gap-[0px] h-[45px] w-[600px] border-b-2 py-1 px-5 md:px-2 sm:px-2 rounded-md border-2 ">
            <img src={searchIcon} alt="" className="sm:py-1 sm:px-3" />
            <input
              type="text"
              onChange={(e) => handleChangeValue(e.target.value)}
              placeholder="Search name / date brewed e.g 09/2007"
              className="w-full h-full text-[18px] sm:text-[14px] outline-none "
            />
            {/* <button>Search</button> */}
          </div>
        </div>
        <div className="flex justify-center p-2 relative">
          <div
            className={`${
              !searchTitle ? "invisible" : "visible"
            } w-[600px] sm:w-full absolute z-40 bg-white h-[200px] overflow-hidden px-4 scrollbar-thin scrollbar-thumb-darky-col scrollbar-track-gray-100 scrollbar-track-rounded-md scrollbar-thumb-rounded-md overflow-y-auto`}
          >
            {dataArray?.map((item) => (
              <h5
                key={item.id}
                className="py-2 border-b-[1px] cursor-pointer"
                onClick={() => navigate("/")}
              >
                {item.name}
              </h5>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-medium text-[30px] text-center mt-5 sm:text-2xl text-darky-col">
            Paginated Data
          </h1>
          <p className="mt-3 mb-3 text-center">
            Theis page is intergarted to create and use "Paginated" Beer api
            data
          </p>
        </div>

        {/* Loader for when page is clicked pagination below*/}
        <div>
          {isFetching ? (
            <div className="relative">
              <div className="absolute top-[20%]  left-[50%] right-[50%]">
                <SmallSpinner />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div>
        {userLoading ? (
          <div className="flex justify-center">
            <div>
              <Spinner />
            </div>
          </div>
        ) : isUserError ? (
          "error Fetching Users"
        ) : userData ? (
          <div>
            {userData?.data.length === 0 ? (
              <div className="flex justify-center text-[25px] text-center mb-[50px]">
                <div>
                  <p>Nothing else to show</p>
                  <p>
                    Go back to the{" "}
                    <span className="font-bold text-dark-col">
                      previous page
                    </span>{" "}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-[20px]">
                {userData?.data?.map((project) => (
                  <div
                    key={project.id}
                    className=" py-[20px] rounded-md shadow-lg max-w-[415px]"
                  >
                    <div className="flex justify-center">
                      <div className="h-[180px]">
                        <img
                          src={project.image_url}
                          alt=""
                          className="h-full"
                        />
                      </div>
                    </div>
                    <div className="px-[20px]">
                      <p className="text-center font-[500] text-[25px] md:text-[20px] mt-[20px] px-[50px] lg:px-[10px] md:px-3">
                        {project.name}
                      </p>
                      <p className="text-center mt-[10px] font-[500] text-[18px] md:text-[16px]">
                        {project?.tagline}
                      </p>
                      <p className="text-center mt-[20px] text-[18px] md:text-[14px]">
                        {project?.brewers_tips}
                      </p>
                      {/* <div className="bg-darky-col">
                        {project?.food_pairing.slice(0, 3)}
                      </div> */}
                      <div className="bg-white flex gap-[15px] justify-center flex-wrap mt-[20px]">
                        {project?.ingredients?.malt.map((item, i) => (
                          <div className="">
                            <span className="mr-[10px] px-2 py-1 bg-slate-200 text-light-col font-[400] md:text-[14px] rounded-md shadow-md">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center gap-[20px] mt-[25px]">
                        <p className=" px-4 py-2 text-center md:text-[14px] sm:text-[12px] border-2 border-light-col hover:bg-light-col hover:text-white rounded-md">
                          PRODUCT DETAILS
                        </p>
                        <button className="px-4 text-white text-[25px] sm:text-[20px] py-2 bg-light-col rounded-md">
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center relative mt-[40px]">
              <div className="">
                {/* <div className="mb-3 text-center">
                  <span>Current Page: {page}</span>
                </div> */}
                <div className="flex gap-[10px]">
                  <button
                    onClick={() => {
                      if (!isPreviousData) {
                        setPage(1);
                      }
                    }}
                    className="px-2 py-1 bg-darky-col text-white cursor-pointer"
                  >
                    {"<<"}
                  </button>
                  <button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                    className="px-2 py-1 border-2 border-darky-col cursor-pointer"
                  >
                    <GrFormPrevious size={20} />
                  </button>
                  <div className="text-center px-4 py-1 bg-darky-col text-white">
                    <span>{page}</span>
                  </div>
                  <button
                    onClick={() => {
                      if (!isPreviousData) {
                        setPage((old) => old + 1);
                      }
                    }}
                    disabled={userData?.data?.length === 0}
                    className="px-2 py-1 border-2 border-darky-col text-white cursor-pointer"
                  >
                    <GrFormNext size={20} />
                  </button>
                </div>
                {/* <div className="">
                  {isFetching ? (
                    <div>
                      <div className="absolute top-[20%]  left-[50%] right-[50%] bg-[red]">
                        <SmallSpinner />
                      </div>
                    </div>
                  ) : null}
                </div> */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UsersPage;
