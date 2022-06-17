import React, { useState } from "react";
import SidebarContext from "./SidebarContext";

const SidebarState = (props) => {
  const [Open, setOpen] = useState(false);
 
  return (
    <SidebarContext.Provider value={{Open,setOpen}}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
