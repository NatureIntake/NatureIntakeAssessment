import React from "react";
import SidebarContext from "../assests/context/SidebarContext";
import useMediaQuery from "../assests/hooks/useMediaQuery";
import questions from "../assests/QnA/questions_1.json";
function unittest() {
  const { Open } = React.useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "pl-[17rem] px-8" : "pl-[7rem] px-8";
  }

  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2 mt-16 pt-5 min-h-screen min-w-screen  flex  justify-center   font-raleway`}
    >
      <div
        className={`flex flex-col  min-h-screen w-screen ${
          isTablet && "gap-10 "
        } ${isLaptop && "gap-14"} gap-12  `}
      >
        <div
          className={`flex flex-col rounded-3xl bg-skin-base dark:bg-gradient-to-r from-[#323232] to-[#292929] shadow-md   py-3 px-3 h-52 w-full justify-end text-center  gap-4 pb-10`}
        >
          <span
            className={` text-3xl text-skin-base dark:theme-dark font-bold capitalize`}
          >
            UNIT TEST
          </span>

          <span
            className={`${
              isTablet && "text-lg block"
            } text-md text-skin-muted dark:theme-dark italic `}
          >
            Here is your Unit test, Please atempt all the questions.
          </span>
        </div>

        {/* MCQ */}
        {questions.map((unit) => (
          <div className=' flex flex-col flex-none gap-3 bg-skin-dull dark:theme-dark shadow-sm  rounded-2xl px-3 py-3'>
            <span className='w-10 h-10 p-1 text-center  bg-teal-800 dark:bg-gray-900 rounded-xl bg-opacity-90 text-white  font-bold text-2xl shadow-sm'>
              {unit.index}
            </span>
            <span
              className={` rounded-xl bg-skin-base shadow-sm py-3 px-3 w-full justify-center align-middle text-skin-base text-center `}
            >
              {unit.question}
            </span>

            <div className='grid grid-cols-4 gap-4 shadow-sm  rounded-2xl  bg-skin-base dark:theme-dark py-3 px-3'>
              {questions.options.map((option) => (
                <span className='h-9 py-1 col-span-2 rounded-3xl text-white text-center bg-skin-highlight  text-xl font-semibold '>
                  {option.option}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default unittest;