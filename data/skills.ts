export type SkillCategory = {
  label: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    icon: "Code2",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "AI / ML & GenAI",
    icon: "Brain",
    skills: [
      "Trustworthy RAG Architecture",
      "Prompt Injection Defense",
      "Hallucination Mitigation (NLI)",
      "ChromaDB / Vector Search",
      "Large Language Models (LLMs)",
      "Transformers & Hugging Face",
      "NLP & Text Processing",
      "Scikit-Learn",
      "TF-IDF",
      "Pandas & NumPy",
      "Matplotlib / Seaborn",
    ],
  },
  {
    label: "Full-Stack",
    icon: "Layers",
    skills: [
      "FastAPI (Python)",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    label: "Tools & DevOps",
    icon: "Wrench",
    skills: ["Git", "GitHub", "PyTest", "Vercel", "Google Antigravity", "Postman", "VS Code"],
  },
  {
    label: "CS Fundamentals",
    icon: "BookOpen",
    skills: [
      "Data Structures & Algorithms (Striver A2Z)",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "System Design Basics",
    ],
  },
];
