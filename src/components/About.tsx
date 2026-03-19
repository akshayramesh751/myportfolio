import React from 'react';
import DotGrid from './ui/Backgrounds/DotGrid/DotGrid';
import TiltedCard from './ui/Components/TiltedCard/TiltedCard';
import GradientText from './ui/TextAnimations/GradientText/GradientText';
import AnimatedContent from './ui/Animations/AnimatedContent/AnimatedContent';
import SpotlightCard from './ui/Components/SpotlightCard/SpotlightCard';
import CountUp from './ui/TextAnimations/CountUp/CountUp';
import { GraduationCap } from 'lucide-react';
import profileImg from '../assets/259A7108.JPG';

const About: React.FC = () => {
  const funFacts = [
    "Bengaluru, India 🇮🇳",
    "Open to Work 🚀",
    "AI Explorer 🤖"
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <DotGrid />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Photo */}
          <div className="flex justify-center lg:justify-end relative">
            {/* Glowing violet border effect handled by container class or wrap */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-tr from-primary via-primary/50 to-accent w-full max-w-sm aspect-[4/5] shadow-[0_0_40px_rgba(124,58,237,0.3)]">
              <TiltedCard
                imageSrc={profileImg}
                altText="Akshay Ramesh Portrait"
              />
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="flex flex-col space-y-8">
            <div>
              <GradientText
                colors={["#7c3aed", "#06b6d4", "#7c3aed"]}
                animationSpeed={5}
                showBorder={false}
                className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-left"
              >
                About Me
              </GradientText>

              <AnimatedContent direction="vertical" distance={40} reverse={false}>
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm Akshay Ramesh, I’m passionate about building meaningful tech that solves real-world problems.
                  My interests lie in AI, software development, and creating intuitive user experiences.
                  I’m driven by curiosity and constantly exploring how things work under the hood.
                  Lately, I’ve been focused on improving problem-solving and building smarter systems.
                  Outside of tech, I’m into fitness, food, and understanding the “why” behind things.
                </p>
              </AnimatedContent>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatedContent direction="vertical" distance={40} delay={0.1}>
                <SpotlightCard className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full flex flex-col justify-center spotlight-card glow-on-hover">
                  <div className="text-4xl font-black text-primary mb-2 flex items-center">
                    <CountUp from={0} to={1} separator="," direction="up" duration={2} className="count-up-text" />
                    <span className="text-primary">+</span>
                  </div>
                  <p className="text-white/60 font-medium">Years Development Experience</p>
                </SpotlightCard>
              </AnimatedContent>

              <AnimatedContent direction="vertical" distance={40} delay={0.2}>
                <SpotlightCard className="bg-white/5 border border-white/10 p-6 rounded-2xl h-full flex flex-col justify-center spotlight-card glow-on-hover">
                  <GraduationCap className="w-10 h-10 text-accent mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">B.E. in AI & ML</h3>
                  <p className="text-white/60 font-medium">Pursuing Education</p>
                </SpotlightCard>
              </AnimatedContent>
            </div>

            {/* Fun Facts */}
            <AnimatedContent direction="vertical" distance={40} delay={0.3}>
              <div className="flex flex-wrap gap-3 mt-4">
                {funFacts.map((fact, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/20 hover:bg-primary/40 border border-primary/30 rounded-full text-sm font-medium text-white/90 transition-colors cursor-default"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </AnimatedContent>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
