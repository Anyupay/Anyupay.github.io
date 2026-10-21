import type {
  Education,
  ResearchProject,
  ResearchGroup,
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
  "M.S. in Computer and Information Science & Bioengineering at the University of Pennsylvania";

export const subtitle =
  "Agentic AI | AI for Healthcare | Computer Vision | Computational Drug Discovery";

export const email = "pananyu@engineering.upenn.edu";

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
    href: `mailto:${email}`,
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
    "I am a dual-degree M.S. student in Computer and Information Science and Bioengineering at the University of Pennsylvania (2024\u20132027). My research interests include agentic AI, AI for healthcare, computer vision, and computational drug discovery.",
    "I am a Graduate Student Researcher in Shen Lab, spanning Penn Engineering (CIS) and Penn Medicine, advised by Professor Li Shen. My current work focuses on Alzheimer\u2019s disease drug discovery with integrated target evidence and Boltz-2 affinity fine-tuning, and automated mouse scratching detection with video transformers in Scratch-AID+. I also build and deploy AI agents.",
    "Previously, I earned a B.Eng. in Biomedical Engineering with First Class Honours from the University of Dundee through a joint programme with Northeastern University, China.",
  ],
  info: [
    { label: "Affiliation", value: "Shen Lab, University of Pennsylvania" },
    { label: "Email", value: email },
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

export const research: (ResearchProject | ResearchGroup)[] = [
  {
    title: "Shen Lab | University of Pennsylvania",
    affiliation: "Penn Engineering (CIS) & Penn Medicine",
    role: "Graduate Student Researcher",
    period: "Jun 2026 \u2013 Present",
    principalInvestigator: "Li Shen, Ph.D.",
    projects: [
      {
        title: "Alzheimer\u2019s Disease Drug Discovery",
        period: "Jul 2026 \u2013 Present",
        bullets: [
          "Built an AGORA-centered target database integrating BindingDB, ChEMBL, UniProt, RCSB PDB, Drugs@FDA, and ClinicalTrials.gov using DuckDB; linked 967 targets, 452,249 compounds, and 1,430,260 measurements",
          "Curated a PIK3CA potency dataset and fine-tuned the Boltz-2 affinity head; improved Pearson r from 0.248 to 0.560 and reduced MAE from 0.900 to 0.706 on 469 held-out compounds",
          "Developed and deployed AGORA Target & Drug Evidence Explorer on Azure, providing a public platform for AD target assessment, drug-target evidence queries, curated data exports, and access to fine-tuned models and evaluation results",
        ],
        tags: ["Boltz-2", "Drug Discovery", "DuckDB", "RDKit", "Azure"],
        link: "https://agora-evidence-ae3f8403.azurewebsites.net/",
        linkLabel: "AGORA Target & Drug Evidence Explorer",
      },
      {
        title: "Mouse Scratching Classification with Video Transformers",
        period: "Jun 2026 \u2013 Present",
        bullets: [
          "Fine-tuned Video Swin Transformer and adapted InternVideo-Next with low-rank adaptation (LoRA) for Scratch-AID+, a framework for automated mouse scratching detection",
          "Benchmarked on held-out videos from four external labs under realistic sparse-event evaluation; InternVideo-Next achieved 81.19% mean scratching-class F1, exceeding Scratch-AID by 14.88 percentage points, averaged over six preprocessing configurations",
        ],
        tags: ["Scratch-AID+", "Video Swin Transformer", "InternVideo-Next", "LoRA", "PyTorch", "Slurm"],
      },
    ],
  },
  {
    title: "Advancing Glioma Classification with Swin Transformers",
    affiliation: "University of Dundee & University of Cambridge",
    role: "Honours Project",
    period: "Sep 2023 \u2013 May 2024",
    bullets: [
      "Integrated Swin Transformer blocks into a WSI-based glioma classification framework, improving accuracy to 78.03% (from 73.11% with a standard ViT)",
      "Systematically evaluated multiple optimizers (SGD, Momentum, AdaGrad, RMSprop, Adam, and Lion) to identify optimal performance\u2013efficiency trade-offs",
      "Reduced GPU memory usage by >60%, enabling larger batch sizes and more efficient training on GPU-accelerated servers",
    ],
    tags: ["PyTorch", "Swin Transformer", "Medical Imaging", "WSI"],
  },
];

export const researchProjects: Project[] = [
  {
    title: "WeatherWise Trip Concierge",
    role: "Google/Kaggle AI Agents Capstone",
    period: "Jun 2026 \u2013 Jul 2026",
    bullets: [
      "Built a Google ADK travel-planning agent with MCP tools to retrieve forecasts, score daily weather risks, and recommend nearby cities",
      "Implemented rule-based risk scoring and Pydantic input validation; tested prompt-injection and missing-forecast cases",
      "Created AGENTS.md, project context documentation, and reusable agent skills; deployed the web app on Google Cloud Run using Docker",
    ],
    tags: ["Google ADK", "MCP", "Agent Skills", "Pydantic", "Docker", "Google Cloud Run"],
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
    authors:
      "Yang, S.*, Pan, A.*, Shin, H.*, Chen, H.*, Zhang, Z., Shad, A., Huang, W., Liu, Y., Liu, W., Luo, H., Xu, C., Chen, J., Xu, M., Luo, W., Yu, H., & Shen, L.",
    title:
      "Towards Robust Automated Mouse Scratching Behavior Detection for Itch Research",
    journal: "AI4BioSig 2026 (IEEE BIBM 2026 Workshop)",
    year: 2026,
    status: "accepted",
    contributionNote: "* Equal contribution (co-first authors).",
    link: "https://www.biorxiv.org/content/10.64898/2026.10.12.758682v1",
  },
  {
    authors: "Pan, A., Zhai, T., Lee, J., Zheng, C., Kim, D., & Shen, L.",
    title:
      "Integrating Multisource Target Evidence with Machine-Learning Potency Prediction for Alzheimer\u2019s Disease Drug Discovery",
    journal: "AMIA 2027 Amplify Informatics Summit (regular paper)",
    year: 2026,
    status: "submitted",
    link: "https://www.biorxiv.org/content/10.64898/2026.10.14.759026v1",
  },
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
      "Video Swin Transformer",
      "InternVideo-Next",
      "LoRA",
      "Boltz-2",
      "YOLO",
      "nnU-Net",
      "Scikit-Learn",
      "SciPy",
      "NumPy",
      "Pandas",
    ],
  },
  {
    name: "Agent Development",
    skills: ["Google ADK", "MCP", "Agent Skills", "Docker", "Google Cloud Run"],
  },
  {
    name: "Research Infrastructure",
    skills: ["RDKit", "DuckDB", "Azure", "Slurm"],
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
    title: "Outstanding Winner (Top 0.2%), COMAP Scholarship Award & ASA Award",
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
