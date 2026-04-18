import React, { useState } from 'react';
import { campusLandmarks } from '../data/campusData';

const CampusMap = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-5xl bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        {/* Background Map Image */}
        <img 
          src="https://paruluniversity.ac.in/app/uploads/2023/12/campus-map-optimized.jpg" 
          alt="Parul University Campus" 
          className="w-full h-auto object-cover opacity-90"
        />

        {/* Dynamic Interactive Pins */}
        {campusLandmarks.map((point) => (
          <div
            key={point.id}
            className="absolute group cursor-pointer z-20"
            style={{ top: point.top, left: point.left }}
            onClick={() => setSelected(point)}
          >
            {/* Pulsing Effect */}
            <div className="w-5 h-5 bg-orange-600 rounded-full animate-ping absolute"></div>
            <div className="w-5 h-5 bg-orange-600 rounded-full relative border-2 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
            
            {/* Label on Hover */}
            <div className="hidden group-hover:block absolute bottom-7 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded whitespace-nowrap">
              {point.name}
            </div>
          </div>
        ))}
      </div>

      {/* Info Card - Shows when a point is clicked */}
      {selected && (
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl max-w-2xl w-full flex flex-col md:flex-row gap-6 border-b-8 border-orange-500 animate-in fade-in slide-in-from-bottom-4">
          <img 
            src={selected.image} 
            alt={selected.name} 
            className="w-full md:w-48 h-48 object-cover rounded-xl shadow-md"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800">{selected.name}</h3>
            <p className="text-gray-600 mt-3 leading-relaxed">{selected.description}</p>
            <button 
              onClick={() => setSelected(null)}
              className="mt-5 text-sm font-bold text-orange-600 hover:text-orange-800 transition"
            >
              ← Back to Map
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusMap;