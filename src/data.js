import avatarImg from './assets/avatar.jpg'
import heroPortraitImg from './assets/hero-portrait.webp'

/* ════════════════════════════════════════════════════════════
   Everything you see on the site lives here. Edit freely.
   Colours & fonts: top of src/styles/global.css
   Photos: public/img (faces = round avatars, photos = polaroids & photo stack,
   stickers = cut-out frames with a white sticker border)
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
  location: 'Ongole, Andhra Pradesh, India',
  email: 'harikamallavarapu04@gmail.com',
  intro: 'I build intelligent AI applications and data solutions in Python, from Ollama RAG chatbots to K-Means recommendation engines.',
  github: 'https://github.com/HarikaMallavarapu/portfolio',
  linkedin: 'https://www.linkedin.com/in/harikamallavarapu',
  resume: getAssetUrl('resume.pdf'),
  avatar: avatarImg,
  heroPortrait: heroPortraitImg,
}

// quick stats under your intro
export const heroCounts = [
  { value: '2+', label: 'AI applications' },
  { value: '2', label: 'industry roles' },
  { value: '7.65', label: 'B.Tech CGPA' },
]

export const about = {
  // a fanned stack of photos: click it to shuffle through your roles
  photos: [
    getAssetUrl('img/photos/portrait-tilt.jpg'),
    getAssetUrl('img/photos/portrait-profile.jpg'),
    getAssetUrl('img/photos/portrait-seated.jpg'),
    getAssetUrl('img/photos/portrait-smile.jpg')
  ],
  // one role per photo, shown under it (click the stack to cycle)
  roles: ['AI Application Developer', 'ML Data Associate', 'Cloud & Data Engineer', 'Python Developer'],
  paragraphs: [
    "Hi! I'm Harika, a Computer Science graduate (B.Tech, 2023) passionate about building practical AI applications, recommendation engines, and scalable data solutions in Python.",
    "I bring hands-on experience annotating and reviewing complex machine learning training data at Amazon, and mastering Java, SQL, and database management at Infosys. I love solving real business challenges with LLMs, prompt engineering, and AWS cloud infrastructure.",
  ],
  stats: [
    { value: '7.65', label: 'B.Tech CGPA · QIS CSE' },
    { value: '9.5', label: 'Intermediate CGPA' },
    { value: '2', label: 'Industry Roles · Amazon & Infosys' },
    { value: '2+', label: 'AI Applications Shipped' },
  ],
}

/* visual: 'gauge' | 'heatmap' | 'outfit' (illustrated art), or add image: 'img/...' */
export const projects = [
  {
    title: 'AI Real Estate Aggregator',
    tag: 'AI · Full-Stack · LLMs',
    visual: 'heatmap',
    color: '#FFE5D9',
    text: 'Intelligent real estate discovery platform in Python that aggregates listings, predicts pricing trends using K-Means clustering, and recommends matching properties based on lifestyle preferences.',
    tech: ['Python', 'K-Means', 'Pandas', 'Flask', 'Leaflet.js'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
  {
    title: 'Geo Data Investigation',
    tag: 'Geospatial ML · Analytics',
    visual: 'gauge',
    color: '#FFF0EA',
    text: 'High-throughput spatial data analysis pipeline that correlates regional demographics, housing densities, and geographic features for localized infrastructure and property investment insights.',
    tech: ['Python', 'GeoPandas', 'NumPy', 'Scikit-learn', 'Folium'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
  {
    title: 'Ollama RAG AI Assistant',
    tag: 'GenAI · Local LLMs · RAG',
    visual: 'outfit',
    color: '#FFEFE8',
    text: 'Offline-capable Retrieval-Augmented Generation assistant powered by local Ollama models and ChromaDB, answering questions over internal engineering documentation with zero data egress.',
    tech: ['Python', 'Ollama', 'LangChain', 'ChromaDB', 'Streamlit'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
  },
]

export const journey = [
  {
    year: '2024',
    title: 'AI & Data Engineering Projects',
    org: 'Autonomous / Research',
    text: 'Built an AI-driven real estate recommendation engine using K-Means clustering, and developed an offline Ollama RAG chatbot using LangChain and Streamlit.',
    photo: getAssetUrl('img/photos/portrait-hero.jpg'),
    note: 'Shipped AI products'
  },
  {
    year: '2023',
    title: 'ML Data Associate',
    org: 'Amazon, Hyderabad',
    text: 'Annotated and validated multi-modal machine learning training datasets. Maintained 98%+ quality metrics across high-throughput data processing workflows.',
    photo: getAssetUrl('img/photos/portrait-laptop.jpg'),
    note: 'Amazon AI training data'
  },
  {
    year: '2023',
    title: 'Software Engineer Trainee',
    org: 'Infosys (Springboard / Foundation)',
    text: 'Mastered Core Java, SQL, Relational Database Management Systems, and Software Engineering methodologies with high-distinction evaluations.',
    photo: getAssetUrl('img/photos/portrait-look.jpg'),
    note: 'Infosys engineering excellence'
  },
  {
    year: '2023',
    title: 'B.Tech in Computer Science',
    org: 'QIS College of Engineering, Ongole',
    text: 'Graduated with 7.65 CGPA. Led departmental coding initiatives, technical symposiums, and community outreach as an NSS Student Coordinator.',
    photo: getAssetUrl('img/photos/portrait-tilt.jpg'),
    note: 'B.Tech CSE Graduate'
  },
  {
    year: '2019',
    title: 'Intermediate Education',
    org: 'Narayana Jr College, Andhra Pradesh',
    text: '2017 – 2019 · Scored 9.5 CGPA with a strong foundation in Mathematics, Physics, and Chemistry.',
    photo: getAssetUrl('img/photos/portrait-seated.jpg'),
    note: '9.5 CGPA foundation'
  },
]

export const skills = [
  'Python', 'Machine Learning', 'RAG', 'Ollama', 'LLM Applications', 'Prompt Tuning',
  'Core Java', 'SQL', 'React', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'AWS EC2',
  'AWS S3', 'K-Means', 'Leaflet.js', 'Database Management', 'VPC', 'CloudWatch', 'IAM',
  'Model Fine-Tuning', 'SDLC', 'Data Annotation',
]

// Milestones scoreboard. brand = icon key from src/lib/brands.js
export const scoreboard = [
  { brand: 'python', label: 'Python & AI', note: 'algorithms & pipelines', value: 250, suffix: '+', goal: 300 },
  { brand: 'oracle', label: 'Core Java & SQL', note: 'exercises completed', value: 350, suffix: '+', goal: 400 },
  { brand: 'aws', label: 'AWS Cloud', note: 'services & architectures', value: 8, suffix: '+', goal: 10 },
  { brand: 'github', label: 'Open Source', note: 'commits & contributions', value: 45, suffix: '+', goal: 50 },
]

// [title, issuer, brand icon key from src/lib/brands.js]
export const certifications = [
  ['Intro to Cloud Computing & Career Paths', 'IBM · Cloud Computing', 'googlecloud'],
  ['AWS Cloud Infrastructure & Services', 'Amazon Web Services', 'aws'],
  ['Python & Machine Learning Foundations', 'Python Software Foundation', 'python'],
  ['Core Java & Database Management', 'Infosys', 'oracle'],
  ['SQL & Relational Database Systems', 'Database Systems', 'mongodb'],
  ['Software Development Life Cycle (SDLC)', 'Engineering Standards', 'github'],
  ['NSS Student Coordinator & Leadership', 'National Service Scheme', 'cisco'],
  ['Token of Appreciation · Social Service', 'Help to Helpless Society', 'pearson'],
]

// cut-out frames used by the hero (she turns to look at your cursor)
export const lookFrames = { from: 0, to: 28 }
export const contactSticker = getAssetUrl('img/stickers/lg/f239.webp')
