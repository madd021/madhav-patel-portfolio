/**
 * PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * Sourced accurately from Madhav Patel's CV.
 * Contains no fabricated achievements, companies, titles, or statistics.
 */

const baseUrl = import.meta.env.BASE_URL || '/';
const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const personalInfo = {
  fullName: "Patel Madhav Vaibhavkumar",
  displayName: "Madhav Patel",
  initials: "MP",
  location: "Piplod, Surat, Gujarat, India",
  email: "madhav.ptl026@gmail.com",
  phone: "+91 9824762362",
  phoneDisplay: "+91 98247 62362",
  
  headline: "MCA Data Science Student | Python & Django Developer",
  aspiringTitle: "Aspiring AI & Data Science Engineer",
  tagline: "Building practical solutions at the intersection of Python, Data Science and AI.",
  shortStatement: "Building practical digital experiences while exploring Data Science, AI, RAG, and LLM-powered applications.",
  
  careerObjective: "Motivated and detail-oriented BCA graduate with knowledge of Python and Django, seeking an opportunity to utilize technical, analytical, and problem-solving skills in a professional environment. Passionate about learning new technologies and contributing effectively to organizational growth.",
  
  aboutNarrative: "I'm an MCA Data Science student with a foundation in Python and Django and a growing focus on AI, Data Science, and intelligent applications. I enjoy learning through practical projects, experimenting with technology, and turning ideas into useful digital solutions.",
  
  philosophy: {
    quote: "Learn deeply. Build practically. Keep improving.",
    alternative: "Curiosity starts the journey. Projects make it real."
  },
  
  socials: {
    github: "https://github.com/madd021",
    linkedin: "https://linkedin.com/in/madhav-patel-ds", // Professional profile
    emailMailto: "mailto:madhav.ptl026@gmail.com",
    phoneTel: "tel:+919824762362"
  },

  resumePdfPath: "https://drive.google.com/file/d/1nvu_cYML1akmsDoJSIF5v6VijJGs3U6U/view?usp=drive_link"
};

export const rotatingHeroWords = [
  "Python",
  "Django",
  "Data Science",
  "AI",
  "RAG",
  "LLMs"
];

export const currentlyExploring = [
  {
    title: "Data Science",
    tag: "Core Academic Focus",
    description: "Studying statistical modeling, exploratory data analysis, and data pipelines as part of the MCA Data Science curriculum at MIT-ADT University.",
    status: "Active Academic Study",
    icon: "Database"
  },
  {
    title: "Machine Learning",
    tag: "Predictive Foundations",
    description: "Building foundational understanding of supervised learning algorithms, regression, classification, and model evaluation metrics.",
    status: "Exploratory Phase",
    icon: "BrainCircuit"
  },
  {
    title: "Generative AI",
    tag: "Applied AI",
    description: "Experimenting with prompt design, foundation models, and integrating generative capabilities into practical web backends.",
    status: "Active Exploration",
    icon: "Sparkles"
  },
  {
    title: "RAG (Retrieval-Augmented Generation)",
    tag: "Knowledge Augmentation",
    description: "Learning the mechanics of vector embeddings, document chunking, and connecting context to language model responses.",
    status: "Hands-on Learning",
    icon: "SearchCode"
  },
  {
    title: "LLMs (Large Language Models)",
    tag: "Language Architectures",
    description: "Understanding transformer concepts, tokenization, contextual limits, and local inference workflows.",
    status: "Foundation Study",
    icon: "Cpu"
  },
  {
    title: "AI Agents",
    tag: "Autonomous Workflows",
    description: "Investigating how LLMs can utilize tools, execute tasks sequentially, and automate operational workflows.",
    status: "Emerging Interest",
    icon: "Bot"
  }
];

export const skillCategories = [
  {
    id: "programming",
    title: "PROGRAMMING",
    subtitle: "Core software engineering foundation",
    skills: [
      {
        name: "Python",
        description: "Primary programming language used for scripting, backend logic, data manipulation, and building scalable applications.",
        level: "Core Strength",
        badge: "Primary"
      }
    ]
  },
  {
    id: "web",
    title: "WEB DEVELOPMENT",
    subtitle: "Full-stack application architecture",
    skills: [
      {
        name: "Django",
        description: "High-level Python web framework used for rapid backend development, ORM database operations, and secure user management.",
        level: "Framework",
        badge: "Specialized"
      },
      {
        name: "HTML",
        description: "Standard markup language used for creating structured, semantic, and accessible web page layouts.",
        level: "Markup",
        badge: "Foundational"
      },
      {
        name: "Basic Web Development",
        description: "Fundamental client-server architecture, HTTP requests, frontend-backend integration, and responsive interface design.",
        level: "Full-Stack Basics",
        badge: "Practical"
      }
    ]
  },
  {
    id: "ai",
    title: "AI & MODERN TECH",
    subtitle: "Emerging domains currently being studied",
    skills: [
      {
        name: "RAG Basics",
        description: "Exploring retrieval-augmented generation concepts, external knowledge ingestion, and vector retrieval pipelines.",
        level: "Actively Learning",
        badge: "Emerging"
      },
      {
        name: "LLM Basics",
        description: "Understanding prompting methodologies, model APIs, token contexts, and integrating LLMs into Python scripts.",
        level: "Actively Learning",
        badge: "Emerging"
      }
    ]
  },
  {
    id: "operations",
    title: "OPERATIONS & TOOLS",
    subtitle: "Real-world organizational and administrative competencies",
    skills: [
      {
        name: "IT Support",
        description: "Hands-on system troubleshooting, workstation setup, hardware coordination, and technical issue resolution.",
        level: "Industry Applied",
        badge: "Experience"
      },
      {
        name: "Store Management",
        description: "Handling inventory management, material tracking, stock verification, and operational coordination in industrial settings.",
        level: "Industry Applied",
        badge: "Operations"
      },
      {
        name: "Accounting Operations",
        description: "Commercial bill handling, voucher processing, transaction recording, and basic corporate accounting workflows.",
        level: "Industry Applied",
        badge: "Financial"
      },
      {
        name: "MS Office & Computer Apps",
        description: "Proficient in Excel spreadsheet modeling, Word documentation, PowerPoint presentations, and daily business tools.",
        level: "Proficient",
        badge: "Essential"
      }
    ]
  }
];

export const featuredProject = {
  name: "UNIVO",
  tagline: "Interactive Digital Community-Building Platform",
  tag: "Major Project",
  techStack: ["Python", "Django", "SQLite / Database", "HTML", "CSS", "JavaScript"],
  overview: "Developed a community-building platform named UNIVO, designed to connect and engage users through an interactive digital community. Worked extensively on backend functionality and management features using Python and Django.",
  role: "Backend & Management Features Developer",
  architectureNotes: "Engineered robust Django models, custom authentication flows, community interaction endpoints, and administrative management dashboards.",
  highlights: [
    "Community-focused platform enabling collaborative user connections",
    "Django backend architecture with modular app organization",
    "Interactive user engagement and profile management features",
    "Administrative dashboard functionality for content and user oversight",
    "Relational database schema design and ORM query optimization",
    "Strengthened practical understanding of web application architecture"
  ],
  links: {
    github: "https://github.com/madd021/UNIVO_",
    isGithubPlaceholder: false,
    demo: "https://univo-9ug7.onrender.com/",
    isDemoPlaceholder: false
  }
};

export const experiences = [
  {
    company: "Panchal Technical Engineering Service Private Limited",
    department: "IT / Store & Accounts Department",
    period: "2024 - Present",
    status: "Current",
    type: "Professional Experience",
    location: "Surat, Gujarat",
    summary: "Managing multi-departmental responsibilities spanning IT system coordination, warehouse inventory operations, and foundational commercial accounting processes.",
    responsibilities: [
      { title: "IT Support", desc: "Managing IT-related support tasks, hardware maintenance, and troubleshooting system issues for smooth daily operations." },
      { title: "System Coordination", desc: "Handling system coordination and ensuring seamless communication between technical and administrative units." },
      { title: "Store Operations", desc: "Handling stock-related tasks, physical inventory audits, and daily operational coordination in the store department." },
      { title: "Stock Management", desc: "Assisting in maintaining accurate technical and physical stock records and requisition processes." },
      { title: "Record Maintenance", desc: "Maintaining systematic logs, documentation archives, and technical support records." },
      { title: "Accounting Support", desc: "Hands-on experience in accounts-related operations including bill handling, invoice validation, and basic accounting ledger entries." },
      { title: "Documentation", desc: "Supporting day-to-day administrative documentation, operational reporting, and departmental coordination." }
    ]
  },
  {
    company: "ExtraBTS",
    department: "Frontend Web Development Intern",
    period: "12/12/2025 - 10/01/2026",
    durationHours: "124 Hours",
    status: "Completed",
    type: "Internship",
    location: "Industry Internship",
    summary: "Dedicated 124-hour industry internship focused on frontend web development, practical workflow coordination, and deepening Python & Django architectural understanding.",
    responsibilities: [
      { title: "Frontend Development", desc: "Executed frontend web development tasks, creating structured, user-friendly page components and responsive layouts." },
      { title: "Python & Django Learning", desc: "Deepened practical comprehension of Python programming concepts and Django framework architecture in a production-oriented context." },
      { title: "Website Assistance", desc: "Assisted in website-related development sprints, bug fixing, and operational platform activities." },
      { title: "Professional Workflow", desc: "Gained hands-on exposure to professional development lifecycles, version hygiene, and project milestone tracking." },
      { title: "Technical Coordination", desc: "Enhanced interpersonal communication and technical collaboration within a software team environment." }
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA) in Data Science",
    institution: "MIT-ADT University",
    subCollege: "MIT College of Management & Computer Application",
    period: "2026 - Present",
    status: "In Progress",
    highlight: "Specializing in Data Science, statistical modeling, machine learning concepts, and advanced computation.",
    isCurrent: true
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "C.K. Pithawalla College of Commerce, Computer Application & Management",
    subCollege: "Veer Narmad South Gujarat University (VNSGU)",
    period: "Graduating Year: 2026",
    scoreLabel: "CGPA",
    scoreValue: "6.06",
    status: "Completed",
    highlight: "Comprehensive foundation in computer applications, programming fundamentals, databases, and software engineering principles.",
    isCurrent: false
  },
  {
    degree: "Higher Secondary Education (12th Commerce)",
    institution: "Shardayatan English Medium School",
    subCollege: "Gujarat State Board of Education (GSEB)",
    period: "Higher Secondary Certificate",
    scoreLabel: "Percentage",
    scoreValue: "72.26%",
    status: "Completed",
    highlight: "Built analytical thinking, commerce fundamentals, and quantitative foundations.",
    isCurrent: false
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Shardayatan English Medium School",
    subCollege: "Gujarat State Board of Education (GSEB)",
    period: "Secondary School Certificate",
    scoreLabel: "Percentage",
    scoreValue: "71.8%",
    status: "Completed",
    highlight: "Strong general academic background in English, mathematics, and foundational science.",
    isCurrent: false
  }
];

export const certifications = [
  {
    title: "Internship Certificate",
    issuer: "ExtraBTS",
    duration: "124 Hours (12/12/2025 - 10/01/2026)",
    field: "Frontend Web Development & Python/Django",
    status: "Verified",
    type: "Industry Internship"
  },
  {
    title: "Experience Certificate",
    issuer: "Panchal Technical Engineering Service Private Limited",
    duration: "2024 - Present",
    field: "IT, Store & Accounts Operations",
    status: "Verified",
    type: "Professional Employment"
  }
];

export const strengths = [
  {
    name: "Quick Learner",
    tagline: "Rapid Adaptability",
    description: "Demonstrated ability to absorb new tools, frameworks, and academic concepts swiftly, transitioning from web development into data science and AI."
  },
  {
    name: "Team Player",
    tagline: "Collaborative Mindset",
    description: "Thrives in cross-functional coordination across technical, operational, and commercial teams in real-world corporate environments."
  },
  {
    name: "Hardworking & Dedicated",
    tagline: "Execution Discipline",
    description: "Consistent commitment to project delivery, maintaining operational logs, and pursuing rigorous postgraduate studies alongside hands-on projects."
  },
  {
    name: "Good Communication Skills",
    tagline: "Trilingual Articulation",
    description: "Clear and effective communication in English, Gujarati, and Hindi across technical discussions and administrative coordination."
  },
  {
    name: "Problem Solving Ability",
    tagline: "Structured Thinking",
    description: "Analytical mindset that tackles backend software bugs, operational bottlenecks, and data problems with logical step-by-step resolution."
  }
];

export const whatIBring = [
  {
    title: "Curiosity",
    description: "An authentic, relentless drive to understand how complex systems and modern AI architectures work under the hood."
  },
  {
    title: "Problem Solving",
    description: "Approaching operational and coding friction with structured analysis, practical debugging, and root-cause solutions."
  },
  {
    title: "Adaptability",
    description: "Proven versatility moving fluidly between backend code, store operations, corporate accounting, and modern data science."
  },
  {
    title: "Technical Learning",
    description: "Active commitment to daily skill expansion, progressing systematically from Python web backends toward RAG and LLM systems."
  },
  {
    title: "Team Collaboration",
    description: "A respectful, dependable colleague who values transparent communication, shared goals, and empathetic teamwork."
  },
  {
    title: "Practical Mindset",
    description: "Focus on building usable, functional software rather than chasing vanity metrics or superficial complexity."
  }
];

export const journeyTimeline = [
  {
    year: "2023",
    milestone: "Commenced BCA Degree",
    institution: "C.K. Pithawalla College",
    detail: "Began formal education in computer applications, programming paradigms, and foundational algorithms."
  },
  {
    year: "2024",
    milestone: "Entered Professional Industry",
    institution: "Panchal Technical Engineering Service Pvt. Ltd.",
    detail: "Began managing real-world IT support, warehouse store operations, and corporate account coordination."
  },
  {
    year: "2025",
    milestone: "Frontend Web Development Internship",
    institution: "ExtraBTS (124 Hours)",
    detail: "Completed intensive industry internship honing frontend architecture, Python programming, and Django workflows."
  },
  {
    year: "2026",
    milestone: "Completed BCA Degree & Built UNIVO",
    institution: "Graduation (CGPA: 6.06)",
    detail: "Graduated with BCA and engineered UNIVO, an interactive Django community platform showcasing full backend architecture."
  },
  {
    year: "2026+",
    milestone: "Enrolled in MCA in Data Science",
    institution: "MIT-ADT University",
    detail: "Advanced to postgraduate specialization focusing on Data Science, statistical computation, and intelligent software."
  },
  {
    year: "NEXT",
    milestone: "AI • Data Science • Intelligent Applications",
    institution: "Aspirational Frontier",
    detail: "Deepening practical capabilities in RAG pipelines, Large Language Models, and intelligent agentic software systems.",
    isNext: true
  }
];

export const languages = [
  { name: "English", proficiency: "Professional Working Proficiency" },
  { name: "Gujarati", proficiency: "Native / Full Professional" },
  { name: "Hindi", proficiency: "Professional Working Proficiency" }
];
