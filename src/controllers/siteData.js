const skills = [
  'React.js', 'Node.js', 'JavaScript/ES6+', 'MySQL/MongoDB', 'RESTful API Development', 
  'Python Automation', 'AI Integration', 'Responsive Design', 'Full-Stack Development', 
  'UI/UX Implementation', 'Git/Version Control', 'Cloud Deployment'
];

const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Responsive full-stack websites and apps.',
    icon: 'code',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    description: 'Smart process automation and AI-powered tools.',
    icon: 'robot',
  },
  {
    id: 'api-db',
    title: 'API & Database Solutions',
    description: 'Secure backends, REST APIs, and data-driven apps.',
    icon: 'database',
  },
];

// Portfolio gig offering with packages and tags
const portfolioGig = {
  id: 'portfolio-gig',
  title: 'I will build stunning, high-performing websites with modern design and clean code',
  overview:
    'I design and develop beautiful, responsive, and high-performing websites using modern web technologies like React, Node.js, and MySQL. Whether you need a landing page, full-stack e-commerce site, or AI-powered app — I’ll deliver a sleek, functional, and conversion-focused product tailored to your brand and goals. Every project is coded from scratch, optimized for performance, and designed for both user experience and aesthetics.',
  packages: [
    {
      name: 'Basic',
      summary: 'Static Website or Landing Page — Modern, responsive single-page website (HTML, CSS, JS, or React, up to 3 sections).',
      delivery: '3 days',
      revisions: 2,
    },
    {
      name: 'Standard',
      summary: 'Dynamic or Portfolio Website — Multi-page website with smooth animations, galleries, contact form, responsive design (React).',
      delivery: '5 days',
      revisions: 3,
    },
    {
      name: 'Premium',
      summary: 'Full-Stack Web App — Complete full-stack app (React + Node.js + MySQL) with backend integration, authentication, admin dashboard.',
      delivery: '7–10 days',
      revisions: 5,
    },
  ],
  tags: ['React', 'Node.js', 'Express', 'MySQL', 'JavaScript', 'Bootstrap', 'Responsive Design', 'Web App', 'Portfolio Website', 'Full Stack Developer'],
};

const projects = [
  {
    id: '1',
    title: 'AI Todo – Smart Task Manager',
    description: 'Next-gen productivity app with AI suggestions, drag-and-drop, streaks, and confetti.',
    tech: ['React', 'Vite', 'JavaScript', 'LocalStorage'],
    image: '/images/ai-todo.png',
    github: 'https://github.com/aqsak-dev99/Ai-to-do-app',
    live: 'https://aqsak-dev99.github.io/Ai-to-do-app/',
    features: [
      'AI and demo task modes',
      'Drag & drop task management',
      'Dark/Light mode toggle',
      'Streak & XP system',
      'LocalStorage data saving'
    ],
    fullDescription:
      'Next-generation productivity app built with React and Vite, featuring AI-based task suggestions, drag-and-drop organization, streak tracking, and gamified confetti celebrations. Sleek glassmorphic UI for a futuristic, fun productivity experience.',
  },
  {
    id: '2',
    title: 'Diana’s Jewelry – Full-Stack E-Commerce',
    description: 'Full-stack jewelry e-commerce with listings, cart, checkout, and feedback.',
    tech: ['Node.js', 'Express', 'MySQL', 'jQuery', 'HTML', 'CSS'],
    image: '/images/dianas-jewelry.png',
    github: 'https://github.com/aqsak-dev99/dianas-jewelry',
    live: 'https://dianas-jewelry-production.up.railway.app/index.html',
    features: [
      'Dynamic product database',
      'Shopping cart & checkout',
      'Responsive design',
      'SQL-based backend',
      'Secure deployment via Railway'
    ],
    fullDescription:
      'Full-stack jewelry e-commerce website built with Node.js, Express, and MySQL. Includes product listings, cart management, checkout flow, and feedback submission. Deployed live on Railway with responsive front-end (HTML, CSS, JS, jQuery).',
  },
  {
    id: '3',
    title: 'PixelPulse Media – Digital Agency Website',
    description: 'Glassmorphic agency landing focused on storytelling, animations, and testimonials.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/pixelpulse-media.png',
    github: 'https://github.com/aqsak-dev99/pixel_media',
    live: 'https://aqsak-dev99.github.io/pixel_media/',
    features: [
      'Smooth scroll navigation',
      'Animated hero icons',
      'Auto-sliding testimonials',
      'Portfolio showcase modals',
      'Sticky navbar and motion effects'
    ],
    fullDescription:
      'Visually immersive, glassmorphic agency landing page built with pure HTML, CSS, and JavaScript. Focuses on storytelling, animations, portfolio popups, and testimonials for a high-impact brand presence.',
  },
  {
    id: '4',
    title: 'Wanderlust Journeys – Travel Landing Page',
    description: 'High-converting travel landing with destinations, itineraries, and pricing packages.',
    tech: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript'],
    image: '/images/wanderlust-journeys.png',
    github: 'https://github.com/aqsak-dev99/aqsa-web-design',
    live: 'https://aqsak-dev99.github.io/aqsa-web-design/',
    features: [
      'Fully responsive layout',
      'Carousel destination galleries',
      'Smooth scrolling',
      'Tiered travel packages',
      'SEO-optimized structure'
    ],
    fullDescription:
      'High-converting travel landing page built with HTML, CSS, and Bootstrap 5. Showcases destinations, itineraries, and pricing packages via modals and carousels, optimized for performance and conversions.',
  },
  {
    id: '5',
    title: 'Product Survey Form',
    description: 'Responsive, interactive survey form with validation, counters, and glassmorphism.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/images/product-survey-form.png',
    github: 'https://github.com/aqsak-dev99/ProductSurvey',
    live: 'https://aqsak-dev99.github.io/ProductSurvey/',
    features: [
      'Real-time validation and counters',
      'Keyboard accessibility',
      'Focus and hover feedback',
      'Glassmorphism design',
      'Mobile-friendly layout'
    ],
    fullDescription:
      'Responsive, interactive survey form built with HTML5, CSS3, and JavaScript. Includes real-time form validation, live character counters, and modern glassmorphic design for a professional feedback experience.',
  },
  {
    id: '6',
    title: 'CSV Cleaner Automation',
    description: 'Automatically cleans and standardizes CSV files using Python. ',
    tech: [ 'Python', 'Pandas'],
    image: '/images/3.jpg',
    github: 'https://github.com/aqsak-dev99/Csv-cleaner',
    live: 'https://github.com/aqsak-dev99/Csv-cleaner',
    features: [
      'CSV Cleaner: Cleans and standardizes CSV files',
      'Batch processing and local output',
      'Simple, dependency-free scripts for fast automation',
      'Removes duplicates and trims whitespace',
    ],
    fullDescription: 'Collection of lightweight Python scripts designed to automate common workflows for freelancers, developers, and small businesses. Includes CSV Cleaner for data standardization. Script feature batch processing capabilities and local output, with minimal dependencies for fast, reliable automation.',
  },
  {
    id: '7',
    title: 'File-organizer Automation Script',
    description: 'Automatically organizes files into categorized folders.',
    tech: ['Node.js',  'OS', 'File Management'],
    image: '/images/2.jpg',
    github: 'https://github.com/aqsak-dev99/file_organizer',
    live: 'https://github.com/aqsak-dev99/file_organizer',
    features: [  'Categorizes files by type',
    'Batch processing of entire directories',
    'Customizable file type mapping'],
  },
  {
    id: '8',
    title: 'Email-Generator Automation Script',
    description: 'Generates professional, template-driven emails automatically.',
    tech: ['Node.js', 'Docker', 'GitHub Actions'],
    image: '/images/1.jpg',
    github: 'https://github.com/aqsak-dev99/Email_generator',
    live: 'https://github.com/aqsak-dev99/Email_generator',
    features: ['Supports professional, friendly, and follow-up templates',
    'Auto-fills date, sender, recipient, and purpose',
    'Saves ready-to-send emails in output folder'],
  },
];

const site = {
  name: 'Aqsa Khan',
  title: 'Full Stack Developer | Automation & AI Integration Expert',
  bio: `Hi, I'm Aqsa Khan, a passionate full-stack developer and automation enthusiast dedicated to creating elegant, high-performing digital solutions. I blend modern web development with intelligent automation to help businesses and individuals save time, streamline workflows, and achieve their goals.

With hands-on experience in React, Node.js, MySQL, Python automation, and AI integration, I craft websites, apps, and tools that are not only functional but also visually engaging. My approach is grounded in clean code, responsive design, and seamless user experiences, ensuring every project I deliver is professional, efficient, and impactful.

When I'm not coding, I love exploring innovative tech solutions, experimenting with AI-powered tools, and continuously learning to stay ahead in the ever-evolving digital world.

Let's build something amazing together!`,

  skills,
  services,
  projects,
  gig: portfolioGig,
  certificates: [
    {
      id: 'c7',
      title: 'Responsive Web Design Certification',
      issuer: 'freeCodeCamp',
      date: '2025-08-22',
      hours: '~300 hours',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop',
      verifyLink: 'https://freecodecamp.org/certification/aqsa_khan/responsive-web-design'
    },
    {
      id: 'c8',
      title: 'Scientific Computing with Python Certification',
      issuer: 'freeCodeCamp',
      date: '2025-10-24',
      hours: '~300 hours',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop',
      verifyLink: 'https://freecodecamp.org/certification/aqsakhan_/scientific-computing-with-python-v7'
    },
  ],
  social: {
    github: 'https://github.com/aqsak-dev99',
    linkedin: 'https://www.linkedin.com/in/aqsa-khan',
    email: 'aqsa.dev99@gmail.com',
  },
};

module.exports = { site };