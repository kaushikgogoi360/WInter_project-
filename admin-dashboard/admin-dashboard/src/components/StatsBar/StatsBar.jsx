import React from 'react';
import { stats } from '../../data/adminData';

const StatsBar = () => (
  <div className="grid grid-cols-4 gap-3 mb-5">
    {stats.map(stat => (
      <div
        key={stat.label}
        className="bg-[#1a1c1f] border border-[#2a2d32] rounded-xl px-4 py-3.5"
      >
        <p className="text-[11px] text-[#7a7f8a] mb-1.5">{stat.label}</p>
        <p className={`text-2xl font-bold leading-none ${stat.color}`}>{stat.value}</p>
        <p className="text-[11px] text-[#7a7f8a] mt-1">{stat.sub}</p>
      </div>
    ))}
  </div>
);

export default StatsBar;
