import { useSession, signIn, signOut } from "next-auth/react";
import { requireAuth } from "../utils/requireAuth";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className='flex-1'>
      <div className='text-center'>
        <img src='images/logo.png' alt='Nature Intake' className='h-30 w-30' />
      </div>
      <div className='max-auto p-4 justify-center text-center'>
        {session ? (
          <>
            <span className='mt-3 text-gray-500 dark:text-gray-300'>
              Sign in successful
            </span>
            <button
              className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <span className='mt-3 text-gray-500 dark:text-gray-300'>
              Sign in to access your account
            </span>
            <button
              className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
              onClick={() => {
                signIn();
              }}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  );
}


