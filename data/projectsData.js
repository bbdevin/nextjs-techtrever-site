import { FaReact, FaNodeJs, FaLaravel, FaVuejs, FaLinux, FaBootstrap, FaCentos, FaPython } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs, SiMysql, SiNginx, SiNuxtdotjs, SiFramer, SiVercel, SiLivewire, SiInertia, SiFlask, SiNetlify } from 'react-icons/si';

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
        title: "台股籌碼分點系統查詢",
        description: "採用前後端分離架構，打造出追蹤台股分點的系統。前端使用 Next.js 構建直觀的用戶界面，後端採用 Flask API 處理數據。系統能夠列出關鍵分點，幫助投資者更好地分析市場動向。",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
            { name: "Flask", icon: SiFlask, color: "#000000" },
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
        ],
        link: "https://stock.techtrever.site",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
        link: "",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        isPrivate: true
    },
    {
        title: "高中生培育計畫系統",
        description: "開發一個高中生培育計畫的報名系統及後台管理平台。系統每年處理300多名報名者，提供承辦人隨機考區配對功能，並能收集報名者匯票資料、設定筆試口試成績等。大幅提升了計畫管理效率和靈活性。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Livewire", icon: SiLivewire, color: "#fb70a9" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Rocky Linux", icon: FaLinux, color: "#10B981" },
        ],
        link: "",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        isPrivate: true
    },
    {
        title: "會議室及儀器預約系統",
        description: "開發一個直觀的會議室與儀器預約系統。使用者可以清楚地查看會議室和儀器在特定日期和時段的可用性。系統還實現了儀器使用量的配額限制，讓使用者能夠了解自己的預約配額。大大提高了資源管理效率和使用透明度。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Bootstrap 4", icon: FaBootstrap, color: "#7952B3" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Rocky Linux", icon: FaLinux, color: "#10B981" },
        ],
        link: "",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        isPrivate: true
    },
    {
        title: "所內內部系統",
        description: "開發一個安全可靠的所內內部系統，提供專屬於所內成員的資訊平台。系統整合了各項計畫資訊、行政文件管理，以及其他敏感數據，確保資訊的保密性和可訪問性。通過嚴格的權限控制，大大提升了所內資訊共享和管理效率。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Bootstrap 3", icon: FaBootstrap, color: "#7952B3" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "CentOS", icon: FaCentos, color: "#262577" },
        ],
        link: "",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
        isPrivate: true
    },
    {
        title: "PI 研究員徵才系統",
        description: "開發一個高效的研究員徵才報名系統，為承辦人提供便捷的報名者資料管理和匯出功能。系統優化了徵才流程，提高了資料處理效率，使人才篩選更加精準和便捷。",
        technologies: [
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38b2ac" },
            { name: "Livewire", icon: SiLivewire, color: "#fb70a9" },
            { name: "Rocky Linux", icon: FaLinux, color: "#10B981" },
            { name: "Inertia.js", icon: SiInertia, color: "#9553E9" },
        ],
        link: "",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        isPrivate: true
    }
];