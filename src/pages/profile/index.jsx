import React, { useContext, useState } from "react";
import { DataContext } from "../../context/dataProvider";
import profileImg from "../../assets/profileImg.jpg";
import profileBanner from "../../assets/profileBanner.png";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import { dbUsersData, patchMutation } from "../../utils/hooks/dbUsersData";
import { toast } from "react-toastify";
import { postingUrl, updateUrl } from "../../utils/url";
import { toastObject } from "../../utils/helper";
import { v4 as uuidv4 } from "uuid";

function ProfilePage() {
  const { userData } = useContext(UserContext);
  const [isEditMode, setEditMode] = useState(false);

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(!isEditMode);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    occupation: "",
    jobTitle: "",
    homeAddress: "",
    workAddress: "",
  });

  const { isLoading, error, data } = dbUsersData();
  // console.log(data);

  const { patchUserData, mutate } = patchMutation("allUsers");

  const submitForm = (formData) => {
    if (
      formData.occupation === "" ||
      formData.jobTitle === "" ||
      formData.homeAddress === "" ||
      formData.workAddress === ""
    ) {
      toast.warning("Form field cannot be empty", toastObject());
      return;
    }

    const findObject = data.some((objectData) => objectData.id === formData.id);

    if (findObject === true) {
      toast.error("User details already exist", toastObject());
      return;
    }

    const userObject = {
      // id: uuidv4(),
      ...formData,
    };
    mutate({ url: postingUrl, data: userObject });
    console.log(formData);
  };

  return (
    <div>
      <div className="relative">
        <div className="w-full bg-darky-col h-[300px] lg:h-[250px] sm:h-[150px] overflow-hidden">
          <img
            src={profileBanner}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[200px] h-[200px] overflow-hidden sm:w-[120px] sm:h-[120px] xlsm:w-[100px] xlsm:h-[100px] rounded-full border-4 sm:border-2 border-white bg-darky-col absolute left-[60px] sm:left-[40px] -bottom-[100px] sm:-bottom-[50px] ">
          <img src={profileImg} alt="" className="" />
        </div>
      </div>
      {/* <p>{fetchData[1].name}</p> */}
      <div className="mt-[120px] sm:mt-[70px]">
        <div className=" flex justify-center flex-col">
          <div className="m-auto mb-[10px] w-[66%]">
            <div className=" flex justify-end">
              {isEditMode ? (
                <div className="flex gap-2">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-[8px] rounded-[8px] cursor-pointer text-white bg-[red]"
                  >
                    Cancle
                  </button>
                  <button
                    onClick={handleSubmit(submitForm)}
                    className="px-4 py-[8px] rounded-[8px] cursor-pointer text-white bg-green-500"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={handleEdit}
                    className="px-4 py-[8px] rounded-[8px] cursor-pointer text-white bg-light-col"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center px-[40px] md:px-[10px]">
            {isEditMode ? (
              <form className="">
                <div className="border-t-2 pt-[10px] flex justify-center gap-[10px]">
                  <div className="w-full">
                    <p>Occupation</p>
                    <input
                      type="textarea"
                      placeholder="occupation"
                      name="occupation"
                      {...register("occupation")}
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div className="w-full">
                    <p>Job Title</p>
                    <input
                      type="text"
                      placeholder="Job Title"
                      name="jobTitle"
                      {...register("jobTitle")}
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                </div>
                <div className="border-t-2 pt-[10px]">
                  <div>
                    <p>Home Address</p>
                    <input
                      type="text"
                      placeholder="Home Address"
                      name="homeAddress"
                      {...register("homeAddress")}
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div>
                    <p>Work Adress</p>
                    <input
                      type="text"
                      placeholder="Work Address"
                      name="workAddress"
                      {...register("workAddress")}
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div></div>
                </div>
              </form>
            ) : (
              <form>
                <div className="flex justify-between gap-[10px] sm:flex-col">
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    disabled
                    // value={}
                    defaultValue={userData?.firstName}
                    autoComplete="off"
                    className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    defaultValue={userData?.lastName}
                    disabled
                    name="lastName"
                    autoComplete="off"
                    className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Username"
                  defaultValue={userData?.username}
                  disabled
                  name="username"
                  autoComplete="off"
                  className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                />

                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={userData?.email}
                  name="email"
                  disabled
                  autoComplete="off"
                  className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  defaultValue={userData?.phone}
                  name="phone"
                  disabled
                  autoComplete="off"
                  className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                />
                <div className="border-t-2 pt-[10px] flex justify-center gap-[10px]">
                  <div className="w-full">
                    <p>Occupation</p>
                    <input
                      type="textarea"
                      placeholder="occupation"
                      defaultValue={userData?.occupation}
                      name="occupation"
                      disabled
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div className="w-full">
                    <p>Job Title</p>
                    <input
                      type="text"
                      placeholder="Job Title"
                      defaultValue={userData?.jobTitle}
                      name="jobTitle"
                      disabled
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                </div>
                <div className="border-t-2 pt-[10px]">
                  <div>
                    <p>Home Address</p>
                    <input
                      type="text"
                      placeholder="Home Address"
                      defaultValue={userData?.homeAddress}
                      name="homeAddress"
                      disabled
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div>
                    <p>Work Adress</p>
                    <input
                      type="text"
                      placeholder="Work Address"
                      defaultValue={userData?.workAddress}
                      name="workAddress"
                      disabled
                      autoComplete="off"
                      className="border-2 border-darky-col outline-none rounded-md py-2 sm:py-1 px-5 w-full mb-4"
                    />
                  </div>
                  <div></div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
