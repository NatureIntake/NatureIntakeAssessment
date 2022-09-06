import { getSession } from "next-auth/react";


export default async function addForm(data) {
  const session = await getSession();
  const res = await fetch("/api/addUserForm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: data.firstname,
      lastname: data.lastname,
      parentname: data.parentname,
      phonenumber: data.phonenumber,
      city: data.city,
      school: data.school,
      class: data.class,
      slug: session._id,
    }),
  });
  var data = await res.json();
  console.log("helllo");

 
}
