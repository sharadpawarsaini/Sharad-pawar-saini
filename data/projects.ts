export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  description: string;
  role: "Founder" | "Solo Founder" | "Contributor" | "Academic Project";
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  category: "Full-Stack" | "Data-Science" | "Supporting";
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ehp",
    title: "EHP — Emergency Health Profile",
    oneLiner: "QR-code based emergency health information platform. Founded and run solo — live in production.",
    description: "A QR-linked profile that surfaces a patient's critical medical info instantly to first responders during emergencies. Designed, built, and launched end-to-end — including a freemium + B2B monetization strategy and a local user-acquisition plan targeting Dehradun colleges via a bilingual Instagram Reel campaign.",
    role: "Founder",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://ehp-tan-eight.vercel.app",
    githubUrl: "https://github.com/sharadpawarsaini", // Edit to exact repo if public
    highlights: [
      "Live product with active users in production",
      "Solo founder — owning product, engineering, and GTM strategy",
      "Bilingual Instagram Reel campaign executed for student outreach",
      "Designed freemium model & institutional B2B hospital portal"
    ],
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "bioverse-lifelink-catalyst",
    title: "BioVerse LifeLink Catalyst",
    oneLiner: "AI-driven vital-sign prediction system — provisional patent filed.",
    description: "A predictive machine learning system designed to anticipate critical patient vital-sign trends before they deteriorate, targeting early-warning application scenarios in critical care. A provisional patent has been filed on the underlying prediction algorithm.",
    role: "Solo Founder",
    stack: ["Python", "Machine Learning", "Predictive Modeling", "Scikit-Learn"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Provisional patent filed for core vital-signs prediction algorithm",
      "Applied ML in a healthcare early-warning context to prevent critical events",
      "Flagship SDE/ML project showcasing algorithm design and research depth"
    ],
    category: "Data-Science",
    featured: true
  },
  {
    slug: "hiretrack",
    title: "HireTrack",
    oneLiner: "An ATS (Applicant Tracking System) built for a Full Stack Developer trial.",
    description: "A full-featured ATS web application built using a master-prompt-driven workflow in Google Antigravity, implementing automated git commit/push pipelines and a robust developer layout.",
    role: "Solo Founder",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Built for Digital Heroes Full Stack Developer trial",
      "Structured candidate pipelines, resume indexing, and tracking dashboard",
      "AI-assisted dev workflow with rapid deployment iteration"
    ],
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "secure-digital-voting-system",
    title: "Secure Digital Voting System",
    oneLiner: "A blockchain-backed e-voting platform built on the MERN stack.",
    description: "Combines a MERN full-stack application with cryptographic blockchain principles to make votes tamper-evident and independently auditable, addressing trust problems in conventional online voting systems.",
    role: "Solo Founder",
    stack: ["React", "Node.js", "Express", "MongoDB", "Blockchain (Crypto)"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "MERN + Cryptographic transaction logging integration",
      "Guarantees vote tamper-evidence and independent auditability",
      "Secure voter authorization and dual-factor validation mechanisms"
    ],
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "smart-railway-network-optimization",
    title: "Smart Railway Network Optimization",
    oneLiner: "Graph-algorithm-driven system for optimizing railway network routing.",
    description: "Applies core graph algorithms (Dijkstra, Bellman-Ford, Network Flow) to model and optimize routing decisions, scheduling conflicts, and track capacity allocation across a simulated railway network.",
    role: "Academic Project",
    stack: ["C++", "Python", "Graph Algorithms", "Data Structures"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Pure DSA-to-application translation resolving scheduling conflicts",
      "Implements pathfinding over complex, weighted network vertices",
      "Strong technical talking point highlighting theoretical SDE rigor"
    ],
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "placement-portal",
    title: "Placement Portal",
    oneLiner: "A platform where seniors post structured interview experiences for juniors.",
    description: "Lets college seniors share searchable, structured interview experiences filterable by company, role, and eligibility criteria — so juniors can prepare with real, relevant campus placement data. Shipped with a full launch toolkit.",
    role: "Solo Founder",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Built structured question logs with searchable tags and difficulty filters",
      "Helped juniors access peer-sourced placement insights directly",
      "Created complete outreach and launch toolkit alongside the product"
    ],
    category: "Full-Stack",
    featured: true
  },
  {
    slug: "sentiment-analysis-nlp",
    title: "Sentiment Analysis of Social Media Data",
    oneLiner: "NLP pipeline classifying tweet sentiment, benchmarking 4+ ML models.",
    description: "End-to-end NLP project on social media data: text cleaning, TF-IDF vectorization, and a custom predict_sentiment() function returning both label and confidence. Benchmarked Logistic Regression, Linear SVM, and Random Forest — reaching >90% validation accuracy.",
    role: "Solo Founder",
    stack: ["Python", "Scikit-Learn", "NLTK", "TF-IDF", "Pandas"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Reached >90% validation accuracy with SVM and Random Forest models",
      "Built custom inference function returning confidence probabilities",
      "Evaluated model trade-offs between accuracy and latency in notebook"
    ],
    category: "Data-Science",
    featured: true
  },
  {
    slug: "traffic-accident-analysis",
    title: "US Traffic Accident Analysis",
    oneLiner: "Analyzed 1M+ US accident records to surface hotspots — Prodigy InfoTech Task 5.",
    description: "Analyzed the US Accidents dataset (1.5M+ records) to identify patterns linked to weather, road conditions, and time of day. Built interactive hotspot mapping with Folium and state-wise breakdowns.",
    role: "Academic Project",
    stack: ["Python", "Pandas", "Folium", "Plotly", "Seaborn"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Completed as Task 5 during Data Science internship at Prodigy InfoTech",
      "Generated interactive geographic hotspot maps to visualize high-risk zones",
      "Correlated severe accident frequency with specific weather anomalies"
    ],
    category: "Data-Science",
    featured: false
  },
  {
    slug: "titanic-eda",
    title: "Titanic Dataset — Data Cleaning & EDA",
    oneLiner: "Full exploratory data analysis pipeline — Prodigy InfoTech Task 2.",
    description: "Explored the classic Titanic dataset to identify factors (class, age, gender, fare) tied to passenger survival. Handled missing data pipelines and conducted multivariate statistical analysis.",
    role: "Academic Project",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Completed as Task 2 during Data Science internship at Prodigy InfoTech",
      "Built clean data pipelines to impute and normalize missing features",
      "Conducted multivariate correlations to identify survival factors"
    ],
    category: "Data-Science",
    featured: false
  },
  {
    slug: "population-visualization",
    title: "World Bank Population Analysis & Visualization",
    oneLiner: "Global population trends visualization from 1960–2024 — Prodigy InfoTech Task 1.",
    description: "Cleaned and merged World Bank population and country-metadata datasets to chart demographic shifts and distributions by region and income group across six decades.",
    role: "Academic Project",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Completed as Task 1 during Data Science internship at Prodigy InfoTech",
      "Visualized demographic shifts across 6 decades of global records",
      "Merged disparate datasets and structured region-wise distribution charts"
    ],
    category: "Data-Science",
    featured: false
  },
  {
    slug: "bank-marketing-prediction",
    title: "Bank Marketing — Predictive Modeling",
    oneLiner: "Classification model predicting term-deposit subscription.",
    description: "Supervised classification model trained on client demographics, contact history, and campaign results to predict client conversion. Handled class imbalance with oversampling.",
    role: "Academic Project",
    stack: ["Python", "Pandas", "Scikit-Learn", "Imbalanced-Learn"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Trained classifiers to predict client banking product subscription",
      "Resolved class imbalance using SMOTE and threshold tuning",
      "Feature importance mapping identifying duration and age as primary drivers"
    ],
    category: "Data-Science",
    featured: false
  },
  {
    slug: "nestpg-nestfinder",
    title: "NestPG / NestFinder",
    oneLiner: "Student PG finder web app incorporating a rule-based recommendation engine.",
    description: "Two MVP iterations of a student accommodation discovery platform, integrating a custom rule-based matching system that recommends housing based on rent, dietary, and transport preferences.",
    role: "Solo Founder",
    stack: ["React", "HTML", "CSS", "Rule-Based Matching"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Shipped two separate MVP releases for student housing discovery",
      "Developed early-stage rule-based recommender system to match preferences"
    ],
    category: "Supporting",
    featured: false
  },
  {
    slug: "personal-career-agent",
    title: "Personal Career Agent",
    oneLiner: "React tool matching resumes to job descriptions across platform formats.",
    description: "An AI-assisted tool that evaluates a user's resume compatibility against Job Descriptions parsed from multiple platforms, generating customized fit scores and keyword gap analysis.",
    role: "Solo Founder",
    stack: ["React", "AI/NLP", "Tailwind CSS"],
    githubUrl: "https://github.com/sharadpawarsaini",
    highlights: [
      "Implemented TF-IDF keyword overlap scoring for resume compatibility",
      "Designed custom scoring output to assist in placement prioritization"
    ],
    category: "Supporting",
    featured: false
  },
  {
    slug: "jarvis",
    title: "JARVIS",
    oneLiner: "Voice-activated desktop automation assistant built in Python.",
    description: "A Python voice-assistant utilizing speech-to-text and NLP libraries to execute system macros, search queries, and play media on voice command.",
    role: "Academic Project",
    stack: ["Python", "SpeechRecognition", "Pyttsx3", "NLP"],
    githubUrl: "https://github.com/sharadpawarsaini/JARVIS",
    highlights: [
      "Completed public repository on GitHub",
      "Built custom command router matching natural language intents to OS commands"
    ],
    category: "Supporting",
    featured: false
  },
  {
    slug: "attendance-system",
    title: "Attendance System",
    oneLiner: "Python automation system scanning face/QR metrics to log attendance.",
    description: "An automated attendance tracking platform utilizing computer vision or QR decoding to log student entry and exit, sync data, and export clean attendance sheets.",
    role: "Academic Project",
    stack: ["Python", "OpenCV", "Tkinter", "SQLite"],
    githubUrl: "https://github.com/sharadpawarsaini/Attendance_System",
    highlights: [
      "Completed public repository on GitHub",
      "Automated manual attendance processes with instant Excel/SQLite logging"
    ],
    category: "Supporting",
    featured: false
  }
];
