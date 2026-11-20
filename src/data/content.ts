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
  "M.S. in Computer and Information Science & M.S. in Bioengineering at the University of Pennsylvania";

export const subtitle =
  "AI for Healthcare | Agentic AI | Computer Vision | Computational Drug Discovery";

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
    "I am a dual-degree M.S. student in Computer and Information Science and Bioengineering at the University of Pennsylvania (2024\u20132027). My research interests include AI for healthcare, agentic AI, computer vision, and computational drug discovery.",
    "I am a Graduate Student Researcher in Shen Lab at the University of Pennsylvania, advised by Professor Li Shen. My current work focuses on automated mouse scratching detection with video transformers in Scratch-AID+ and Alzheimer\u2019s disease drug discovery with integrated target evidence and Boltz-2 affinity fine-tuning.",
    "I am also a Student Researcher at Florida International University, advised by Professor Wenbin Zhang, where I develop evidence-grounded multi-agent workflows for legal drafting and scientific influence analysis.",
    "Previously, I earned a B.Eng. in Biomedical Engineering with First Class Honours through the joint undergraduate programme between Northeastern University, China, and the University of Dundee, UK.",
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
    degrees: ["M.S. in Computer and Information Science", "M.S. in Bioengineering"],
    period: "2024 \u2013 2027 (expected)",
  },
  {
    institution: "Northeastern University, China",
    program:
      "Joint Undergraduate Programme with University of Dundee, UK",
    degrees: ["B.Eng. in Biomedical Engineering"],
    period: "2020 \u2013 2024",
    honors: "First Class Honours",
  },
];

export const research: (ResearchProject | ResearchGroup)[] = [
  {
    title: "Shen Lab, University of Pennsylvania",
    role: "Graduate Student Researcher",
    period: "Jun 2026 \u2013 Present",
    advisor: "Prof. Li Shen",
    projects: [
      {
        title: "Automated Mouse Scratching Detection with Video Transformers",
        bullets: [
          "Adapted InternVideo-Next with LoRA and fine-tuned Video Swin Transformer for Scratch-AID+, an automated mouse scratching detection framework",
          "Evaluated the adapted InternVideo-Next on test videos from four external labs, achieving 81.19% mean F1 and outperforming Scratch-AID by 14.88 percentage points",
        ],
        tags: ["Scratch-AID+", "Video Swin Transformer", "InternVideo-Next", "LoRA"],
      },
      {
        title: "Alzheimer\u2019s Disease Drug Discovery",
        bullets: [
          "Fine-tuned the Boltz-2 affinity head on a curated PIK3CA potency dataset, improving Pearson r from 0.248 to 0.560 and reducing MAE from 0.900 to 0.706 on 469 held-out compounds",
          "Built an AGORA-centered drug\u2013target evidence resource linking 967 targets, 452K compounds, and 1.43M measurements; deployed a public evidence explorer for target assessment, evidence queries, and curated data exports",
        ],
        tags: ["Boltz-2", "Drug Discovery", "DuckDB", "RDKit", "Azure"],
        link: "https://agora-evidence-ae3f8403.azurewebsites.net/",
        linkLabel: "AGORA Target & Drug Evidence Explorer",
      },
    ],
  },
  {
    title: "Florida International University",
    role: "Student Researcher",
    period: "Jan 2026 \u2013 Present",
    advisor: "Prof. Wenbin Zhang",
    projects: [
      {
        title: "Evidence-Grounded Multi-Agent Workflow for Long-Form Legal Drafting",
        bullets: [
          "Designed a researcher\u2013adversarial-reviewer workflow with MCP tools to draft legal documents, verify quotations, trace source pages, and flag unsupported claims",
          "Extended the workflow to agent-driven evidence discovery, combining OpenAlex analysis of 3.1M AI authors with citation-context analysis to identify evidence of scientific influence",
        ],
        tags: ["Multi-Agent Systems", "MCP", "OpenAlex", "Evidence Discovery", "Citation Analysis"],
      },
    ],
  },
  {
    title: "WSI-Based Glioma Classification with Swin Transformers",
    affiliation: "University of Dundee & University of Cambridge",
    role: "Honours Project",
    period: "Sep 2023 \u2013 May 2024",
    bullets: [
      "Integrated Swin Transformer blocks into a WSI-based glioma classifier, improving accuracy from 73.11% to 78.03% relative to a standard ViT baseline",
      "Reduced GPU memory usage by over 60%, enabling larger training batches",
    ],
    tags: ["PyTorch", "Swin Transformer", "Medical Imaging", "WSI"],
  },
];

export const projects: Project[] = [
  {
    title: "Decoding Finger Flexion from ECoG",
    role: "Brain-Computer Interface",
    period: "Mar 2025 \u2013 May 2025",
    bullets: [
      "Developed a convolutional encoder\u2013decoder for five-finger flexion prediction from ECoG (BCI Competition IV) using a combined MSE and cosine loss, achieving a mean Pearson correlation of 0.624 on a held-out test set",
    ],
    tags: ["Deep Learning", "ECoG", "Signal Processing", "PyTorch"],
  },
  {
    title: "MRI Segmentation with nnU-Net",
    role: "Biomedical Image Analysis",
    period: "Nov 2024 \u2013 Dec 2024",
    bullets: [
      "Prepared MRI scans with N4 bias correction, quality-checked 3D training patches, and merged team annotations into ground-truth masks; trained and evaluated an nnU-Net segmentation pipeline",
    ],
    tags: ["nnU-Net", "MRI", "Segmentation", "Python"],
  },
  {
    title: "Knock2Know: Audio Classification",
    role: "Applied Machine Learning",
    period: "Sep 2024 \u2013 Dec 2024",
    bullets: [
      "Extracted Whisper features and trained a shallow CNN for knocking-sound classification, using data augmentation and early stopping to achieve 71% accuracy on unseen samples",
    ],
    tags: ["CNN", "Whisper", "Audio ML", "Python"],
  },
  {
    title: "Colorectal Polyp Detection with YOLOv5 and Transformers",
    role: "8th National College Student Biomedical Engineering Innovation Design Competition",
    period: "May 2023 \u2013 Jun 2023",
    bullets: [
      "Integrated YOLOv5 and Transformer models for colorectal polyp detection, reducing the missed detection rate from 22% to 1% in simulations",
    ],
    tags: ["YOLOv5", "Transformer", "Object Detection", "Medical AI"],
  },
  {
    title: "Breaking the Wordle",
    role: "Mathematical Contest in Modeling",
    period: "Feb 2023",
    bullets: [
      "Modeled Wordle trends with Prophet and developed predictive models using multi-objective regression and LASSO",
    ],
    tags: ["Prophet", "LASSO", "Regression", "Mathematical Modeling"],
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

export const skills: SkillCategory[] = [
  {
    name: "ML & Agents",
    skills: ["PyTorch", "scikit-learn", "LoRA fine-tuning", "Codex agent harnesses", "MCP", "Google ADK"],
  },
  {
    name: "AI for Healthcare",
    skills: ["Medical image analysis", "Biomedical video analysis", "Drug–target potency prediction"],
  },
  {
    name: "Programming",
    skills: ["Python", "Java", "C/C++", "SQL", "R", "MATLAB", "JavaScript", "Dart"],
  },
  {
    name: "Other",
    skills: ["AWS", "Azure", "Google Cloud Run", "Docker", "Slurm", "Git", "LaTeX", "RDKit", "DuckDB"],
  },
];

export const awards: Award[] = [
  {
    title: "International COMAP Scholarship Award",
    detail: "1 of 4 teams worldwide, MCM/ICM",
    date: "2023",
  },
  {
    title: "ASA Data Insights Award",
    detail: "Sole winning team among 8,011 teams, MCM Problem C",
    date: "2023",
  },
  {
    title: "Outstanding Winner",
    detail: "Top 0.2%, Mathematical Contest in Modeling",
    date: "2023",
  },
  {
    title: "First Prize",
    detail: "Top 4% nationally, 16th Computer Design Competition for Chinese College Students",
    date: "2023",
  },
];

export const experience: Experience[] = [
  {
    role: "Teaching Assistant",
    organization: "Developmental Engineering of Tissues — Penn Engineering",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Held weekly office hours on debugging and model design and evaluated code and reports for a neural crest migration model",
    ],
  },
];

export const academicExchange: Experience[] = [
  {
    organization: "Osaka University",
    role: "Exchange Program in Biotechnology",
    period: "May 2021 – Aug 2021",
  },
];
