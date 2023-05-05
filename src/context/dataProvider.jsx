import { useQuery } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react";
import { getRequest } from "../utils/apiCalls";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data, isLoading, isError } = useQuery(["queryCoins"], () =>
    getRequest({
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
    })
  );

  const fetchData = data?.data;

  return (
    <DataContext.Provider value={{ fetchData, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};
