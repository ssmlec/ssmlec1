import {
  Cpu,
  Factory,
  BarChart3,
  Database,
  Code2,
  Layers,
  Server,
  MonitorSmartphone,
  PieChart,
  BrainCircuit,
  LineChart,
  PenTool,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CourseCategory = "industrial-automation" | "software-technologies" | "designing";

export interface Course {
  slug: string;
  title: string;
  category: CourseCategory;
  tagline: string;
  description: string;
  duration: string;
  eligibility: string;
  mode: string;
  level: string;
  icon: LucideIcon;
  skills: string[];
  technologies: string[];
  careers: string[];
  outcomes: string[];
  curriculum: { title: string; detail: string }[];
  projects?: string[];
  software?: string[];
  faqs: { q: string; a: string }[];
}

export const categoryMeta: Record<
  CourseCategory,
  { label: string; blurb: string; icon: LucideIcon }
> = {
  "industrial-automation": {
    label: "Industrial Automation",
    blurb: "Industry 4.0, smart manufacturing & data-driven automation programs.",
    icon: Factory,
  },
  "software-technologies": {
    label: "Software Technologies",
    blurb: "AI-integrated full-stack, data science & modern engineering tracks.",
    icon: Code2,
  },
  designing: {
    label: "Designing",
    blurb: "Industry-grade CAD design programs for mechanical & electrical.",
    icon: PenTool,
  },
};

const faqBase = [
  {
    q: "Who can enroll in this program?",
    a: "The program is open to engineering students, graduates, working professionals and career switchers who meet the eligibility criteria.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes. Every SSMLEC program includes dedicated placement support — resume building, mock interviews and direct referrals to our hiring partners.",
  },
  {
    q: "Will I receive a certificate?",
    a: "You receive an industry-recognized SSMLEC completion certificate along with hands-on project portfolio proof.",
  },
];

export const courses: Course[] = [
  // ---------------- Industrial Automation ----------------
  {
    slug: "intelligent-manufacturing-systems",
    title: "Intelligent Manufacturing Systems Program",
    category: "industrial-automation",
    tagline: "Master connected factories & Industry 4.0 systems.",
    description:
      "A comprehensive program covering PLC, SCADA, IIoT and cyber-physical systems that power modern intelligent manufacturing lines.",
    duration: "6 Months",
    eligibility: "Diploma / B.E / B.Tech (Mechanical, Electrical, E&TC, Instrumentation)",
    mode: "Classroom + Live Lab",
    level: "Intermediate to Advanced",
    icon: Factory,
    skills: ["PLC Programming", "SCADA", "IIoT", "HMI Design", "Digital Twin", "Industrial Networking"],
    technologies: ["Siemens TIA", "AVEVA", "Rockwell", "Node-RED", "MQTT", "OPC-UA"],
    careers: ["Automation Engineer", "Manufacturing Systems Engineer", "IIoT Specialist", "Control Systems Engineer"],
    outcomes: [
      "Design and commission automated production lines",
      "Build IIoT dashboards for real-time monitoring",
      "Integrate cyber-physical systems end to end",
    ],
    curriculum: [
      { title: "Foundations of Industry 4.0", detail: "Smart factory architecture, digital transformation & standards." },
      { title: "PLC & HMI Engineering", detail: "Ladder logic, structured text and operator interface design." },
      { title: "SCADA & Supervisory Control", detail: "AVEVA/Rockwell SCADA, alarms, trends and historians." },
      { title: "IIoT & Connectivity", detail: "MQTT, OPC-UA, edge gateways and cloud dashboards." },
      { title: "Digital Twin & Capstone", detail: "Simulate, optimize and deploy a full manufacturing cell." },
    ],
    projects: ["Automated bottling line", "Real-time OEE dashboard", "Predictive downtime alerting"],
    faqs: faqBase,
  },
  {
    slug: "smart-manufacturing-engineer",
    title: "Smart Manufacturing Engineer Program",
    category: "industrial-automation",
    tagline: "Become a shop-floor-ready smart manufacturing engineer.",
    description:
      "Hands-on training on robotics, motion control, MES and lean smart-factory practices for next-generation manufacturing.",
    duration: "5 Months",
    eligibility: "Diploma / B.E / B.Tech in Engineering",
    mode: "Classroom + Live Lab",
    level: "Beginner to Advanced",
    icon: Cpu,
    skills: ["Industrial Robotics", "Motion Control", "MES", "Lean Automation", "Sensors & Actuators"],
    technologies: ["FANUC", "ABB Robotics", "Siemens", "Ignition MES", "Cobots"],
    careers: ["Smart Manufacturing Engineer", "Robotics Technician", "MES Analyst", "Process Automation Engineer"],
    outcomes: [
      "Program and integrate industrial robots",
      "Deploy MES for production traceability",
      "Optimize lines using lean automation principles",
    ],
    curriculum: [
      { title: "Smart Factory Essentials", detail: "Sensors, actuators and industrial communication." },
      { title: "Robotics & Cobots", detail: "Programming and safe integration of industrial robots." },
      { title: "Motion & Drives", detail: "Servo, VFD and precise motion control systems." },
      { title: "MES & Traceability", detail: "Manufacturing execution systems and shop-floor analytics." },
      { title: "Capstone Project", detail: "End-to-end automated work cell integration." },
    ],
    projects: ["Robotic pick & place cell", "MES traceability module"],
    faqs: faqBase,
  },
  {
    slug: "industrial-data-analytics-engineer",
    title: "Industrial Data Analytics Engineer Program",
    category: "industrial-automation",
    tagline: "Turn factory data into actionable intelligence.",
    description:
      "Learn to collect, model and analyze industrial data to drive predictive maintenance and operational excellence.",
    duration: "5 Months",
    eligibility: "Engineering graduates with basic programming interest",
    mode: "Classroom + Live Lab",
    level: "Intermediate",
    icon: BarChart3,
    skills: ["Industrial Data Modeling", "Predictive Maintenance", "Python", "Time-Series Analytics", "Dashboards"],
    technologies: ["Python", "Power BI", "InfluxDB", "Grafana", "Azure IoT"],
    careers: ["Industrial Data Engineer", "Analytics Engineer", "Predictive Maintenance Analyst"],
    outcomes: [
      "Build data pipelines from PLCs to the cloud",
      "Create predictive maintenance models",
      "Deliver executive-ready operational dashboards",
    ],
    curriculum: [
      { title: "Industrial Data Sources", detail: "Sensors, historians and edge data acquisition." },
      { title: "Data Engineering Basics", detail: "Cleaning, modeling and time-series storage." },
      { title: "Analytics with Python", detail: "Statistical and ML models for machine data." },
      { title: "Visualization & Reporting", detail: "Grafana and Power BI operational dashboards." },
      { title: "Predictive Capstone", detail: "Deploy a predictive maintenance solution." },
    ],
    projects: ["Vibration-based failure prediction", "Energy consumption analytics"],
    faqs: faqBase,
  },

  // ---------------- Software Technologies ----------------
  {
    slug: "sql-database-specialist-genai",
    title: "SQL Database Specialist with GenAI",
    category: "software-technologies",
    tagline: "Design, query and supercharge databases with GenAI.",
    description:
      "Become a database specialist who blends advanced SQL with generative-AI copilots for querying, optimization and automation.",
    duration: "4 Months",
    eligibility: "Any graduate with logical aptitude",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: Database,
    skills: ["Advanced SQL", "Database Design", "Query Optimization", "GenAI Prompting", "Data Modeling"],
    technologies: ["PostgreSQL", "MySQL", "SQL Server", "OpenAI", "LangChain"],
    careers: ["Database Developer", "SQL Analyst", "Data Engineer", "BI Developer"],
    outcomes: ["Write complex production-grade queries", "Optimize slow databases", "Build GenAI-assisted data tools"],
    curriculum: [
      { title: "SQL Fundamentals", detail: "Joins, subqueries, aggregation and set operations." },
      { title: "Advanced SQL", detail: "Window functions, CTEs, indexing and tuning." },
      { title: "Database Design", detail: "Normalization, schema design and modeling." },
      { title: "GenAI for Data", detail: "Natural-language querying and AI copilots." },
      { title: "Capstone", detail: "Build an AI-assisted analytics database." },
    ],
    faqs: faqBase,
  },
  {
    slug: "ai-fullstack-mern-python",
    title: "AI Integrated Full Stack Program (MERN / Python)",
    category: "software-technologies",
    tagline: "Build AI-powered full-stack apps end to end.",
    description:
      "A career-defining full-stack track covering MERN and Python with integrated AI features, APIs and cloud deployment.",
    duration: "7 Months",
    eligibility: "Any graduate / final-year student",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: Layers,
    skills: ["React", "Node.js", "Python", "REST APIs", "AI Integration", "Cloud Deployment"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Python", "OpenAI API"],
    careers: ["Full Stack Developer", "MERN Developer", "AI Application Engineer", "Backend Developer"],
    outcomes: ["Ship production full-stack apps", "Integrate LLMs into products", "Deploy scalable cloud services"],
    curriculum: [
      { title: "Frontend Engineering", detail: "React, state management and modern UI." },
      { title: "Backend & APIs", detail: "Node/Express, Python and REST/GraphQL." },
      { title: "Databases", detail: "MongoDB, SQL and data modeling." },
      { title: "AI Integration", detail: "LLM APIs, embeddings and RAG features." },
      { title: "Deployment & Capstone", detail: "CI/CD, cloud hosting and a full product build." },
    ],
    faqs: faqBase,
  },
  {
    slug: "ai-embedded-laravel",
    title: "AI Embedded Laravel Program",
    category: "software-technologies",
    tagline: "Ship robust PHP/Laravel apps with AI baked in.",
    description:
      "Master modern Laravel development with embedded AI features, clean architecture and production deployment.",
    duration: "5 Months",
    eligibility: "Any graduate with programming interest",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: Server,
    skills: ["PHP", "Laravel", "MVC", "REST APIs", "AI Features", "MySQL"],
    technologies: ["Laravel", "PHP", "MySQL", "Livewire", "OpenAI API"],
    careers: ["Laravel Developer", "Backend Developer", "PHP Full Stack Developer"],
    outcomes: ["Build scalable Laravel apps", "Add AI-powered modules", "Deploy secure production systems"],
    curriculum: [
      { title: "PHP & OOP", detail: "Modern PHP foundations and OOP." },
      { title: "Laravel Core", detail: "Routing, Eloquent, blade and middleware." },
      { title: "APIs & Auth", detail: "REST APIs, Sanctum and role-based access." },
      { title: "AI Modules", detail: "Embedding AI features into Laravel." },
      { title: "Capstone", detail: "Full AI-enabled Laravel product." },
    ],
    faqs: faqBase,
  },
  {
    slug: "ai-aspnet-core-mvc",
    title: "AI Accelerated ASP.NET Core MVC Program",
    category: "software-technologies",
    tagline: "Enterprise .NET development, accelerated by AI.",
    description:
      "Become an enterprise-ready .NET developer building secure, scalable ASP.NET Core MVC applications with AI acceleration.",
    duration: "6 Months",
    eligibility: "Any graduate / engineering student",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: Code2,
    skills: ["C#", "ASP.NET Core", "MVC", "Entity Framework", "REST APIs", "AI Copilots"],
    technologies: ["C#", ".NET Core", "Entity Framework", "SQL Server", "Azure"],
    careers: [".NET Developer", "Software Engineer", "Backend Developer", "Enterprise App Developer"],
    outcomes: ["Build enterprise MVC applications", "Use AI copilots to accelerate delivery", "Deploy to Azure cloud"],
    curriculum: [
      { title: "C# Foundations", detail: "Language fundamentals and OOP." },
      { title: "ASP.NET Core MVC", detail: "Controllers, views, routing and Razor." },
      { title: "Data with EF Core", detail: "Entity Framework and SQL Server." },
      { title: "AI-Accelerated Dev", detail: "Copilot workflows and productivity." },
      { title: "Capstone", detail: "Deploy an enterprise-grade app." },
    ],
    faqs: faqBase,
  },
  {
    slug: "ai-frontend-engineering",
    title: "AI Assisted Front-End Engineering Program",
    category: "software-technologies",
    tagline: "Craft stunning, AI-assisted user interfaces.",
    description:
      "Master modern front-end engineering with React, design systems and AI-assisted workflows for pixel-perfect products.",
    duration: "4 Months",
    eligibility: "Any graduate / creative aspirant",
    mode: "Classroom + Online",
    level: "Beginner to Intermediate",
    icon: MonitorSmartphone,
    skills: ["HTML/CSS", "JavaScript", "React", "Tailwind", "UI/UX", "AI Tooling"],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Vite"],
    careers: ["Front-End Developer", "UI Engineer", "React Developer"],
    outcomes: ["Build responsive modern UIs", "Work with design systems", "Leverage AI to ship faster"],
    curriculum: [
      { title: "Web Foundations", detail: "Semantic HTML, modern CSS and responsive layout." },
      { title: "JavaScript & TypeScript", detail: "Language mastery for the web." },
      { title: "React & Components", detail: "Hooks, state and reusable components." },
      { title: "Design Systems", detail: "Tailwind, accessibility and polish." },
      { title: "Capstone", detail: "Ship a production front-end product." },
    ],
    faqs: faqBase,
  },
  {
    slug: "power-bi-specialist",
    title: "Power BI Specialist",
    category: "software-technologies",
    tagline: "Turn raw data into executive dashboards.",
    description:
      "Become a business-intelligence specialist who builds compelling, interactive Power BI dashboards and data models.",
    duration: "3 Months",
    eligibility: "Any graduate",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: PieChart,
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query", "Storytelling with Data"],
    technologies: ["Power BI", "DAX", "Power Query", "Excel", "SQL"],
    careers: ["BI Analyst", "Power BI Developer", "Data Analyst", "Reporting Specialist"],
    outcomes: ["Model and clean data", "Write advanced DAX", "Build interactive dashboards"],
    curriculum: [
      { title: "Power BI Basics", detail: "Data import, transform and visuals." },
      { title: "Data Modeling", detail: "Relationships, star schema and Power Query." },
      { title: "DAX Deep Dive", detail: "Measures, time intelligence and context." },
      { title: "Dashboard Design", detail: "Interactivity, storytelling and publishing." },
      { title: "Capstone", detail: "Full end-to-end BI dashboard." },
    ],
    faqs: faqBase,
  },
  {
    slug: "nextgen-ai-ml",
    title: "NextGen AI & ML Program",
    category: "software-technologies",
    tagline: "Go from fundamentals to deploying ML models.",
    description:
      "A future-focused program covering machine learning, deep learning and generative AI with real deployment experience.",
    duration: "7 Months",
    eligibility: "Graduates with basic maths / programming interest",
    mode: "Classroom + Online",
    level: "Beginner to Advanced",
    icon: BrainCircuit,
    skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "Generative AI", "MLOps"],
    technologies: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Hugging Face"],
    careers: ["ML Engineer", "AI Engineer", "Data Scientist", "NLP Engineer"],
    outcomes: ["Train and evaluate ML models", "Build deep-learning solutions", "Deploy models to production"],
    curriculum: [
      { title: "Python for AI", detail: "NumPy, Pandas and data handling." },
      { title: "Machine Learning", detail: "Supervised, unsupervised and evaluation." },
      { title: "Deep Learning", detail: "Neural networks, CNNs and RNNs." },
      { title: "Generative AI", detail: "LLMs, embeddings and RAG systems." },
      { title: "MLOps Capstone", detail: "Deploy and monitor a live model." },
    ],
    faqs: faqBase,
  },
  {
    slug: "industrial-data-science-predictive",
    title: "Industrial Data Science & Predictive Analytics Program",
    category: "software-technologies",
    tagline: "Predictive analytics for industrial excellence.",
    description:
      "Blend data science with industrial context to build predictive models that improve quality, uptime and efficiency.",
    duration: "6 Months",
    eligibility: "Engineering / science graduates",
    mode: "Classroom + Online",
    level: "Intermediate to Advanced",
    icon: LineChart,
    skills: ["Python", "Statistics", "Predictive Modeling", "Time Series", "Industrial Analytics"],
    technologies: ["Python", "scikit-learn", "Pandas", "Power BI", "Azure ML"],
    careers: ["Data Scientist", "Predictive Analyst", "Industrial Data Scientist"],
    outcomes: ["Apply statistics to industry problems", "Build predictive & forecasting models", "Communicate insights"],
    curriculum: [
      { title: "Statistics & Python", detail: "Foundations for industrial data science." },
      { title: "Data Wrangling", detail: "Cleaning and feature engineering." },
      { title: "Predictive Modeling", detail: "Regression, classification and forecasting." },
      { title: "Time Series", detail: "Forecasting industrial signals." },
      { title: "Capstone", detail: "Solve a real industrial prediction problem." },
    ],
    faqs: faqBase,
  },

  // ---------------- Designing ----------------
  {
    slug: "autocad-mechanical",
    title: "AutoCAD Mechanical (2D & 3D)",
    category: "designing",
    tagline: "Professional mechanical drafting & modeling.",
    description:
      "Master 2D drafting and 3D modeling for mechanical design using AutoCAD Mechanical with real industry projects.",
    duration: "3 Months",
    eligibility: "Diploma / degree in Mechanical or related field",
    mode: "Classroom + Lab",
    level: "Beginner to Advanced",
    icon: PenTool,
    skills: ["2D Drafting", "3D Modeling", "GD&T", "Assembly Design", "Drawing Standards"],
    technologies: ["AutoCAD Mechanical", "AutoCAD"],
    software: ["AutoCAD Mechanical", "AutoCAD 2D & 3D"],
    careers: ["CAD Designer", "Mechanical Draftsman", "Design Engineer", "Product Designer"],
    outcomes: ["Create production drawings", "Model 3D mechanical parts", "Apply industry drawing standards"],
    curriculum: [
      { title: "AutoCAD Interface", detail: "Tools, workspace and drawing setup." },
      { title: "2D Drafting", detail: "Precision drafting, dimensioning and layers." },
      { title: "3D Modeling", detail: "Solid modeling and assemblies." },
      { title: "Industry Projects", detail: "Real mechanical component drawings." },
    ],
    projects: ["Gearbox assembly drawing", "Machine part 3D model", "Sheet-metal component set"],
    faqs: faqBase,
  },
  {
    slug: "autocad-electrical",
    title: "AutoCAD Electrical (2D & 3D)",
    category: "designing",
    tagline: "Design professional electrical control systems.",
    description:
      "Learn electrical schematic design, panel layouts and control drawings using AutoCAD Electrical for industry.",
    duration: "3 Months",
    eligibility: "Diploma / degree in Electrical or related field",
    mode: "Classroom + Lab",
    level: "Beginner to Advanced",
    icon: Zap,
    skills: ["Electrical Schematics", "Panel Design", "Wiring Diagrams", "PLC I/O Drawings", "Standards"],
    technologies: ["AutoCAD Electrical", "AutoCAD"],
    software: ["AutoCAD Electrical", "AutoCAD 2D & 3D"],
    careers: ["Electrical Design Engineer", "Panel Designer", "Control Systems Draftsman"],
    outcomes: ["Create electrical schematics", "Design control panel layouts", "Generate BOM & reports"],
    curriculum: [
      { title: "Electrical Basics in CAD", detail: "Symbols, libraries and project setup." },
      { title: "Schematic Design", detail: "Ladder logic and wiring diagrams." },
      { title: "Panel Layouts", detail: "Enclosure and component placement." },
      { title: "Industry Projects", detail: "Complete control-system drawing sets." },
    ],
    projects: ["Motor control schematic", "PLC I/O wiring drawings", "Control panel layout"],
    faqs: faqBase,
  },
];

export const coursesByCategory = (cat: CourseCategory) => courses.filter((c) => c.category === cat);
export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const featuredCourseSlugs = [
  "intelligent-manufacturing-systems",
  "ai-fullstack-mern-python",
  "nextgen-ai-ml",
  "power-bi-specialist",
  "smart-manufacturing-engineer",
  "autocad-mechanical",
];

export const stats = [
  { value: 800, suffix: "+", label: "Learners Trained" },
  { value: 60, suffix: "+", label: "Corporate Training" },
  { value: 4, suffix: "+", label: "Years of Excellence" },
  { value: 30, suffix: "+", label: "Corporate Clients" },
];

export const placementStats = [
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 18, suffix: " LPA", label: "Highest Package" },
  { value: 6, suffix: " LPA", label: "Average Package" },
  { value: 250, suffix: "+", label: "Recruiting Companies" },
];

import landt from "../assets/maquee _logos/Picture1.png"
import infosys from "../assets/maquee _logos/infosys.png"
import tcs from "../assets/maquee _logos/tcs.png"
import sa from "../assets/maquee _logos/sageautomation.png"
import ril from "../assets/maquee _logos/ril.png"
import bridgestone from "../assets/maquee _logos/bridgestone.png"
import cg from "../assets/maquee _logos/cg.png"
import accenture from "../assets/maquee _logos/accenture.png"
import nstl from "../assets/maquee _logos/nstl.png"
import mgl from "../assets/maquee _logos/mgl.png"
import se from "../assets/maquee _logos/Schneider Electric.png"

export const partners = [
  {
    name: "L&T",
    logo: landt,
  },
  {
    name: "Infosys",
    logo: infosys,
  },
  {
    name: "TCS",
    logo: tcs,
  },
  {
    name: "Sage Automation",
    logo: sa,
  },
  {
    name: "Schneider Electric",
    logo: se,
  },
  {
    name: "Reliance Industries",
    logo: ril,
  },
  {
    name: "Mahanagar gas",
    logo: mgl,
  },
  {
    name: "Bridgestone",
    logo: bridgestone,
  },
  {
    name: "Nestle",
    logo: nstl,
  },
  {
    name: "Accenture",
    logo: accenture,
  },
  {
    name: "Colgate",
    logo: cg,
  },
];

export const whyChoose = [
  {
    icon: Factory,
    title: "Industry 4.0 Curriculum",
    desc: "Programs built with automation & AI experts, aligned to real industry needs.",
  },
  {
    icon: Cpu,
    title: "Live Hands-On Labs",
    desc: "Work on real PLCs, robots and live projects — not just theory.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Integrated Learning",
    desc: "Every program embeds modern AI tools and workflows.",
  },
  {
    icon: BarChart3,
    title: "Dedicated Placements",
    desc: "Resume prep, mock interviews and direct referrals to 250+ partners.",
  },
  {
    icon: Server,
    title: "Expert Mentors",
    desc: "Learn directly from working industry professionals.",
  },
  {
    icon: Zap,
    title: "Career Acceleration",
    desc: "Gateway to national & multinational companies.",
  },
];

export const testimonials = [
  {
    name: "Rakesh Balakrishnan",
    role: "Technical Lead, HCL Technologies",
    quote:
      "SSM is a pioneer in industrial automation. The training gave me deep technical exposure across FMCG, chemical and manufacturing industries.",
  },
  {
    name: "Priya Sharma",
    role: "Full Stack Developer, Infosys",
    quote:
      "The AI-integrated full-stack program was intense and practical. I built real projects and landed my dream role within weeks of finishing.",
  },
  {
    name: "Arun Verma",
    role: "Automation Engineer, Siemens",
    quote:
      "Hands-on labs with real PLCs and SCADA made all the difference. I walked into interviews genuinely job-ready.",
  },
  {
    name: "Sneha Patil",
    role: "Data Analyst, Accenture",
    quote:
      "The Power BI and analytics track transformed my career. The mentors truly care about your growth and placement.",
  },
];

export const videoTestimonials = [
  { name: "Aditya Rao", role: "ML Engineer", company: "TCS" },
  { name: "Meera Nair", role: "CAD Designer", company: "L&T" },
  { name: "Rohit Deshmukh", role: ".NET Developer", company: "Capgemini" },
];

export const successStories = [
  { name: "Karan Mehta", program: "NextGen AI & ML", company: "Accenture", package: "12 LPA" },
  { name: "Divya Iyer", program: "AI Full Stack (MERN)", company: "Infosys", package: "9 LPA" },
  { name: "Sahil Khan", program: "Smart Manufacturing Engineer", company: "Siemens", package: "8 LPA" },
  { name: "Neha Gupta", program: "Power BI Specialist", company: "TCS", package: "7 LPA" },
];

export const placementProcess = [
  { step: "01", title: "Skill Assessment", desc: "We evaluate your strengths and map a career path." },
  { step: "02", title: "Job-Ready Training", desc: "Hands-on projects and industry-aligned learning." },
  { step: "03", title: "Portfolio & Resume", desc: "Build a standout portfolio and optimized resume." },
  { step: "04", title: "Mock Interviews", desc: "Technical and HR interview preparation." },
  { step: "05", title: "Partner Referrals", desc: "Direct referrals to 250+ hiring companies." },
  { step: "06", title: "Get Placed", desc: "Land your role and start your professional journey." },
];

export const blogPosts = [
  {
    slug: "industry-4-0-careers",
    title: "Industry 4.0 Careers: The Skills That Will Define the Next Decade",
    excerpt: "From IIoT to digital twins, discover the automation skills employers are racing to hire.",
    category: "Automation",
    date: "2026-05-18",
    read: "6 min read",
  },
  {
    slug: "ai-full-stack-roadmap",
    title: "The AI-Integrated Full Stack Roadmap for 2026",
    excerpt: "A step-by-step path to becoming a full-stack developer who ships AI-powered products.",
    category: "Software",
    date: "2026-04-30",
    read: "8 min read",
  },
  {
    slug: "data-analytics-manufacturing",
    title: "How Data Analytics Is Transforming Manufacturing Floors",
    excerpt: "Predictive maintenance and real-time dashboards are redefining operational excellence.",
    category: "Data",
    date: "2026-04-12",
    read: "5 min read",
  },
  {
    slug: "cad-design-career-guide",
    title: "A Complete Career Guide to Professional CAD Design",
    excerpt: "Everything you need to build a rewarding career in mechanical and electrical CAD.",
    category: "Design",
    date: "2026-03-22",
    read: "7 min read",
  },
];

export const events = [
  {
    title: "Industry 4.0 Bootcamp",
    date: "2026-07-20",
    type: "Bootcamp",
    location: "SSMLEC Campus",
    desc: "A 2-day intensive hands-on bootcamp on smart manufacturing and IIoT.",
  },
  {
    title: "AI & ML Career Webinar",
    date: "2026-07-28",
    type: "Webinar",
    location: "Online",
    desc: "Live session on breaking into AI/ML careers with our lead mentors.",
  },
  {
    title: "Placement Drive — Automation",
    date: "2026-08-05",
    type: "Placement Drive",
    location: "SSMLEC Campus",
    desc: "On-campus recruitment drive with leading automation companies.",
  },
  {
    title: "Open House & Lab Tour",
    date: "2026-08-14",
    type: "Open House",
    location: "SSMLEC Campus",
    desc: "Explore our labs, meet mentors and discover the right program for you.",
  },
];

export const generalFaqs = [
  {
    q: "What makes SSMLEC different from other training institutes?",
    a: "SSMLEC is an industry-centered Learning Excellence Centre focused on Industry 4.0, automation and AI. We combine expert-led training, live hands-on labs and dedicated placement support with 250+ hiring partners.",
  },
  {
    q: "Do you offer placement assistance?",
    a: "Yes. Every program includes end-to-end placement support — resume building, portfolio guidance, mock interviews and direct referrals to our partner companies.",
  },
  {
    q: "Are the programs suitable for beginners?",
    a: "Absolutely. Most programs start from foundations and progress to advanced, industry-ready skills, making them ideal for students, graduates and career switchers.",
  },
  {
    q: "Do I get a certificate after completion?",
    a: "Yes, you receive an industry-recognized SSMLEC certificate along with a real project portfolio.",
  },
  {
    q: "Can working professionals enroll?",
    a: "Yes. We offer flexible classroom and online modes designed to fit working professionals.",
  },
  {
    q: "How do I enroll or get more details?",
    a: "Simply fill out the enquiry form or contact us — our counselors will guide you to the right program.",
  },
];

export const contactInfo = {
  phone: "+91 99740 61290",
  email: "Learning@ssm-infotech.com",
  address: "SSM Learning Excellence Centre, 704 Luxuria Business Hub, Near Y Junction, Dumas Road, Surat - 395007, Gujarat, India",
  mapQuery: "704 Luxuria Business Hub, Near Y Junction, Dumas Road, Surat, Gujarat, India",
};

export const courseOptions = courses.map((c) => c.title);
