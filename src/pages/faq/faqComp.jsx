import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

function FaqComp({ detail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 border-b-2 shadow-md px-2 w-full">
      <div className="flex justify-between items-center mb-[10px]">
        <p className="font-semibold  text-[18px]">{detail?.question}</p>
        <p onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? <CiCircleMinus size={20} /> : <CiCirclePlus size={20} />}
        </p>
      </div>
      <div
        className={`${
          !open ? "hidden" : ""
        } text-light-col text-[14px] text-justify`}
      >
        <p className="px-[10px]">{detail?.answer}</p>
      </div>
    </div>
  );
}

export default FaqComp;
