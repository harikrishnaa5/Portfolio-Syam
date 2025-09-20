import D3SlOGO from "./assets/d3s-logo.png";
import Medac from "./assets/medac.jpg"

export const navMenu = [
    {
        id: 1,
        key: "home",
        item: "Home",
        icon: "fa-solid fa-house",
    },
    {
        id: 2,
        key: "experience",
        item: "Experience",
        icon: "fa-solid fa-user-tie",
    },
     {
        id: 3,
        key: "education",
        item: "Education",
        icon: "fa-solid fa-laptop-code",
    },
];

export const linkedin = "https://www.linkedin.com/in/syamjith-mk/";

export const connectMe = {
    Email: "syamjithmelon@gmail.com",
    Phone: "+91 8907316813",
};

export const education = [
    {
        id: 1,
        title: "Diploma in Building Mechanical Systems",
        institute: "MEDAC - MEP Training Academy, Kottakkal, 2023"
    },
    {
        id: 2,
        title: "Artificial Intelligence and Machine Learning Development",
        institute: "IIT Palakkad & ASAP Kerala, 2022–2023"
    },
    {
        id: 3,
        title: "Bachelor of Technology in Mechanical Engineering",
        institute: "Government Rajiv Gandhi Institute of Technology, Kottayam, 2018–2021"
    },
    {
        id: 4,
        title: "Polytechnic Diploma in Automobile Engineering",
        institute: "SSM Polytechnic College, Tirur, 2014–2017"
    },
]

export const workExperience = [
    {
        id: 1,
        logo: D3SlOGO,
        companyName: "D3S Solutions Pvt Ltd",
        website: "https://d3ssolutions.com/",
        duration: "August 2024 - Present",
        location: "Muvattupuzha, India  -On-site",
        role: "BIM Modeler – Mechanical",
        techStack: "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
        projects: [
            {
                id:1,
                name: "ENDRESS HAUSER – Dubai (HVAC layouts, shop drawings)"
            },
            {
                id:2,
                name: "AL JADHAFF – Dubai (Apartments)"
            },
            {
                id:3,
                name: "GRANADA 1 & 2 – Dubai & Abu Dhabi (Apartments)"
            },
            {
                id:4,
                name: "SOL TOWER – Dubai, UAE"
            },
            {
                id:5,
                name: "ONE HOTEL – Saudi Arabia"
            },
            {
                id:6,
                name: "RIU PALACE HOTEL – Dubai Islands, UAE"
            },
        ],
        description:
            "Designed HVAC, plumbing, and fire protection systems for varied buildings. Performed load calculatio ns and duct/pipe sizing. Selected mechanical equipment like AHUs, chillers, pumps, and fans.Prepared detailed 2D/3D layouts and installation drawings using AutoCAD and Revit. Coordinated across multiple disciplines for system integration and clash resolution. Developed technical documentation, BOQs, and ensured compliance with ASHRAE, SMACNA, and local codes.",
    },
    {
        id: 2,
        logo: Medac,
        companyName: "MEDAC Enterprises Pvt Ltd",
        website: "",
        duration: "2022 – 2024",
        location: "Kottakkal, India  -On-site",
        role: "MEP Design Engineer",
        techStack: "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
        projects: [
            {
                id:1,
                name: "OTHAIM HOTEL – Arar, UAE"
            },
            {
                id:2,
                name: "DRAHIM – Saudi Arabia"
            },
            {
                id:3,
                name: "BSF DABAB – Saudi Arabia"
            },
        ],
        description:
            "Create and maintain BIM models by coordinating with reference design documents and client suggestions. Develop detailed Revit families as per project requirements. Prepare detailed plans, elevations, and sections from coordinated BIM models in compliance with standards. Coordinate with Architectural, Structural, and Electrical Departments in designing layouts for HVAC, plumbing, and firefighting systems. Quantity takeoff for HVAC, plumbing, and firefighting works. Develop MEP models up to LOD350 in coordination with other disciplines. Attend coordination meetings and resolve project issues. Oversee QA/QC for project deliverables.",
    },
];
