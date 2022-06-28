import React, { useState, useContext } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import indicator from "./indicator.json";
import TestContext from "../context/TestContext";

function Middle() {
  const { Unit1, Unit2, Unit3, Finaltest } = useContext(TestContext);
  const stateMenu = [
    { states: Unit1, titles: "Unit 1" },
    { states: Unit2, titles: "Unit 2" },
    { states: Unit3, titles: "Unit 3" },
    { states: Finaltest , titles: "Finaltest" },
  ];
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
        {stateMenu.map((menu) => (
          <div className=' flex-1  '>
            <div
              className={`flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md   rounded-3xl gap-7 ${
                isLaptop && "hover:scale-105"
              }
              `}
            >
              {/* title */}

              <span className=' text-skin-black jus text-3xl font-bold py-3 text-center'>
                {menu.titles}
              </span>

              {/* state */}

              <button
                className={`${
                  indicator[menu.states].theme
                } bg-skin-btn-accent hover:bg-skin-btn-hover  px-2 py-3 rounded-3xl shadow-md `}
              >
                <div className='flex flex-row gap-2 justify-center '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-9 w-9 text-skin-accent   mt-1'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fill-rule='evenodd'
                      d={`${indicator[menu.states].svg}`}
                      clip-rule='evenodd'
                    />
                  </svg>
                  <span className='text-skin-base text-xl font-semibold py-2'>
                    {indicator[menu.states].label}
                  </span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
