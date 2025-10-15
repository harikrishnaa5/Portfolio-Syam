import { useState } from "react";
import HomeImage from "../../assets/syam-professional.jpeg";
import Revit from "../../assets/revit-logo.png";
import AutoCad from "../../assets/AutoCAD-logo.png";
import Navisworks from "../../assets/navisworks-logo.jpg";

import SocialMedia from "../SocialMedia";

const Home = () => {
    const [toast, setToast] = useState(false);
    const handleDownload = () => {
        return;
        const link = document.createElement("a");
        link.href = "/Harikrishna_N_Resume.pdf";
        link.download = "Harikrishna_N_Resume.pdf";
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
            <div className="flex flex-col gap-3 md:pt-5 md:pl-10 text-center md:text-left max-w-4xl">
                <h2 className="text-lg sm:text-xl font-medium">Hi, I'm</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-shadow-lg">Syamjith Melon Kunnath</h1>
                <h3 className="text-xl md:text-3xl font-medium text-shadow-lg">BIM Modeler</h3>
                <p className="leading-relaxed max-w-xl mx-auto md:mx-0">
                    Ambitious Mechanical Engineer with 3 years of experience and a passion for applying technology. Skilled
                    in design and problem-solving. Currently working as an MEP Mechanical BIM Modeler to expand knowledge
                    and explore the integration of engineering and automation. Working primarily with:
                </p>
                <div className="flex justify-center md:justify-start gap-6 my-4">
                    <img className="w-20 sm:w-20 md:w-24" src={Revit} alt="Revit logo" />
                    <img className="w-30 md:w-35" src={Navisworks} alt="Navisworks logo" />
                    <img className="w-30 md:w-35" src={AutoCad} alt="AutoCad logo" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 py-6 justify-center md:justify-start">
                    <span>Here is my resume</span>
                    <button
                        onClick={handleDownload}
                        className="flex gap-2 cursor-pointer hover:bg-amber-400 transition-colors duration-200 bg-amber-300 border-0 rounded-xl py-2 px-3 active:scale-95"
                    >
                        Download <i className="fa-solid fa-download pt-0.5"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
