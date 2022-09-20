import React, {useEffect, useContext} from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "./utils/requireAuth";
import FormContext from "../components/context/FormContext";
import { Router } from "next/router";
export default function App() {
  const { isForm, formData } = useContext(FormContext);

  useEffect(() => {
    if (!isForm && !formData) {
      Router.push("/login/form");
    }
  });
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
