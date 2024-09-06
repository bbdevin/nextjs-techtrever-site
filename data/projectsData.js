import { FaReact, FaNodeJs, FaLaravel, FaVuejs, FaLinux, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiMysql, SiNginx, SiNuxtdotjs, SiFramer, SiVercel } from 'react-icons/si';


export const projects = [
    {
        title: "個人作品集網站",
        description: "使用最新的 Web 技術構建的個人作品集網站，展示我的項目和技能。結合了現代設計和流暢的用戶體驗。",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
            { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
            { name: "Magic UI", icon: SiFramer, color: "#FF00FF" },
            { name: "Vercel", icon: SiVercel, color: "#000000" },
        ],
        link: "https://techtrever.site",
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80"
    },
    {
        title: "人員清冊系統",
        description: "開發權限管理的人員清冊系統，讓業務負責人可以管理自己負責業務的相關人員資訊。系統支持多種人員類型，用於所內人員資訊的清查和管理。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "Rocky Linux", icon: FaLinux, color: "#10B981" },
            { name: "Bootstrap 4", icon: FaBootstrap, color: "#7952B3" },
        ],
        link: "",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        isPrivate: true
    },
    {
        title: "大學生培育計畫",
        description: "開發一個大學生培育計畫的網站以及報名系統。承辦人可以使用後台進行師生配對，提高了計畫管理的效率和靈活性。",
        technologies: [
            { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
        ],
        link: "https://university-mentorship-program.com",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
];