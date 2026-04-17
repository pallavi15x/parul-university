import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, Calendar, MapPin, ArrowRight } from 'lucide-react';

const ALL_EVENTS = [
  { id: 1, title: "Projections '26", cat: "Tech", date: "April 25", venue: "Central Lawn", desc: "The ultimate technical fest.", size: "large" },
  { id: 2, title: "Dhoom Cultural", cat: "Culture", date: "May 12", venue: "Open Air Theatre", desc: "Night of music and dance.", size: "small" },
  { id: 3, title: "Startup Hunt", cat: "Business", date: "June 05", venue: "Auditorium-1", desc: "Pitch your ideas.", size: "small" },
  { id: 4, title: "Global Meet", cat: "Social", date: "July 10", venue: "International Hostel", desc: "Cultural food fest.", size: "medium" },
];

export default function Events() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("All");

  const filtered = ALL_EVENTS.filter(e => 
    (tab === "All" || e.cat === tab) && e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-6xl font-black tracking-tighter uppercase mb-2">COMMAND <span className="text-pu-gold">CENTER</span></h2>
          <div className="flex gap-4 mt-6">
            {["All", "Tech", "Culture", "Business"].map(t => (
              <button key={t} onClick={() => setTab(t)} className={`px-6 py-2 rounded-full text-xs font-bold transition ${tab === t ? 'bg-pu-gold text-black' : 'bg-white/5 text-gray-400'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" placeholder="Search fests..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-pu-gold outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {filtered.map((e, i) => (
          <motion.div key={i} layout className={`${e.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'} bg-pu-gray p-10 rounded-[2.5rem] border border-white/5 hover:border-pu-gold/30 transition-all group`}>
            <div className="flex justify-between mb-8"><Zap className="text-pu-gold" /> <span className="text-[10px] font-bold text-gray-500 uppercase">{e.cat}</span></div>
            <h3 className="text-3xl font-black mb-4 group-hover:text-pu-gold transition-colors">{e.title}</h3>
            <p className="text-gray-500 mb-6 text-sm">{e.desc}</p>
            <div className="flex justify-between items-center text-xs font-bold text-pu-gold">
               <span className="flex items-center gap-1"><Calendar size={14}/> {e.date}</span>
               <button className="p-3 bg-white/5 rounded-full group-hover:bg-pu-gold group-hover:text-black transition-all"><ArrowRight size={18}/></button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}