import React from "react";
import Router from "next/router";

export default function submitted() {
 const  handleButton = () =>{
   Router.push("/")
 }
  return (
    <div class='shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto'>
      <div class='w-full h-full text-center'>
        <div class='flex h-full flex-col justify-between'>
          <svg
            class='h-12 w-12 mt-4 m-auto text-green-500'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 13l4 4L19 7'
            ></path>
          </svg>

          <span class='text-gray-800 dark:text-white font-bold'>
            Thank you, User
          </span>
          <span class='text-gray-800 dark:text-white font-bold'>
            The form is already submitted.
          </span>
          <div class='flex items-center justify-between gap-4 w-full mt-8'>
            <button
            onClick={handleButton}
              class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
