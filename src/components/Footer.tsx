import React from 'react';
import LogoLoop from './ui/Animations/LogoLoop/LogoLoop';
import { Layout, Code, Database, Terminal, FileCode2, Command, Cpu, Hexagon, Component, Blocks } from 'lucide-react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const icons = [
    <Layout className="w-8 h-8 text-white/30" />,
    <Code className="w-8 h-8 text-white/30" />,
    <FileCode2 className="w-8 h-8 text-white/30" />,
    <Component className="w-8 h-8 text-white/30" />,
    <Terminal className="w-8 h-8 text-white/30" />,
    <Database className="w-8 h-8 text-white/30" />,
    <Cpu className="w-8 h-8 text-white/30" />,
    <Hexagon className="w-8 h-8 text-white/30" />,
    <Command className="w-8 h-8 text-white/30" />,
    <Blocks className="w-8 h-8 text-white/30" />
  ];

  return (
    <footer className="relative bg-[#050505] pt-12 overflow-hidden border-t border-white/5">
      {/* Decorative Separator */}
      <div className="w-full overflow-hidden relative pb-12 opacity-40">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

        <LogoLoop
          speed={1}
          logos={icons.map((icon, idx) => ({
            node: <div key={idx} className="mx-6">{icon}</div>
          }))}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8 border-t border-white/10 flex flex-col items-center">

        {/* Logo / Name */}
        <div className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl font-bold tracking-widest text-white">Akshay Ramesh</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-8">
          <a href="https://github.com/akshayramesh751" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white/50 hover:text-white transition-all shadow-[0_0_0_rgba(124,58,237,0)] hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/akshay-ramesh" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent/20 text-white/50 hover:text-white transition-all shadow-[0_0_0_rgba(6,182,212,0)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:akshayramesh751@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-green-500/20 text-white/50 hover:text-white transition-all shadow-[0_0_0_rgba(34,197,94,0)] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/akshay.rameshh/" className="p-3 bg-white/5 rounded-full hover:bg-pink-500/20 text-white/50 hover:text-white transition-all shadow-[0_0_0_rgba(236,72,153,0)] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-white/40 text-sm mb-2 font-mono">
          If you’ve come this far I love you 🫶
        </p>
        <p className="text-white/30 text-xs">
          © 2026 Akshay Ramesh. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
