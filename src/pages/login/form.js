import { useState, useContext, useRef } from "react";
import SidebarContext from "../../components/context/SidebarContext";
import useMediaQuery from "../../components/hooks/useMediaQuery";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export default function Form() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  const { Open } = useContext(SidebarContext);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  function srink() {
    return Open ? "pl-[14rem] px-6" : "pl-[4rem] px-6";
  }
  return (
    <div
      className={` ${isLaptop && srink()} ${
        isTablet && "px-10"
      } px-2  mt-16 pt-10 min-h-screen min-w-screen  flex  justify-center`}
    >
      {/* main page */}
      <div class='w-full h-screen font-sans bg-cover bg-landscape'>
        <div class='container flex items-center justify-center flex-1 h-full mx-auto'>
          <div class='w-full max-w-lg'>
            <div class='leading-loose'>
              <form
                class='max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl'
                onSubmit={handleSubmit(submitForm)}
              >
                <p class='mb-8 text-2xl font-light text-center text-white'>
                  Login
                </p>
                <div class='mb-2'>
                  <div class=' relative '>
                    <input
                      type='text'
                      name='firstName'
                      {...register("message", {
                        required: "Required",
                      })}
                      placeholder='First Name...'
                      
                      class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    />
                  </div>
                </div>
              <p> {errors.firstName?.message} </p>

                <div class='mb-2'>
                  <div class=' relative '>
                    <input
                      type='text'
                      name='firstName'
                      {...register("message", {
                        required: "Required",
                      })}
                      placeholder='First Name...'
                   
                      class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    />
                  </div>
                </div>
                
                <div class='flex items-center justify-between mt-4'>
                  <button>
                  <input 
                    type='submit'
                    id='submit'
                    class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                  />
                     
                  
                  </button>
                </div>
                <div class='text-center'>
                  <a class='right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800'>
                    Create an account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
