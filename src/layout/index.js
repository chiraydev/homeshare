import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";


const Layout = ({ children }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const router = useRouter()

  return (
    <>
     {(router.pathname == "/login" || router.pathname == "/signup" ) ? null : <Header responsive={isTabletOrMobile} />}
    
      {children}
    
 { (router.pathname == "/login" || router.pathname == "/signup" ) ? null : <Footer responsive={isTabletOrMobile} />}
    </>
  );
};

export default Layout;
