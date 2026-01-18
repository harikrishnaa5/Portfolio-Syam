import { useState } from "react";
import HomeImage from "../../assets/syam-professional.jpeg";
import Revit from "../../assets/revit-logo.jpeg";
import AutoCad from "../../assets/AutoCAD-logo.png";
import Navisworks from "../../assets/navisworks-logo.jpeg";

import SocialMedia from "../SocialMedia";

const Home = () => {
    const [toast, setToast] = useState(false);
    const handleDownload = () => {
        // return;
        const link = document.createElement("a");
        link.href = "/Syamjith_Mechanical Bim Modeler.pdf";
        link.download = "Syamjith_Mechanical Bim Modeler.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 4000);
    };
    return (
        // <section className="w-screen px-12 pt-6 md:pt-0 flex flex-col justify-center md:flex-row gap-10 md:gap-16">
        //     <div className="w-2/3 sm:w-1/3 rounded-full shadow-2xl self-center">
        //         <img className="rounded-full" src={HomeImage} alt="img" />
        //     </div>
        //     <div className="flex flex-col gap-2 md:pt-10 md:pl-10 items-center md:items-start">
        //         <h2 className="text-xl font-medium">Hi, I'm </h2>
        //         <h1 className="text-3xl text-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        //             Syamjith Melon Kunnath
        //         </h1>
        //         <h3 className="text-2xl md:text-3xl text-shadow-lg font-medium">BIM Modeler</h3>
        //         <div className="">
        //             <p className=" flex flex-col md:flex-row md:gap-4 md:items-center leading-normal md:w-2xl">
        //                 Ambitious Mechanical Engineer with 3 years of experience and a passion for applying technology.
        //                 Skilled in design and problem-solving. Currently working as an MEP Mechanical BIM Modeler to expand
        //                 knowledge and explore the integration of engineering and automation. Working primarily with:
        //             </p>
        //         </div>
        //         <span className="flex text-1xl gap-6 items-center mb-5">
        //             <img className="w-24 md:w-24 md:mt-0" src={Revit} alt="" />
        //             <img className="w-24 md:w-33 md:h-9 md:mt-0" src={Navisworks} alt="" />
        //             <img className="w-22 md:w-33 mt-1" src={AutoCad} alt="" />
        //         </span>
        //         <span className="flex gap-4 py-6 items-center">
        //             Here is my resume
        //             <button
        //                 onClick={handleDownload}
        //                 className="flex gap-2 cursor-pointer hover:bg-amber-400 transition-colors duration-200 bg-amber-300 border-0 rounded-xl py-2 px-3 active:scale-97"
        //             >
        //                 Download <i className="fa-solid fa-download pt-0.5"></i>
        //             </button>
        //         </span>
        //     </div>
        // </section>
        <section className="w-full px-6 sm:px-12 pt-6 md:pt-0 flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center md:items-start">
            <div className="w-40 sm:w-48 md:w-1/3 lg:w-1/4 rounded-full shadow-2xl flex-shrink-0">
                <img className="rounded-full w-full object-cover" src={HomeImage} alt="img" />
            </div>
            <div className="flex flex-col gap-3 md:pt-5 md:pl-10 text-center md:text-left max-w-4xl md:pr-2">
                {/* <h2 className="text-lg sm:text-xl font-medium">Hi, I'm</h2> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-shadow-lg">Syamjith Melon Kunnath</h1>
                <h3 className="text-xl md:text-3xl font-medium text-shadow-lg">Mechanical BIM Engineer / Modeler
                <br /> HVAC • Plumbing • Firefighting | LOD 350</h3>
                <p className="leading-relaxed max-w-xl mx-auto md:mx-0">
                    Mechanical BIM Engineer / Modeler with 3.5+ years of experience delivering HVAC, plumbing, and firefighting BIM models for GCC and international projects, including UAE, Saudi Arabia, and Libya.
                <br /><br />
Experienced in developing LOD 350 BIM models, performing design-assist coordination, clash detection, and QA/QC to deliver coordinated, construction-ready models. Hands-on experience supporting projects from design through detailed design stages using Revit and Navisworks, with exposure to HVAC load calculations, duct and pipe sizing, shop drawings, and BOQ preparation in compliance with ASHRAE and local codes.
                </p>
                <div className="flex justify-center md:justify-start gap-3 sm:gap-4 md:gap-6 my-4 flex-wrap">
                    <img className="w-24 sm:w-28 md:w-40 h-12 sm:h-14 md:h-20 object-contain" src={Revit} alt="Revit logo" />
                    <img className="w-24 sm:w-28 md:w-40 h-12 sm:h-14 md:h-20 object-contain" src={Navisworks} alt="Navisworks logo" />
                    <img className="w-24 sm:w-28 md:w-40 h-12 sm:h-14 md:h-20 object-contain" src={AutoCad} alt="AutoCad logo" />
                </div>
                <p className="font-medium text-md">Additional tools: Carrier HAP, BIM 360, Elite Duct Sizer, McQuay Duct/Pipe Sizer</p>
                <div className="flex flex-col sm:flex-row items-center gap-4 py-6 justify-center md:justify-start">
                    <span>Download Resume (PDF)</span>
                    <button
                        onClick={handleDownload}
                        className="flex gap-2 cursor-pointer hover:bg-amber-400 transition-colors duration-200 bg-amber-300 border-0 rounded-xl py-2 px-3 active:scale-95"
                    >
                        <i className="fa-solid fa-download pt-0.5"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
