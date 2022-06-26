import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { CircularProgress, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

const gradeSchema = [
  {
    title: "Unit 1",
    grade: "C",
    marks: "16",
  },
  {
    title: "Unit 2",
    grade: "B",
    marks: "18",
  },
  {
    title: "Unit 3",
    grade: "D",
    marks: "10",
  },
  {
    title: "Final test",
    grade: "B",
    marks: "14",
  },
];
const Color = ["from-black to-gray-900"];

function Card(props) {
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");
  const percentage = 60;

  return (
    <div
      className={`${isLaptop ? "flex flex-row px-1 " : " flex flex-col"} ${
        isTablet && "px-10"
      } px-3 gap-5  `}
    >
      {/* Progress radial */}
      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform  h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
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
                  color: "#00bfa5",
                  borderRadius: "100%",
                  boxShadow: "inset 0 0 0px 22px #f5f5f5",
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
                <Box
                  position='absolute'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                >
                  <CircleIcon
                    sx={{ fontSize: "170px" }}
                    style={{ position: "absolute", color: "#006600" }}
                  />
                  <Typography
                    position='absolute'
                    variant='h2'
                    component='h2'
                    color='white'
                  >
                    {percentage}%
                  </Typography>
                </Box>
              )}
            </Box>
          </div>
        </div>
      </div>

      {/* Marks */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col transform h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
        >
          {/* title */}
          <div className='flex flex-row justify-center px-4 '>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
              Marks
            </span>
          </div>
          {/* ranking */}
          <div className='grid grid-rows-8 gap-4 bg-skin-dull dark:theme-dark px-4 py-5 rounded-2xl'>
            {gradeSchema.map((Grade) => (
              <div className=' shadow-sm  rounded-lg  bg-skin-base dark:theme-dark '>
                <div className='grid grid-cols-3 grid-flow-row font-raleway'>
                  <span className='h-9 py-1 col-span-2 rounded-lg text-white text-center bg-skin-highlight  text-xl font-semibold '>
                    {Grade.title}
                  </span>
                  <span className='h-9 py-1 text-center text-skin-base text-xl font-semibold '>
                    {Grade.marks}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grades */}

      <div className=' flex-1 '>
        <div
          className={`flex flex-col  h-80 cursor-pointer transition duration-200 ease-in-out px-4  py-4 shadow-md border-2 border-skin-muted  rounded-3xl bg-skin-base  dark:bg-gradient-to-bl ${Color[0]}  gap-4 dark:theme-dark ${isLaptop && "hover:scale-105"}`}
        >
          {/* title */}
          <div className='flex flex-row justify-center px-4'>
            <span className=' text-skin-base dark:theme-dark text-3xl font-bold '>
              Grades
            </span>
          </div>
          {/* ranking */}
          <div className=' h-full flex flex-col gap-2  px-3 py-3 rounded-2xl'>
            <div className='  flex flex-row justify-center gap-8 px-3 py-3 shadow-sm  rounded-3xl  bg-skin-dull dark:theme-dark dark:border-2 dark:border-skin-base'>
              <span className=' w-[5.5rem]  h-[5.5rem] flex items-center justify-center  bg-skin-btn-hover dark:theme-dark rounded-3xl bg-opacity-90 text-white text-center font-bold text-5xl shadow-md'>
                58
              </span>
              <span class="flex-none h-full w-2 bg-skin-inverted rotate-12 rounded-3xl shadow-md"></span>
              <span className=' w-[5.5rem]  h-[5.5rem] flex items-center justify-center bg-skin-btn-hover dark:theme-dark rounded-3xl bg-opacity-90 text-white text-center font-bold text-5xl shadow-md'>
                58
              </span>
            </div>
            <div className='flex  justify-center shadow-sm  rounded-3xl  bg-skin-dull dark:theme-dark py-3 '>
            <span className='w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-skin-btn-accent rounded-2xl bg-opacity-90 text-white text-center font-bold text-5xl shadow-md'>
                A
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
