import React, { useState } from "react";
import Quiz from "../components/Quiz";
import SidebarContext from "../assests/context/SidebarContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";

export default function UnitTest() {
  const [mainPage, setmainPage] = useState(1);
 
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "pl-[17rem] px-8" : "pl-[7rem] px-8";
  }

  
  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-12"
      } px-2  min-h-screen min-w-screen  flex flex-col  justify-center   font-raleway`}
    >
      {/* main page */}
      <div
        className={`flex flex-col rounded-3xl bg-skin-base dark:theme-dark shadow-md   py-3 px-3 h-52 w-full items-center justify-end text-center  gap-4 pb-10`}
      >
        <span
          className={` text-3xl text-skin-base bg-zinc-100 px-3 py-3 w-8/12 rounded-xl shadow-sm  dark:bg-zinc-700 font-bold capitalize `}
        >
          UNIT TEST
        </span>

        {mainPage ? (
          <span
            className={`${
              isTablet && "text-xl"
            } text-lg text-skin-muted dark:theme-dark italic `}
          >
            Let's start the Unit test
          </span>
        ) : (
          <span
            className={`${
              isTablet && "text-xl block"
            } text-lg text-skin-muted dark:theme-dark italic `}
          >
            Please atempt all the questions.
          </span>
        )}
      </div>
            
      {/* quiz */}
      <Quiz/>
    </div>
  );
}
