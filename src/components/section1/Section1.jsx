import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import gumletDashboard from "../../assets/gumlet-dashboard.svg";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Section1 = ({ targetSectionRef }) => {



  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://gumlet-team.myfreshworks.com/crm/sales/web_forms/7afc54c6287eef697898c6beef6f39d2555b4dc0831191312f62aa3941e42a3b/form.js";
    script.crossOrigin = "anonymous";
    script.id =
      "fs_7afc54c6287eef697898c6beef6f39d2555b4dc0831191312f62aa3941e42a3b";

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        className="bg-gradient-to-r from-[#291FB1]  to-[rgb(80,70,230)]  ... md:rounded-b-[90%] "
        ref={targetSectionRef}
      >
        <div className="md:px-2 lg:px-48 flex flex-col justify-center gap-8 p-6">
          <h1 className=" md:px-12 lg:pr-80 text-3xl md:text-5xl font-semibold text-left  text-white mt-20">
            Best Vimeo Alternative For Video Hosting
          </h1>
          <div className="md:flex justify-center flex flex-wrap items-center md:gap-10 lg:gap-20 gap-10 md:justify-between md:px-12">
            <span className="text-base text-zinc-300 text-wrap flex-1">
              A comprehensive video hosting, security, and streaming solution
              that ensures buffer-free video delivery with each view.
            </span>
            <div className=" flex md:flex-wrap  bg-white rounded-full">
            </div>
          </div>
          <div className="md:ml-12 ml-6 mt-6 md:w-2/5 w-4/5 items-center">
          </div>
        </div>
        <div className="flex justify-center items-center mt-3 ">
          <img src={gumletDashboard} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section1;
