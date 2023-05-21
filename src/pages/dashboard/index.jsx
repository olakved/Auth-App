import React, { useContext } from "react";
import chart from "../../assets/chart.png";
import Barchart from "../../components/charts/barchart";
import LineChart from "../../components/charts/lineChart";
import DonutChart from "../../components/charts/donutChart";
import { UserContext } from "../../context/userContext";

function DashboardPage() {
  const { userData } = useContext(UserContext);
  console.log(userData);

  return (
    <div className="w-full">
      <div>
        <p>
          Welcome, {userData?.firstName} {userData?.lastName}
        </p>
      </div>
      <div className="w-full  flex md:flex-col justify-between gap-[20px] p-[20px]">
        {/* side A */}
        <div className=" w-full flex flex-col gap-[20px]">
          {/* row 1 */}
          <div className="">
            <div className="flex lg:flex-col gap-[30px]">
              <div className="w-[50%] lg:w-full bg-white rounded-md shadow-md  p-[10px]">
                <p className="font-semibold text-darky-col text-[16px] ">
                  Average Revenue
                </p>
                <div className="flex sm:flex-col  justify-between items-end sm:items-start gap-[10px] sm:gap-[20px]">
                  <div>
                    <p className="font-bold text-[30px] md:text-[20px] mb-[5px]">
                      $25,555
                    </p>
                    <div className="flex gap-1 items-center text-[8px]">
                      <p className="px-2 py-1 rounded-sm bg-light-col text-white">
                        20%
                      </p>
                      <p>$20,452</p>
                    </div>
                  </div>
                  <div className="">
                    <Barchart />
                  </div>
                </div>
              </div>
              <div className="w-[50%] lg:w-full bg-white rounded-md shadow-md  p-[10px]">
                <p className="font-semibold text-darky-col text-[16px] ">
                  Average Revenue
                </p>
                <div className="flex sm:flex-col  justify-between items-end sm:items-start gap-[10px] sm:gap-[20px]">
                  <div>
                    <p className="font-bold text-[30px] md:text-[20px] mb-[5px]">
                      $25,555
                    </p>
                    <div className="flex gap-1 items-center text-[8px]">
                      <p className="px-2 py-1 rounded-sm bg-light-col text-white">
                        20%
                      </p>
                      <p>$20,452</p>
                    </div>
                  </div>
                  <div className="">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="w-full bg-white rounded-md shadow-md  p-[10px]">
            <p className="font-semibold text-darky-col text-[16px] ">
              Average Revenue
            </p>
            <div className="flex sm:flex-col  justify-between items-end sm:items-start gap-[10px] sm:gap-[20px]">
              <div>
                <p className="font-bold text-[30px] md:text-[20px] mb-[5px]">
                  $25,555
                </p>
                <div className="flex gap-1 items-center text-[8px]">
                  <p className="px-2 py-1 rounded-sm bg-light-col text-white">
                    20%
                  </p>
                  <p>$20,452</p>
                </div>
              </div>
              <div className="">
                <Barchart />
              </div>
            </div>
          </div>
          {/* row 3 */}
          <div className="w-full bg-white rounded-md shadow-md  p-[10px]">
            <Barchart />
          </div>
          {/* row 4 */}
          <div className="bg-slate-500">line C</div>
        </div>
        {/* side B */}
        <div className="w-[25%] md:w-full md:flex md:flex-col md:justify-center">
          <div className=" flex flex-col w-full  justify-center items-center rounded-md shadow-md bg-white py-[10px] mb-[20px]">
            <p className="font-semibold text-darky-col text-[18px] text-center ">
              Sales by category
            </p>
            <div className="mt-[15px] md:h-full">
              <LineChart />
            </div>
            {/* <div className="text-darky-col"></div> */}
          </div>
          {/* row 2 */}
          <div className=" flex flex-col w-full justify-center items-center rounded-md shadow-md bg-white py-[10px] mb-[20px]">
            <p className="font-semibold text-darky-col text-[18px] text-center ">
              Sales by category
            </p>
            <div className="mt-[15px]">
              <LineChart />
            </div>
            <div className="text-darky-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
