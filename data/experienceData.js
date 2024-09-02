import { FaServer, FaWindows, FaShieldAlt, FaLaravel, FaPhp, FaJs, FaVuejs } from 'react-icons/fa';
import { SiVmware, SiRockylinux, SiNginx, SiMysql } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

export const experiences = [
    {
        date: "July 2018 - Present",
        title: "IT Specialist",
        subtitle: "Academia Sinica",
        duties: [
            "Developed the institute's official website",
            "Created reservation system, HR system, summer internship program website, and high school talent registration system",
            "Implemented information systems to streamline administrative processes",
            "Ensured secure development practices in compliance with information security requirements",
            "Provided multiple open-source tools to address internal needs",
            "Utilized VMware to set up Rocky Linux and Windows Server VMs"
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
        date: "September 2013 - January 2018",
        title: "Department of Computer Science and Information Engineering",
        subtitle: "National University of Kaohsiung",
        isEducation: true
    }
];