import React from 'react';
import { staffList } from '../../data/adminData';

const StaffOverview = () => (
  <div className="bg-[#1a1c1f] border border-[#2a2d32] rounded-xl p-5">
    <h2 className="text-[13px] font-semibold text-[#e8eaed] mb-3">Staff Overview</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-[#2a2d32]">
          {['Name', 'Zone', 'Open', 'Resolved'].map(h => (
            <th key={h} className="pb-2 text-left text-[11px] font-medium text-[#7a7f8a] tracking-wide">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {staffList.map((staff, i) => (
          <tr key={staff.name} className={i < staffList.length - 1 ? 'border-b border-[#1e2024]' : ''}>
            <td className="py-2.5 text-[12px] text-[#e8eaed] font-medium">{staff.name}</td>
            <td className="py-2.5 text-[12px] text-[#c4c8d0]">{staff.zone}</td>
            <td className="py-2.5 text-[12px] text-red-400 font-medium">{staff.open}</td>
            <td className="py-2.5 text-[12px] text-emerald-400 font-medium">{staff.resolved}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StaffOverview;
