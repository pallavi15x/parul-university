import React from 'react';
import CampusMap from '../components/CampusMap';

const Campus = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Interactive Tour</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">
            The Heart of Parul University
          </h1>
          <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </header>

        <CampusMap />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm text-gray-500">
          <div>
            <p className="font-bold text-gray-800">150+ Acres</p>
            <p>Sprawling Green Campus</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">30+ Hostels</p>
            <p>Residential Community</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">100+ Cuisines</p>
            <p>At our Food Courts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;