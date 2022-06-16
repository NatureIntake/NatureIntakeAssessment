import React from "react";
import DashBoard from "../components/Dashboard";
import SideBar from "../components/SideBar";
import { ThemeProvider } from "../assests/context/ThemeContext";
import SidebarState from "../assests/context/SidebarState";

function App() {
  return (
      <SidebarState>
        <ThemeProvider>
          <SideBar />
          <DashBoard />
        </ThemeProvider>
      </SidebarState>
  );
}

export default App;