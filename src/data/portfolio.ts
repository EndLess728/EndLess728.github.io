import type { IconType } from "react-icons";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaSwift,
  FaBolt,
  FaCloud,
} from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpo,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiJest,
  SiFirebase,
  SiGithubactions,
} from "react-icons/si";

export const personalInfo = {
  name: "Mantu",
  fullName: "Mantu Kumar",
  initials: "MK",
  photo: "/images/profile.png",
  title: "Senior React Native Developer & Team Lead",
  location: "Mohali, Punjab, India",
  summary:
    "Senior React Native Developer with 7+ years of experience building high-performance mobile apps across iOS and Android, specializing in native modules, real-time ML integration, and cross-platform architecture.",
  email: "mantu.codes@gmail.com",
  phone: "+91 94645 42728",
  resumeViewUrl: "https://drive.google.com/file/d/1jxb3ovWMGDjPyQEG2GBNIumikrnX5vBJ/view",
  resumeDownloadUrl:
    "https://drive.google.com/uc?export=download&id=1jxb3ovWMGDjPyQEG2GBNIumikrnX5vBJ",
  rolesForTyping: [
    "Senior React Native Developer",
    "Engineering Team Lead",
    "Mobile Architect",
    "AI/ML Integration Specialist",
    "Open Source Maintainer",
  ],
};

export const socialLinks: {
  name: string;
  url: string;
  icon: IconType;
}[] = [
  { name: "GitHub", url: "https://github.com/EndLess728", icon: FaGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mantu-kumar-16439117b",
    icon: FaLinkedin,
  },
  { name: "Medium", url: "https://medium.com/@EndLess728", icon: FaMedium },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/10422074/mantu",
    icon: FaStackOverflow,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: FaEnvelope,
  },
];

export const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "12+", label: "Developers Mentored" },
  { value: "280K+", label: "npm Package Downloads" },
  { value: "1,000+", label: "Users Served Across Apps" },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Swift", icon: FaSwift },
    { name: "Java", icon: FaJava },
  ] as { name: string; icon: IconType }[],
  technologies: [
    { name: "React Native", icon: FaReact },
    { name: "Expo", icon: SiExpo },
    { name: "Expo Router", icon: SiExpo },
    { name: "Expo EAS", icon: FaBolt },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Zustand", icon: FaBolt },
    { name: "React Query", icon: SiReactquery },
    { name: "Jest", icon: SiJest },
    { name: "Firebase", icon: SiFirebase },
    { name: "REST API", icon: FaCloud },
    { name: "Git", icon: FaGitAlt },
    { name: "CI/CD", icon: SiGithubactions },
  ] as { name: string; icon: IconType }[],
};

export const techStack = [
  { stack: "React Native", proficiency: 95 },
  { stack: "Expo", proficiency: 95 },
  { stack: "TypeScript", proficiency: 90 },
  { stack: "Zustand / TanStack Query", proficiency: 90 },
  { stack: "Next.js", proficiency: 85 },
];

export const experience = [
  {
    role: "Sr. React Native Developer & Team Lead",
    company: "iTechnolabs Pvt. Ltd.",
    location: "Mohali, Punjab",
    logo: "/images/iTech.png",
    date: "Aug 2022 – Present",
    bullets: [
      "Led and mentored 12+ developers in Agile sprints, establishing TypeScript-first coding standards and code review practices that reduced production bugs across all team projects",
      "Integrated Google's MediaPipe PoseLandmark model for real-time human pose estimation in a fitness app, achieving 95% pose accuracy across 33 body landmarks",
      "Architected a Turbo Module for human pose detection supporting React Native's New Architecture, and extended Expo compatibility via a custom config plugin",
      "Created a production-ready React Native boilerplate (Expo SDK 57) featuring TypeScript, Expo Router, Zustand, TanStack Query, i18n, ESLint, Prettier, and Husky pre-commit hooks",
      "Built a high-performance POS system using React Native and Next.js with real-time inventory sync, barcode scanning, and cross-platform support",
      "Accelerated app startup by 20% by adopting React Native's bridgeless architecture and cut project setup time by 30% via Expo migration",
      "Automated iOS and Android builds and store submissions using Expo EAS, streamlining CI/CD release pipelines for App Store and Google Play",
      "Resolved critical Google Maps integration bugs, cutting client API costs by 40% and preventing billing overcharges",
    ],
  },
  {
    role: "Sr. React Native Developer",
    company: "Suffescom Solutions",
    location: "Mohali, Punjab",
    logo: "/images/suffescom.png",
    date: "Oct 2021 – Aug 2022",
    bullets: [
      "Led a team of 7 developers, implementing React Native coding standards and PR review workflows that improved code consistency and reduced merge conflicts",
      "Created an Android native module enabling background tasks with 99.9% reliability",
      "Built a food delivery app serving 1,000+ users, implementing real-time tracking and payments via WebSockets and Maps",
      "Resolved subscription validation loopholes by implementing server-side receipt verification, achieving 100% compliance with single-user license policies",
    ],
  },
  {
    role: "Junior iOS Developer & React Native Developer",
    company: "Immanent Solutions",
    location: "Mohali, Punjab",
    logo: "/images/Immanent.png",
    date: "Sept 2018 – Oct 2021",
    bullets: [
      "Built 4 mobile apps across event, education, social, and crypto sectors, serving 1,000+ users on iOS and React Native",
      "Implemented HMAC-based API authentication across all apps, achieving 100% security audit compliance and eliminating unauthorized access",
      "Reduced development time by 40% by migrating native iOS codebases to React Native",
    ],
  },
];

export const projectFilters = ["All", "AI & ML", "Mobile"];

export const projects = [
  {
    name: "Elevyn",
    tagline: "AI Fitness",
    categories: ["AI & ML"],
    image: "/images/elevyn-card.png",
    icon: "/images/elevyn-icon.png" as string | undefined,
    description:
      "AI-powered fitness app with personalized workouts, meal planning, and calorie tracking.",
    bullets: [
      "Integrated Google's MediaPipe PoseLandmarker for on-device human pose estimation, enabling real-time workout form analysis across 33 body landmarks",
      "Built an AI-driven engine generating personalized workout and meal plans based on user body metrics, increasing user engagement by 35%",
      "Implemented camera-based meal scanning to auto-detect macros and calories, streamlining food logging and improving daily tracking consistency by 40%",
    ],
    tags: ["React Native", "MediaPipe", "AI/ML", "Expo"],
    link: "https://elevynofficialapp.com/" as string | null,
  },
  {
    name: "Focusbear",
    tagline: "ADHD Productivity",
    categories: ["Mobile", "AI & ML"],
    image: "/images/focusbear-card.png",
    icon: "/images/focusbear-icon.png" as string | undefined,
    description:
      "Productivity app helping users block distractions and build healthy habits.",
    bullets: [
      "Built native modules for Android (distraction-blocking overlay) and iOS (Screen Time API), reducing screen-time on blocked apps by 50%",
      "Contributed to an AI-powered distraction detection module that tracks active app/window context against the user's stated task and nudges them back on track, without ever logging keystrokes or screen content",
      "Developed a scheduled app-blocking feature using AlarmManager and BGTaskScheduler, enabling automated distraction-free intervals",
      "Deployed a structured log file system to capture errors and crashes, reducing average bug resolution time by 50%",
      "Implemented offline API caching with automatic sync, maintaining app functionality during network outages",
    ],
    tags: ["React Native", "Native Modules", "AI", "iOS", "Android"],
    link: "https://focusbear.io",
  },
  {
    name: "Swivics",
    tagline: "Corporate Mobility",
    categories: ["Mobile"],
    image: "/images/swivics-card.png",
    icon: "/images/swivics-icon.png" as string | undefined,
    description:
      "Corporate mobility platform streamlining employee commutes via automated scheduling.",
    bullets: [
      "Architected a corporate mobility platform using Expo, supporting automated scheduling and recurring ride management for employee transportation",
      "Designed a resilient background location service that bypasses Android Doze mode and OEM battery optimizations, achieving 100% tracking uptime",
      "Created stutter-free map animations using custom coordinate interpolation for driver markers, delivering smooth real-time location updates",
      "Implemented permission handling flows to secure 'Always Allow' location access, resolving background execution failures across Samsung, Xiaomi, and Oppo devices",
    ],
    tags: ["Expo", "Background Location", "Maps"],
    link: "https://www.swivics.com" as string | null,
  },
  {
    name: "Mergata",
    tagline: "Border & Rides",
    categories: ["Mobile"],
    image: "/images/mergata-card.png",
    icon: "/images/mergata-icon.png" as string | undefined,
    description:
      "Community app for the Albanian diaspora to check live border-crossing wait times, find rideshares between countries, and connect over jobs and housing.",
    bullets: [
      "Built with React Native and Expo, using geofencing to detect proximity to border crossings and prompt travelers for real-time wait-time reports",
      "Integrated interactive maps to visualize border checkpoints, live queue lengths, and crowdsourced crossing-time estimates",
      "Built a ride-matching marketplace where drivers publish trips with route, date, price, and seat availability for passengers to join",
      "Developed a community board for job listings, rental housing, and peer-to-peer help across the diaspora",
    ],
    tags: ["React Native", "Expo", "Maps", "Geofencing"],
    link: "https://apps.apple.com/in/app/mergata/id6753675571" as string | null,
  },
];

export const openSource = [
  {
    name: "expo-check-installed-apps",
    description:
      "Expo config plugin to detect installed apps on Android and iOS.",
    downloads: "271.7K+ downloads",
    bullets: [
      "Created an Expo module enabling developers to query device-installed apps for feature gating",
      "Implemented automatic native code injection via Expo config plugin, supporting SDK 51+ with zero manual setup",
    ],
    npmUrl: "https://www.npmjs.com/package/expo-check-installed-apps",
    githubUrl: "https://github.com/EndLess728",
  },
  {
    name: "react-native-mediapipe-posedetection",
    description:
      "Real-time pose detection for React Native using MediaPipe BlazePose with GPU acceleration.",
    downloads: "10.5K+ downloads",
    bullets: [
      "Built a high-performance native module supporting 33 pose landmarks with ~15 FPS real-time detection",
      "Implemented GPU-accelerated inference for iOS and Android using Vision Camera frame processing",
    ],
    npmUrl:
      "https://www.npmjs.com/package/react-native-mediapipe-posedetection",
    githubUrl: "https://github.com/EndLess728",
  },
];

export const education = [
  {
    schoolName: "Sri Sukhmani Institute of Information & Technology",
    logo: "/images/sukhmani.png",
    degree: "B.Tech in Computer Science",
    duration: "Nov 2019",
    desc: "Dera Bassi, Punjab — Punjab Technical University",
  },
  {
    schoolName: "Government Model Senior Secondary School",
    logo: "/images/cbse.jpg",
    degree: "Senior Secondary (12th)",
    duration: "2014",
    desc: "Sector 8, Chandigarh — Central Board of School Education",
  },
  {
    schoolName: "Govt. Model Sanskriti Sr. Sec. School",
    logo: "/images/school.png",
    degree: "Secondary (10th)",
    duration: "2011",
    desc: "Sector 20, Panchkula — Board of School Education Haryana",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#open-source" },
  { name: "Contact", href: "#contact" },
];
