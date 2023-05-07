import React from "react";
import signupBg from "../../assets/homeBg.jpg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postingUrl } from "../../utils/url";
import { toast } from "react-toastify";
import { dbUsersData, signupMutation } from "../../utils/hooks/dbUsersData";
import { toastObject } from "../../utils/helper";
import { v4 as uuidv4 } from "uuid";
import home from "../../assets/home.png";
import user from "../../assets/user.png";

function SignupPage() {
  const patternCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const navigate = useNavigate;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
  });

  const { isLoading, error, data } = dbUsersData();
  // console.log(data);

  const { newUserData, mutate, newUserLoading } = signupMutation("allUsers");

  const submitForm = (formData) => {
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.username === "" ||
      formData.password === "" ||
      formData.phone === ""
    ) {
      toast.warning("Form field cannot be empty", toastObject());
      return;
    }

    const findObject = data.some(
      (objectData) => objectData.email === formData.email,
      (objectData) => objectData.phone === formData.phone,
      (objectData) => objectData.username === formData.username
    );

    if (findObject === true) {
      toast.error("User details already exist", toastObject());
      return;
    }

    const userObject = {
      id: uuidv4(),
      ...formData,
    };
    mutate({ url: postingUrl, data: userObject });
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-between sm:h-full">
      <div className="px-12 md:px-5 py-10 flex flex-col  items-center w-1/2 sm:w-full sm:px-5 sm:py-3 ">
        <div className="w-full ">
          <div className="mb-7 border-b-2 py-3 ">
            <h1 className="text-darky-col text-3xl font-bold mb-3 sm:text-2xl">
              Let's create your account
            </h1>
            <h1>Signup is free!</h1>
          </div>
          <form action="" onSubmit={handleSubmit(submitForm)}>
            <div className="flex gap-2 sm:flex-col">
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                {...register("firstName")}
                autoComplete="off"
                className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                {...register("lastName")}
                autoComplete="off"
                className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="username"
                name="username"
                {...register("username")}
                autoComplete="off"
                className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                {...register("phone")}
                autoComplete="off"
                className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", { pattern: patternCheck })}
              autoComplete="off"
              className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
              autoComplete="off"
              className="border-2 border-darky-col outline-none rounded-md py-2 px-5 w-full mb-4"
            />
            <p className="flex gap-x-3 mb-4 ">
              <input type="checkbox" className="w-7 h-7" />
              <i className="sm:text-[12px]">
                By signing up, I have read and agreed to the Organisation Terms
                and Privacy Policy
              </i>
            </p>

            <button className="bg-darky-col text-white outline-none rounded-md p-2 w-full hover:bg-light-col">
              Sign Up
            </button>
          </form>
          <div className="flex justify-center items-center gap-x-5 mt-5">
            <Link
              to={"/"}
              className="border-2 border-darky-col text-darky-col text-center outline-none rounded-md p-2 w-1/2 hover:bg-darky-col hover:text-white hover:border-darky-col"
            >
              <button>Home</button>
            </Link>
            <Link
              to={"/login"}
              className="border-2 border-darky-col text-darky-col text-center outline-none rounded-md p-2 w-1/2 hover:bg-darky-col hover:text-white hover:border-darky-col"
            >
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center sm:hidden">
        <div className="absolute bg-black/50 w-1/2 h-full"></div>
        <div className="h-screen">
          <img src={signupBg} alt="" className="h-screen object-cover" />
        </div>
        <div className="absolute text-white mt-[25%] ">
          <h1 className="text-[40px] text-center">Create Your Account</h1>
          <h1 className="text-[30px] text-center">It's Free! </h1>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
