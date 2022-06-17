import React from "react";
import SidebarContext from "../assests/context/SidebarContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";

function unittest() {
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "pl-[17rem] px-5" : "pl-[7rem] px-5";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2 mt-16 pt-5 min-h-screen min-w-screen  flex  justify-center   `}
    >
      <div
        className={`flex flex-col  min-h-screen w-screen ${
          isTablet && "gap-10 "
        } ${isLaptop && "gap-14"} gap-12  `}
      >
        <div
          className={` pl-3 flex flex-row flex-none rounded-3xl bg-skin-base shadow-md dark:bg-gradient-to-r from-[#323232] to-[#292929] py-3 w-full justify-center align-middle gap-4 `}
        >
          <div className={` flex flex-col justify-center gap-1`}>
            <div className={` flex items-baseline flex-wrap  gap-2`}>
              <span
                className={`${
                  isLaptop && "text-3xl"
                }  text-2xl text-skin-muted dark:theme-dark font-semibold  `}
              >
                UNIT TEST
              </span>
              <span
                className={` text-3xl text-skin-base dark:theme-dark font-bold capitalize  `}
              >
                neerav garg
              </span>
            </div>
            <span
              className={`${
                isTablet && "text-lg block"
              } text-md text-skin-muted dark:theme-dark italic hidden md:block`}
            >
              Here is all your progress and more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default unittest;
