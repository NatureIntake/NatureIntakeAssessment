import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import indicator from "./indicator.json"

const Menu = [
  {
    title: "UNIT 1",
  },
  {
    title: "UNIT 2",
  },
  {
    title: "UNIT 3",
  },
  {
    title: "FINAL",
  },
];

function Middle () {

  const [Completion, setCompletion] = useState(0);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function theme_btn() {
    if (Completion === 0)
      return "bg-gradient-to-tr from-skin-base1 to-skin-base2";
    else if (Completion === 1)
      return "bg-gradient-to-tr from-skin-complete1 to-skin-complete2";
    else if (Completion === 2)
      return "bg-gradient-to-tr from-skin-wrong1 to-skin-wrong2";
  }
  function theme_grad() {
    if (Completion === 0) return "theme-orange";
    else if (Completion === 1) return "theme-green";
    else if (Completion === 2) return "theme-red";
  }
  function theme_title() {
    if (Completion === 0) return "Take test";
    else if (Completion === 1) return "Completed";
    else if (Completion === 2) return "Retake";
  }
  function theme_svg() {
    if (Completion === 0)
      return "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z";
    else if (Completion === 1)
      return "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z";
    else if (Completion === 2)
      return "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z";
  }
  function theme_provider(){
    if (state === 0) return "theme-orange";
    else if (state === 1) return "theme-green";
    else if (state === 2) return "theme-red";
  }

  return (
    <div
      className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  px-1 py-5  ${
        isTablet && "px-5 py-10"
      } ${
        isLaptop && " px-10 "
      }`}
    >
      <div
        className={`${isLaptop ? "grid grid-cols-2 " : "grid grid-rows-2"} w-11/12 gap-8`}
      >
        {Menu.map((menu) => (
        
          <div className=' flex-1  '>
            <div
              className={`flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md dark:theme-dark  rounded-3xl gap-7 ${isLaptop && "hover:scale-105"}
              ${theme_btn()}`}
            >
              {/* title */}

              <span className=' text-skin-black jus text-3xl font-bold py-3 text-center'>
                {menu.title}
              </span>

              {/* state */}

              <button
                className={`${theme_grad()} bg-skin-btn-accent hover:bg-skin-btn-hover  px-2 py-3 rounded-3xl shadow-md `}
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
                      d={`${theme_svg()}`}
                      clip-rule='evenodd'
                    />
                  </svg>
                  <span className='text-skin-base text-xl font-semibold py-2'>
                    {theme_title()}
                  </span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
