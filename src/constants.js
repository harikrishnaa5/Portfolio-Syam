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


export const connectMe = {
    Email: "syamjithmelon@gmail.com",
    Phone: "8907316813",
    LinkedIn: "www.linkedin.com/in/syamjith-mk",
};

export const EducationHeading = "Formal education and technical training supporting my BIM and HVAC career.";

export const additionalTraining = {
        title: "Artificial Intelligence and Machine Learning Development",
        institute: "IIT Palakkad & ASAP Kerala, 2022–2023"
    }

export const education = [
    {
        id: 1,
        title: "Bachelor of Technology(B.Tech) – Mechanical Engineering",
        institute: "Government Rajiv Gandhi Institute of Technology, Kottayam, 2018–2021"
    },
    {
        id: 2,
        title: "Diploma – Building Mechanical Systems (MEP)",
        institute: "MEDAC - MEP Training Academy, Kottakkal, 2023"
    },
    {
        id: 3,
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
        duration: "August 2024 - Present | GCC Projects",
        location: "Muvattupuzha, India  -On-site",
        role: "BIM Modeler – Mechanical",
        techStack: "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
        projects: [
            {
                id:1,
                name: "MRO Hangar – New Benghazi International Airport, Libya"
            },
            {
                id:2,
                name: "Bloom Living – Granada Phases 1 & 2, Abu Dhabi"
            },
            {
                id:3,
                name: "Fairmont Residences – Solara Tower, Dubai"
            },
            {
                id:4,
                name: "One Hotel – Riyadh, KSA"
            },
            {
                id:5,
                name: "TA’ZIZ Logistics Project – Al Ruwais, UAE"
            },
            {
                id:6,
                name: "RIU Palace Hotel – Dubai Islands, UAE"
            },
        ],
        description: [
           "1. Developed HVAC, plumbing, and firefighting BIM models up to LOD 350",
           "2. Supported design through system layout development and routing", 
           "3. Produced coordinated shop drawings as per BIM standards",
           "4. Performed clash detection and model-based issue resolution",
           "5. Created and modified project-specific Revit families",
           "6. Conducted QA/QC checks and supported coordination meetings" 
        ],          
    },
    {
        id: 2,
        logo: Medac,
        companyName: "MEDAC Enterprises Pvt Ltd",
        website: "",
        duration: "Aug 2022 – Aug 2024",
        location: "Kottakkal, India  -On-site",
        role: "MEP Design Engineer",
        techStack: "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
        projects: [
            {
                id:1,
                name: "Othaim Hotel – Arar, KSA"
            },
            {
                id:2,
                name: "Drahim – Saudi Arabia"
            },
            {
                id:3,
                name: "BSF Dabab – Saudi Arabia"
            },
            {
                id:4,
                name: "Neotek – Saudi Arabia"
            },
        ],
        description: [
            "1. Designed HVAC, plumbing, and fire protection systems for residential, commercial, and hospitality projects.",
            "2. Performed heat load calculations, equipment selection, and duct/pipe sizing as part of mechanical design activities.",
            "3. Produced detailed design drawings, layouts, and installation details using AutoCAD and Revit.",
            "4. Developed detailed plans, sections, and elevations in compliance with applicable standards.",
            "5. Coordinated with architectural, structural, and electrical teams to deliver integrated mechanical designs.",
            "6. Prepared quantity take-offs and BOQs for HVAC, plumbing, and firefighting works.",
            "7. Participated in coordination meetings and supported resolution of design-related issues.",
            "8. Assisted with QA/QC checks to ensure accuracy and compliance of design deliverables.",
            "9. Ensured compliance with ASHRAE and local authority requirements during design documentation."
        ],
    },
];
