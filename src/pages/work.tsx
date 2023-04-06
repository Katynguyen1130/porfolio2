import React from "react";
import dynamic from "next/dynamic";

import Footer from "../components/Footer";
const Navbar = dynamic(() => import("../components/Nabar"), { ssr: false });

function work() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default work;
