import React, { useContext } from "react";
import TestContext from "../components/context/TestContext";
import useMediaQuery from "../components/hooks/useMediaQuery";
import indicator from "../components/Dashboard/indicator";
import { requireAuth } from "./utils/requireAuth";
import SidebarBehave from "./utils/sidebarBehave";
import FormAuth from "./utils/formAuth";

export default function Finaltest() {
  const { FinalTest } = useContext(TestContext);
  const stateMenu = [{ states: FinalTest, titles: "Final-Test" }];
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  return (
    <>
      <FormAuth />
      <SidebarBehave>
        {/* main page */}
        <div
          className={`flex flex-col  w-screen  gap-12 pb-10 px-1 items-center
        ${isTablet && "gap-10 "} ${isLaptop && "gap-14  min-h-screen"} `}
        >
          <div
            className={`flex flex-col h-52 rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] dark:theme-dark shadow-md py-7 items-center justify-end text-center gap-4 w-full  ${
              isLaptop && "w-9/12"
            } 
            ${isTablet && "w-11/12"} 
           `}
          >
            <span
              className={`text-3xl text-skin-base bg-skin-muted border-2 border-skin-base px-3 py-3 w-9/12 rounded-xl shadow-sm dark:bg-zinc-700 font-bold capitalize `}
            >
              FINAL-TEST
            </span>

            <span
              className={`${
                isTablet && "text-xl"
              } text-lg text-skin-muted dark:theme-dark italic`}
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
              className={` flex gap-8 w-full 
            ${isTablet && "w-10/12"} ${isLaptop && "w-8/12"}`}
            >
              {/* card */}
              {stateMenu.map((menu) => (
                <div className=' flex-1  '>
                  <div
                    className={`flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md dark:theme-dark  rounded-3xl gap-7 ${
                      isLaptop && "hover:scale-105"
                    }
                     ${indicator[menu.states].grad}`}
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
