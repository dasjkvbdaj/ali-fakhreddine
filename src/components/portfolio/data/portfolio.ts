export const profile = {
  name: "Hi, I'm Ali",
  title: "Computer Science Graduate",
  summary:
    "I am a Computer Science graduate with a strong foundation in backend development, specializing in Spring Boot and Hibernate. My expertise includes designing and implementing RESTful APIs, securing applications with JWT and session management, and integrating frontend technologies like React and Next.js with robust databases such as PostgreSQL.",
  email: "afakhreddine717@gmail.com",
  phone: "961 81 905 703",
  github: "https://github.com/dasjkvbdaj",
  linkedin: "https://www.linkedin.com/in/ali-fakhreddine-3369a5312/",
  cvUrl: "/Ali Fakhreddine CV.pdf",
  profileImage: "/me.jpg",
};

export const skills = {
  "Programming Languages": ["Java", "JavaScript", "C++"],
  "Frameworks & Libraries": [
    "Spring Boot",
    "Hibernate",
    "React.js",
    "Next.js",
    "Tailwind CSS",
  ],
  Databases: ["PostgreSQL", "MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel"],
  Languages: ["Arabic (Native)", "English (Intermediate)"],
};

export const experience = [
  {
    role: "Front-End Developer Internship",
    company: "Techryt",
    location: "Remote, Lebanon",
    period: "Aug 2025 – Oct 2025",
    bullets: [
      "Designed and implemented the core architecture of a Next.js web platform, improving code scalability and component reusability.",
      "Developed and deployed two interactive gaming systems (Dice and Slot Machines) with optimized probability logic, animation effects, and secure client-side state handling.",
      "Enhanced front-end performance and user engagement by integrating custom animation libraries for fluid, responsive interactions.",
    ],
  },
];

export const education = {
  school: "Rafik Hariri University (RHU)",
  degree: "B.S. in Computer Science",
  gpa: "3.4 / 4",
  location: "Mechref, Lebanon",
  period: "Sep 2022 – Dec 2025",
};

export type Project = {
  id: string;
  name: string;
  long: string;
  stack: string[];
  image: string;
  github?: string | { label: string; url: string }[];
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "system-forge",
    name: "Portfolio Website",
    long:
      "A high-performance, professional portfolio website featuring a custom design system, hardware-accelerated animations. Built to demonstrate modern full-stack capabilities with a focus on visual excellence and technical performance.",
    stack: ["React", "Tailwind CSS", "emailjs"],
    image: "/projects/portfolio.png",
    github: "https://github.com/dasjkvbdaj/ali-s-system-forge",
    demo: "https://ali-fakhreddine.vercel.app/",
  },
  {
    id: "smart-presence",
    name: "Smart Presence – Automated Attendance System",
    long:
      "Led frontend development using React + MUI, designing interactive dashboards and attendance views. Collaborated with teammates integrating Laravel backend and YOLOv8 + LBPH models for automated face recognition.",
    stack: ["React", "MUI", "CSS", "Laravel", "YOLOv8", "LBPH"],
    image: "/projects/smart-presence.jpg",
    github: [
      { label: "Code 1", url: "https://github.com/Chafic123/Automated-Attendance-System-Backend" },
      { label: "Code 2", url: "https://github.com/Chafic123/Attendance-Frontend" },
      { label: "Code 3", url: "https://github.com/Chafic123/Attendance-ML" },
    ],
    demo: "#",
  },
  {
    id: "electrozone",
    name: "ElectroZone",
    long:
      "Developed a role-based e-commerce system with React (frontend) and Spring Boot (backend), featuring JWT-secured authentication and session management. Built complete CRUD functionality for products, orders, and messaging via PostgreSQL and RESTful APIs.",
    stack: ["React", "Spring Boot", "PostgreSQL", "JWT", "REST API"],
  
    image: "/projects/electrozone.png",
    github: [
      { label: "Code 1", url: "https://github.com/dasjkvbdaj/electrozone-e-commerce" },
      { label: "Code 2", url: "https://github.com/dasjkvbdaj/ElectroZoneBackend" },
    ],
    demo: "#",
  },
  {
    id: "garden-haven",
    name: "Garden Haven",
    long:
      "Took primary responsibility for frontend, building responsive layouts with React.js, Firebase authentication, and Supabase integration. Implemented product management, order tracking, and real-time filtering features to improve browsing and user flow.",
    stack: ["React", "Firebase", "Supabase", "CSS"],
   
    image: "/projects/garden-haven.jpg",
    github: "https://github.com/MohammadTarhine/React-Project",
    demo: "https://react-project-wheat-six.vercel.app/",
  },
  {
    id: "hara-elections",
    name: "Hara Elections",
    long:
      "Built a fully client-side web application using HTML, CSS, and JavaScript for bilingual (Arabic/English) voter data filtering and vote tracking. Integrated Excel data parsing via XLSX.js for dynamic retrieval of registrants.",
    stack: ["HTML", "CSS", "JavaScript", "Excel"],
   
    image: "/projects/hara-elections.png",
    github: "https://github.com/dasjkvbdaj/Hara-Elections",
    demo: "https://hara-elections.vercel.app/",
  },
  {
    id: "booklify",
    name: "Booklify",
    long:
      "Developed a full-featured bookstore website supporting user registration/login, admin dashboard, and CRUD operations for products and orders. Built shopping cart, checkout, and order management modules.",
    stack: ["PHP", "MySQL", "CSS", "JQuery"],
  
    image: "/projects/booklify.png",
    github: "https://github.com/dasjkvbdaj/Booklify",
    demo: "#",
  },
  {
    id: "waheed-fragrance",
    name: "Waheed Fragrance",
    long:
      "A modern fragrance e-commerce platform featuring secure role-based authentication, dynamic product listings, and a smooth shopping experience with responsive design and elegant UI animations.",
    stack: ["Next.js", "Tailwind CSS", "Firebase", "Supabase"],
    
    image: "/projects/waheed-fragrance.png",
    github: "https://github.com/dasjkvbdaj/waheed-fragrance",
    demo: "https://waheed-fragrance.vercel.app/",
  },
  {
    id: "handasiyan",
    name: "Handasiyan",
    long:
      "A visually engaging interior design website showcasing creative projects, built with role-based authentication, interactive animations, and a clean, responsive layout to highlight design portfolios.",
    stack: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "emailjs"],
    image: "/projects/handasiyan.png",
    github: "https://github.com/dasjkvbdaj/Handasiyan-Design",
    demo: "https://handasiyan.com/",
  },
];

export const navSections = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];