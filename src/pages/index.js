import React, { useEffect, useContext } from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "../components/utils/requireAuth";
import FormContext from "../components/context/FormContext";

export default function App() {
  const {formData}  = useContext(FormContext)
 
  console.log(formData)

  // useEffect(() => {
  //   formAuth();
  // }, []);

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
