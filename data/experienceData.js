import { FaServer, FaWindows, FaShieldAlt, FaLaravel, FaPhp, FaJs, FaVuejs, FaTrophy, FaMicrophone } from 'react-icons/fa';
import { SiVmware, SiRockylinux, SiNginx, SiMysql } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

export const experiences = [
    {
        date: "May 2024",
        title: "講者",
        subtitle: "國立高雄大學",
        description: "於資源教室職涯系列活動分享畢業校友經驗",
        isAward: true
    },
    {
        date: "January 2024",
        title: "承攬協辦與嘉獎",
        subtitle: "台灣植物學會",
        description: "協辦台日聯合研討會，獲中研院行政技術人員嘉獎",
        isAward: true
    },
    {
        date: "July 2018 - Present",
        title: "IT Specialist",
        subtitle: "Academia Sinica",
        duties: [
            "開發大學生培育計畫系統及師生配對系統，提升承辦人行政效率以及管理",
            "開發高中生培育計畫系統，每年服務300+參與者，簡化管理流程",
            "開發人員清冊系統，多位業務負責人使用，加速行政處理",
            "開發會議室及儀器設備預約系統，方便使用者預約管理",
            "建構及維護所內網站，提升對外形象",
            "開發所內內部系統，提供專屬於所內成員的資訊平台",

            "管理伺服器環境，確保系統穩定運行",
            "實施安全性開發，降低潛在風險",
            "定期進行漏洞掃描，減少安全事件",
            "提供開源報到及問卷系統，節省預算，提高管理效率",
            "曾協助維護健康長壽計畫網站",
            "曾協助維護植物學會及各個計畫網站",
        ],
        technologies: [
            { name: "Web Development", icon: BsGlobe, color: "#1e90ff" },
            { name: "Server Management", icon: FaServer, color: "#68a063" },
            { name: "VMware", icon: SiVmware, color: "#607078" },
            { name: "Rocky Linux", icon: SiRockylinux, color: "#10b981" },
            { name: "Windows Server", icon: FaWindows, color: "#00a4ef" },
            { name: "Information Security", icon: FaShieldAlt, color: "#ffd700" },
            { name: "Laravel", icon: FaLaravel, color: "#ff2d20" },
            { name: "Nginx", icon: SiNginx, color: "#009639" },
            { name: "PHP", icon: FaPhp, color: "#787cb5" },
            { name: "JavaScript", icon: FaJs, color: "#f0db4f" },
            { name: "Vue.js", icon: FaVuejs, color: "#42b883" },
            { name: "MySQL", icon: SiMysql, color: "#00758f" }
        ],
        isEducation: false
    },
    {
        date: "August 2022",
        title: "講者",
        subtitle: "臺北市勞動力重建運用處",
        description: "於「職涯經驗分享講座」分享個人經驗",
        isAward: true
    },
    {
        date: "November 2020",
        title: "專刊刊登",
        subtitle: "優秀身心障礙勞工專刊",
        description: "出版於109年度優秀身心障礙勞工專刊-英雄故事",
        isAward: true
    },
    {
        date: "November 2020",
        title: "優秀身心障礙勞工獎",
        subtitle: "台北市",
        description: "榮獲台北市109年度優秀身心障礙勞工獎",
        isAward: true
    },
    {
        date: "April 2020",
        title: "工作績優人員獎",
        subtitle: "中央研究院",
        description: "榮獲中研院工作績優人員獎",
        isAward: true
    },
    {
        date: "September 2013 - January 2018",
        title: "Department of Computer Science and Information Engineering",
        subtitle: "National University of Kaohsiung",
        isEducation: true
    }
];