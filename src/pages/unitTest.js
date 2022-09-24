import React from "react";
import useMediaQuery from "../components/hooks/useMediaQuery";
import IndicatorCards from "../components/indicatorCards";
import { requireAuth } from "../components/utils/requireAuth";
import SidebarBehave from "../components/utils/sidebarBehave";

export default function PracticeTest() {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
    <>
      {/* <FormAuth /> */}
      <SidebarBehave>
        {/* main page */}

        <div
          className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
        >
          <div
            className={`flex flex-col h-52   rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center  gap-4  w-full  ${isLaptop &&
              "w-9/12"} 
            ${isTablet && "w-11/12"} 
           `}
          >
            <span
              className={` text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm  dark:theme-dark font-bold capitalize `}
            >
              UNIT TEST
            </span>

            <span
              className={`${isTablet &&
                "text-xl"} text-lg text-skin-muted dark:theme-dark italic `}
            >
              Let's start the Unit test
            </span>
          </div>
          <div
            className={` flex  border-2 border-skin-muted dark:theme-dark  rounded-3xl bg-skin-base dark:bg-gradient-to-bl from-gray-900 to-gray justify-center  w-full px-5 py-5 
              ${isTablet && "px-5 py-10 w-8/12"} 
              ${isLaptop && "px-14 w-7/12"}`}
          >
            {/* selection card */}
            <div
              className={` grid grid-rows-2  gap-8 w-full 
            ${isTablet && "w-10/12"} ${isLaptop && "w-8/12"}`}
            >
              {/* card */}
              <IndicatorCards value='3' />
            </div>
          </div>
        </div>
      </SidebarBehave>
    </>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
