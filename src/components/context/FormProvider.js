import React, { useState } from "react";
import FormContext from "./FormContext";

export default function FormProvider(props) {
  const [userData, setUserData] = useState("");

 

  const getToken = () => {
    if (typeof window !== "undefined")
      JSON.parse(localStorage.getItem("isForm") || false);
  };
  const [isForm, setIsForm] = useState(getToken());

  return (
    <FormContext.Provider value={{ userData, setUserData, isForm, setIsForm }}>
      {props.children}
    </FormContext.Provider>
  );
}
