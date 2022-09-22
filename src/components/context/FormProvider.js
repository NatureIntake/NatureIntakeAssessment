import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import { BASE_URL } from "../utils/BASE_URL";


export default function FormProvider(props) {
  const [isForm, setIsForm] = useState(false);
  const [formData, setformData] = useState([]);

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/isForm/${id}`)
        .then((newData) => newData.json())
        .then((data) => {
          setIsForm(data);
          localStorage.setItem("isForm", JSON.stringify(data));
        });
    }
  }, []);

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));
    if (id) {
      fetch(`${process.env.NEXT_PUBLIC_URL}/api/getForm/${id}`)
        .then((newData) => newData.json())
        .then((data) => {
          setformData(data);
          localStorage.setItem("formData", JSON.stringify(data));
        });
    }
  }, []);

  return (
    <FormContext.Provider value={{ isForm, formData }}>
      {props.children}
    </FormContext.Provider>
  );
}
