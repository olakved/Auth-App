import React, { useContext } from "react";
import homeBg from "../../assets/homeBg.jpg";
import email from "../../assets/email.png";
import password from "../../assets/password.png";
import home from "../../assets/home.png";
import user from "../../assets/user.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { dbUsersData, loginMutation } from "../../utils/hooks/dbUsersData";
import { toastObject } from "../../utils/helper";
import { toast } from "react-toastify";
import { UserContext, pushToLocalStorage } from "../../context/userContext";
import { AllUserContext } from "../../context/allUsers";

function LoginPage() {
  const { fetchData } = useContext(AllUserContext);

  // console.log(userData);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { isLoading, error, data } = dbUsersData();
  // console.log(data);

  const { newUserData, mutate, newUserLoading } = loginMutation("allUsers");

  const formSubmit = (formData) => {
    if (formData.email === "" || formData.password === "") {
      toast.warning("Form field cannot be empty", toastObject());
      return;
    }

    const toSaveObject = data.find(
      (objectData) => objectData.email === formData.email
    );
    pushToLocalStorage(toSaveObject);

    const findObject = data.some(
      (objectData) =>
        objectData.email === formData.email &&
        objectData.password === formData.password
    );

    if (findObject === true) {
      toast.success("login successful", toastObject());
      navigate("/dashboard");
      window.location.reload();
      return;
    }
    if (findObject === false) {
      toast.error("enter correct email / password", toastObject());
      return;
    }

    mutate();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <img src={homeBg} alt="homeBg" className="h-full w-full object-cover" />
      <div className="absolute w-full h-full bg-black opacity-60 top-0"></div>
      <div className="absolute w-[450px] sm:w-full sm:px-[10px]">
        <div className="bg-light-col py-[30px] rounded-lg">
          <p className="text-white font-semibold text-[30px] mb-[5px] text-center">
            Welcome back!
          </p>
          <p className="text-center text-white mb-[10px]">
            login to your account
          </p>
          <form
            className="px-[10px] flex flex-col justify-center"
            onSubmit={handleSubmit(formSubmit)}
          >
            <div className="h-[40px] bg-white rounded-lg mb-[20px] flex items-center px-[10px] ">
              <img src={email} alt="" className="w-5 h-5" />
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email")}
                autoComplete="off"
                className="h-full w-full px-[15px] outline-none bg-transparent"
              />
            </div>
            <div className="h-[40px] bg-white rounded-lg mb-[20px] flex items-center px-[10px] ">
              <img src={password} alt="" className="w-5 h-5" />
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password")}
                autoComplete="off"
                className="h-full w-full px-[15px] outline-none bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="h-[40px] rounded-lg bg-white text-darky-col cursor-pointer"
            >
              Login
            </button>
          </form>
          <div className="flex  justify-center items-center gap-[10px] mt-[20px] px-[10px]">
            <div
              className="w-full flex justify-center items-center bg-darky-col text-white h-[40px] px-[5px] gap-[5px] rounded-lg cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={home} alt="" className="w-5 h-5" />
              <p className="">Home</p>
            </div>
            <div
              className="w-full flex justify-center items-center bg-darky-col text-white h-[40px] px-[5px] gap-[5px] rounded-lg cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              <img src={user} alt="" className="w-5 h-5" />
              <p className="">Signup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
