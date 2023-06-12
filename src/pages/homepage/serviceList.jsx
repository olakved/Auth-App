import React from "react";
import imgA from "../../assets/profileImg.jpg";
import imgB from "../../assets/profileImg2.jpg";
import imgC from "../../assets/salesman.jpeg";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
    icon: <AiOutlineShoppingCart />,
    title: "Digital Design",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "Unlimited Colors",
    subTitle:
      "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    icon: <AiOutlineShoppingCart />,
    title: "Strategy Solutions",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
];

function ServiceList() {
  return (
    <div>
      {/* <p className="mt-[150px] text-red-500">Card Array</p> */}
      <div className="flex sm:flex-wrap justify-center gap-[20px] px-[50px] md:px-[10px] sm:px-[30px] py-[30px] mb-[100px]">
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
