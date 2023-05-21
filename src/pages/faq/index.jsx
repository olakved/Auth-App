import React, { useState } from "react";
import faqBg from "../../assets/faqBg.jpg";
import FaqComp from "./faqComp";
import { faq } from "./mockData";
import { BsWhatsapp } from "react-icons/bs";

// const faq = [
//   {
//     id: 1,
//     question: "Is there a free trial available?",
//     answer:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   },
//   {
//     id: 2,
//     question: "Can I upload my plan later?",
//     answer:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   },
//   {
//     id: 3,
//     question: "What is your cancellation policy?",
//     answer:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   },
//   {
//     id: 4,
//     question: "How can I change my email?",
//     answer:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
//   },
// ];

function FaqPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-[75px]">
      <div className="fixed z-40 top-0 left-0 ml-[30px] md:ml-[10px] mt-[400px] md:mt-[300px] bg-[green] p-2 rounded-full shadow-md text-white cursor-pointer">
        <BsWhatsapp />
      </div>
      <div className="w-full h-[350px] sm:h-[250px] overflow-hidden relative">
        <img src={faqBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 bg-black w-full h-full opacity-80"></div>
        <p className="absolute top-0 text-white mt-[150px] sm:mt-[80px] ml-[45%] md:ml-[35%] font-semibold text-[30px]">
          FAQs
        </p>
      </div>
      <div className="flex justify-center py-[30px]">
        <div className="sm:w-full">
          <div className="mb-[50px] mt-[30px] text-center">
            <h2 className="font-[400] text-[40px] md:text-[25px] leading-[40px] mb-[10px]">
              Frequently asked questions
            </h2>
            <p className="">Have questions? we are ready to help</p>
          </div>
          {faq?.map((que) => (
            <div
              key={que?.id}
              className="w-[700px] md:w-[500px] sm:w-full px-2 py-2"
            >
              <div>
                <FaqComp detail={que} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
