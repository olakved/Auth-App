import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";
import user from "../../assets/user.png";
import { UserContext } from "../../context/userContext";

function Header() {
  const links = [
    { name: "HOME", link: "/" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT", link: "/about" },
    { name: "FAQ", link: "/faq" },
  ];

  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const navigate = useNavigate();

  const { userData } = useContext(UserContext);
  const { logout } = useContext(UserContext);

  return (
    <div className="shadow-md  w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center bg-[white] py-4 md:px-10 pr-[95px] md:flex-col">
        <div className="font-bold text-2xl cursor-pointer flex items-center sm:mr-[40px]">
          <span className="mr-3 ml-8">
            <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
          </span>
          <span className="text-light-col">Kolubo</span>
        </div>
        <div className={`${!open ? "md:hidden" : ""}`}>
          <ul
            className="flex gap-5 md:items-center md:flex-col md:pb-0 mr-5 md:mt-5 md:static bg-white  md:w-auto  transition-all duration-500 ease-in ${
            "
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-l text-light-col hover:text-gray-400 duration-500 md:my-0 my-2"
              >
                <Link
                  to={link.link}
                  onClick={() => {
                    navigate() ? false : setOpen(!open);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {userData ? null : (
              <Link to="/login">
                <button className="bg-extra-col text-xl text-white py-[3px] px-6 rounded-md ml-6 hover:bg-darky-col duration-500">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
        <div className="absolute -right-2 md:right-10 md:top-8 sm:top-[25px] flex items-center">
          {userData ? (
            <div className="mr-[60px] md:mr-[40px] sm:mr-[20px]  rounded-full  ">
              <img
                src={user}
                alt=""
                className="w-5 h-5 cursor-pointer"
                onClick={() => setOpenUser(!openUser)}
              />
              <div
                className={`${
                  !openUser ? "hidden" : ""
                }  p-[3px] shadow-lg text-[16px] md:text-[12px] absolute bg-white`}
              >
                <p
                  className="px-[10px] py-[5px] cursor-pointer"
                  onClick={() => {
                    {
                      navigate("/dashboard") ? false : setOpen(!openUser);
                    }
                  }}
                >
                  Profile
                </p>
                <p
                  className="px-[10px] py-[5px] cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </p>
              </div>
            </div>
          ) : null}
          <div
            className=" cursor-pointer invisible md:visible "
            onClick={() => setOpen(!open)}
          >
            <img src={menuIcon} alt="" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
