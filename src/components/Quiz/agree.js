import React, { useContext } from "react";
import TestContext from "../context/TestContext";
import { useRouter } from "next/router";
import useMediaQuery from "../hooks/useMediaQuery";

export default function agree() {
  const Router = useRouter();
  const { setisAgreed } = useContext(TestContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  return (
    <div
      className={`flex flex-col  rounded-3xl bg-skin-base dark:bg-[#202020] dark:theme-dark shadow-md py-8 items-center justify-center text-center  gap-8  h-5/6 w-full sm:w-11/12 md:w-9/12 px-2`}
    >
      <span
        className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base py-3 w-full rounded-xl shadow-sm  dark:theme-dark font-bold capitalize `}
      >
        NOTICE
      </span>
      {/* content */}
      <div
        className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full px-5 py-5 
              ${isTablet && "px-5 py-10 w-9/12"} 
              ${isLaptop && "px-14 w-7/12"}`}
      >
        <ul className='list-disc space-y-3 sm:space-y-5 md:text-lg sm:px-2 text-skin-base dark:theme-dark'>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
          <li>
            Now this is a story all about how, my life got flipped-turned upside
            down
          </li>
        </ul>
      </div>
      {/* button */}
      <div className='mt-7 px-3 sm:px-5 md:px-8 flex justify-between w-full sm:w-8/12 md:w-7/12'>
        <button
          type='button'
          className='inline-flex justify-center rounded-2xl border border-transparent px-5 py-2 text-sm font-bold shadow-sm text-skin-base dark:theme-dark bg-skin-hue hover:bg-skin-hue-hover dark:bg-skin-gold  dark:hover:bg-skin-gold-hover  focus:outline-none focus-visible:ring focus-visible:ring-amber-500 focus-visible:ring-opacity-75'
          onClick={() => {
            Router.push("/");
          }}
        >
          Not, now
        </button>
        <button
          type='button'
          className='inline-flex justify-center rounded-2xl border border-transparent px-4 py-2 text-sm font-bold text-white dark:theme-dark bg-skin-btn-mt hover:bg-skin-btn-mt-hover focus:outline-none focus-visible:ring focus-visible:ring-cyan-600 focus-visible:ring-opacity-75'
          onClick={() => {
            setisAgreed(true);
          }}
        >
          Start, Test
        </button>
      </div>
    </div>
  );
}
