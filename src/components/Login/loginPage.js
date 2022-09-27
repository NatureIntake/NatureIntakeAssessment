import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col bg-white rounded-xl shadow dark:bg-gray-800 md:px-8 lg:px-10 justify-center antialiased '>
      <Image
        src='/images/logo.png'
        width={420}
        height={300}
        quality={80}
        alt='Nature Intake'
      />

      <hr className='-mt-6' />

      <div className='max-auto p-4 justify-center text-center'>
        {session ? (
          <div className='flex flex-col gap-2'>
            <button
              className={`mt-6 w-full px-4 py-2 tracking-wide shadow-md text-white transition-colors duration-200 transform bg-blue-500 rounded-xl hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
            <span className='text-gray-500 dark:text-gray-300'>
              you are Signed-in
            </span>
          </div>
        ) : (
          <div className='flex flex-col gap-2 '>
            <button
              className={`flex w-full mt-6  tracking-wide shadow-md text-white transition-colors duration-200 transform  rounded-2xl justify-center items-center text-center`}
              onClick={() => {
                signIn();
              }}
            >
              <div className=' flex-2 bg-black h-14 w-2/6 rounded-l-2xl  py-3 px-5 sm:px-10'>
                <img
                  src='/images/google.png'
                  alt='google logo'
                  className='w-8 h-8 '
                />
              </div>
              <span className='flex-1 justify-center w-full h-14 bg-blue-500 rounded-r-2xl text-lg py-3 px-5 sm:px-10'>
                Sign in with Google
              </span>
            </button>

            <span className='text-gray-500 dark:text-gray-300 pb-5'>
              Sign-in to access your account
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
