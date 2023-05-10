import React from "react";

function Modal({ open }) {
  return (
    open && (
      <div className="bg-black  ">
        <p>Modal</p>
      </div>
      //   <div className="relative w-full h-full">
      //     <div className="bg-slate-500 fixed inset-0 bg-opacity-75" />
      //     <p>Modal</p>
      //   </div>
    )
  );
}

export default Modal;
