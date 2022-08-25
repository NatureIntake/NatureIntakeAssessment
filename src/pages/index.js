import React from "react";
import DashBoard from "../components/Dashboard/dashboard";
import { requireAuth } from "./utils/requireAuth";

export default function App() {
  return <DashBoard />;
}

export async function getServerSideProps(context) {
  return requireAuth(context, ({ session }) => {
    return {
      props: { session },
    };
  });
}


