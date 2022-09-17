import React, { useContext } from "react";
import Link from "next/link";
import indicator from "./Dashboard/indicator";
import TestContext from "./context/TestContext";
import useMediaQuery from "./hooks/useMediaQuery";

export default function IndicatorCards(props) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const { Practice1, Practice2, Practice3, FinalTest } =
    useContext(TestContext);
  const stateMenu = [
    {
      index: "1",
      link: "/quiz/1",
      states: Practice1,
      titles: "UnitTest-1",
    },
    {
      index: "2",
      link: "/quiz/2",
      states: Practice2,
      titles: "UnitTest-2",
    },
    {
      index: "3",
      link: "/quiz/3",
      states: Practice3,
      titles: "UnitTest-3",
    },
    { index: "4", link: "/quiz/4", states: FinalTest, titles: "Final-Test" },
  ];

  const handleLock = (state, link) => {
    return state !== 0 ? link : "";
  };

  return (
    <>
      {stateMenu
        .filter((Menu) => Menu.index <= props.value)
        .map((menu) => (
          <div className=' flex-1  '>
            <div
              className={`flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md rounded-3xl gap-7 ${
                isLaptop && "hover:scale-105"
              } ${indicator[menu.states].grad} ${indicator[menu.states].theme}`}
            >
              {/* title */}

              <span className=' text-skin-black text-3xl font-bold py-3 text-center'>
                {menu.titles}
              </span>

              {/* state */}
              <Link href={handleLock(menu.states, menu.link)}>
                <button
                  className={`${
                    indicator[menu.states].theme
                  } bg-skin-btn-accent hover:bg-skin-btn-hover  px-2 py-3 rounded-3xl shadow-md `}
                >
                  <div className='flex flex-row gap-2 justify-center '>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-9 w-9 text-skin-accent mt-1'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d={`${indicator[menu.states].svg}`}
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='text-skin-base text-xl font-semibold py-2'>
                      {indicator[menu.states].label}
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}