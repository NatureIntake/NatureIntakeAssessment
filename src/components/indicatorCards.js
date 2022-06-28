import React from "react";
import indicator from "../assests/Dashboard/indicator";
import TestContext from "../assests/context/TestContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";

export default function IndicatorCards(props) {

  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const { Unit1, setUnit1, Unit2, setUnit2, Unit3, setUnit3, FinalUnit } =
    React.useContext(TestContext);
  const stateMenu = [
    {index:"1", states: Unit1, titles: "Unit 1" },
    {index:"2", states: Unit2, titles: "Unit 2" },
    {index:"3", states: Unit3, titles: "Unit 3" },
    {index:"4", states: FinalUnit , titles: "Final test" },
  ];
  return (
    <>
      {stateMenu.filter((Menu) => Menu.index <= props.value).map((menu) => (
        <div className=' flex-1  '>
          <div
            className={`flex flex-col transform  h-48 cursor-pointer transition duration-200 ease-in-out px-3 py-4 shadow-md rounded-3xl gap-7 ${
              isLaptop && "hover:scale-105"
            } ${indicator[menu.states].grad}`}
          >
            {/* title */}

            <span className=' text-skin-black jus text-3xl font-bold py-3 text-center'>
              {menu.titles}
            </span>

            {/* state */}

            <button
              onclick='/quiz'
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
    </>
  );
}
