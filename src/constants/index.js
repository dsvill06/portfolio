import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  ld,
  next,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  vite,
  python,
  mongodb,
  komikult,
  leaderboard,
  LUL,
  math,
  signalx,
  personalwebsite,
  homecook,
  pwc,
  hc,
  fiverr,
  linkedin
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const order = [
  {
    name: "fiverr",
    image: fiverr,
    website: "https://www.fiverr.com/s/m1Zjbz",
  },
  {
    name: "linkedin",
    image:linkedin,
    website: "https://www.linkedin.com/in/dsvill06/"
  },
 
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Vite',
    icon: vite,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'App Tester',
    company_name: 'SignalX',
    icon: signalx,
    iconBg: '#333333',
    date: 'January 2022 - August 2022',
  },
  {
    title: 'DEI Intern',
    company_name: 'PWC',
    icon: pwc,
    iconBg: '#333333',
    date: 'May 2023 - July 2023',
  },
  {
    title: 'Software Testing Intern',
    company_name: 'LegionellaDossier',
    icon: ld,
    iconBg: '#333333',
    date: 'July 2023 - Oct 2023',
  },
  {
    title: 'FrontEnd Developer',
    company_name: 'HomeCook',
    icon: homecook,
    iconBg: '#333333',
    date: 'June 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Personal Website',
    description: 'A personal portfolio website I made to showcase my skills and resume using React.js hosted on Netlify, Node.js for mailing backend hosted on AWS lambda.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: personalwebsite,
    repo: 'https://github.com/dsvill06/personal_site',
    demo: 'https://davidvillavicencio.netlify.app',
  },
  {
    id: 'project-2',
    name: 'Fraternity Website',
    description:
      'My fraternity website for La Unidad Latina, Lambda Upsilon Lambda Fraternity Inc. that showcases the work we do on campus at the University of North Carolina at Chapel Hill.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'chat-gpt',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: LUL,
    repo: 'https://github.com/dsvill06/unclulwebsite',
    demo: 'https://unclul.netlify.app/',
  },
  {
    id: 'project-3',
    name: 'HomeCook App',
    description: 'An app developed for the startup HomeCook using React.js, TailwindCSS, Flask, and MongoDb',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: hc,
    repo: 'https://github.com/HomeCookApp',
    demo: 'https://homecook.space/',
  },
  
];

export { services, technologies, experiences, projects, order };
