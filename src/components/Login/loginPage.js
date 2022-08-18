import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Router from "next/router";

import BtnLogin from "./btnLogin";

const LoginPage = () => {
  const { data: session, status } = useSession()
  useEffect(() => {
    if (session) return Router.push("/");
  }, [session]);

  if (session) return null;
  return (
    <div className='flex-1'>
      <div className='text-center'>
        <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
          Brand
        </h2>

        <p className='mt-3 text-gray-500 dark:text-gray-300'>
          Sign in to access your account
        </p>
      </div>
      <div className='border border-1 max-auto p-4 shadow'>
        {/* <BtnLogin provider={"Google"} bgColor='[#f2573f]' />
        <BtnLogin provider={"Facebook"} bgColor='[#0404be]' /> */}
        <button
          className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
          onClick={() => signIn()}
        >
          Continue with
        </button>
      </div>
    </div>
  );
};

LoginPage.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default LoginPage;
