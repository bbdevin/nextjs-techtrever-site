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
            { name: "Web Development", icon: BsGlobe, color: "text-blue-500" },
            { name: "Server Management", icon: FaServer, color: "text-green-500" },
            { name: "VMware", icon: SiVmware, color: "text-blue-400" },
            { name: "Rocky Linux", icon: SiRockylinux, color: "text-green-600" },
            { name: "Windows Server", icon: FaWindows, color: "text-blue-500" },
            { name: "Information Security", icon: FaShieldAlt, color: "text-yellow-500" },
            { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
            { name: "Nginx", icon: SiNginx, color: "text-green-500" },
            { name: "PHP", icon: FaPhp, color: "text-purple-500" },
            { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
            { name: "Vue.js", icon: FaVuejs, color: "text-green-400" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-600" }
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