"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SparklesText from "./magicui/sparkles-text";
import { Icons } from "./icons";
import { FaServer, FaWindows, FaShieldAlt, FaLaravel, FaPhp, FaJs, FaVuejs, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { SiVmware, SiRockylinux, SiNginx, SiMysql } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

const TechButton = ({ tech, icon: Icon, color }) => (
  <div className="inline-flex items-center bg-gray-700 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2">
    <Icon className={`mr-1 text-xl ${color}`} />
    <span className="ml-1">{tech}</span>
  </div>
);

const ExperienceItem = ({ date, title, subtitle, duties, technologies, index, isEducation, logo }) => {
  return (
    <motion.div
      className="mb-8 flex w-full justify-end"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div 
        className="w-5/6 p-6 bg-gray-800 rounded-lg shadow-lg relative ml-8"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center top-6 -left-5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          {isEducation ? <FaGraduationCap className="w-6 h-6 text-white" /> : <FaBriefcase className="w-6 h-6 text-white" />}
        </motion.div>
        <div className="flex items-center mb-4">
          {logo && (
            <div className="mr-4">
              <Image src={logo} alt={subtitle} width={50} height={50} className="rounded-full" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-blue-300 mb-1">{title}</h3>
            <h4 className="text-2xl font-extrabold text-white mb-1">{subtitle}</h4>
            <span className="text-sm font-bold text-gray-400">{date}</span>
          </div>
        </div>
        
        {!isEducation && (
          <>
            <h5 className="text-lg font-semibold text-blue-300 mt-4 mb-2">Main Duties:</h5>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
            
            <h5 className="text-lg font-semibold text-blue-300 mt-4 mb-2">Main Technologies:</h5>
            <div>
              {technologies.map((tech, index) => {
                let Icon, color;
                switch (tech) {
                  case "Web Development": Icon = BsGlobe; color = "text-blue-500"; break;
                  case "Server Management": Icon = FaServer; color = "text-green-500"; break;
                  case "VMware": Icon = SiVmware; color = "text-blue-400"; break;
                  case "Rocky Linux": Icon = SiRockylinux; color = "text-green-600"; break;
                  case "Windows Server": Icon = FaWindows; color = "text-blue-500"; break;
                  case "Information Security": Icon = FaShieldAlt; color = "text-yellow-500"; break;
                  case "Laravel": Icon = FaLaravel; color = "text-red-500"; break;
                  case "Nginx": Icon = SiNginx; color = "text-green-500"; break;
                  case "PHP": Icon = FaPhp; color = "text-purple-500"; break;
                  case "JavaScript": Icon = FaJs; color = "text-yellow-400"; break;
                  case "Vue.js": Icon = FaVuejs; color = "text-green-400"; break;
                  case "MySQL": Icon = SiMysql; color = "text-blue-600"; break;
                  default: Icon = Icons.nextjs; color = "text-white";
                }
                return <TechButton key={index} tech={tech} icon={Icon} color={color} />;
              })}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const experiences = [
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
        "Web Development", "Server Management", "VMware", "Rocky Linux", 
        "Windows Server", "Information Security", "Laravel", "Nginx", 
        "PHP", "JavaScript", "Vue.js", "MySQL"
      ],
      isEducation: false
    },
    {
      date: "September 2013 - January 2018",
      title: "Department of Computer Science and Information ",
      subtitle: "National University of Kaohsiung",
      isEducation: true
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4 min-h-screen">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SparklesText text="My Experience" />
      </motion.h2>
      {isMounted && (
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;