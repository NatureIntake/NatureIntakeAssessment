import "../styles/globals.css";
import { ThemeProvider } from "../assests/context/ThemeContext";
import SidebarState from "../assests/context/SidebarState";
import SideBar from "../components/SideBar";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='font-raleway bg-skin-muted dark:bg-gradient-to-r from-[#141414] to-[#2c2c2e]'>
      <SidebarState>
        <ThemeProvider>
          <SideBar />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SidebarState>
    </div>
  );
}

export default MyApp;
