import avatarImg from './assets/avatar.jpg'
import heroPortraitImg from './assets/hero-portrait.webp'

/* ════════════════════════════════════════════════════════════
   Data source of truth: strictly derived from Harika Mallavarapu's resume.
   ════════════════════════════════════════════════════════════ */

const BASE = import.meta.env.BASE_URL || '/'
export const getAssetUrl = (p) => {
  if (!p) return ''
  if (p.startsWith('http') || p.startsWith('data:') || p.startsWith('blob:')) return p
  const b = BASE.endsWith('/') ? BASE : `${BASE}/`
  const clean = p.startsWith('/') ? p.slice(1) : p
  return `${b}${clean}`
}

export const profile = {
  name: 'Harika',
  full: 'Harika Mallavarapu',
  role: 'AI & Data Solutions Engineer',
  location: 'Ongole, Prakasam, Andhra Pradesh',
  email: 'harikamallavarapu04@gmail.com',
  intro: 'Computer Science graduate (B.Tech, 2023) who builds AI applications in Python, including an Ollama-based RAG chatbot and a K-Means recommendation engine. Hands-on experience with ML training data at Amazon and Java, SQL, and database management at Infosys.',
  github: 'https://github.com/HarikaMallavarapu/portfolio',
  linkedin: 'https://www.linkedin.com/in/harikamallavarapu',
  resume: getAssetUrl('resume.pdf'),
  avatar: avatarImg,
  heroPortrait: heroPortraitImg,
}

// Quick stats under intro (strictly from resume)
export const heroCounts = [
  { value: '2', label: 'industry roles' },
  { value: '2', label: 'AI applications' },
  { value: '7.65', label: 'B.Tech CGPA' },
]

export const about = {
  photos: [
    getAssetUrl('img/photos/portrait-tilt.jpg'),
    getAssetUrl('img/photos/portrait-profile.jpg'),
    getAssetUrl('img/photos/portrait-seated.jpg'),
    getAssetUrl('img/photos/portrait-smile.jpg')
  ],
  roles: ['AI & Python Developer', 'ML Data Associate', 'System Engineer Intern', 'Computer Science Graduate'],
  paragraphs: [
    "I am a Computer Science graduate (B.Tech, 2023) from Qis Engineering College, Ongole, with a 7.65 CGPA, who builds practical AI applications and data solutions in Python.",
    "My experience includes hands-on work annotating and reviewing machine learning training data at Amazon, and intensive training in Core Java, SQL, and database management at Infosys. Skilled in LLM applications, prompt engineering, and AWS cloud infrastructure, seeking an Associate AI / Data Forward Deployed Engineer role to turn real business problems into working AI and data solutions.",
  ],
  stats: [
    { value: '7.65', label: 'B.Tech CGPA · Qis Engineering College' },
    { value: '9.5', label: 'Intermediate CGPA · Narayana Jr College' },
    { value: '9.3', label: 'SSC CGPA · Oxford EM High School' },
    { value: '2', label: 'Industry Roles · Amazon & Infosys' },
  ],
}

/* Projects directly from resume */
export const projects = [
  {
    title: 'AI-Powered Real Estate Aggregator',
    tag: 'Python · React · LLMs · Ollama · Leaflet.js',
    visual: 'heatmap',
    color: '#FFE5D9',
    text: 'Platform concept that brings property listings from sources such as OLX and 99acres into one interface. Built an Ollama-based RAG chatbot that gives LLM-assisted property suggestions and added an interactive Leaflet.js map with hover markers.',
    tech: ['Python', 'React', 'LLMs', 'Ollama', 'Leaflet.js'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
  {
    title: 'Geographical Data Investigation System',
    tag: 'Python · K-Means Clustering',
    visual: 'gauge',
    color: '#FFF0EA',
    text: 'Application that categorizes and recommends accommodation and restaurant options for migrants. Engineered a recommendation engine in Python using K-Means clustering to filter results by budget, facilities, and distance with a simple, accessible interface.',
    tech: ['Python', 'K-Means Clustering', 'Pandas', 'NumPy', 'Scikit-learn'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
  {
    title: 'Ollama-based RAG Chatbot',
    tag: 'Python · Ollama · RAG · Prompt Tuning',
    visual: 'outfit',
    color: '#FFEFE8',
    text: 'Local Retrieval-Augmented Generation assistant leveraging prompt engineering, context tuning, and local Ollama model inference for private, efficient LLM-assisted discovery and recommendations.',
    tech: ['Python', 'Ollama', 'RAG', 'Prompt Engineering', 'LLMs'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
]

/* The Story So Far (Journey): 100% verified from resume */
export const journey = [
  {
    year: 'July 2025 – July 2026',
    title: 'System Engineer Intern',
    org: 'Infosys',
    text: 'Completed intensive training in core Java, SQL, and advanced database management. Applied programming fundamentals, software architecture concepts, and structured problem-solving to technical exercises while strengthening SDLC and database skills for data-driven applications.',
    photo: getAssetUrl('img/photos/portrait-look.jpg'),
    note: 'Infosys Internship'
  },
  {
    year: 'Apr 2024 – Oct 2024',
    title: 'Machine Learning Data Associate',
    org: 'Amazon · Global Operations AI Associate',
    text: 'Annotated and reviewed complex video data used to train machine learning models, improving model accuracy and decision-making. Delivered high-quality training data supporting AI models and automated operational processes, verifying labeled data for consistency and correctness in AI pipelines.',
    photo: getAssetUrl('img/photos/portrait-laptop.jpg'),
    note: 'Amazon AI Associate'
  },
  {
    year: '2024',
    title: 'AI & Data Solutions Projects',
    org: 'Python · React · Ollama · K-Means',
    text: 'Designed and built an AI-Powered Real Estate Aggregator with an Ollama-based RAG chatbot and Leaflet.js interactive map. Engineered a Geographical Data Investigation System in Python using K-Means clustering to categorize and recommend accommodation and dining options.',
    photo: getAssetUrl('img/photos/portrait-hero.jpg'),
    note: 'AI & ML Projects'
  },
  {
    year: '2019 – 2023',
    title: 'Bachelor of Technology (B.Tech)',
    org: 'Qis Engineering College, Ongole',
    text: 'Graduated in Computer Science Engineering with a 7.65 CGPA. Served as an NSS Student Coordinator organizing and executing community service and campus initiatives, and earned a Token of Appreciation from the Help to Helpless Society for continuous social contributions.',
    photo: getAssetUrl('img/photos/portrait-tilt.jpg'),
    note: 'B.Tech CSE · 7.65 CGPA'
  },
  {
    year: '2017 – 2019',
    title: 'Intermediate Education',
    org: 'Narayana Jr College, Andhra Pradesh',
    text: 'Completed intermediate education with an outstanding 9.5 CGPA, establishing a strong foundation in analytical reasoning, mathematics, and science.',
    photo: getAssetUrl('img/photos/portrait-seated.jpg'),
    note: '9.5 CGPA · Narayana'
  },
  {
    year: '2016 – 2017',
    title: 'Secondary School Certificate (SSC)',
    org: 'Oxford EM High School, Andhra Pradesh',
    text: 'Completed secondary school certificate (SSC) education with a 9.3 CGPA at Oxford EM High School, Andhra Pradesh.',
    photo: getAssetUrl('img/photos/portrait-smile.jpg'),
    note: '9.3 CGPA · Oxford'
  },
]

/* Skills directly from resume */
export const skills = [
  'Python', 'Machine Learning', 'RAG', 'Ollama', 'LLM Applications',
  'Prompt Engineering', 'Model Fine-Tuning', 'K-Means Clustering',
  'Recommendation Systems', 'ML Training Data Annotation',
  'Core Java', 'SQL', 'Database Management', 'React', 'Leaflet.js',
  'TensorFlow', 'Keras', 'Pandas', 'NumPy',
  'AWS EC2', 'AWS S3', 'VPC', 'Route 53', 'CloudFront', 'IAM', 'CloudWatch', 'CloudTrail',
  'SDLC', 'Troubleshooting', 'Technical Communication'
]

// Milestones scoreboard: verified academic and technical metrics from resume
export const scoreboard = [
  { brand: 'python', label: 'B.Tech CGPA', note: 'Qis Engineering College, Ongole', value: 7.65, suffix: '', goal: 10 },
  { brand: 'oracle', label: 'Intermediate', note: 'Narayana Jr College (9.5 CGPA)', value: 95, suffix: '%', goal: 100 },
  { brand: 'github', label: 'SSC Board', note: 'Oxford EM High School (9.3 CGPA)', value: 93, suffix: '%', goal: 100 },
  { brand: 'aws', label: 'AWS Services', note: 'EC2, S3, VPC, IAM, CloudWatch, Route 53', value: 8, suffix: '+', goal: 8 },
]

// Certifications & achievements directly from resume
export const certifications = [
  ['Intro to Cloud Computing & Career Paths', 'Cloud Infrastructure Fundamentals', 'aws'],
  ['Token of Appreciation', 'Help to Helpless Society · Social Contributions', 'pearson'],
  ['NSS Student Coordinator', 'National Service Scheme · Community Initiatives', 'cisco'],
  ['B.Tech in Computer Science Engineering', 'Qis Engineering College · 7.65 CGPA', 'github'],
  ['Intermediate Education', 'Narayana Jr College · 9.5 CGPA', 'oracle'],
  ['Secondary School Certificate (SSC)', 'Oxford EM High School · 9.3 CGPA', 'python'],
]

// Cut-out frames used by the hero
export const lookFrames = { from: 0, to: 28 }
export const contactSticker = getAssetUrl('img/stickers/lg/f239.webp')
