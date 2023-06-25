import React from "react";
import imgA from "../../assets/profileImg.jpg";
import imgB from "../../assets/profileImg2.jpg";
import imgC from "../../assets/salesman.jpeg";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import {
  AiOutlineShoppingCart,
  AiFillGithub,
  AiOutlineBgColors,
  AiOutlineCreditCard,
  AiOutlineCodeSandbox,
  AiOutlineReconciliation,
} from "react-icons/ai";

const serviceName = ["Mariam", "Motun", "Ahmed", "lekan", "Korede"];

const valueString = "false";
const isCheck = false;
console.log(typeof isCheck);
console.log(typeof valueString);

const array2 = [
  {
    socialName: "FaceBook",
    icon: "",
  },
  {
    socialName: "Twitter",
    icon: "",
  },
  {
    socialName: "Instagram",
    icon: "",
  },
  {
    socialName: "TikTok",
    icon: "",
  },
];
const array3 = [
  {
    id: 1,
    firstName: "Motun",
    lastName: "Anifowose",
    address: "Lagos",
    img: imgA,
    icon: <GrFormPrevious />,
  },
  {
    id: 2,
    firstName: "Mariam",
    lastName: "Alagbala",
    address: "Abuja",
    img: imgB,
    icon: <GrFormNext />,
  },
  {
    id: 3,
    firstName: "Lekan",
    lastName: "Michael",
    address: "Ogun",
    img: imgC,
    icon: <AiOutlineShoppingCart />,
  },
];

const cards = [
  {
    icon: <AiFillGithub />,
    title: "Digital Design",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineBgColors />,
    title: "Unlimited Colors",
    subTitle:
      "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    icon: <AiOutlineReconciliation />,
    title: "Strategy Solutions",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineCodeSandbox />,
    title: "Awesome Support",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "Truly Multipurpose",
    subTitle:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
  },
  {
    icon: <AiOutlineCreditCard />,
    title: "Easy to customize",
    subTitle:
      "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
  },
];

function ServiceList() {
  return (
    <div>
      <div className="flex justify-center mb-[50px]">
        <div className="flex flex-col items-center max-w-[700px] text-center">
          <h1 className="text-[40px] sm:text-[25px] font-[500] mb-[20px]">
            OUR SERVICES
          </h1>
          <p className="h-[4px] w-[100px] bg-light-col"></p>
          <p className="text-[15px] leading-[24px] mt-[25px]">
            We craft digital, graphic and dimensional thinking, to create
            category leading brand experiences that have meaning and add a value
            for our clients.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-[20px] gap-y-[40px] px-[50px] md:px-[10px] sm:px-[30px] py-[30px] mb-[100px]">
        {cards.map((item, i) => (
          <div
            key={i}
            className="px-[20px] shadow-md md:px-[10px] py-4 sm:px-[30px]"
          >
            <div className="flex justify-center">
              <p className="bg-light-col shadow-md text-center hover:scale-110 hover:bg-darky-col text-white font-bold text-[50px] md:text-[30px] p-4 rounded-full">
                {item.icon}
              </p>
            </div>
            <p className="text-center mt-[15px] font-bold text-[24px] md:text-[20px]">
              {item.title}
            </p>
            <p className="text-center mt-[15px]  text-[15px] leading-[24px]">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>

      {/* <p className="mt-[150px] text-red-500">People Array</p>
      <div className="flex justify-center gap-[40px]">
        {array3.map((person, id) => (
          <div key={id} className="">
            <img src={person.img} alt="" className="w-[200px] h-[170px]" />
            <p className="px-2 py-1 bg-red-500 text-white">{person.icon}</p>
            <div className="[&>*:nth-child(odd)]:bg-slate-200">
              <p className="px-2 py-2 border-b-2">
                {person.firstName || "NO Name"}
              </p>
              <p className="px-2 py-2 border-b-2">{person.lastName}</p>
              <p className="px-2 py-2 border-b-2">{person.address}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ServiceList;
