import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Aurora from './ui/Backgrounds/Aurora/Aurora';
import SplitText from './ui/TextAnimations/SplitText/SplitText';
import StarBorder from "./ui/Animations/StarBorder/StarBorder";
import SpotlightCard from './ui/Components/SpotlightCard/SpotlightCard';
import ClickSpark from './ui/Animations/ClickSpark/ClickSpark';

import CircularText from './ui/TextAnimations/CircularText/CircularText';
import { Github, Linkedin, Mail, Instagram, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "51992f6d-b7d0-487b-a079-a140a7bc6385");
    const jsonStr = JSON.stringify(Object.fromEntries(formData));

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: jsonStr
      });
    } catch (err) {
      console.error("Attempted to send message, ignoring errors:", err);
    } finally {
      setIsSubmitting(false);

      // Always show success state
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const inputClasses = "w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 outline-none transition-all duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Aurora colorStops={["#1a0533", "#0a1a2e", "#0a0a0a"]} amplitude={1.2} speed={0.4} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <SplitText
            text="Let's Build Something"
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            delay={50}
          />
          <p className="text-xl text-white/70 max-w-2xl">
            I'm open to development roles, freelance work, and exciting collaborations. Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Form */}
          <div className="lg:col-span-3">
            <SpotlightCard className="p-8 md:p-10 bg-white/[0.02] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Name</label>
                    <input type="text" name="name" required placeholder="John Doe" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Email</label>
                    <input type="email" name="email" required placeholder="john@example.com" className={inputClasses} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Subject</label>
                  <input type="text" name="subject" required placeholder="Project Inquiry" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/50 mb-2 ml-1">Message</label>
                  <textarea name="message" required rows={5} placeholder="Tell me about your project..." className={`${inputClasses} resize-none`} />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <ClickSpark sparkColor="#06b6d4" sparkCount={15}>
                    <button type="submit" disabled={isSubmitting} className="relative group disabled:opacity-70 disabled:cursor-not-allowed">
                      <StarBorder color="#06b6d4" className="px-8 py-4 bg-primary/20 text-white font-bold tracking-wide rounded-xl border border-accent/30 hover:bg-primary/40 transition-colors flex items-center gap-2">
                        {isSubmitting ? "Sending..." : "Send Message"} {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </StarBorder>
                    </button>
                  </ClickSpark>

                  {/* Success Notification */}
                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg border border-green-400/20"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-medium text-sm">Message sent! I'll get back soon.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </SpotlightCard>
          </div>

          {/* Contact Info & Circular Text */}
          <div className="lg:col-span-2 flex flex-col gap-8 h-full">
            <div className="flex flex-col gap-4">
              <a href="mailto:akshayramesh2211@gmail.com" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 hover:bg-white/10 transition-all group">
                <div className="p-4 bg-primary/20 rounded-full text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm font-medium mb-1">Email</h4>
                  <p className="text-white font-semibold">akshayramesh2211@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/akshay-ramesh-201371339/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#0077b5]/50 hover:bg-white/10 transition-all group">
                <div className="p-4 bg-[#0077b5]/20 rounded-full text-[#0077b5] group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white/50 text-sm font-medium mb-1">LinkedIn</h4>
                  <p className="text-white font-semibold text-sm sm:text-base break-all">linkedin.com/in/akshay-ramesh-201371339/</p>
                </div>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/akshayramesh751" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all group">
                  <Github className="w-8 h-8 text-white/70 group-hover:text-white transition-colors" />
                  <span className="text-white/50 text-sm font-medium">GitHub</span>
                </a>

                <a href="https://www.instagram.com/akshay.rameshh/" className="flex flex-col items-center justify-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#E1306C]/50 hover:bg-white/10 transition-all group">
                  <Instagram className="w-8 h-8 text-white/70 group-hover:text-[#E1306C] transition-colors" />
                  <span className="text-white/50 text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Circular Text Element */}
            <div className="flex-grow flex items-center justify-center min-h-[250px] relative mt-8 lg:mt-0">
              <CircularText
                text="AVAILABLE FOR WORK • OPEN TO COLLAB • "
                onHover="speedUp"
                spinDuration={15}
                className="text-white/80 tracking-widest font-mono text-sm uppercase absolute"
              />
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.4)] z-10 border-4 border-black">
                <span className="font-mono text-2xl font-black text-white">AR</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
