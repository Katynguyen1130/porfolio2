import React from "react";
import dynamic from "next/dynamic";

import Footer from "../components/Footer";
const Navbar = dynamic(() => import("../components/Nabar"), { ssr: false });
import Work from "@/components/Work";

function work() {
  return (
    <div>
      <Navbar />
      <Work />
      <Footer />
    </div>
  );
}

export default work;
