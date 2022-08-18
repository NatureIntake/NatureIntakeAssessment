import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import logo from "../../public/images/logo.png";

import useMediaQuery from "../assests/hooks/useMediaQuery";
import Image from "next/image";
import {
  signIn,
  signOut,
  getSession,
  getProviders,
  getCsrfToken,
} from "next-auth/react";

export default function Signin({ csrfToken, providers }) {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const isLaptop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px )");

  const signinUser = async (e) => {
    e.preventDefault();
    let options = { redirect: false, email, password };
    const res = await signIn("credentials", options);
    setMessage(null);
    if (res?.error) {
      setMessage(res.error);
    }
    return Router.push("/signin");
  };

  return (
    <div className='bg-opacity-50 '>
      <div className='flex justify-center h-screen '>
        <div
          className=' bg-cover  lg:block lg:w-2/3'
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className='flex-1 items-center min-h-screen px-20 bg-gray-500 bg-opacity-40'>
            <div>
              <h2 className='text-4xl font-bold text-white'>Brand</h2>
              <p className='max-w-xl mt-3 text-gray-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                inventore veniam expedita ducimus, repellat quis. Ratione sint
                doloremque magni tempora?
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1  items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <div className='flex-1'>
            <div className='text-center'>
              <Image
                // lazyRoot={lazyRoot}
                src={logo}
                alt='Picture of the author'
                width={130}
                height={100}
                priority
              />
              <p className='mt-3 text-gray-500 dark:text-gray-300'>
                Sign in to access your account
              </p>
            </div>
            <div className='mt-8'>
              <form>
                <input
                  name='csrfToken'
                  type='hidden'
                  defaultValue={csrfToken}
                />

                <div>
                  <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    Email Address
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='example@example.com'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </label>
                </div>
                <div className='mt-6'>
                  <div className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                    <label className='text-sm text-gray-600 dark:text-gray-200'>
                      Password
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </label>
                  </div>
                  <a
                    href='#'
                    className='text-sm  text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline '
                  >
                    Forgot password?
                  </a>
                </div>
                <div className='mt-6'></div>
              </form>

              <p className='mt-6 text-sm text-center text-gray-400'>
                {message}
              </p>

              {/* Sign in button */}
              <button
                onClick={(e) => signinUser(e)}
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
