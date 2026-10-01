import {
  CodeXml,
  Server,
  Database,
  Cloud,
  Brain,
  Radio,
  Award,
  Trophy,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProjectItem {
  name: string;
  tagline: string;
  image: string;
  points: string[];
  tech: string[];
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  score: string;
}

export interface CertificateItem {
  issuer: string;
  name: string;
}

export interface AchievementItem {
  icon: LucideIcon;
  text: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '8.00', label: 'CGPA · B.E. ISE' },
  { value: '4', label: 'Major Projects' },
  { value: 'GCP', label: 'Cloud Certified' },
  { value: '6/60', label: 'Hackathon Rank' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: CodeXml,
    items: ['C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    items: ['React.js', 'Node.js', 'Express.js', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    title: 'Cloud & AI',
    icon: Cloud,
    items: ['Google Cloud Platform', 'Cloud Engineering', 'Artificial Intelligence', 'Machine Learning'],
  },
  {
    title: 'Tools & Platforms',
    icon: Brain,
    items: ['Git', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Tableau', 'Excel'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    name: 'BLOCKLEARN',
    tagline: 'AI-Enhanced Gamified SkillSwap Platform',
    image: '/assets/project-blocklearn.jpg',
    points: [
      'Full-stack decentralized skill-exchange platform with AI-driven skill matching',
      'Real-time chat and HD video via WebRTC and Socket.IO',
      'Blockchain-verified skill credentials with Solidity smart contracts',
      'RESTful APIs designed to support 100+ concurrent users',
    ],
    tech: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Python',
      'WebRTC',
      'Socket.IO',
      'Solidity',
      'Gemini API',
    ],
  },
  {
    name: 'Moto India Expedition',
    tagline: 'Engineering & Route Intelligence Hub for Motorcycle Touring',
    image: '/assets/project-moto-expedition.jpg',
    points: [
      'Full-stack platform delivering telemetry, dyno curves & specs for 153 motorcycles across 59 pan-India routes',
      'Interactive Route Radar with elevation graphs, terrain categorization, and GPS waypoint field guides',
      'Dyno Lab comparison arena featuring live RPM throttle curve simulator and power-to-weight benchmarks',
      'Specialized rider suite: Ladakh fuel gap survival calculator, exhaust symphony simulator, and RTO/EMI forecaster',
    ],
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Leaflet Maps',
      'Chart.js',
    ],
  },
  {
    name: 'Connect Karnataka',
    tagline: 'Mass Communication & District Contact Management Platform',
    image: '/assets/project-connect-karnataka.jpg',
    points: [
      'Full-stack administrative communication system managing citizen contacts across all 31 Karnataka districts',
      'Dual-portal architecture: State Headquarters (Super Admin) oversight and District In-Charge operational portals',
      'Integrated telephonic dialer with call timers and traffic-light citizen sentiment logging (Agree / Neutral / Disagree)',
      'Broadcast campaign engine with targeted multi-district reach, delivery tracking, and full audit logs',
    ],
    tech: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'SQLite',
      'Lucide Icons',
      'REST API',
    ],
  },
  {
    name: 'Disease Outbreak Tracker',
    tagline: 'Real-time public-health monitoring dashboard',
    image: '/assets/project-outbreak.jpg',
    points: [
      'MERN-stack application for real-time disease outbreak monitoring',
      'Interactive maps with health metrics and outbreak trends',
      'Automated public-health alerts and safety guidelines',
      'Supports early detection and response planning',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    icon: Cloud,
    title: 'Cloud & Cloud Infrastructure',
    body: 'Design and develop scalable cloud-based solutions using Google Cloud technologies.',
  },
  {
    icon: CodeXml,
    title: 'Full-Stack Web Development',
    body: 'Build modern, responsive web applications using React.js, Node.js, Express.js and related technologies.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning Solutions',
    body: 'Develop intelligent applications and integrate AI-powered functionality into modern software systems.',
  },
  {
    icon: Database,
    title: 'Database Solutions',
    body: 'Build applications backed by MongoDB, PostgreSQL and SQL databases.',
  },
  {
    icon: Radio,
    title: 'Real-Time Applications',
    body: 'Develop real-time communication, monitoring and dashboard systems using technologies such as WebRTC and Socket.IO.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    body: 'Create structured backend systems and RESTful APIs with authentication and session-management capabilities.',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    title: 'B.E. — Information Science Engineering',
    org: 'Sai Vidya Institute of Technology, Bengaluru',
    period: '2023 – 2027',
    score: '8.00 CGPA',
  },
  {
    title: 'Senior Secondary (XII)',
    org: 'Karnataka State Board',
    period: '2023',
    score: '93.8%',
  },
  {
    title: 'Secondary (X)',
    org: 'Karnataka State Board',
    period: '2021',
    score: '95.36%',
  },
];

export const CERTIFICATIONS_LIST: CertificateItem[] = [
  { issuer: 'IBM', name: 'Artificial Intelligence Fundamentals' },
  { issuer: 'MongoDB University', name: 'AI Innovation: Enabling a Resilient AI Strategy' },
  { issuer: 'MongoDB University', name: 'Building AI Agents with MongoDB' },
  { issuer: 'MongoDB University', name: 'Building RAG Apps with MongoDB' },
  { issuer: 'MongoDB University', name: 'Building AI-Powered Search with MongoDB Vector Search' },
  {
    issuer: 'Infosys Springboard',
    name: 'C Programming, DSA, Analysis & Design of Algorithms, Python, Java Concepts, Design Thinking',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    icon: Award,
    text: 'Presented a research paper at the 17th International Conference on Recent Engineering and Technology (ICRET)',
  },
  {
    icon: Trophy,
    text: '6th place out of 60 teams in a college-level Hackathon',
  },
  {
    icon: BadgeCheck,
    text: '2nd place in the college-level Mini-Project Presentation competition',
  },
];

export const SOFT_SKILLS: string[] = [
  'Strong Communication',
  'Team Collaboration',
  'Time Management',
  'Problem Solving',
  'Continuous Learning',
];

export const CONTACT_INFO = {
  email: 'pranav36018@gmail.com',
  phone: '+91 99727 36535',
  location: 'Bengaluru, Karnataka, India',
  githubUrl: 'https://github.com/pranav36018',
  githubDisplay: 'github.com/pranav36018',
  linkedinUrl: 'https://www.linkedin.com/in/pranav-v-rao-957510305/',
  linkedinDisplay: 'linkedin.com/in/pranav-v-rao-957510305',
};
