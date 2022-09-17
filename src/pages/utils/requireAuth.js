import { getSession } from "next-auth/react";

export const requireAuth = async (context, cb) => {
  console.log('call auth')
  const session = await getSession(context);

  try{
    return cb({ session });
  } catch(err) {
    return {
      redirect: {
        destination: session ? "/" : "/login",
        permanent: false,
      },
    };
  }
};
