import { FaReact, FaNodeJs, FaLaravel, FaVuejs } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export const projects = [
    {
        title: "專案管理系統",
        description: "為公司內部開發的專案管理工具，用於追蹤項目進度和資源分配。",
        technologies: [
            { name: "React", icon: FaReact, color: "#61dafb" },
            { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
            { name: "MongoDB", icon: SiMongodb, color: "#4db33d" },
        ],
        link: "https://project-management-tool.com",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        isPrivate: true
    },
    {
        title: "電子商務平台",
        description: "開發了一個全功能的電子商務網站，包括產品目錄、購物車和支付集成。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Vue.js", icon: FaVuejs, color: "#42b883" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        ],
        link: "https://ecommerce-platform.com",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        title: "個人作品集網站",
        description: "使用最新的 Web 技術構建的個人作品集網站，展示我的項目和技能。",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
        ],
        link: "https://my-portfolio.com",
        image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80"
    }
];