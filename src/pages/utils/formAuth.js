import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import FormContext  from "../../components/context/FormContext";
import Router from "next/router";


export default function FormAuth() {
  
  const { isForm } = useContext(FormContext);
  useEffect(() => {
    if (isForm === false) {
      Router.push("/login/form");
      console.log(isForm)
    }
  });
  return ;
}
