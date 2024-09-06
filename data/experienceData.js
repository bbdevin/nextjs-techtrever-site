import { FaServer, FaWindows, FaShieldAlt, FaLaravel, FaPhp, FaJs, FaVuejs, FaTrophy, FaMicrophone } from 'react-icons/fa';
import { SiVmware, SiRockylinux, SiNginx, SiMysql } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

export const experiences = [
    {
        date: "2024.05",
        title: "講者",
        subtitle: "國立高雄大學",
        description: "於國立高雄大學資源教室職涯系列活動「畢業校友，經驗分享」講者",
        isAward: true
    },
    {
        date: "2024.01",
        title: "承攬協辦與嘉獎",
        subtitle: "台灣植物學會",
        description: "承攬協辦台灣植物學會-台日聯合研討會一職並榮獲中研院行政技術人員獎懲嘉獎一次",
        isAward: true
    },
    {
        date: "July 2018 - Present",
        title: "IT Specialist",
        subtitle: "Academia Sinica",
        duties: [
            
            "開發大學生培育計畫報名及師生配對系統",
            "開發高中生培育計畫報名及師生配對系統",
            "開發人員清冊系統，實現權限分配，使業務負責人能管理各類人員資訊",
            "建置及維護研究所官方網站和內部系統",
            "架設、維護和管理 Linux 伺服器環境、Windows Server 及虛擬機",
           
            "針對常見攻擊手法，進行系統和網站的安全性開發",
   
            "定期進行主機漏洞掃描、檢測和修補",
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
        date: "2022.08",
        title: "講者",
        subtitle: "臺北市勞動力重建運用處",
        description: "自律聯盟承辦臺北市勞動力重建運用處「職涯經驗分享講座」講者",
        isAward: true
    },
    {
        date: "2020.11",
        title: "專刊刊登",
        subtitle: "優秀身心障礙勞工專刊",
        description: "出版於109年度優秀身心障礙勞工專刊-英雄故事",
        isAward: true
    },
    {
        date: "2020.11",
        title: "優秀身心障礙勞工獎",
        subtitle: "台北市",
        description: "榮獲台北市109年度優秀身心障礙勞工獎",
        isAward: true
    },
    {
        date: "2020.04",
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