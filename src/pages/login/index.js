import { useEffect, useContext } from "react";
import LoginPage from "../../components/Login/loginPage";
import Router from "next/router";
import FormContext from "../../components/context/FormContext";
import { getSession } from "next-auth/react";
import Cookies from "js-cookie";

export default function Login({ session }) {
  const { isForm, formData } = useContext(FormContext);

  useEffect(() => {
    if (session) {
      // localStorage.setItem("userId", JSON.stringify(session.user.id));
      Cookies.set("userId", JSON.stringify(session.user.id))
      // console.log(JSON.parse(Cookies.get("userId")));
    }
  });
  useEffect(() => {
    if (session && !isForm) {
      Router.push("/login/form");
    }
  });

  return (
    <>
      <div
        className=' bg-cover bg-center h-screen w-screen '
        style={{
          backgroundImage: `url(https://source.unsplash.com/vblGMzpFvmY)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='flex items-center justify-center h-screen w-screen px-20 bg-gray-800 bg-opacity-30'>
          <div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
            <LoginPage />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
