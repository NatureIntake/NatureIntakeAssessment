import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import Cookies from "js-cookie";

export default function FormProvider(props) {
  const [isForm, setIsForm] = useState(false);
  const [formData, setformData] = useState([]);
  let id;

  useEffect(() => {
    id = JSON.parse(Cookies.get("userId"));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/api/isForm/${id}`)
      .then((newData) => newData.json())
      .then((data) => {
        setIsForm(data);
      localStorage.setItem("testisForm", JSON.stringify(data))

      });
  }, []);

  useEffect(() => {
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
