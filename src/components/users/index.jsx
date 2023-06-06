import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    let filterData = userData?.data.length > 0 ? userData?.data : [];
    if (searchTitle !== "") {
      filterData = userData?.data.filter((item) => {
        return item?.name?.toLowerCase()?.includes(searchTitle?.toLowerCase());
      });
    }
    if (searchTitle !== "") {
      filterData = userData?.data.filter((item) => {
        return item?.first_brewed
          ?.toLowerCase()
          ?.includes(searchTitle?.toLowerCase());
      });
    }

    setDataArray(filterData);
  }, [searchTitle]);

  console.log(dataArray);

  return (
    <div className="p-20 md:px-5">
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
              <div>
                {userData?.data?.map((project) => (
                  <p key={project.id}>{project.name}</p>
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
                <div className="">
                  {isFetching ? (
                    <div>
                      <div className="absolute mb-[70px]  left-[50%] right-[50%]">
                        <SmallSpinner />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default UsersPage;
