export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  badge?: string;
  technologies: string[];
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & ML' | 'Telecom & Enterprise' | 'IoT & Hardware' | 'Mobile Apps';
  tagline: string;
  description: string[];
  techStack: string[];
  metrics?: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
  badgeText: string;
  iconType: string;
}

export const RESUME_DATA = {
  personal: {
    name: 'Amit Mohite',
    title: 'Mobile Tech Lead & AI Engineer',
    headline: 'Mobile Tech Lead & AI Engineer (12+ Yrs) | iOS & Android Architect | RAG & GenAI | Certified SAFe® 6 Practitioner',
    location: 'Pune, India',
    phone: '+91 9669636960',
    email: 'amit.mohite27@gmail.com',
    linkedin: 'https://www.linkedin.com/in/amit-mohite-a5899047',
    github: 'https://github.com',
    profileImage: '/amit-mohite.jpg',
    resumePdfUrl: '/Amit_Mohite_Resume.pdf',
    yearsExperience: '12+',
    appsDeployed: '20+',
    iosYears: '10+',
    androidYears: '5+',
  },
  education: {
    degree: 'Bachelor of Computer Application',
    institution: 'Ravindra Nath Tagore University (Aisect), Indore',
    country: 'India',
  },
  summary: `Experienced Mobile Application Developer and AI Engineer with over 12 years of expertise in iOS and Android development, including leadership roles in Agile environments. Proficient in Swift, SwiftUI, Kotlin, Objective-C, and scalable mobile architectures like MVVM and VIPER. Strong background in AI/ML integration using Python, FastAPI, LangChain, RAG architectures, and Vector Databases (e.g., Chroma, FAISS, Pinecone). Experienced in building enterprise-grade apps and AI-driven solutions across IoT, Healthcare, Telecom, EdTech, and Retail domains. Certified SAFe 6 Practitioner with a focus on performance optimization, system design, cross-functional collaboration, Data ML on Google Cloud, and Prompt Engineering.`,
  
  recruiterNotes: `Amit Mohite | Mobile Tech Lead & AI Engineer
• Experience: 12+ years (10+ yrs iOS / Swift / SwiftUI, 5+ yrs Android / Kotlin, Python / FastAPI / RAG)
• Current Role: Tech Lead & AI Engineer at Tech Mahindra, Pune
• Certification: Certified SAFe 6 Practitioner (2025), Google Cloud ML APIs Skill Badge
• Contact: amit.mohite27@gmail.com | +91 9669636960
• LinkedIn: https://www.linkedin.com/in/amit-mohite-a5899047`,

  skillCategories: [
    {
      title: 'AI & ML Engineering',
      icon: 'Brain',
      skills: [
        'Python',
        'FastAPI',
        'LangChain',
        'LlamaIndex',
        'RAG (Retrieval-Augmented Generation)',
        'Vector DBs (Chroma, FAISS, Pinecone)',
        'Prompt Engineering',
        'Google Cloud ML APIs',
        'Claude AI & Google Gemini'
      ]
    },
    {
      title: 'Mobile & Languages',
      icon: 'Smartphone',
      skills: [
        'Swift',
        'SwiftUI',
        'Kotlin',
        'Objective-C',
        'Core Java',
        'Python',
        'iOS SDK',
        'Android SDK',
        'WidgetKit',
        'Siri Shortcuts',
        'CallKit'
      ]
    },
    {
      title: 'APIs & Networking',
      icon: 'Network',
      skills: [
        'FastAPI',
        'RESTful APIs',
        'GraphQL API',
        'WebSockets',
        'SOAP APIs',
        'Retrofit',
        'Alamofire',
        'URLConnection'
      ]
    },
    {
      title: 'Reactive & State',
      icon: 'Zap',
      skills: [
        'RxSwift',
        'Combine',
        'Reactive Programming',
        'TCA (The Composable Architecture)'
      ]
    },
    {
      title: 'Architecture & Patterns',
      icon: 'Boxes',
      skills: [
        'Clean Architecture',
        'MVVM',
        'VIPER',
        'MVP',
        'MVC',
        'Singleton',
        'Observer Pattern',
        'Decorator Pattern',
        'System Design'
      ]
    },
    {
      title: 'Hardware & Native SDKs',
      icon: 'Cpu',
      skills: [
        'Bluetooth LE (BLE)',
        'Wi-Fi IoT Provisioning',
        'Geofencing',
        'CoreLocation & Maps',
        'NFC Protocol',
        'Push Notifications (APNs / FCM)',
        'Offline Sync Protocols'
      ]
    },
    {
      title: 'Databases & Storage',
      icon: 'Database',
      skills: [
        'Chroma Vector DB',
        'FAISS',
        'Pinecone',
        'Core Data',
        'SQLite',
        'Realm',
        'DBFlow'
      ]
    },
    {
      title: 'Fintech & Payments',
      icon: 'CreditCard',
      skills: [
        'Apple In-App Purchases (IAP)',
        'Android Play Billing (IAP)',
        'Stripe',
        'PayPal',
        'PayU',
        'CCAvenue',
        'Braintree'
      ]
    },
    {
      title: 'DevOps & AI Workflows',
      icon: 'GitBranch',
      skills: [
        'GitHub Copilot',
        'CI/CD Pipelines',
        'Git / GitHub / GitLab / Bitbucket',
        'Jira / PI Planning (SAFe 6)',
        'Xcode & Android Studio'
      ]
    }
  ],

  certifications: [
    {
      title: 'Certified SAFe® 6 Practitioner',
      issuer: 'Scaled Agile Framework',
      year: '2025',
      badgeText: 'Agile & Enterprise Scaled Delivery',
      iconType: 'ShieldCheck'
    },
    {
      title: 'Prepare Data for ML APIs on Google Cloud',
      issuer: 'Google Cloud Skill Badge',
      year: 'Google Cloud',
      badgeText: 'GCP Machine Learning & Cloud Data',
      iconType: 'Cloud'
    },
    {
      title: 'Prompt Engineering for Everyone',
      issuer: 'Cognitiveclass.ai (IBM Developer Skills Network)',
      year: 'GenAI Certified',
      badgeText: 'LLMs & Prompt Architecture',
      iconType: 'Sparkles'
    },
    {
      title: 'Python for Data Science & AI',
      issuer: 'Cognitiveclass.ai',
      year: 'Specialization',
      badgeText: 'Python & Scientific Computing',
      iconType: 'Code'
    },
    {
      title: 'GitHub Copilot Certified Specialist',
      issuer: 'GitHub / Microsoft',
      year: 'Developer Productivity',
      badgeText: 'AI-Assisted Engineering KT',
      iconType: 'Bot'
    }
  ],

  experiences: [
    {
      role: 'Tech Lead / AI Engineer',
      company: 'Tech Mahindra',
      location: 'Pune, India',
      period: 'April 2022 – Present',
      badge: 'Current Role',
      summary: 'Architecting mobile platforms, enterprise telecom onboarding, and high-performance Python/FastAPI RAG AI microservices.',
      technologies: ['Swift', 'SwiftUI', 'Combine', 'GraphQL', 'Python', 'FastAPI', 'LangChain', 'FAISS', 'SAFe 6 Agile', 'GitHub Copilot'],
      achievements: [
        'Lead developer and architect for mobile platforms and cutting-edge AI integration initiatives across enterprise clients.',
        'Architected backend APIs using Python and FastAPI to serve intelligent recommendation and semantic search features.',
        'Designed and deployed production RAG (Retrieval-Augmented Generation) pipelines using LangChain and Vector Databases for contextual content retrieval.',
        'Architected framework for new device activation and SIM provisioning for a major Canadian telecom client, ensuring high security and carrier SLA adherence.',
        'Delivered high-impact, performant features using SwiftUI, Combine, GraphQL APIs, and custom AI workflows.',
        'Collaborated actively in Agile ceremonies including PI Planning, Grooming, Retrospectives, and delivered internal GitHub Copilot KT sessions.',
        'Served as Delegate Lead, mentoring junior developers and driving technical discussions on mobile & AI architectural standards.'
      ]
    },
    {
      role: 'Mobile Tech Lead',
      company: 'Beyond Key',
      location: 'Indore, India',
      period: 'Nov 2015 – March 2022',
      badge: '6+ Years Tenured',
      summary: 'Progressed from Software Engineer to Mobile Tech Lead, directing cross-platform engineering across IoT, Healthcare, Retail, and Education.',
      technologies: ['iOS', 'Android', 'Swift', 'Kotlin', 'Bluetooth BLE', 'Geofencing', 'CI/CD', 'Offline Sync', 'MVVM/VIPER'],
      achievements: [
        'Progressed from Software Engineer to Mobile Tech Lead over a successful 6+ year tenure.',
        'Delivered robust cross-platform mobile solutions in mission-critical domains including IoT, Healthcare, Retail, and Education.',
        'Led a multidisciplinary team of mobile developers; responsible for technical architecture, code reviews, automated testing, and CI/CD pipelines.',
        'Developed iOS and Android apps with advanced hardware features like Bluetooth BLE communication, geofencing triggers, offline caching, and calendar integration.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Linkites',
      location: 'Indore, India',
      period: 'Nov 2011 – March 2015',
      badge: 'Foundation',
      summary: 'Developed 10+ native mobile applications from scratch across audio streaming, event coordination, and healthcare.',
      technologies: ['Objective-C', 'Java', 'iOS SDK', 'Android SDK', 'SQLite', 'Custom Media Player', 'In-App Purchases'],
      achievements: [
        'Engineered 10+ mobile applications from scratch across multiple consumer and enterprise domains.',
        'Built custom lightweight advertisement frameworks, real-time video/image processing modules, and robust music players.',
        'Key project deliverables included school event schedulers, social interaction platforms, and digital healthcare recording tools.'
      ]
    }
  ],

  projects: [
    {
      id: 'rag-recommendation-engine',
      title: 'AI-Powered RAG Content Recommendation Engine',
      category: 'AI & ML',
      tagline: 'Semantic contextual retrieval & document indexing engine with LangChain and FAISS',
      description: [
        'Built a high-performance backend API service using Python and FastAPI integrated with LangChain and FAISS vector database.',
        'Implemented advanced RAG workflows for efficient document indexing, chunking, and contextual semantic search/querying.',
        'Delivered fast, reliable RESTful endpoints consumed seamlessly by mobile and web frontends.'
      ],
      techStack: ['Python', 'FastAPI', 'LangChain', 'FAISS Vector DB', 'OpenAI / Gemini Embeddings', 'RESTful API'],
      metrics: 'Sub-second semantic search & contextual answer retrieval',
      iconName: 'BrainCircuit'
    },
    {
      id: 'canadian-telecom-provisioning',
      title: 'Telecom Device Onboarding & SIM Provisioning Framework',
      category: 'Telecom & Enterprise',
      tagline: 'Carrier-grade iOS framework for device activation and carrier onboarding',
      description: [
        'Designed and engineered modular iOS framework for onboarding and device provisioning for a premier Canadian telecom carrier.',
        'Leveraged modern SwiftUI, Combine reactive pipelines, and GraphQL queries for real-time feature delivery.',
        'Conducted rigorous code reviews, automated testing suites, and live feature demonstrations to executive stakeholders.'
      ],
      techStack: ['SwiftUI', 'Combine', 'GraphQL', 'iOS Framework Design', 'Security / TLS', 'Agile PI Planning'],
      metrics: 'Empowering millions of subscribers with automated device provisioning',
      iconName: 'Antenna'
    },
    {
      id: 'iot-smart-device-system',
      title: 'IoT Smart Device & Hardware Ecosystem',
      category: 'IoT & Hardware',
      tagline: 'Bluetooth BLE & Wi-Fi configuration, firmware updates, and geofence triggers',
      description: [
        'Engineered complete device connectivity layer supporting BLE pairing, Wi-Fi credential provisioning, and Over-The-Air (OTA) firmware updates.',
        'Implemented high-precision geofencing triggers that activate hardware operations based on user proximity.',
        'Engineered robust offline device logging that syncs to cloud services via a reliable custom protocol upon network reconnection.'
      ],
      techStack: ['CoreBluetooth (BLE)', 'Wi-Fi Configuration', 'Geofencing', 'Custom Cloud Sync Protocol', 'Core Data'],
      metrics: 'Zero data loss with resilient offline-first device sync',
      iconName: 'Radio'
    },
    {
      id: 'nfc-maritime-attendance',
      title: 'NFC Maritime Attendance & Sync System',
      category: 'IoT & Hardware',
      tagline: 'Offline-first NFC check-in for cruise workers with central dock synchronization',
      description: [
        'Built an offline NFC-based check-in system for cruise line maritime staff operating with zero at-sea internet connectivity.',
        'Engineered conflict-free batch data synchronization with central port systems immediately upon vessel docking.',
        'Cut manual paper logging and administrative payroll reconciliation by over 80% across production fleet.'
      ],
      techStack: ['CoreNFC', 'Offline Storage', 'Batch Synchronization', 'Security Encryption', 'iOS / Android'],
      metrics: 'Reduced manual entry by 80% deployed across fleet',
      iconName: 'Ship'
    },
    {
      id: 'pocket-scheduler',
      title: 'Pocket Scheduler Academic Platform',
      category: 'Mobile Apps',
      tagline: 'School events calendar synchronization and multi-party timetable management',
      description: [
        'Architected clean MVVM mobile client synchronizing academic calendars, examination dates, and extracurricular events.',
        'Integrated third-party calendar APIs, background background fetch, and real-time push notification updates.',
        'Ensured seamless cross-platform synchronization between teacher, parent, and student portals.'
      ],
      techStack: ['iOS SDK', 'Android SDK', 'Calendar APIs', 'Push Notifications', 'MVVM'],
      metrics: 'Adopted across multi-campus education systems',
      iconName: 'Calendar'
    },
    {
      id: 'retierly-interactive-app',
      title: 'Retierly Dynamic Swipe Mobile Application',
      category: 'Mobile Apps',
      tagline: 'Intuitive Tinder-style card swipe gestures and fluid real-time interactive UI',
      description: [
        'Involved extensively in full-cycle development of iOS and Android cross-platform experiences.',
        'Engineered ultra-smooth 60fps physics-based card swipe animations with dynamic gesture recognition.',
        'Built reliable local caching and instant state transition pipelines for superior user retention.'
      ],
      techStack: ['Swift', 'Kotlin', 'Custom Gesture Animators', 'REST APIs', 'UIKit / CoreAnimation'],
      metrics: 'Delivered fluid 60 FPS gesture-based card interactions',
      iconName: 'Layers'
    }
  ]
};
