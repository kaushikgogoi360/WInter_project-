import React from 'react';
import { categories } from '../../data/adminData';

const CategoryChart = () => (
  <div className="bg-[#1a1c1f] border border-[#2a2d32] rounded-xl p-5">
    <h2 className="text-[13px] font-semibold text-[#e8eaed] mb-4">Issues by Category</h2>
    <div className="flex flex-col gap-3">
      {categories.map(cat => (
        <div key={cat.label} className="flex items-center gap-2.5">
          <span className="text-[11px] text-[#7a7f8a] w-20 shrink-0">{cat.label}</span>
          <div className="flex-1 h-1.5 bg-[#222427] rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${cat.color}`}
              style={{ width: `${cat.pct}%` }}
            />
          </div>
          <span className="text-[11px] text-[#7a7f8a] w-7 text-right">{cat.pct}%</span>
        </div>
      ))}
    </div>
  </div>
);

export default CategoryChart;
