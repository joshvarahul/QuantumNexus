export const PROJECTS_DATA = [
  {
    id: "examverse",
    title: "ExamVerse",
    category: "AI-Powered Quiz & Competitive Exam Platform",
    tagline: "Intelligent competitive exam preparation platform with live interactive battles.",
    shortDescription: "An interactive quiz platform designed for competitive exam preparation with AI-powered features, multiplayer battles and intelligent learning experiences.",
    longDescription: "ExamVerse revolutionizes how students prepare for competitive examinations. By integrating real-time gamified quiz battles with AI-driven adaptive question engines, learners receive personalized feedback, track weak performance areas, and practice with automated exam simulations.",
    technologies: ["React", "Supabase", "JavaScript", "AI", "Tailwind CSS"],
    featured: true,
    isCaseStudy: true,
    accentColor: "from-purple-500 to-indigo-500",
    badge: "Featured Platform",
    mockupType: "examverse",
    caseStudyDetails: {
      problem: "Competitive exam learners often rely on fragmented resources, static PDFs, and non-interactive practice methods that fail to simulate realistic exam pressure or provide actionable performance analytics.",
      solution: "ExamVerse unifies interactive quizzes, dynamic question banks, real-time multiplayer duel battles, and an AI learning assistant into a single futuristic dashboard experience.",
      keyFeatures: [
        "Interactive Quizzes & Timed Mock Exams",
        "AI-Powered Diagnostic Feedback & Hint Generation",
        "Multiplayer Real-time Battle Arena",
        "Comprehensive Analytics & Weak-Point Radar",
        "Dynamic Question Bank with Subject Filtering"
      ],
      metrics: [
        { label: "Practice Quizzes Served", value: "50,000+" },
        { label: "User Retention Rate", value: "88%" },
        { label: "Avg. Score Improvement", value: "+32%" }
      ]
    }
  },
  {
    id: "resume-architect",
    title: "Resume Architect",
    category: "AI Resume Builder & CV Checker",
    tagline: "Next-gen resume builder powered by AI ATS optimization engines.",
    shortDescription: "A modern resume-building platform with multiple templates and CV analysis features.",
    longDescription: "Resume Architect provides job seekers with a streamlined, real-time preview canvas to build ATS-compliant professional resumes. Features instant AI analysis for keyword density, formatting checks, and targeted bullet-point recommendations.",
    technologies: ["React", "JavaScript", "AI", "CSS Grid", "Tailwind CSS"],
    featured: true,
    isCaseStudy: false,
    accentColor: "from-cyan-500 to-blue-500",
    badge: "AI Product",
    mockupType: "resume"
  },
  {
    id: "sam-attendance",
    title: "S.A.M",
    category: "Smart Attendance Monitoring System",
    tagline: "Simplified college attendance analytics & QR verification suite.",
    shortDescription: "A smart college attendance and analytics platform designed to simplify attendance management and student monitoring.",
    longDescription: "S.A.M (Smart Attendance Monitor) replaces manual registers with dynamic QR-code verification and automated absence notifications. Features administrative dashboards for faculty, automated eligibility calculations, and student attendance insights.",
    technologies: ["React", "Supabase", "QR Code Engine", "Analytics", "Chart.js"],
    featured: true,
    isCaseStudy: false,
    accentColor: "from-blue-500 to-indigo-600",
    badge: "Analytics Suite",
    mockupType: "sam"
  },
  {
    id: "bio-processor",
    title: "Bio-Processor",
    category: "Biological Data Platform",
    tagline: "High-throughput biological dataset visualization & processing portal.",
    shortDescription: "A digital platform concept for organizing and processing biological information across multiple categories.",
    longDescription: "Bio-Processor provides bio-informaticians and researchers with interactive data tables, category filters, genomic data visualizations, and fast search utilities across massive biological dataset taxonomy models.",
    technologies: ["React", "Web Technologies", "SVG Charts", "Tailwind CSS"],
    featured: true,
    isCaseStudy: false,
    accentColor: "from-emerald-400 to-cyan-500",
    badge: "Data Platform",
    mockupType: "bioprocessor"
  }
];
