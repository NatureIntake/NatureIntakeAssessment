import "../styles/globals.css";
import { ThemeProvider } from "../components/context/ThemeContext";
import SidebarProvider from "../components/context/SidebarProvider";
import TestProvider from "../components/context/TestProvider";
import SideBar from "../components/Sidebar/sideBar";
import Navbar from "../components/Navbar/navbar";
import { SessionProvider } from "next-auth/react";
import LogoutALert from "../components/logoutAlert";

function MyApp({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <div className='font-raleway bg-skin-muted dark:bg-gradient-to-r from-[#141414] to-[#2c2c2e]'>
        <SidebarProvider>
          <TestProvider>
            <ThemeProvider>
              <SideBar />
              <Navbar />
              <LogoutALert />
              <Component {...pageProps} />
            </ThemeProvider>
          </TestProvider>
        </SidebarProvider>
      </div>
    </SessionProvider>
  );
}
export default MyApp;
