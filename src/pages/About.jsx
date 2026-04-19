import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, Eye, Users, Award, Sparkles, MessageCircle, 
  Heart, Zap, Globe, Rocket, BookOpen, Coffee, Landmark,
  ShieldCheck, GraduationCap
} from 'lucide-react';

export default function About() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsChatVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500 overflow-x-hidden font-sans">
      
      {/* 1. THE FLOATING ANIME GUIDE (RESIZED CAT) */}
      <div className="fixed bottom-4 right-4 z-[100] pointer-events-none">
        <AnimatePresence>
          {isChatVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              // Adjusted positioning for smaller cat
              className="absolute -top-24 -left-32 md:-left-40 pointer-events-auto"
            >
              <div className="bg-white text-black p-3 rounded-2xl rounded-br-none shadow-xl border-2 border-orange-500 relative">
                <p className="font-black text-[10px] md:text-xs leading-tight">
                  "Hii! Welcome to PU! ✨ <br/> 
                  <span className="text-orange-600">70,000+ students</span> <br/>
                  are here with us!"
                </p>
                <div className="absolute -bottom-2 right-0 w-4 h-4 bg-white border-r-2 border-b-2 border-orange-500 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.img 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1, y: [0, -10, 0] }}
          transition={{ 
            x: { type: "spring", stiffness: 50 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
          }}
          src="https://static.vecteezy.com/system/resources/previews/028/597/487/original/smiling-cute-cartoon-cat-file-no-background-ai-generated-png.png" 
          alt="Welcome Guide"
          // SMALLER SIZE APPLIED HERE
          className="w-[120px] md:w-[180px] drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]"
        />
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative h-screen flex items-center px-6 md:px-20">
        <div className="max-w-6xl z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-orange-500 font-black tracking-[0.5em] text-xs mb-4 block animate-pulse">
              INDIA'S YOUNGEST NAAC A++ UNIVERSITY
            </span>
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-8">
              BEYOND <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 italic">LIMITS.</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl font-medium leading-relaxed italic border-l-4 border-orange-500 pl-8">
              Parul University is more than a campus; it's a global village. 
              Ranked in the NIRF Top 50 for Innovation, we are the 
              epicenter of research, culture, and entrepreneurship in Gujarat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE STATS GRID */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<Globe size={24}/>} label="Nations" val="75+" color="border-orange-500" />
          <StatCard icon={<Users size={24}/>} label="Students" val="70k+" color="border-pink-500" />
          <StatCard icon={<Rocket size={24}/>} label="Startups" val="250+" color="border-blue-500" />
          <StatCard icon={<Award size={24}/>} label="Patents" val="425+" color="border-green-500" />
        </div>
      </section>

      {/* 4. WHY PU? (Detailed Info) */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-black uppercase italic tracking-tighter">
            The <span className="text-orange-500">Innovation</span> Hub
          </h2>
          <div className="space-y-6">
            <FeatureItem 
              icon={<ShieldCheck className="text-orange-500" />}
              title="NAAC A++ Accredited"
              text="The highest mark of quality education in India, ensuring your degree is globally recognized."
            />
            <FeatureItem 
              icon={<GraduationCap className="text-blue-400" />}
              title="200+ Global Tie-ups"
              text="Partnerships with top universities in the USA, UK, and Europe for student exchange programs."
            />
            <FeatureItem 
              icon={<Landmark className="text-pink-400" />}
              title="250 Acre Green Campus"
              text="A world-class infrastructure featuring smart labs, massive libraries, and luxury hostels."
            />
          </div>
        </div>
        <div className="relative group">
           <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-all" />
           <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" 
            className="relative z-10 rounded-[4rem] border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            alt="University Campus"
           />
        </div>
      </section>

      {/* 5. MISSION & VISION */}
      <section className="px-6 md:px-20 py-40 bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div whileHover={{ scale: 1.02 }} className="space-y-6 p-10 bg-[#0f0f0f] rounded-[3rem] border border-orange-500/20">
            <Target size={48} className="text-orange-500" />
            <h3 className="text-4xl font-black uppercase italic">Our Mission</h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              To provide a multidisciplinary environment for holistic growth, focusing on 
              research-driven education and preparing students for the challenges of Industry 4.0.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="space-y-6 p-10 bg-[#0f0f0f] rounded-[3rem] border border-pink-500/20">
            <Eye size={48} className="text-pink-500" />
            <h3 className="text-4xl font-black uppercase italic">Our Vision</h3>
            <p className="text-gray-400 text-xl leading-relaxed">
              To emerge as a global leader in higher education, fostering innovation that 
              contributes to the sustainable development of society and humanity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 text-center border-t border-white/5">
        <div className="flex justify-center gap-8 mb-8 opacity-50">
           <BookOpen size={20} />
           <Sparkles size={20} />
           <Coffee size={20} />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
          Parul University • Vadodara, Gujarat • Estd. 1993
        </p>
      </footer>

    </div>
  );
}

function StatCard({ icon, label, val, color }) {
  return (
    <div className={`bg-[#0f0f0f] p-8 rounded-[2.5rem] border-b-4 ${color} transition-all hover:-translate-y-2`}>
      <div className="mb-4 text-gray-400">{icon}</div>
      <div className="text-4xl font-black mb-1">{val}</div>
      <div className="text-[10px] font-black uppercase tracking-widest text-gray-600">{label}</div>
    </div>
  );
}

function FeatureItem({ icon, title, text }) {
  return (
    <div className="flex gap-6 group">
      <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-black uppercase mb-1">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}