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
      <div className="fixed top-0 w-full h-full bg-black/70">
        <div className="mt-[100px]  flex justify-center">
          <div className="w-[600px] h-[500px] pb-[50px] bg-white rounded-md p-[10px] overflow-hidden scrollbar-thin scrollbar-thumb-light-col scrollbar-track-gray-100 scrollbar-track-rounded-md scrollbar-thumb-rounded-md overflow-y-auto">
            <div className="flex justify-end">
              <div>
                <p
                  onClick={closeModal}
                  className="font-bold px-3 py-1 bg-[red] text-white cursor-pointer mb-2"
                >
                  X
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                {/* <p className="text-white">Drinks Details Modal</p> */}
                <div className="flex justify-between items-center gap-[20px] px-[20px] ">
                  <div className="h-[180px] ml-[60px] w-[30%]">
                    <img
                      src={singleDrink?.image_url}
                      alt=""
                      className="h-full"
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
                <p className="text-darky-col">{singleDrink?.name}</p>
                <p className="text-darky-col">{singleDrink?.name}</p>
                <p className="text-darky-col">{singleDrink?.name}</p>
                <p className="text-darky-col">{singleDrink?.name}</p>
                <p className="text-darky-col">{singleDrink?.name}</p>
                <p className="text-darky-col">{singleDrink?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DrinksDetails;
