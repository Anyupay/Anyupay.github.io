import type {
  Education,
  ResearchProject,
  Publication,
  Project,
  Award,
  Experience,
  SkillCategory,
  NavLink,
  SocialLink,
} from "../types";

export const name = "Anyu Pan";

export const tagline =
  "M.S. in Computer Science & Bioengineering at the University of Pennsylvania";

export const subtitle =
  "Medical Image Analysis | Biomedical AI | Deep Learning for Healthcare";

export const email = "pananyu@seas.upenn.edu";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:pananyu@seas.upenn.edu",
    icon: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/Anyupay",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anyu-pan/",
    icon: "linkedin",
  },
  {
    label: "CV",
    href: "/resume.pdf",
    icon: "cv",
  },
];

export const about = {
  summary: [
    "I am a dual-degree M.S. student at the University of Pennsylvania studying Computer and Information Science and Bioengineering (2024\u20132027). My research interests lie at the intersection of machine learning and biomedical engineering, with experience in deep learning for medical imaging, brain\u2013computer interfaces, and distributed systems.",
    "Previously, I earned a B.Eng. in Biomedical Engineering with First Class Honours from the University of Dundee through a joint programme with Northeastern University, China.",
  ],
  info: [
    { label: "Affiliation", value: "University of Pennsylvania" },
    { label: "Email", value: "pananyu@seas.upenn.edu" },
    { label: "Location", value: "Philadelphia, PA" },
  ],
};

export const education: Education[] = [
  {
    institution: "University of Pennsylvania",
    program: "School of Engineering and Applied Science",
    degree: "M.S. in Computer and Information Science & M.S. in Bioengineering",
    period: "2024 \u2013 2027 (expected)",
  },
  {
    institution: "University of Dundee",
    program:
      "Joint Undergraduate Programme with Northeastern University, China",
    degree: "B.Eng. in Biomedical Engineering",
    period: "2020 \u2013 2024",
    honors: "First Class Honours",
  },
];

export const research: ResearchProject[] = [
  {
    title: "Advancing Glioma Classification with Swin Transformers",
    affiliation: "University of Dundee & University of Cambridge",
    role: "Honor Project",
    period: "Sep 2023 \u2013 May 2024",
    bullets: [
      "Integrated Swin Transformer blocks into a WSI-based glioma classification framework, improving accuracy to 78.03% (from 73.11% with a standard ViT)",
      "Systematically evaluated multiple optimizers (SGD, Momentum, AdaGrad, RMSprop, Adam, and Lion) to identify optimal performance\u2013efficiency trade-offs",
      "Reduced GPU memory usage by >60%, enabling larger batch sizes and more efficient training on GPU-accelerated servers",
    ],
    tags: ["PyTorch", "Swin Transformer", "Medical Imaging", "WSI"],
  },
  {
    title: "Brain\u2013Computer Interface: Decoding Finger Flexion from ECoG",
    affiliation: "University of Pennsylvania",
    role: "Member",
    period: "Mar 2025 \u2013 May 2025",
    bullets: [
      "Collaboratively developed a convolutional encoder\u2013decoder to predict five-finger flexion trajectories from ECoG signals (BCI Competition IV dataset)",
      "Implemented signal preprocessing and feature extraction pipeline (bandpass/notch filtering, Morlet wavelet convolution, downsampling, lag correction) to prepare high-frequency neural data",
      "Achieved mean Pearson correlation of 0.624 on the held-out test set using a combined MSE + cosine loss",
    ],
    tags: ["Deep Learning", "ECoG", "Signal Processing", "PyTorch"],
  },
  {
    title: "Biomedical Image Analysis",
    affiliation: "University of Pennsylvania",
    role: "Member",
    period: "Nov 2024 \u2013 Dec 2024",
    bullets: [
      "Wrote Python code to preprocess MRI hemisphere scans and apply N4 bias field correction, tuning parameters to optimize segmentation inputs",
      "Extracted and quality-checked 3D patches for training data, performed manual labeling in ITK-SNAP, and combined team labels into ground-truth masks",
      "Trained and evaluated an nnU-Net-based segmentation pipeline, achieving improved segmentation accuracy through iterative hyperparameter refinements",
    ],
    tags: ["nnU-Net", "MRI", "Segmentation", "Python"],
  },
  {
    title: "Rapid Detection and Diagnosis of Colorectal Polyps",
    affiliation: "8th National College Student Biomedical Engineering Innovation Design Competition",
    role: "Core Member",
    period: "May 2023 \u2013 Jun 2023",
    bullets: [
      "Developed an innovative rapid detection and diagnosis solution for colorectal polyps, integrating YOLOv5 and Transformer models to enhance accuracy",
      "Successfully reduced the missed detection rates of colorectal polyps from 22% to 1%, demonstrating the solution\u2019s efficacy in simulations",
    ],
    tags: ["YOLOv5", "Transformer", "Object Detection", "Medical AI"],
  },
];

export const publications: Publication[] = [
  {
    authors: "Qiu, Z., Pan, A., & Qi, L.",
    title:
      "Incorporating dynamic attention gating mechanism and pre-trained embedding for Chinese clinical named entity recognition",
    journal: "Procedia Computer Science",
    year: 2023,
    volume: "226",
    pages: "113\u2013119",
  },
];

export const projects: Project[] = [
  {
    title: "Distributed Search Engine",
    role: "Member",
    period: "Nov 2025 \u2013 Dec 2025",
    bullets: [
      "Hardened crawler with socket/HTTP timeouts and robots handling; tuned GET/HEAD timeouts to crawl 100K+ pages in ~9 hours",
      "Optimized distributed PageRank via per-partition KVS writes and reduced client churn; fixed KVS persistence and Flame ring-ID partitioning",
      "Improved search UX with autocomplete; normalized result URLs and added title/snippet fallbacks; deployed and monitored jobs on AWS EC2",
    ],
    tags: ["Java", "AWS EC2", "PageRank", "Distributed Systems"],
  },
  {
    title: "Big Data Analytics: Spotify Popularity Prediction",
    role: "Member",
    period: "Oct 2024 \u2013 Dec 2024",
    bullets: [
      "Preprocessed a 114,000-row Spotify dataset and conducted interactive EDA using Plotly to identify popularity-related features",
      "Trained and tuned Random Forest and XGBoost regression models via hyperparameter optimization to improve predictive performance",
    ],
    tags: ["Python", "XGBoost", "Random Forest", "Plotly"],
  },
  {
    title: "Knock2Know (Audio Classification)",
    role: "Member",
    period: "Sep 2024 \u2013 Dec 2024",
    bullets: [
      "Collected and preprocessed a diverse audio dataset\u2014varying recording devices, times of day, and knocking techniques\u2014to enhance training robustness",
      "Extracted features with OpenAI Whisper and trained a shallow CNN; applied augmentation (e.g., time stretching) and early stopping, achieving 0.71 accuracy on unseen samples",
    ],
    tags: ["CNN", "Whisper", "Audio ML", "Python"],
  },
  {
    title: "Traditional Chinese Medicine Interactive Digital Game",
    role: "Member",
    period: "Apr 2023 \u2013 Aug 2023",
    bullets: [
      "Developed and deployed an interactive digital game focusing on traditional Chinese medicine using Flutter; led debugging, documentation and regression testing",
    ],
    tags: ["Flutter", "Dart", "Mobile Development"],
  },
  {
    title: "Intelligent Community Medical Remote Detection Platform",
    role: "Member",
    period: "Jun 2023 \u2013 Jul 2023",
    bullets: [
      "Built a real-time pipeline for temperature and oxygen saturation acquisition using DHT11 and MAX30102 sensors, displaying data in both graphical and numerical formats",
      "Implemented data parsing in Qt and designed a database for storing and querying user vitals with waveform-based result display",
    ],
    tags: ["Qt", "Arduino", "IoT", "Database"],
  },
  {
    title: "MCM: Breaking the Wordle (Forecasting + Modeling)",
    role: "Core Member",
    period: "Feb 2023",
    bullets: [
      "Modeled Wordle trends with Prophet and built predictive models using multi-objective regression and LASSO",
    ],
    tags: ["Prophet", "LASSO", "Regression", "Mathematical Modeling"],
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      "Python",
      "Java",
      "C/C++",
      "SQL",
      "R",
      "MATLAB",
      "JavaScript",
      "HTML/CSS",
      "Dart",
    ],
  },
  {
    name: "ML Stack",
    skills: [
      "PyTorch",
      "XGBoost",
      "ViT",
      "Swin Transformer",
      "YOLO",
      "Scikit-Learn",
      "SciPy",
      "NumPy",
      "Pandas",
    ],
  },
  {
    name: "Tools",
    skills: [
      "AWS",
      "Flutter",
      "Qt",
      "Git",
      "LaTeX",
      "Arduino IDE",
      "InVesalius",
      "ITK-SNAP",
      "SolidWorks",
      "Proteus",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Outstanding Winner & COMAP Scholarship Award",
    detail: "Mathematical Contest in Modeling, International Level",
    date: "May 2023",
  },
  {
    title: "ASA Data Insights Award (Top 0.1%)",
    detail: "Mathematical Contest in Modeling, International Level",
    date: "Nov 2023",
  },
  {
    title: "First Prize (Top 4%)",
    detail:
      "16th Computer Design Competition for Chinese College Students, National Level",
    date: "Aug 2023",
  },
];

export const experience: Experience[] = [
  {
    role: "Teaching Assistant",
    organization:
      "Developmental Engineering of Tissues \u2014 Penn Engineering",
    period: "Aug 2024 \u2013 Dec 2024",
    bullets: [
      "Graded students\u2019 code for a neural crest collective migration model (Voronoi adjacency, border-cell detection, force balances, numerical integration), and evaluated final technical reports",
      "Held weekly office hours for debugging and model design guidance, and graded short quizzes at the start of each class to monitor readiness and progress",
    ],
  },
];
