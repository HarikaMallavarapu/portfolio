/* ════════════════════════════════════════════════════════════
   Everything you see on the site lives here. Edit freely.
   Colours & fonts: top of src/styles/global.css
   Photos: public/img (faces = round avatars, photos = polaroids & photo stack,
   stickers = cut-out frames with a white sticker border)
   ════════════════════════════════════════════════════════════ */

export const profile = {
  name: 'Harika',
  full: 'Harika Mallavarapu',
  role: 'AI & Data Solutions Engineer',
  location: 'Ongole, Andhra Pradesh, India',
  email: 'harikamallavarapu04@gmail.com',
  intro: 'I build intelligent AI applications and data solutions in Python, from Ollama RAG chatbots to K-Means recommendation engines.',
  github: 'https://github.com/HarikaMallavarapu/portfolio',
  linkedin: 'https://www.linkedin.com/in/harikamallavarapu',
  resume: 'resume.pdf',
  avatar: 'img/faces/smile.jpg',
}

// quick stats under your intro
export const heroCounts = [
  { value: '2+', label: 'AI applications' },
  { value: '2', label: 'industry roles' },
  { value: '7.65', label: 'B.Tech CGPA' },
]

export const about = {
  // a fanned stack of photos: click it to shuffle through your roles
  photos: ['img/photos/portrait-tilt.jpg', 'img/photos/portrait-profile.jpg', 'img/photos/portrait-seated.jpg', 'img/photos/portrait-smile.jpg'],
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
    text: 'A unified platform aggregating property listings from OLX and 99acres with an Ollama-based RAG chatbot and interactive Leaflet.js map with hover markers.',
    tech: ['Python', 'React', 'LLMs', 'Ollama', 'RAG', 'Leaflet.js'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
    color: '#FFE5D9',
  },
  {
    title: 'Geo Data Investigation',
    tag: 'Machine Learning',
    visual: 'gauge',
    text: 'A geospatial recommendation system that categorizes accommodation and restaurant options for migrants using K-Means clustering across budget, facilities, and distance.',
    tech: ['Python', 'K-Means', 'Scikit-Learn', 'Pandas', 'NumPy'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
    color: '#FFD9CC',
  },
  {
    title: 'Ollama RAG AI Assistant',
    tag: 'GenAI · Local LLMs',
    visual: 'outfit',
    text: 'An intelligent retrieval-augmented generation assistant leveraging local LLMs via Ollama to provide context-aware query responses, document QA, and property guidance.',
    tech: ['Python', 'Ollama', 'RAG', 'Prompt Tuning', 'Vector Search'],
    link: 'https://github.com/HarikaMallavarapu/portfolio',
    color: '#FFEDE5',
  },
]

export const journey = [
  { year: '2025 – 2026', title: 'System Engineer Intern', org: 'Infosys', text: 'Intensive training in core Java, SQL, and database management. Applied SDLC and software architecture to build reliable data-driven applications.', photo: 'img/photos/portrait-laptop.jpg', note: 'systems & DB engineering' },
  { year: '2024', title: 'Machine Learning Data Associate', org: 'Amazon', text: 'Global Operations AI Associate (Apr – Oct 2024). Annotated and reviewed complex video data for ML models, verifying consistency and data quality in AI pipelines.', photo: 'img/photos/portrait-smile.jpg', note: 'Amazon AI operations' },
  { year: '2023', title: 'B.Tech in Computer Science Engineering', org: 'Qis Engineering College, Ongole', text: '2019 – 2023 · Graduated with 7.65 CGPA. Focused on AI applications, data algorithms, and software development. Served as NSS Student Coordinator.', photo: 'img/photos/portrait-look.jpg', note: 'where it all started' },
  { year: '2019', title: 'Intermediate Education', org: 'Narayana Jr College, Andhra Pradesh', text: '2017 – 2019 · Scored 9.5 CGPA with a strong foundation in Mathematics, Physics, and Chemistry.', photo: 'img/photos/portrait-seated.jpg', note: '9.5 CGPA foundation' },
]

export const skills = [
  'Python', 'Machine Learning', 'RAG', 'Ollama', 'LLM Applications', 'Prompt Tuning',
  'Core Java', 'SQL', 'React', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'AWS EC2',
  'AWS S3', 'K-Means', 'Leaflet.js', 'Database Management', 'VPC', 'CloudWatch', 'IAM',
  'Model Fine-Tuning', 'SDLC', 'Data Annotation',
]

// Milestones scoreboard. brand = icon key from src/lib/brands.js
// value counts up, bar fills to value / goal
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
export const contactSticker = 'img/stickers/lg/f239.webp'
