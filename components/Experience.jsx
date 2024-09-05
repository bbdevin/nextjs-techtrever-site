"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ExperienceTitle from './experience/ExperienceTitle';
import ExperienceItem from './experience/ExperienceItem';
import { experiences } from '../data/experienceData';

const Experience = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sortedExperiences = [...experiences].sort((a, b) => new Date(b.date) - new Date(a.date));
  const awards = sortedExperiences.filter(exp => exp.isAward);
  const otherExperiences = sortedExperiences.filter(exp => !exp.isAward);

  return (
    <motion.div 
      ref={ref}
      className="container mx-auto px-4" // Modified to reduce padding
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExperienceTitle />
      {isMounted && (
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {awards.map((award, index) => (
                <ExperienceItem key={index} {...award} index={index} isLeft={true} />
              ))}
            </div>
            <div>
              {otherExperiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} index={index} isLeft={false} />
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Experience;