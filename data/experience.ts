export type Experience = {
  company: string;
  role: string;
  type: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  stack: string[];
  current: boolean;
};

export const experience: Experience[] = [
  {
    company: "Prodigy InfoTech",
    role: "Data Science Intern",
    type: "Internship",
    duration: "Ongoing",
    startDate: "2026",
    endDate: "Present",
    location: "Remote",
    description: [
      "Performed end-to-end data science pipelines on large public datasets including US Traffic Accidents (1.5M+ rows) and World Bank population records spanning 60+ years.",
      "Built and benchmarked 4+ ML classification models (Logistic Regression, Linear SVM, Random Forest) on social media sentiment data, achieving >90% validation accuracy.",
      "Conducted exploratory data analysis with multivariate statistical tests, missing-value imputation, and feature correlation heatmaps on the Titanic dataset.",
      "Developed interactive geographic visualizations (Folium, Plotly) to map accident hotspots and state-wise distribution across the US road network.",
      "Implemented custom predict_sentiment() function with confidence-score output for production-ready inference from trained NLP pipelines.",
    ],
    stack: ["Python", "Pandas", "Scikit-Learn", "NLTK", "Matplotlib", "Seaborn", "Plotly", "Folium"],
    current: true,
  },
];
