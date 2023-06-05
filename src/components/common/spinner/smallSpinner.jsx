import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

function SmallSpinner(size) {
  const [color, setColor] = useState("#0077d6");

  return (
    <div className="relative w-full h-full">
      <div className="bg-[white] fixed inset-0 bg-opacity-40" />
      <p className="absolute">
        <MoonLoader
          color={color}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    </div>
  );
}

export default SmallSpinner;
