// import { getSession } from "next-auth/react";

// export const requireAuth = async (context,cb) => {
//   const session = await getSession(context);

//    if (session) {
//     const res = getid(session.user.id);
//     if (!res) {
//       return {
//         redirect: {
//           destination: "/login/form",
//           permanent: false,
//         },
//       };
//     }
//   }
  
//   return cb({session});
// };

// const getid = async (id) => {
//   id = id.toString()
//   const path = "/api/getForm";
//   const res = await fetch(`${process.env.NEXTAUTH_URL}${path}"/"${id}`);
//   return res;
// };
