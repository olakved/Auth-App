import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/apiCalls";

function DrinksDetails({ open, setOpen, drinkData, drinkDataId }) {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(["beers"], () =>
    getRequest({
      url: `https://api.punkapi.com/v2/beers/${id}`,
    })
  );
  // // const fetchProjects = () => {
  // //   return axios.get(`https://api.punkapi.com/v2/beers/${id}`);
  // // };
  // const drink = data;
  console.log(drinkData);

  // console.log(singleDrink);

  // const singleDrink = drinkData?.filter((obj) => {
  //   return obj.id === drinkDataId;
  // });

  // console.log(singleDrink);

  const closeModal = () => {
    if (open === true) {
      setOpen(!open);
    }
  };
  return (
    open && (
      <div className="fixed top-0 w-full h-full bg-black/30">
        <div className="mt-[100px] flex justify-center">
          <div className="w-[600px] bg-white rounded-md p-[10px]">
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
              <div className="bg-orange-300">
                <p className="text-white">Drinks Details Modal</p>
                {/* <p className="text-white">{item?.name}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default DrinksDetails;
