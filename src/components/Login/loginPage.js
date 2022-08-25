import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { requireAuth } from "../../pages/utils/requireAuth";

export default function LoginPage() {
  const { data: session } = useSession();


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
        {session ?(
          <button
            className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
            onClick={() => signOut()}
          >
            Sign out
          </button>
        ):(
          <button
            className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
