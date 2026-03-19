import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BlurText from './ui/TextAnimations/BlurText/BlurText';
import LogoLoop from './ui/Animations/LogoLoop/LogoLoop';
import { Layout, Code, Database, Terminal, FileCode2, Command, Cpu, Hexagon, Component, Blocks } from 'lucide-react';

const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const levelColors: Record<string, string> = {
    'Experienced': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Intermediate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Beginner': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Learning': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };

  const progressColors: Record<string, string> = {
    'Experienced': 'bg-green-500',
    'Intermediate': 'bg-yellow-500',
    'Beginner': 'bg-orange-500',
    'Learning': 'bg-blue-500'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] group"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{skill.name}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColors[skill.level]}`}>
          {skill.level}
        </span>
      </div>
      <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
        <motion.div
          className={`h-full ${progressColors[skill.level]}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const frontend = [
    { name: 'HTML', level: 'Experienced', percent: 90 },
    { name: 'CSS', level: 'Experienced', percent: 85 },
    { name: 'JavaScript', level: 'Intermediate', percent: 70 },
    { name: 'React', level: 'Learning', percent: 40 },
    { name: 'Next.js', level: 'Learning', percent: 35 },
    { name: 'Tailwind CSS', level: 'Learning', percent: 50 },
  ];

  const backend = [
    { name: 'Java', level: 'Intermediate', percent: 60 },
    { name: 'Python', level: 'Intermediate', percent: 75 },
    { name: 'C', level: 'Intermediate', percent: 70 },
    { name: 'Node.js', level: 'Learning', percent: 40 },
    { name: 'Express.js', level: 'Learning', percent: 35 },
  ];

  const database = [
    { name: 'PostgreSQL', level: 'Learning', percent: 45 },
    { name: 'MongoDB', level: 'Learning', percent: 40 },
    { name: 'Firebase', level: 'Learning', percent: 45 },
    { name: 'Supabase', level: 'Learning', percent: 35 },
    { name: 'AWS', level: 'Learning', percent: 30 },
  ];

  const icons = [
    <Layout className="w-12 h-12 text-blue-500" />,
    <Code className="w-12 h-12 text-yellow-400" />,
    <FileCode2 className="w-12 h-12 text-orange-500" />,
    <Component className="w-12 h-12 text-cyan-400" />,
    <Terminal className="w-12 h-12 text-green-500" />,
    <Database className="w-12 h-12 text-indigo-400" />,
    <Cpu className="w-12 h-12 text-purple-500" />,
    <Hexagon className="w-12 h-12 text-sky-400" />,
    <Command className="w-12 h-12 text-gray-300" />,
    <Blocks className="w-12 h-12 text-blue-400" />
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-[#050505]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <BlurText
            text="My Tech Stack"
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary pb-2"
            delay={50}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-white/90 flex items-center">
              <span className="w-8 h-[2px] bg-primary mr-4"></span>
              Frontend
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {frontend.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-white/90 flex items-center">
              <span className="w-8 h-[2px] bg-accent mr-4"></span>
              Backend
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {backend.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-8 text-white/90 flex items-center">
              <span className="w-8 h-[2px] bg-cyan-400 mr-4"></span>
              Database & Cloud
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {database.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Logo Marquee */}
        <div className="w-full overflow-hidden relative border-y border-white/5 py-12 bg-black/20 backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

          <LogoLoop
            className="opacity-80"
            logos={icons.map((icon, idx) => ({
              node: (
                <div key={idx} className="mx-8 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                  {icon}
                </div>
              )
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
