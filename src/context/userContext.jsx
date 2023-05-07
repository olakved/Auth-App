import { useQuery } from "@tanstack/react-query";
import { createContext, useState, useEffect } from "react";
import { getRequest, patchRequest } from "../utils/apiCalls";
import { useNavigate } from "react-router-dom";
import { postingUrl } from "../utils/url";

export const UserContext = createContext({});

export function pushToLocalStorage(data) {
  //   const timestamp = new Date().getTime().toString();
  localStorage.setItem("savedUser", JSON.stringify(data));
}

const getUser = () => {
  const savedUser = localStorage.getItem("savedUser");
  const user = JSON.parse(savedUser);
  return { user };
};

const { user } = getUser();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(user);

  const navigate = useNavigate();
  //   console.log(userData.name);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, logout }}>
      {children}
    </UserContext.Provider>
  );
};
