import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython,
  SiPostgresql,
  SiGit, SiGithub, SiVite,
} from 'react-icons/si'
import { SiC } from 'react-icons/si'

/* ── Navigation links ── */
export const NAV_LINKS = [
  { label: 'Home',    path: '/' },
  { label: 'About',   path: '/about' },
  { label: 'Contact', path: '/contact' },
]

/* ── Social links ── */
export const SOCIAL_LINKS = {
  github:   'https://github.com/abhi-shek77',
  linkedin: 'https://www.linkedin.com/in/abhishek-dhiman-0645a1246/',
  email:    'abhiattri27@gmail.com',
}

/* ── Skills, categorized ── */
export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5',      Icon: SiHtml5,      color: '#e34f26' },
      { name: 'CSS3',       Icon: SiCss,       color: '#264de4' },
      { name: 'JavaScript', Icon: SiJavascript,  color: '#f7df1e' },
      { name: 'React',      Icon: SiReact,       color: '#61dafb' },
      { name: 'Tailwind',   Icon: SiTailwindcss, color: '#38bdf8' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',  Icon: SiNodedotjs, color: '#68a063' },
      { name: 'Express',  Icon: SiExpress,   color: '#ebebeb' },
      { name: 'Python',   Icon: SiPython,    color: '#3572a5' },
      { name: 'C',        Icon: SiC,         color: '#a8b9cc' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git',    Icon: SiGit,    color: '#f05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ebebeb' },
      { name: 'Vite',   Icon: SiVite,   color: '#646cff' },
    ],
  },
]

/* ── Education ── */
export const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    short:  'MCA',
    school: 'Himachal Pradesh University',
    location: 'Shimla, H.P.',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short:  'BCA',
    school: 'Gautam College Hamirpur',
    location: 'Hamirpur, H.P.',
  },
]
