import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <span className="text-pu-gold font-black uppercase tracking-[0.3em] text-[10px]">Legacy of Excellence</span>
        <h2 className="text-5xl font-black tracking-tighter mt-2 mb-6">SHAPING GLOBAL <br/> LEADERS SINCE 1993</h2>
        <div className="h-1 w-20 bg-pu-gold mb-10"></div>
        <p className="text-gray-400 text-xl leading-relaxed">
          Parul University represents a unique fusion of traditional Indian heritage with modern technological advancements. 
          As a NAAC A++ institution, we focus on research, entrepreneurship, and holistic development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
        <div className="bg-pu-gray p-10 rounded-[3rem] border border-white/5">
          <Target className="text-pu-gold mb-6" size={40} />
          <h3 className="text-2xl font-bold mb-4 italic">Our Mission</h3>
          <p className="text-gray-500 text-sm leading-relaxed">To provide quality education that empowers students to be innovative and ethically strong global citizens.</p>
        </div>
        <div className="bg-pu-gray p-10 rounded-[3rem] border border-white/5">
          <Eye className="text-pu-gold mb-6" size={40} />
          <h3 className="text-2xl font-bold mb-4 italic">Our Vision</h3>
          <p className="text-gray-500 text-sm leading-relaxed">To emerge as a world-class university recognized for excellence in research, teaching, and consultancy.</p>
        </div>
      </div>
    </div>
  );
}