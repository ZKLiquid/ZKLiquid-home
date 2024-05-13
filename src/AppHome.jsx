import { useState } from "react";

import Hero from "./components/hero/Hero";
import Integration from "./components/Integration/Integration";
import Validator from "./components/Validator/Validator";
import Footer from "./components/Footer/Footer";
import Coming from "./components/ComingSoon/Coming";

function AppHome() {
  return (
    // <div className="bg-[#04131F] text-gray-100">
    <div className="bg-black text-gray-100">
      <Hero />
      <Validator />
      <Integration />
      <Footer />
      {/* <Coming /> */}
    </div>
  );
}

export default AppHome;
