import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiTypescript,
  SiPostman,
  SiSocketdotio,
  SiNextdotjs,
  SiPostgresql,
  SiLeetcode,
} from "react-icons/si";

export const personalInfo = {
  name: "Adarsh Gupta",
  title: "Software Engineer | Full-Stack Developer | AI/ML Enthusiast",
  email: "adarshgupta04022005@gmail.com",
  linkedin: "https://www.linkedin.com/in/idealgupta/",
  github: "https://github.com/adarsh-gupta-01",
  leetcode: "https://leetcode.com/u/Adarsh425/",
  gfg: "https://www.geeksforgeeks.org/profile/adarshguptqcww",
  resumeLink: "https://drive.google.com/file/d/1Ifk9Ytel1ZJNoVw3l6MZ6Sdx3x8FjMoM/view?usp=sharing",
  bio: "I build scalable MERN apps, RAG & Generative AI pipelines, and real-time platforms.",
  shortBio: "I build intelligent things for the web.",
};

export const education = [
  {
    institution: "LNCT Group of Colleges, Bhopal",
    degree: "B.Tech — Computer Science & Engineering (AI/ML)",
    duration: "Aug 2023 – Aug 2027",
    score: "CGPA: 8.6 / 10.0",
  },
  {
    institution: "Little Angel Public School, Pichhore, Shivpuri (M.P.)",
    degree: "Senior Secondary — Class 12, CBSE",
    duration: "Apr 2021 – Jun 2022",
    score: "92%",
  },
];

export const projects = [
  {
    title: "RAG PDF Chatbot",
    tech: ["LangChain.js", "OpenAI Embeddings", "Pinecone", "React", "Node.js", "Multer"],
    description: [
      <>
        Upload any PDF and ask{" "}
        <span className="text-text-primary font-medium">
          natural language questions
        </span>{" "}
        — grounded answers powered by{" "}
        <span className="text-accent-1 font-semibold">
          Retrieval-Augmented Generation
        </span>
        .
      </>,
      <>
        PDFs are chunked recursively, embedded via{" "}
        <span className="text-text-primary font-medium">
          Azure OpenAI (text-embedding-3-small)
        </span>
        , and stored in{" "}
        <span className="text-text-primary font-medium">
          Pinecone vector store
        </span>{" "}
        — each PDF gets its own namespace for precise retrieval.
      </>,
      <>
        User queries are embedded, top-k chunks retrieved, and fed into{" "}
        <span className="text-accent-1 font-semibold">GPT</span> for
        context-aware, hallucination-free answers.
      </>,
    ],
    date: "2025",
    githubLink: "https://github.com/adarsh-gupta-01/rag-pdf-chatbot-Frontend",
    liveLink: null,
    category: "AI / LLM · Full Stack",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/rag-pdf-chatbot.png",
  },
  {
    title: "Let's Chat",
    tech: ["Node.js", "Socket.IO", "MongoDB", "Express", "JWT", "bcryptjs"],
    description: [
      <>
        Full-stack real-time messaging app with{" "}
        <span className="text-accent-1 font-semibold">
          one-to-one & group chats
        </span>
        , live typing indicators, and per-chat unseen message counters.
      </>,
      <>
        <span className="text-text-primary font-medium">Socket.IO</span>{" "}
        powers instant message delivery — chat lists and message threads update
        live without polling.
      </>,
      <>
        REST API with{" "}
        <span className="text-accent-1 font-semibold">15+ endpoints</span>{" "}
        covering JWT auth, user search, group management, and profile/photo
        updates.
      </>,
    ],
    date: "Aug – Sep 2025",
    githubLink: "https://github.com/adarsh-gupta-01/Let-s-Chat",
    liveLink: null,
    category: "Real-time · Full Stack",
    icon: <FaNodeJs size={24} className="text-accent-1" />,
    image: "https://placehold.co/800x500/0f172a/22d3ee?text=Let's+Chat",
  },
  {
    title: "Expense Tracker",
    tech: ["React 18", "Firebase", "Firestore", "Chart.js", "Tailwind CSS", "jsPDF"],
    description: [
      <>
        Feature-rich personal finance app with{" "}
        <span className="text-text-primary font-medium">
          Google OAuth sign-in
        </span>
        , role-based access (admin / viewer), and real-time{" "}
        <span className="text-text-primary font-medium">Firestore</span>{" "}
        updates.
      </>,
      <>
        Analytics page with{" "}
        <span className="text-accent-1 font-semibold">
          pie &amp; bar charts
        </span>{" "}
        (Chart.js), PDF report export via jsPDF, and expense sharing with
        other users by email.
      </>,
      <>
        Fully responsive with desktop sidebar &amp; mobile nav — deployed on{" "}
        <span className="text-accent-1 font-semibold">Vercel</span> with SPA
        routing support.
      </>,
    ],
    date: "2025",
    githubLink: "https://github.com/adarsh-gupta-01/expense-tracker",
    liveLink: "https://expense247.vercel.app",
    category: "Full Stack · Firebase",
    icon: <FaDatabase size={24} className="text-accent-1" />,
    image: "/Expense-tracker.png",
  },
  {
    title: "Second Brain (Brainly)",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    description: [
      <>
        Personal knowledge OS to save, organise, and share notes &amp; links —
        built with{" "}
        <span className="text-accent-1 font-semibold">
          full TypeScript
        </span>{" "}
        on both frontend (React) and backend (Node.js).
      </>,
      <>
        Shareable brain via{" "}
        <span className="text-text-primary font-medium">
          unique public links
        </span>
        , JWT auth middleware, and three core models: User, Content, and Link.
      </>,
      <>
        Frontend deployed on{" "}
        <span className="text-accent-1 font-semibold">Vercel</span>, backend
        on <span className="text-text-primary font-medium">Render</span> —
        clean modular architecture with routes, models, middleware, and utils.
      </>,
    ],
    date: "2025",
    githubLink: "https://github.com/adarsh-gupta-01/second-brain-frontend",
    liveLink: "https://second-brain-frontend-phi.vercel.app",
    category: "Knowledge Management · Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/brainly.png",
  },
  {
    title: "Intern Setu",
    tech: ["Python", "React", "Machine Learning", "REST API"],
    description: [
      <>
        <span className="text-accent-1 font-semibold">SIH 2025</span> —
        AI-powered internship recommendation engine built for Smart India
        Hackathon 2025.
      </>,
      <>
        Uses{" "}
        <span className="text-text-primary font-medium">
          machine learning models
        </span>{" "}
        to match students with relevant internship opportunities based on
        their skills and profile.
      </>,
      <>
        Full-stack solution with a{" "}
        <span className="text-text-primary font-medium">React frontend</span>{" "}
        and Python-powered ML backend, presented under a national-level panel.
      </>,
    ],
    date: "SIH 2025",
    githubLink: "https://github.com/adarsh-gupta-01",
    liveLink: null,
    category: "AI / ML · SIH 2025",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/intern-setu.png",
  },
];

export const skills = {
  languages: [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "LangChain.js", icon: <FaCode /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Pinecone", icon: <FaDatabase /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
  coreCompetencies: [
    "RAG & Generative AI",
    "MERN Stack Development",
    "Real-time Systems",
    "LLM / OpenAI API",
    "DSA — 200+ Problems",
    "UI/UX Focused Design",
  ],
};

export const experience = [
  {
    role: "Content Manager",
    organization: "Devsthanam Club, LNCT",
    duration: "Mar 2024 – Aug 2025",
    points: [
      "Managed content strategy and creation for the club's technical and social media presence.",
      "Coordinated event coverage, posts, and outreach to grow the developer community at LNCT.",
    ],
  },
  {
    role: "Graphic Designer",
    organization: "Enigma Coding Club, LNCT",
    duration: "Aug 2025 – Present",
    points: [
      "Designing visual assets and creatives for club events, hackathons, and announcements.",
      "Applying UI/UX principles to produce clean, impactful designs aligned with club brand identity.",
    ],
  },
  {
    role: "Assistant Technical Member",
    organization: "Enigma Club, LNCT",
    duration: "Aug – Dec 2025",
    points: [
      "Assisted in organising technical events, workshops, and coding competitions for students.",
      "Contributed to club's technical operations and helped onboard new members.",
    ],
  },
  {
    role: "Smart India Hackathon 2025 — Participant",
    organization: "Government of India",
    duration: "2025",
    points: [
      "Competed in SIH 2025, one of India's largest student hackathons with 1M+ participants.",
      "Built and presented Intern Setu — an AI-powered internship recommendation engine — under a national-level panel.",
    ],
  },
  {
    role: "Certifications",
    organization: "Cisco · Board Infinity",
    duration: "Mar 2025 – Jul 2025",
    points: [
      "Network Technician Career Path — Cisco (Jul 2025): Networking fundamentals, TCP/IP, routing & switching, network security.",
      "Data Structures & Backend with Java — Board Infinity (Mar 2025): DS concepts, Java backend development.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  leetcode: { url: personalInfo.leetcode, icon: <SiLeetcode size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
