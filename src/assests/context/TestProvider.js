import React, { useState } from "react";
import TestContext from "./TestContext";

const TestProvider = (props) => {
  
 
  return (
    <TestContext.Provider value={{Open,setOpen}}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestProvider;
