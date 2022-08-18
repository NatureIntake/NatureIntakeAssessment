import Head from "next/head";
import LoginPage from "../components/Login/LoginPage";
import Image from "next/image";
export default function login() {
  return (
    // <div classNameNameName="flex flex-col items-center justify-center h-screen w-screen bg-purple-200">
    //   <Head>
    //     <title>Slider Login / Signup</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <LoginPage />
    // </div>

    <div className='bg-white dark:bg-gray-900'>
      <div className='flex justify-center h-screen'>
        <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
          <LoginPage/>
        </div>
        <div
          className='hidden bg-cover lg:block lg:w-7/12'
          style={{
            backgroundImage: `url(https://source.unsplash.com/OyCl7Y4y0Bk)`,

            backgroundRepeat: "no-repeat",
          }}
        >
          <div className='flex items-center justify-center h-full px-20 bg-gray-800 bg-opacity-40'>
            <div className='bg-black/70 p-6 rounded-xl break-words '>
              <h2 className='text-4xl font-bold text-white'>NATURE INTAKE</h2>

              <p className=' text-3xl max-w-sm mt-5 text-gray-300'>
                we make scholars with proud anddsssssssssssssssssssssssss
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
