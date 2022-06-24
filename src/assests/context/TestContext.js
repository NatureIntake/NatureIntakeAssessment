import React, { useState, createContext } from "react";

export const TestState = createContext();

const SidebarState = (props) => {
  const [Open, setOpen] = useState(false);
 
  return (
    <TestState.Provider value={{Open,setOpen}}>
      {props.children}
    </TestState.Provider>
  );
};

export default SidebarState;
