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
      "Large Language Models (LLMs)",
      "Transformers",
      "NLP",
      "Prompt Engineering",
      "RAG (Retrieval-Augmented Generation)",
      "Scikit-Learn",
      "TF-IDF",
      "Pandas",
      "NumPy",
      "Matplotlib / Seaborn",
    ],
  },
  {
    label: "Full-Stack",
    icon: "Layers",
    skills: [
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
    skills: ["Git", "GitHub", "Vercel", "Google Antigravity", "Postman", "VS Code"],
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
