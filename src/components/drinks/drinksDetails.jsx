import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function DrinksDetails({ open, setOpen, drinkData }) {
  const singleDrink = drinkData;
  console.log(singleDrink);

  const closeModal = () => {
    if (open === true) {
      setOpen(!open);
    }
  };
  return (
    open && (
      <div className="fixed top-0 z-40 w-full h-full bg-black/70">
        <div className="mt-[100px]  flex justify-center">
          <div className="w-[600px] h-[500px] pb-[50px] bg-white rounded-md p-[10px] overflow-hidden scrollbar-thin scrollbar-thumb-light-col scrollbar-track-gray-100 scrollbar-track-rounded-md scrollbar-thumb-rounded-md overflow-y-auto">
            <div className="flex justify-end mb-[30px]">
              <div className="fixed">
                <p
                  onClick={closeModal}
                  className="font-bold px-3 py-1 bg-[red] text-white cursor-pointer mb-2 "
                >
                  X
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                {/* <p className="text-white">Drinks Details Modal</p> */}
                <div className="flex justify-between items-center gap-[20px] px-[20px] ">
                  <div className="h-[180px] ml-[60px] sm:ml-[10px] w-[30%] sm:w-[45%]">
                    <img
                      src={singleDrink?.image_url}
                      alt=""
                      className="h-full hover:scale-110"
                    />
                  </div>
                  <div className=" flex flex-col flex-wrap gap-[20px]">
                    <p className="text-darky-col font-bold text-[25px] ">
                      {singleDrink?.name}
                    </p>
                    <p className="text-darky-col">
                      {singleDrink?.contributed_by}
                    </p>
                    <p className="text-darky-col">
                      Prod. Date - {singleDrink?.first_brewed}
                    </p>
                    <p className="text-darky-col ">ID: {singleDrink?.id}</p>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <p className="text-white bg-darky-col text-center font-bold text-[30px] py-1 mb-[10px]">
                    Decsription
                  </p>
                  <p className="px-2 text-center">{singleDrink?.description}</p>
                  <p className="font-bold text-center mt-[20px]">
                    Brewers Tips:
                  </p>
                  <p className="px-2 text-center">
                    {singleDrink?.brewers_tips}
                  </p>
                  <p className="font-bold text-center mt-[20px]">
                    Similar Food Pairing:{" "}
                  </p>
                  <div className="flex justify-center gap-[10px] flex-wrap my-[20px] font-[500]">
                    {singleDrink?.food_pairing?.map((item, i) => (
                      <p
                        key={i}
                        className="text-darky-col bg-slate-100 flex px-2 py-1 cursor-pointer rounded-md"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-bold text-center mt-[20px]">
                    Ingerients:{" "}
                  </p>
                </div>
                <p className="text-darky-col text-center">
                  The product contains the following categories of ingredients
                </p>
                <div className="flex justify-center mt-3 text-white font-bold">
                  <p className="px-2 py-1 bg-light-col text-center">Hops</p>
                </div>
                <div className="mt-4 border-2">
                  {singleDrink?.ingredients?.hops?.map((hopItem, i) => (
                    <div
                      key={i}
                      className="flex justify-center gap-[30px] even:bg-gray-100 py-1"
                    >
                      <p className="text-darky-col font-[600] w-[30%]">
                        {hopItem?.name}
                      </p>
                      <p className="text-darky-col">
                        {hopItem?.amount?.value} - {hopItem?.amount?.unit}
                      </p>
                      <p className="text-darky-col">{hopItem?.attribute}</p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-3 text-white font-bold">
                  <p className="px-2 py-1 bg-light-col text-center">Malt</p>
                </div>
                <div className="mt-4 border-2">
                  {singleDrink?.ingredients?.malt?.map((maltItem, i) => (
                    <div
                      key={i}
                      className="flex justify-center gap-[30px] even:bg-gray-100 py-1"
                    >
                      <p className="text-darky-col font-[600] w-[50%]">
                        {maltItem?.name}
                      </p>
                      <p className="text-darky-col">
                        {maltItem?.amount?.value} - {maltItem?.amount?.unit}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-3 text-white font-bold">
                  <p className="px-2 py-1 bg-light-col text-center">Yeast</p>
                </div>
                <p className="text-darky-col text-center mt-3 border-2">
                  {singleDrink?.ingredients?.yeast}
                </p>

                <div className="flex justify-center mt-3 text-white font-bold">
                  <p className="px-2 py-1 bg-light-col text-center">
                    Methods of Production
                  </p>
                </div>
                <p className="text-darky-col mt-3 leading-[30px] text-center">
                  This product was produced by{" "}
                  <span className="font-[500]">fermentation</span> at the
                  temperature of{" "}
                  {singleDrink?.method?.fermentation?.temp?.value || "100"}{" "}
                  degree {""}
                  {singleDrink?.method?.fermentation?.temp?.unit ||
                    "90"} and{" "}
                  <span className="font-[500]">Mash temperature of</span>{" "}
                  {singleDrink?.method?.mash_temp[0]?.temp?.value ||
                    "more than 100"}{" "}
                  degree {""}
                  {singleDrink?.method?.mash_temp[0]?.temp?.unit ||
                    "unknown"}{" "}
                  {""} for{" "}
                  {singleDrink?.method?.mash_temp[0]?.duration || "unknown"}{" "}
                  {""} hours. This made the master brewer conclude that the
                  product is a twist of{" "}
                  {singleDrink?.method?.twist ||
                    "Honey and the best known resources"}
                </p>

                <p className="text-darky-col mt-5 text-center">
                  Enjoy! {singleDrink?.tagline}!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DrinksDetails;
