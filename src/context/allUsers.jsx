import { useQuery } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react";
import { getRequest } from "../utils/apiCalls";

export const AllUserContext = createContext({});

export const AllUserProvider = ({ children }) => {
  const { data, isLoading, isError } = useQuery(["allUserCont"], () =>
    getRequest({
      url: "http://localhost:3001/users",
    })
  );

  const fetchData = data?.data;

  return (
    <AllUserContext.Provider value={{ fetchData, isLoading, isError }}>
      {children}
    </AllUserContext.Provider>
  );
};
// export const UserProvider = ({ children }) => {
//   const { data, isLoading, isError } = useQuery(["allUsersCont"], () =>
//     getRequest({
//       url: "http://localhost:3001/users",
//     })
//   );

//   const fetchData = data?.data;

//   return (
//     <DataContext.Provider value={{ fetchData, isLoading, isError }}>
//       {children}
//     </DataContext.Provider>
//   );
// };
