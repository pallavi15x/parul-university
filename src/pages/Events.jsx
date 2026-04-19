import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, Play, Volume2, X, Info, Calendar, Sparkles } from 'lucide-react';
import useSound from 'use-sound';

const CLICK_SND = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
const HOVER_SND = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';

const ALL_EVENTS = [
  { id: 1, title: "Dhoom Fest 2024", cat: "Culture", date: "Feb 15", desc: "The ultimate celebration of energy and talent.", vid: "f9oArj37AQw" },
  { id: 2, title: "Freshers ft. Darshan Raval", cat: "Social", date: "Sept 20", desc: "A soulful night with India's favorite heartthrob.", vid: "5ZJQR6Pf6nU" },
  { id: 3, title: "Freshers ft. Nora Fatehi", cat: "Social", date: "Sept 21", desc: "Electric dance moves and high-octane performance.", vid: "c_XHU50AwzQ" },
  { id: 4, title: "Seedhe Maut Live", cat: "Social", date: "Sept 22", desc: "Hard-hitting hip-hop in the heart of PU.", vid: "KFHCT7-mDvs" },
  { id: 5, title: "Navratri Garba Night", cat: "Culture", date: "Oct 10", desc: "World-famous Gujarati Garba experience.", vid: "XJS5CBTqVWY" },
  { id: 6, title: "Bishmil Ki Mehfil", cat: "Culture", date: "Nov 05", desc: "Sufi fusion that touches the soul.", vid: "CrB5sc3qMp4" },
  { id: 7, title: "Aditya Gadhvi Live", cat: "Culture", date: "Dec 12", desc: "The voice of Khalasi performing live.", vid: "Vds4dLDJkOY" },
  { id: 8, title: "MS Dhoni at PU", cat: "Social", date: "Past Event", desc: "Legendary captain Thala visiting our campus.", vid: "bke85tsfSi4" },
  { id: 9, title: "Placement Day Success", cat: "Tech", date: "June 05", desc: "Record-breaking career milestones.", vid: "43ZRny3Dd3E" },
  { id: 10, title: "Kite Festival", cat: "Social", date: "Jan 14", desc: "International kite flying extravaganza.", vid: "Z8QS82IqA3k" },
  { id: 11, title: "New Year Celebration", cat: "Social", date: "Jan 01", desc: "Ringing in the new year with grand fireworks.", vid: "0WycJoo-acw" },
  { id: 12, title: "Ganesh Chaturthi", cat: "Culture", date: "Sept 07", desc: "Welcoming Ganpati Bappa to the PU family.", vid: "3MdwAv-SZJ0" },
  { id: 13, title: "Holi - Festival of Colors", cat: "Culture", date: "March 25", desc: "The most colorful party on campus.", vid: "OTjqUyS8L8o" },
  { id: 14, title: "Manhar Seth Poetry", cat: "Culture", date: "Oct 30", desc: "Emotional storytelling and relatable rhymes.", vid: "2uzPOXc157Q" },
  { id: 15, title: "Projections Tech Fest", cat: "Tech", date: "March 15", desc: "Innovating the future with technology.", vid: "4u3NjDr5mzc" }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Events() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("All");
  const [selectedVid, setSelectedVid] = useState(null); 
  
  const [playClick] = useSound(CLICK_SND, { volume: 0.4 });
  const [playHover] = useSound(HOVER_SND, { volume: 0.15 });

  const filtered = ALL_EVENTS.filter(e => 
    (tab === "All" || e.cat === tab) && e.title.toLowerCase().includes(search.toLowerCase())
  );

  const openVideo = (vidId) => {
    playClick();
    setSelectedVid(vidId);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen bg-[#050505] text-white">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-white/10 pb-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="flex items-center gap-2 text-orange-500 mb-3">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.5em] uppercase opacity-80">Parul University Archives</span>
          </div>
          <h2 className="text-8xl font-black tracking-tighter uppercase leading-none">
            PU <span className="text-orange-500 italic drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">VIBES</span>
          </h2>
          
          {/* Glassmorphic Tabs */}
          <div className="flex gap-2 mt-10 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-fit">
            {["All", "Tech", "Culture", "Social"].map(t => (
              <button 
                key={t} 
                onClick={() => { playClick(); setTab(t); }} 
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  tab === t ? 'bg-orange-500 text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search the vibes..." 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:border-orange-500/50 outline-none transition-all font-bold placeholder:text-gray-700 backdrop-blur-sm"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* 2. THE STAGGERED GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((e) => (
          <motion.div 
            key={e.id}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-[#0f0f0f] rounded-[2.5rem] border border-white/5 overflow-hidden group cursor-pointer hover:border-orange-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-500"
            onClick={() => openVideo(e.vid)}
          >
            {/* Cinematic Thumbnail */}
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={`https://img.youtube.com/vi/${e.vid}/maxresdefault.jpg`} 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                alt={e.title}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
              
              {/* Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                  <Play fill="black" size={24} />
                </div>
              </div>

              {/* Tag */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">{e.cat}</span>
              </div>
            </div>

            <div className="p-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-orange-500 transition-colors duration-300">{e.title}</h3>
              </div>
              <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100">
                {e.desc}
              </p>
              
              <div className="flex items-center gap-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                <Calendar size={12} className="text-orange-500" />
                {e.date}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 3. FULL-SCREEN THEATER OVERLAY */}
      <AnimatePresence>
        {selectedVid && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black"
          >
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              {/* Professional Close UI */}
              <div className="absolute top-0 left-0 w-full p-10 flex justify-between items-start z-[110] bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-black">
                      <Volume2 size={24} />
                   </div>
                   <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-orange-500">Now Streaming</h4>
                      <p className="text-xl font-black uppercase">Official Footage</p>
                   </div>
                </div>
                
                <button 
                  onClick={() => setSelectedVid(null)}
                  className="p-5 bg-white/10 hover:bg-white hover:text-black rounded-full transition-all backdrop-blur-xl border border-white/10 active:scale-90"
                >
                  <X size={32} strokeWidth={3} />
                </button>
              </div>

              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVid}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title="PU Cinema"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-32 text-center">
        <div className="h-[1px] w-40 bg-white/10 mx-auto mb-8" />
        <p className="text-[11px] font-black uppercase tracking-[0.8em] text-gray-700 animate-pulse">Stay Connected • Parul University</p>
      </div>
    </div>
  );
}