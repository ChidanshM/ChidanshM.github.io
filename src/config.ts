export const siteConfig = {
  // Basic Information
  name: "Chidansh Mehta",
  title: "ML Engineer · Researcher",
  description: "ML Engineer specializing in NLP, computer vision, and scalable AI systems.",
  accentColor: "#5100ff",
  heroGradientColor:"#ff6d01",

  // Social Links
  social: {
    email: "contact@chidansh.com",
    linkedin: "https://linkedin.com/in/ChidanshM",
    github: "https://github.com/ChidanshM",
  },

  // About Section
  aboutMe:
    "I build things that learn. Not because it\'s trending, but because there\'s something genuinely satisfying about watching a system improve at a problem you couldn\'t just hardcode your way out of. \nMy work spans the ML stack: from classical models and deep learning to reinforcement learning; applied across healthcare, environmental forecasting, and autonomous systems. But more than any specific domain, I care about whether something actually works outside the notebook. \n I\'m a try-athlete; not fast, not consistent, but always attempting something new. That approach carries into how I work: I'd rather try a method, fail fast, and learn than wait for perfect conditions.",

  // Skills
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Hugging Face Transformers",
    "SQL",
    "C++",
    "AWS (SageMaker, Bedrock)",
    "Azure ML",
    "Docker",
    "YOLOv5",
    "OpenCV",
    "NumPy",
    "Pandas",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Linux",
  ],

  // Projects
  projects: [
    {
      name: "Automated ICSR Segmentation",
      description:
        "Researched transformer-based models to classify Individual Case Safety Reports into Valid, Potential, and Invalid categories for pharmacovigilance compliance.",
      skills: ["PyTorch", "Hugging Face", "BioBERT", "NLP"],
    },
    {
      name: "Biomedical Named Entity Recognition",
      description:
        "Fine-tuned and benchmarked biomedical NER models on PubMed datasets to extract patients, drugs, and adverse events from medical literature using SciBERT and SciSpacy.",
      skills: ["BioBERT", "SciBERT", "SciSpacy", "Hugging Face"],
    },
    {
      name: "Air Quality Forecasting Pipeline",
      description:
        "Built scalable pipelines for CAQI-based air quality forecasting using pollutant and weather time-series from 300+ stations, integrating MSTL decomposition and spatial harmonization.",
      skills: ["XGBoost", "LightGBM", "GeoPandas", "Python"],
    },
    {
      name: "Talking Face Synthesis",
      description:
        "Developed an audio-to-video synthesis pipeline using conditional GANs and 3D Morphable Models to generate photorealistic talking-face animations from raw speech. Achieved 25% improvement in lip-sync accuracy and raised SSIM from 0.76 to 0.91.",
      skills: ["PyTorch", "OpenCV", "Dlib", "Librosa", "GANs"],
    },
    {
      name: "Autonomous Driving Agent (CARLA)",
      description:
        "Trained a PPO reinforcement learning agent in a Gym-wrapped CARLA simulator, achieving 95%+ autonomy with intervention rates below 2/km across complex urban driving scenarios.",
      skills: ["PPO", "Stable-Baselines", "YOLOv5", "CARLA", "VAE"],
    },
    {
      name: "Spinal Rehabilitation ML System",
      description:
        "Engineered predictive models from 3D spinal movement data to provide personalized and gamified rehabilitation plans for back pain relief using signal processing and motion analytics.",
      skills: ["Signal Processing", "Scikit-learn", "Python"],
    },
  ],

  // Experience
  experience: [
     {
      company: "Syracuse University",
      title: "Graduate Research Assistant",
      dateRange: "June 2025 – Present",
      bullets: [
        "Conducting literature reviews on ML methodologies for time-series and radio signal analysis, synthesizing state-of-the-art approaches to guide research direction.",
        "Implementing and benchmarking machine learning models on time-series and radio frequency signal data, evaluating performance across varying experimental conditions.",
        "Developing preprocessing pipelines for raw signal data, including noise filtering, temporal feature extraction, and signal transformation for downstream model training.",
        "Collaborating with faculty to design experiments, analyze results, and iteratively refine model approaches based on empirical findings.",
      ],
    },
    {
      company: "Cognifai",
      title: "Machine Learning Engineer",
      dateRange: "May 2023 – June 2024",
      bullets: [
        "Researched and evaluated transformer-based models for Automated ICSR Segmentation, classifying case reports into Valid, Potential, and Invalid categories.",
        "Fine-tuned biomedical NER models (BioBERT, SciBERT, SciSpacy) on Hugging Face datasets to extract patients, drugs, and adverse events from medical literature.",
        "Investigated prompt engineering with large language models for entity extraction, comparing results with supervised learning baselines.",
        "Preprocessed large-scale PubMed datasets and conducted error analysis to evaluate real-world model performance in compliance-focused use cases.",
      ],
    },
    {
      company: "Omdena",
      title: "Jr. Machine Learning Engineer",
      dateRange: "July 2022 – March 2023",
      bullets: [
        "Collaborated with globally distributed teams on three projects across healthcare and environmental domains, delivering end-to-end ML solutions.",
        "Trained classification models using RFID sensor data to detect urinary incontinence, improving caregiver response time in elderly care environments.",
        "Built scalable pipelines for CAQI-based air quality forecasting from 300+ stations, integrating MSTL decomposition and spatial harmonization.",
        "Applied advanced imputation methods, reverse geocoding, and temporal feature engineering to improve model robustness.",
      ],
    },
    {
      company: "Zummit Infolabs",
      title: "Jr. Data Science Intern",
      dateRange: "January 2022 – June 2022",
      bullets: [
        "Developed an audio-to-video synthesis pipeline using conditional GANs and 3D Morphable Models, achieving a 25% improvement in lip-sync accuracy.",
        "Raised SSIM from 0.76 to 0.91 and reduced visual artifacts by 30% through temporal smoothing techniques.",
        "Trained a PPO agent in CARLA simulator achieving 95%+ autonomy with intervention rates below 2/km across complex urban scenarios.",
        "Improved training efficiency by 30% via VAE-based image encoding and upgraded object detection with YOLOv5 v6.1, increasing accuracy by 20%.",
      ],
    },
  ],

  // Education
  education: [
    {
      school: "Syracuse University",
      degree: "M.S. in Computer Science",
      dateRange: "August 2024 – May 2026",
      achievements: [
        "Relevant coursework: Algorithms, Machine Learning, Operating Systems, Advanced Computer Architecture, Introduction to AI",
      ],
    },
    {
      school: "Gujarat Technological University",
      degree: "B.E. in Computer Engineering",
      dateRange: "September 2018 – June 2022",
      achievements: [
        "Relevant coursework: Data Structures, Algorithms, Computer Architecture, Operating Systems, Computer Networks, Cloud Computing, Software Engineering",
      ],
    },
  ],
};
