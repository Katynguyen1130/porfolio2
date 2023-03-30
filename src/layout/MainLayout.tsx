import React, { useEffect, useState, useContext } from "react";
import SplashScreen from "./../components/SplashSCreen";
import { usePathname } from "next/navigation";
import Navbar from "../components/Nabar";
import { useAppContext } from "../contexts/app.context";
import Footer from "../components/Footer";

interface Props {
  children: JSX.Element;
}

function MainLayout({ children }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  console.log(isHome);
  const { splash, setSplash } = useAppContext();

  return (
    <div>
      {splash && isHome ? (
        <SplashScreen finishLoading={() => setSplash(false)} />
      ) : (
        <>
          <Navbar />

          {children}
          <Footer />
        </>
      )}
    </div>
  );
}

export default MainLayout;
