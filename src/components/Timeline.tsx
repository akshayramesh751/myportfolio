import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Aurora from './ui/Backgrounds/Aurora/Aurora';
import GradientText from './ui/TextAnimations/GradientText/GradientText';

const timelineData = [

  {
    year: "2023",
    title: "Enrolled in B.E. AI & ML",
    description: "Began Bachelor's in Artificial Intelligence and Machine Learning. Discovered the intersection of code and intelligence."
  },
  {
    year: "2024",
    title: "Frontend Development Deep Dive",
    description: "Built multiple projects with HTML, CSS, JavaScript. Gained 1 year of practical frontend experience."
  },
  {
    year: "2025",
    title: "Built Sāṅkhya Academy",
    description: "Designed and developed a full educational web platform. First major project shipped."
  },
  {
    year: "2025",
    title: "Expanded into Python & AI",
    description: "Built Multiagent Pathfinding Simulator and Finbuddy AI Chatbot. Started exploring machine learning."
  },
  {
    year: "2026",
    title: "Now",
    description: "Actively seeking full-stack/AI related opportunities. Building in public and leveling up daily."
  }
];

const TimelineNode = ({ data, index }: { data: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full ${index === timelineData.length - 1 ? '' : 'mb-16 md:mb-24'}`}>

      {/* Connector Dot */}
      <div className="absolute left-[31px] sm:left-10 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:scale-125 transition-transform duration-300">
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>

      {/* Content Box */}
      <div className={`ml-20 sm:ml-24 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isEven ? -50 : 50, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/40 transition-colors relative overflow-hidden group-hover:bg-white/10"
        >
          {/* Subtle gradient glow inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-bold text-bg bg-accent rounded-full">{data.year}</span>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{data.title}</h3>
            <p className="text-white/70 leading-relaxed">{data.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-black transition-colors duration-1000 overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <Aurora colorStops={["#2e0c5e", "#03677a", "#000000"]} amplitude={0.5} speed={0.3} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <GradientText
            colors={["#06b6d4", "#7c3aed", "#06b6d4"]}
            animationSpeed={6}
            showBorder={false}
            className="text-4xl md:text-5xl font-extrabold pb-2"
          >
            My Journey
          </GradientText>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Track / Line */}
          <div className="absolute left-[31px] sm:left-10 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 md:w-1.5 bg-white/5 rounded-full overflow-hidden">
            {/* Animated drawing line */}
            <motion.div
              style={{ height: pathHeight }}
              className="w-full bg-gradient-to-b from-primary via-accent to-primary shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            />
          </div>

          <div className="flex flex-col">
            {timelineData.map((node, index) => (
              <TimelineNode key={index} data={node} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
