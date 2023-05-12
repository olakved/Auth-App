import React from "react";
import contactBanner from "../../assets/contactBanner.jpg";
import email from "../../assets/email.png";

function ContactPage() {
  return (
    <div>
      <div className="w-full h-[400px] overflow-hidden relative">
        <img
          src={contactBanner}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bg-black w-full h-full opacity-60"></div>
        <p className="absolute top-0 text-white mt-[250px] sm:mt-[200px] ml-[45%] md:ml-[35%] font-semibold text-[30px]">
          Contact Us
        </p>
      </div>
      <div className="py-[50px] px-[100px] sm:px-[10px] flex justify-center items-center md:flex-col gap-5 md:gap-[30px]">
        <div className="w-[60%] md:w-full">
          <p className="font-bold text-light-col text-[25px] mb-[20px]">
            Let’s make the <span className="text-darky-col">world</span> better,
            together
          </p>
          <form className="">
            <div className="flex sm:flex-col gap-[20px] mb-[20px]">
              <input
                type="text"
                placeholder="First Name"
                className="px-[15px] py-[8px] w-full border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-[15px] py-[8px] w-full border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
            </div>
            <div className="flex sm:flex-col gap-[20px] mb-[20px]">
              <input
                type="email"
                placeholder="Email*"
                className="px-[15px] py-[8px] w-full border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
              <input
                type="text"
                placeholder="Phone"
                className="px-[15px] py-[8px] w-full border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
            </div>
            <div className="mb-[20px]">
              <input
                type="text"
                placeholder="Message Title*"
                className="px-[15px] py-[8px] w-full border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
              <textarea
                placeholder="Tell us about it*"
                rows="4"
                className="mt-[20px] px-[15px]  py-2  h-[200px] w-full  border-gray-300 border-2 rounded-md outline-none focus:border-light-col"
              />
            </div>
            <button className="mt-[20px] px-[15px]  py-2 bg-light-col text-white rounded-md shadow-md">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-[40%] md:w-full">
          <div className="flex gap-[10px] rounded-md border-2 p-[20px] mb-[20px]">
            <img src={email} alt="" className="w-[30px] h-[30px]" />
            <div>
              <p className="font-bold mb-[10px]">Contact Us</p>
              <p className="mb-[4px]">Do you have a general question for us?</p>
              <p>info@kolubo.com</p>
            </div>
          </div>
          <div className="flex gap-[10px] rounded-md border-2 p-[20px] mb-[20px]">
            <img src={email} alt="" className="w-[30px] h-[30px]" />
            <div>
              <p className="font-bold mb-[10px]">Location</p>
              <p className="mb-[4px]">Lagos, Nigeria</p>
              <p>London, UK</p>
            </div>
          </div>
          <div className="flex gap-[10px] rounded-md border-2 p-[20px] mb-[20px]">
            <img src={email} alt="" className="w-[30px] h-[30px]" />
            <div>
              <p className="font-bold mb-[10px]">Phone</p>
              <p className="mb-[4px]">NG: 234 810 080 5056</p>
              <p>NG: 234 903 618 8269</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
