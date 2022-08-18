import React from 'react'
import { signIn } from 'next-auth/react'

const BtnLogin = ({provider, bgColor}) => {
  return (
    <div>
      <button className={`mt-6 w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 `}
    //   style={{ background: ``, color: `${txtColor}`}}
      onClick={() =>signIn("google")}>
        Continue with 
      </button>
    </div>
  )
}


export default BtnLogin