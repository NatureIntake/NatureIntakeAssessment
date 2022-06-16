import "../styles/globals.css";
import Navbar from "../assets/components/navbar";
import Sidebar from "../assets/components/sideBar";
import { ThemeProvider } from "../assets/context/ThemeContext";
import SidebarState from "../assets/context/SidebarState";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SidebarState>
        <ThemeProvider>
          <Navbar />
          <Sidebar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SidebarState>
    </>
  );
}

export default MyApp;
