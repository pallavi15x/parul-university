import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-pu-dark pb-20 selection:bg-pu-gold selection:text-black">
      
      {/* 1. HEADER SECTION */}
      <section className="pt-32 px-6 max-w-7xl mx-auto text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <span className="text-pu-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
            Institutional Legacy
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase text-white leading-none">
            GLOBAL <span className="text-pu-gold italic">EXCELLENCE</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            Parul University is a <b className="text-white">NAAC A++</b> accredited institution located in Vadodara, Gujarat. 
            We provide a holistic educational experience that combines academic rigor with 
            unmatched industry exposure.
          </p>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION CARDS */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-pu-gray/30 p-12 rounded-[3rem] border border-white/5 hover:border-pu-gold/20 transition-all group"
        >
          <Target className="text-pu-gold mb-6 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-3xl font-black mb-4 italic uppercase text-white">Our Mission</h3>
          <p className="text-gray-500 leading-relaxed italic text-lg">
            "To provide quality education that empowers students to be innovative, 
            socially responsible, and ethically strong global citizens."
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="bg-pu-gray/30 p-12 rounded-[3rem] border border-white/5 hover:border-pu-gold/20 transition-all group"
        >
          <Eye className="text-pu-gold mb-6 group-hover:scale-110 transition-transform" size={48} />
          <h3 className="text-3xl font-black mb-4 italic uppercase text-white">Our Vision</h3>
          <p className="text-gray-500 leading-relaxed italic text-lg">
            "To emerge as a world-class university recognized for excellence in research, 
            teaching, and consultancy on a global stage."
          </p>
        </motion.div>
      </section>

      {/* 3. UNIVERSITY LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic mb-16 text-center text-white">
          University <span className="text-pu-gold">Leadership</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <LeaderCard 
            name="Dr. Devanshu Patel" 
            role="President" 
            desc="The visionary force driving Parul University's growth into a premier global educational hub."
          />
          <LeaderCard 
            name="Dr. Amit Ganatra" 
            role="Vice Chancellor" 
            desc="Leading academic innovation and research excellence across all 450+ courses."
          />
        </div>
      </section>

      {/* 4. ACADEMIC HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-pu-gold p-12 rounded-[4rem] text-black flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black uppercase italic mb-4">Innovation & Research</h2>
            <p className="font-bold text-lg opacity-80">
              With 150+ acres of campus and students from 75+ nations, we are building 
              the future of education right here in Gujarat.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-black text-white p-6 rounded-3xl text-center min-w-[120px]">
              <div className="text-3xl font-black">2500+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest">Placements</div>
            </div>
            <div className="bg-black text-white p-6 rounded-3xl text-center min-w-[120px]">
              <div className="text-3xl font-black">700+</div>
              <div className="text-[10px] uppercase font-bold tracking-widest">Patents</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

{/* HELPER COMPONENT FOR LEADERS */}
function LeaderCard({ name, role, desc }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center bg-pu-gray/20 p-8 rounded-[3rem] border border-white/5 hover:bg-pu-gray/30 transition-all shadow-xl">
      <div className="w-32 h-32 bg-pu-gray rounded-[2rem] flex items-center justify-center border border-white/10 shrink-0">
        <Users size={40} className="text-pu-gold/20" />
      </div>
      <div>
        <h4 className="font-black text-2xl text-white mb-1 uppercase tracking-tight">{name}</h4>
        <p className="text-pu-gold text-[10px] font-black uppercase tracking-widest mb-3">{role}</p>
        <p className="text-gray-500 text-sm italic leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}