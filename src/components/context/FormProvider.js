import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import Cookies from "js-cookie";
import { useSession } from "next-auth/react";

export default function FormProvider(props) {
  const { data: session } = useSession();
  const [isForm, setIsForm] = useState(false);
  const [formData, setformData] = useState([]);
  let id;

  useEffect(() => {
     id = JSON.parse(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    // const path = "/api/isForm";
    // if (session) {
      fetch(`http://localhost:3000/api/isForm/${id}`)
        .then((newData) => newData.json())
        .then((data) => {
          setIsForm(data);
        });
    // }
  }, []);

  // useEffect(() => {
  //   // if (session) {
  //     const data = JSON.parse(localStorage.getItem("isForm"));
  //     // if (data) 
      
  //   // }
  // }, []);

  useEffect(() => {
    // if (isForm) {
      // const path = "/api/isForm";
      fetch(`http://localhost:3000/api/getForm/${id}`)
        .then((newData) => newData.json())
        .then((data) => {
          setformData(data);


        });
    // }
  }, []);
  useEffect(() => {
    const data2 = JSON.parse(localStorage.getItem("userForm"));
    setformData(data2);
    // if (data2) {
    // }
  }, []);

  return (
    <FormContext.Provider value={{ isForm, formData }}>
      {props.children}
    </FormContext.Provider>
  );
}
