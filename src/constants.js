import D3SlOGO from "./assets/d3s-logo.png";
import Medac from "./assets/medac.jpg";
import PlantRoom from "./assets/plant_room.jpeg";
import CentralPlantMachine from "./assets/CentralPlantMechanicalLayout.jpeg";
import chw3d from "./assets/chw3d.jpeg";
import chw_section from "./assets/chw_section.jpeg";
import typicalCorridorService from "./assets/typical_corridor_services.jpeg";
import clashDetected from "./assets/clash_detected.jpeg";
import clashResolved from "./assets/clash_resolved.jpeg";
import trussesAndMep from "./assets/trusses_and_mep.jpeg";
import whatsapp from "./assets/whatsapp.webp";
import gmail from "./assets/gmail.webp";

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
    key: "projects",
    item: "Projects",
    icon: "fa-solid fa-compass-drafting",
  },
  {
    id: 4,
    key: "education",
    item: "Education",
    icon: "fa-solid fa-laptop-code",
  },
];

export const linkedin = "https://www.linkedin.com/in/syamjith-mk/";

export const connectMe = {
  Email: { name: "syamjithmelon@gmail.com", icon: gmail },
  Phone: { name: "8907316813", icon: whatsapp },
  // LinkedIn: "www.linkedin.com/in/syamjith-mk",
};

export const EducationHeading =
  "Formal education and technical training supporting my BIM and HVAC career.";

// export const additionalTraining = {
//   title: "Artificial Intelligence and Machine Learning Development",
//   institute: "IIT Palakkad & ASAP Kerala, 2022–2023",
// };

export const education = [
  {
    id: 1,
    title: "Bachelor of Technology(B.Tech) – Mechanical Engineering",
    institute:
      "Government Rajiv Gandhi Institute of Technology, Kottayam, 2018–2021",
  },
  {
    id: 2,
    title: "Diploma – Building Mechanical Systems (MEP)",
    institute: "MEDAC - MEP Training Academy, Kottakkal, 2023",
  },
  {
    id: 3,
    title: "Polytechnic Diploma in Automobile Engineering",
    institute: "SSM Polytechnic College, Tirur, 2014–2017",
  },
];

export const workExperience = [
  {
    id: 1,
    logo: D3SlOGO,
    companyName: "D3S Solutions Pvt Ltd",
    website: "https://d3ssolutions.com/",
    duration: "August 2024 - Present | GCC Projects",
    location: "Muvattupuzha, India  -On-site",
    role: "BIM Modeler – Mechanical",
    techStack:
      "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
    projects: [
      {
        id: 1,
        name: "MRO Hangar, New Benghazi International Airport, Libya",
      },
      {
        id: 2,
        name: "Bloom Living – Granada Phases 1 & 2, Zayed City, UAE",
      },
      {
        id: 3,
        name: "TA’ZIZ Logistics Project, Al Ruwais Industrial City, UAE",
      },
      {
        id: 4,
        name: "Fairmont Residences – Solara Tower, Downtown Dubai",
      },
      {
        id: 5,
        name: "One Hotel, Riyadh, KSA",
      },
      {
        id: 6,
        name: "RIU Palace Hotel – Dubai Islands, UAE",
      },
      {
        id: 7,
        name: "Endress + Hauser Office Fit-Out, UAE",
      },
      {
        id: 8,
        name: "Youth Orchestra and Choir of Abu Dhabi",
      },
    ],
    description: [
      "1. Developed HVAC, plumbing, and firefighting BIM models up to LOD 350",
      "2. Supported design through system layout development and routing",
      "3. Produced coordinated shop drawings as per BIM standards",
      "4. Performed clash detection and model-based issue resolution",
      "5. Created and modified project-specific Revit families",
      "6. Conducted QA/QC checks and supported coordination meetings",
    ],
  },
  {
    id: 2,
    logo: Medac,
    companyName: "MEDAC Enterprises Pvt Ltd",
    website: "",
    duration: "Aug 2022 – Aug 2024",
    location: "Kottakal, India  -On-site",
    role: "Mechanical Design Engineer (MEP)",
    techStack:
      "AutoCAD, Revit, BIM 360, Carrier HAP, MS Office, Elite Duct Sizer, McQuay Duct/Pipe Sizer",
    projects: [
      {
        id: 1,
        name: "Othaim Hotel – Arar, KSA",
      },
      {
        id: 2,
        name: "Drahim – KSA",
      },
      {
        id: 3,
        name: "BSF Dabab – KSA",
      },
      {
        id: 4,
        name: "Neotek – KSA",
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
      "9. Ensured compliance with ASHRAE and local authority requirements during design documentation.",
    ],
  },
];

export const projectsList = [
  {
    id: 1,
    src: CentralPlantMachine,
    title: "Central Mechanical Plant – AHU & CHW Distribution",
    projectType: "Hospitality Facility",
    scope: "Equipment placement, Refrigerent routing, duct coordination",
    responsibility: "Modeling, spatial validation, service routing",
  },
  {
    id: 2,
    src: PlantRoom,
    title: "Chilled Water Pump Room – LOD 350 Modeling",
    projectType: "Mechanical Plant / Pump Room",
    scope:
      "* Pump header arrangement\n* Isolation & balancing valve placement\n* Maintenance clearance validation",
    responsibility: "* LOD 350 piping modeling\n* Equipment coordination\n* Access and serviceability compliance check",
  },
  {
    id: 3,
    src: trussesAndMep,
    title: "Structural & MEP Coordination Under Steel Trusses",
    projectType: "Industrial / Long-Span Roof Structure",
    scope:
      "* Duct routing through structural bays\n* Elevation adjustment for clearance\n* Multi-trade clash mitigation (HVAC, piping, structure)",
    responsibility: "* Coordination modeling under steel truss constraints\n* Clearance validation against structural members\n* Routing optimization within fixed bay geometry",
  },
  {
    id: 4,
    src: [clashDetected, clashResolved],
    title: "Clash Detection & Resolution – Hard Clash Mitigation",
    projectType: "MEP Coordination – Ceiling Void",
    scope: "* Detection of duct vs CHW hard clash\n* Analysis of spatial constraints within limited ceiling void\n* Rerouting strategy development",
    responsibility: "* Navisworks clash test execution\n* Vertical offset implementation and rerouting\n* Clearance verification without architectural impact",
    issue: "Duct vs CHW crossing within limited ceiling void",
    solution:
      "Vertical offset strategy & rerouting\nClearance achieved without architectural impact",
  },
  {
    id: 5,
    src: typicalCorridorService,
    title: "Typical Corridor Section – Service Hierarchy Strategy",
    projectType: "Hospitality / Residential Corridor",
    scope: "* Coordination of supply air duct\n* Fresh air duct routing\n* CHW piping layout\n* Sprinkler line integration\n* Electrical tray routing\n* Vertical zoning within ceiling void",
    responsibility: "* Service hierarchy development (duct–pipe–tray priority logic)\n* Ceiling clearance validation (clear height compliance)\n* Multi-trade sectional coordination",
    coordinationElements:
      "* Supply air duct\n* Fresh air duct\n* CHW piping\n* Sprinkler line\n* Electrical trays",
    focus: "Vertical zoning & clear height compliance",
  },
  {
    id: 6,
    src: [chw3d, chw_section],
    title: "Hotel Serviced Apartment – FCU Chilled Water Distribution",
    projectType: "",
    scope: "* CHWS / CHWR routing from corridor riser\n* FCU branch distribution within units\n* Ceiling void coordination\n* FCU zoning and isolation valve strategy",
    system:
      "* CHWS / CHWR routing from corridor riser\n* Ceiling void coordination\n* FCU zoning & isolation strategy",
    responsibility: "* CHW piping modeling and routing\n* Ceiling clearance validation\n* Coordination with architectural and electrical services",
  },
];
