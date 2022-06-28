import React, { useState } from "react";
import TestContext from "./TestContext";

const TestProvider = (props) => {

  const [Unit1, setUnit1] = useState(1);
  const [Unit2, setUnit2] = useState(0);
  const [Unit3, setUnit3] = useState(0);
  const [FinalUnit, setFinalUnit] = useState(0);
 
  return (
    <TestContext.Provider value={{Unit1, setUnit1, Unit2, setUnit2,Unit3, setUnit3, FinalUnit, setFinalUnit}}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
