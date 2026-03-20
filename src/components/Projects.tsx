import React from 'react';
import GridDistortion from './ui/Backgrounds/GridDistortion/GridDistortion';
import SplitText from './ui/TextAnimations/SplitText/SplitText';
import AnimatedContent from './ui/Animations/AnimatedContent/AnimatedContent';
import StarBorder from './ui/Animations/StarBorder/StarBorder';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Sāṅkhya Academy",
    description: "A full-featured educational platform web app. Built responsive UI components and integrated dynamic content management.",
    tags: ["React", "Tailwind CSS", "TypeScript",],
    demoLink: "https://saankhya.academy/",
    githubLink: "https://github.com/akshayramesh751/Saankhyav2",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
    featured: true
  },
  {
    title: "Multiagent Pathfinding Simulator",
    description: "A Python-based multi-agent pathfinding simulation using Pygame. Implements algorithms for coordinating multiple agents in grid environments without collisions.",
    tags: ["Python", "Pygame", "Algorithms", "Simulation"],
    githubLink: "https://github.com/akshayramesh751/multiagent-pathfinding-simulator",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Finbuddy — AI ChatBot",
    description: "An AI-powered multilingual financial chatbot. Helps users across language barriers get financial guidance through natural language processing.",
    tags: ["TypeScript", "AI", "NLP", "React", "PostgreSQL"],
    githubLink: "https://github.com/akshayramesh751/finbuddy-chatbot",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1000&auto=format&fit=crop",
    projectType: "Web App"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <GridDistortion imageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <SplitText
            text="Featured Projects"
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            delay={80}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <AnimatedContent
              key={project.title}
              direction="vertical"
              distance={40}
              delay={idx * 0.15}
            >
              <div className="group relative h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-md">
                    Featured
                  </div>
                )}

                {/* Custom Image Area using TiltedCard if it takes props, else fallback. 
                    We will simulate standard tilt for the image container because TiltedCard 
                    usually expects specific props and we need a lot of custom overlays. */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    {project.demoLink ? (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-accent hover:text-white transition-colors">
                        View Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-white/70 font-medium">{project.projectType || "CLI / Backend Project"}</span>
                    )}
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <StarBorder color="#06b6d4" className="px-4 py-2 text-sm font-medium hover:text-white transition-colors bg-white/5 rounded-lg flex items-center gap-2">
                        <Github className="w-4 h-4" /> Source Code
                      </StarBorder>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
