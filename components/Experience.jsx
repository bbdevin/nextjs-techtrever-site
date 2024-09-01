"use client";
import { useState, useEffect } from 'react';
import ExperienceTitle from './experience/ExperienceTitle';
import ExperienceItem from './experience/ExperienceItem';
import { experiences } from '../data/experienceData';

const Experience = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container mx-auto py-12 sm:py-16 px-4">
      <ExperienceTitle />
      {isMounted && (
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experience;