import React from "react";
import SidebarContext from "../context/SidebarContext";
import useMediaQuery from "../hooks/useMediaQuery";
import Card from "./Card";
import Middle from "./Middle";
import { useSession } from "next-auth/react";

export default function DashBoard() {
  const { data: session } = useSession();
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  
  
  function greet() {
    var data = [
        [0, "Studying late,"],
        [18, "Good evening,"],
        [12, "Good afternoon,"],
        [8, "Good morning,"],
        [4, "Studying early,"],
      ],
      hr = new Date().getHours();
    for (var i = 0; i < data.length; i++) {
      if (hr >= data[i][0]) {
        return data[i][1];
      }
    }
  }
  function srink() {
    return Open ? "pl-[17rem] px-6" : "pl-[7rem] px-6";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-16 py-10 min-h-screen min-w-screen  flex  justify-center  `}
    >
      <div
        className={`flex flex-col  min-h-screen w-screen 
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14"} gap-10  `}
      >
        {/* profile badge */}
        <div
          className={` pl-3 flex flex-row flex-none rounded-3xl bg-skin-base shadow-md dark:bg-gradient-to-r from-[#323232] to-[#292929] py-3 w-full justify-center align-middle gap-4 `}
        >
          <img
            src= {session?.user.image}
            alt='user img'
            className={` w-20 h-20 shadow-md dark:theme-dark justify-center align-middle rounded-full object-cover`}
          />
          {/* Greet text*/}
          <div className={` flex flex-col justify-center gap-1`}>
            <div className={` flex items-baseline flex-wrap  gap-2`}>
              <span
                className={`${
                  isLaptop && "text-3xl"
                }  text-2xl text-skin-muted dark:theme-dark font-semibold  `}
              >
                {greet()}
              </span>
              <span
                className={` text-3xl text-skin-base dark:theme-dark font-bold capitalize  `}
              >
                {session?.user.name}
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
        <div className={` px-1 md:px-24 lg:px-6 xl:px-20`}>
          <Middle />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}
