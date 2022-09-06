import { useState, useContext } from "react";
import SidebarContext from "../../assests/context/SidebarContext";
import useMediaQuery from "../../assests/hooks/useMediaQuery";
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
      <div className='container'>
        <div className='Form'>
          <div className='title'>Sign Up</div>
          <div className='inputs'>
            <form onSubmit={handleSubmit(submitForm)}>
              <input
                type='text'
                name='firstName'
                {...register("message", {
                  required: "Required",
                })}
                placeholder='First Name...'
              />
              <p> {errors.firstName?.message} </p>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name...'
                {...register("message", {
                  required: "Required",
                })}
              />
              <p> {errors.lastName?.message} </p>
              <input
                type='text'
                name='email'
                placeholder='Email...'
                {...register("message", {
                  required: "Required",
                })}
              />
              <p> {errors.email?.message} </p>
              <input
                type='text'
                name='age'
                placeholder='Age...'
                {...register("message", {
                  required: "Required",
                })}
              />
              <p> {errors.age?.message} </p>
              <input
                type='password'
                name='password'
                placeholder='Password...'
                {...register("message", {
                  required: "Required",
                })}
              />
              <p> {errors.password?.message} </p>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password...'
                {...register("message", {
                  required: "Required",
                })}
              />
              <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
              <input type='submit' id='submit' />
            </form>
          </div>
        </div>
      </div>

      <div class=' relative '>
        <label for='name-with-label' class='text-gray-700'>
          Email
        </label>
        <input
          type='text'
          id='name-with-label'
          class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
          name='email'
          placeholder='Your name'
        />
      </div>
    </div>
  );
}
