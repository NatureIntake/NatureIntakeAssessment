import React, { useEffect, useContext } from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "../components/utils/requireAuth";
import { formAuth } from "../components/utils/formAuth";


export default function App() {
 

  useEffect(() => {
    formAuth();
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
