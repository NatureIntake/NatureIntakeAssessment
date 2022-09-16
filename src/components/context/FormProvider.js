import React, { useState, useEffect } from "react";
import FormContext from "./FormContext";
import Cookies from "js-cookie";

export default function FormProvider(props) {
  const [isForm, setIsForm] = useState(false);
  const [formData, setformData] = useState([]);
  const id = Cookies.get("userId");

  useEffect(() => {
    // const path = "/api/isForm";
    fetch(`http://localhost:3000/api/getForm/${id}`)
      .then((newData) => newData.json())
      .then((data) => {
        setformData(data);
      });

    // fetchForm()
  }, []);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (cart !== initialState) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // useEffect(() => {

  //     // const path = "/api/isForm";
  //     fetch(`http://localhost:3000/api/getForm/${id}`)
  //       .then((newData) => newData.json())
  //       .then((data) => {
  //         setformData(data);
  //       });

  //   // fetchForm()
  // }, []);
  // async function fetchForm() {
  //   if (id !== "") {
  //     const res = await fetch(`http://localhost:3000/api/getForm/${id}`);
  //     const data = await res.json();
  //     setformData(data);
  //   }
  //   // else return res.status(401).json({ message: "Invalid Token" });
  // }

  return (
    <FormContext.Provider value={{ isForm, setIsForm, formData }}>
      {props.children}
    </FormContext.Provider>
  );
}
