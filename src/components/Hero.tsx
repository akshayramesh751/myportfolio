import React from 'react';


import Aurora from './ui/Backgrounds/Aurora/Aurora';
import LaserFlow from './ui/Animations/LaserFlow/LaserFlow';


import SplitText from './ui/TextAnimations/SplitText/SplitText';
import TextType from './ui/TextAnimations/TextType/TextType';
import BlurText from './ui/TextAnimations/BlurText/BlurText';
import StarBorder from './ui/Animations/StarBorder/StarBorder';

import ClickSpark from './ui/Animations/ClickSpark/ClickSpark';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <Aurora colorStops={["#7c3aed", "#06b6d4", "#0a0a0a"]} amplitude={1.0} speed={0.5} />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
        <LaserFlow />
      </div>


      {/* Main Content */}
      <div className="z-10 text-center flex flex-col items-center px-4 mt-16 max-w-4xl mx-auto">



        {/* Headline */}
        <p className="text-muted text-lg md:text-xl font-medium mb-2">Hello, I'm</p>
        <SplitText
          text="Akshay Ramesh"
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold text-text tracking-tight mb-4"
          delay={100}
        />

        {/* Dynamic Role */}
        <div className="h-12 mb-6 flex items-center justify-center">
          <TextType
            text={["Frontend Developer", "AI/ML Enthusiast", "Problem Solver", "React Developer"]}
            typingSpeed={50}
            pauseDuration={3000}
            className="text-2xl md:text-3xl font-mono text-accent"
          />
        </div>

        {/* Bio */}
        <BlurText
          text="Building responsive, high-performance web apps. Pursuing BE in AI & Machine Learning."
          className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 leading-relaxed"
          delay={50}
        />

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <div onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            <StarBorder color="#7c3aed" className="px-8 py-3 bg-primary/10 rounded-full text-white font-medium hover:bg-primary/20 transition-colors cursor-pointer border border-primary/20 backdrop-blur-sm">
              View My Work
            </StarBorder>
          </div>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-accent text-accent font-medium hover:bg-accent hover:text-bg transition-all duration-300">
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <ClickSpark sparkColor="#7c3aed" sparkCount={12}>
            <a href="https://github.com/akshayramesh751" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white/70 hover:text-white transition-colors border border-white/5 hover:border-primary/50">
              <Github className="w-5 h-5" />
            </a>
          </ClickSpark>
          <ClickSpark sparkColor="#7c3aed" sparkCount={12}>
            <a href="https://www.linkedin.com/in/akshay-ramesh-201371339/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white/70 hover:text-white transition-colors border border-white/5 hover:border-primary/50">
              <Linkedin className="w-5 h-5" />
            </a>
          </ClickSpark>
          <ClickSpark sparkColor="#7c3aed" sparkCount={12}>
            <a href="mailto:akshayramesh2211@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white/70 hover:text-white transition-colors border border-white/5 hover:border-primary/50" title="Email">
              <Mail className="w-5 h-5" />
            </a>
          </ClickSpark>
          <ClickSpark sparkColor="#7c3aed" sparkCount={12}>
            <a href="https://leetcode.com/u/B0YOIbQIlT/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white/70 hover:text-white transition-colors border border-white/5 hover:border-primary/50" title="LeetCode">
              <Code2 className="w-5 h-5" />
            </a>
          </ClickSpark>
        </div>

      </div>

    </section>
  );
};

export default Hero;
