import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";

export default function FormProvider(props) {
  const [isForm, setIsForm] = useState(false);
  const [formData, setformData] = useState([]);
  
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));

    fetch(`http://localhost:3000/api/isForm/${id}`)
      .then((newData) => newData.json())
      .then((data) => {
        setIsForm(data);
        localStorage.setItem("testisForm", JSON.stringify(data));
      });
  }, []);

  useEffect(() => {
    let id = JSON.parse(localStorage.getItem("userId"));

    fetch(`http://localhost:3000/api/getForm/${id}`)
      .then((newData) => newData.json())
      .then((data) => {
        setformData(data);
        localStorage.setItem("formData", JSON.stringify(data));
      });
  }, []);

  return (
    <FormContext.Provider value={{ isForm, formData }}>
      {props.children}
    </FormContext.Provider>
  );
}
