import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { CircularProgress, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

const gradeSchema = [
  {
    title: "Unit 1",
    grade: "A",
  },
  {
    title: "Unit 2",
    grade: "A",
  },
  {
    title: "Unit 3",
    grade: "A",
  },
  {
    title: "Final test",
    grade: "A",
  },
];
const Color = ["from-black to-gray-900"];

function Card(props) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const percentage = 100;

  return (
    <div
      className={`${isLaptop ? "flex flex-row px-1 " : " flex flex-col"} ${
        isTablet && "px-10"
      } gap-5  `}
    >
      {/* Progress radial */}
      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-center px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
              Progress
            </span>
          </div>
          {/* ranking */}
          <div className='bg-skin-dull dark:theme-dark px-4 py-4 rounded-2xl'>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <CircularProgress
                variant='determinate'
                value={percentage}
                position='absolute'
                style={{
                  width: "200px",
                  height: "200px",
                  color: "#006600",
                  borderRadius: "100%",
                  boxShadow: "inset 0 0 0px 22px #9e9e9e",
                  backgroundColor: "transparent",
                }}
                thickness={5}
              />
              {percentage === 100 ? (
                <CheckCircleIcon
                  sx={{ fontSize: "160px" }}
                  style={{ position: "absolute", color: "#00c853" }}
                />
              ) : (
                <CircleIcon
                  sx={{ fontSize: "160px" }}
                  style={{ position: "absolute", color: "#69f0ae" }}
                />
              )}
            </Box>
          </div>
        </div>
      </div>
      {/* Completion */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-between align-between px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold pt-3 '>
              Grades
            </span>
            <span className=' w-14  h-14 flex items-center justify-center  bg-teal-900 dark:theme-dark rounded-2xl bg-opacity-90 text-white text-center font-bold text-3xl shadow-md'>
              A
            </span>
          </div>
          {/* ranking */}
          <div className='grid grid-rows-8 gap-4 bg-skin-dull dark:theme-dark px-4 py-4 rounded-2xl'>
            {gradeSchema.map((Grade) => (
              <div className=' shadow-sm border-skin-base rounded-2xl  bg-skin-base dark:theme-dark '>
                <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                  <span className='h-8 py-1 col-span-2 rounded-2xl text-white text-center bg-skin-highlight  text-xl font-semibold '>
                    {Grade.title}
                  </span>
                  <span className='h-8 py-1 text-center text-skin-base text-xl font-semibold '>
                    {Grade.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marks */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform hover:scale-105 h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark`}
        >
          {/* title */}
          <div className='flex flex-row justify-between align-between px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold pt-3 '>
              Grades
            </span>
            <span className=' w-14  h-14 flex items-center justify-center  bg-teal-900 dark:theme-dark rounded-2xl bg-opacity-90 text-white text-center font-bold text-3xl shadow-md'>
              A
            </span>
          </div>
          {/* ranking */}
          <div className='grid grid-rows-8 gap-4 bg-skin-dull dark:theme-dark px-4 py-4 rounded-2xl'>
            {gradeSchema.map((Grade) => (
              <div className=' shadow-sm border-skin-base rounded-2xl  bg-skin-base dark:theme-dark '>
                <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                  <span className='h-8 py-1 col-span-2 rounded-2xl text-white text-center bg-skin-highlight  text-xl font-semibold '>
                    {Grade.title}
                  </span>
                  <span className='h-8 py-1 text-center text-skin-base text-xl font-semibold '>
                    {Grade.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
