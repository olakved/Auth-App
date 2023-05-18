import React, { useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";

function Spinner() {
  const [color, setColor] = useState("#0077d6");

  return (
    <div className="relative w-full h-full">
      <div className="bg-[white] fixed inset-0 bg-opacity-20" />
      <p className="absolute">
        <MoonLoader
          color={color}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </p>
    </div>
  );
}

export default Spinner;
