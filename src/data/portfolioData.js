import { Code2, Globe2, Terminal, Database, Wrench, Cpu } from "lucide-react";

// Personal profile information and bio details
export const profile = {
  name: "Aniket Mulgi",
  callsign: "SURVIVOR_001",
  role: "Mechanical Engineering Student // Full-Stack Developer",
  intro:
    "I build useful systems at the intersection of engineering, software and design — from web platforms and Android apps to CAD, simulation and vehicle dynamics.",
  location: "NITK Surathkal, Karnataka",
  email: "your-email@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

// Technical competencies categorized by domain
export const skillGroups = [
  {
    title: "LANGUAGES",
    icon: Code2,
    skills: ["JavaScript", "Python", "C++", "Kotlin", "HTML", "CSS"],
  },
  {
    title: "FRONTEND",
    icon: Globe2,
    skills: ["React", "Next.js", "Tailwind CSS", "React Router", "Context API"],
  },
  {
    title: "BACKEND",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Mongoose"],
  },
  {
    title: "DATA",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Pandas", "NumPy"],
  },
  {
    title: "ENGINEERING",
    icon: Wrench,
    skills: ["Fusion 360", "SolidWorks", "ANSYS", "Vehicle Dynamics"],
  },
  {
    title: "TOOLS",
    icon: Cpu,
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "MATLAB"],
  },
];

// Highlighted projects showcase
export const projects = [
  {
    id: "01",
    title: "AGRI-FLOW",
    classification: "FIELD SYSTEM / WEB",
    description:
      "An irrigation material and cost estimation platform designed to help users plan irrigation requirements and estimate material costs.",
    stack: ["Next.js", "React", "JavaScript", "MongoDB"],
    tag: "DEPLOYED SYSTEM",
    link: "#",
    visual: "IRRIGATION // COST // MATERIAL",
  },
  {
    id: "02",
    title: "HABIT-FLOW",
    classification: "PERSONAL SYSTEM / ANDROID",
    description:
      "A habit and productivity tracker built as an Android application, focused on simple routines, progress and consistency.",
    stack: ["Kotlin", "Jetpack Compose", "Android Studio"],
    tag: "MOBILE ARCHIVE",
    link: "#",
    visual: "HABITS // ROUTINES // PROGRESS",
  },
  {
    id: "03",
    title: "ROVER SIMULATION",
    classification: "ENGINEERING / SIMULATION",
    description:
      "Engineering work around rover testing, structural simulation and vehicle dynamics for real-world challenge scenarios.",
    stack: ["ANSYS", "SolidWorks", "Fusion 360"],
    tag: "ENGINEERING LOG",
    link: "#",
    visual: "LOADS // CONTACT // FAILURE",
  },
];

// Chronological timeline log
export const timeline = [
  ["2023", "THE ENTRY POINT", "Started building a foundation in programming and problem solving."],
  ["2024", "FIRST SYSTEMS", "Moved from small programs into web development and full-stack projects."],
  ["2025", "ENGINEERING + CODE", "Expanded into CAD, simulation, vehicle dynamics and software systems."],
  ["2026", "CURRENT MISSION", "Building larger systems, contributing to technical communities and preparing for engineering challenges."],
];

// Boot sequence system logs
export const bootLines = [
  "[ OK ] POWER GRID CONNECTED",
  "[ OK ] MEMORY SECTOR MOUNTED",
  "[ OK ] IDENTITY RECORD LOCATED",
  "[ OK ] SURVIVOR PROFILE DECRYPTED",
  "[WARN] GLOBAL NETWORK UNAVAILABLE",
];

// Terminal CLI navigation routing commands
export const terminalCommands = {
  about: "archive",
  skills: "arsenal",
  projects: "archives",
  missions: "archives",
  contact: "transmission",
  home: "home",
};
