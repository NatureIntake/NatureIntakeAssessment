import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import IndicatorCards from "../../components/indicatorCards";

function Middle() {
  
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
    <div
      className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  px-1 py-5  ${
        isTablet && "px-5 py-10"
      } ${isLaptop && " px-10 "}`}
    >
      <div
        className={`${
          isLaptop ? "grid grid-cols-2 " : "grid grid-rows-2"
        } w-11/12 gap-8`}
      >
              <IndicatorCards value="5"/>
        
      </div>
    </div>
  );
}

export default Middle;
