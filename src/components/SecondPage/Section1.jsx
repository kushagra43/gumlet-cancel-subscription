import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import gumletDashboard from "../../assets/gumlet-dashboard.svg";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import tick2 from "../../assets/tick2.svg";
import FreshworksForm from "./FreshworksForm";

const Section1 = ({ targetSectionRef }) => {
    console.log(document.head);

    return (
        <>
            <div
                className="bg-gradient-to-r from-[#291FB1]  to-[rgb(80,70,230)]  ...  lg:rounded-b-[90%] md:flex lg:h-screen"
                ref={targetSectionRef}
            >

                <div className="md:px-2 lg:pl-40  flex flex-col justify-center gap-6 p-6 h-max md:mt-10 flex-1">
                    <h1 className=" md:px-12 lg:pr-40 text-3xl md:text-5xl font-semibold text-left  text-white mt-20">
                        Ditch Vimeo, <br /> Switch to Gumlet                    </h1>
                    <div className="md:flex justify-center flex flex-wrap items-center md:gap-10 lg:gap-20 gap-10 md:justify-between md:px-12">
                        <span className="text-base text-zinc-300 text-wrap flex-1">
                            Host. secure and stream videos to millions or a select few in minutes. <br /> Predictable and transparent pricing.
                        </span>
                        <div
                            className=" flex md:flex-wrap  bg-white rounded-full"
                            id="gumlet-form-container"
                        >
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 md:px-12 ">
                        <div className="flex  gap-4 items-center text-zinc-300 text-sm">
                            <span>
                                <img src={tick2} alt="" />
                            </span>
                            <span>Reliable video hosting with Intuitive CMS</span>
                        </div>
                        <div className="flex gap-4 items-center text-zinc-300 text-sm">
                            <span>
                                <img src={tick2} alt="" />
                            </span>
                            <span>Ad-free video player with your branding</span>
                        </div>
                        <div className="flex  gap-4 items-center text-zinc-300 text-sm">
                            <span>
                                <img src={tick2} alt="" />
                            </span>
                            <span>Protect your videos from piracy and theft</span>
                        </div>

                    </div>
                    <div className="md:ml-12 ml-6 mt-6 md:w-2/5 w-4/5 items-center">
                        <FreshworksForm />
                    </div>
                </div>
                <div className="flex justify-center items-center md:mr-20 md:mb-40 mt-10 flex-1">
                    <img src={gumletDashboard} alt="" />
                </div>
            </div>
        </>
    );
};

export default Section1;
