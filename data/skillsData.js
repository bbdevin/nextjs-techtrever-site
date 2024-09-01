import { FaJs, FaCss3Alt, FaHtml5, FaPhp, FaLaravel, FaDocker, FaPython, FaVuejs, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiNuxtdotjs, SiNextdotjs, SiTailwindcss, SiNginx, SiCentos } from 'react-icons/si';

export const skills = [
    {
        category: "Frontend Development",
        items: [
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
            { name: "HTML", icon: FaHtml5, color: "#E34F26" },
            { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
            { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        ]
    },
    {
        category: "Backend Development",
        items: [
            { name: "PHP", icon: FaPhp, color: "#777BB4" },
            { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
        ]
    },
    {
        category: "DevOps & Server Management",
        items: [
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "Linux", icon: FaLinux, color: "#FCC624" },
            { name: "CentOS", icon: SiCentos, color: "#262577" },
            { name: "Ubuntu", icon: FaUbuntu, color: "#E95420" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
        ]
    }
];

export const skillLevels = [
    { name: "HTML & CSS", level: 90 },
    { name: "Laravel", level: 80 },
    { name: "Nuxt.js", level: 35 },
    { name: "Next.js", level: 20 },
    { name: "JavaScript", level: 65 },
];