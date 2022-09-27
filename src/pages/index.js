import React, { useEffect } from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "../components/utils/requireAuth";

export default function App({ session }) {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/api/getForm/${session?.user.id}`)
      .then((newData) => newData.json())
      .then((data) => {
        localStorage.setItem("formData", JSON.stringify(data));
      });
  }, []);

  return (
    <>
      <DashBoard />;
    </>
  );
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}
