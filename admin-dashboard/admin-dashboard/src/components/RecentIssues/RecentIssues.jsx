import React from 'react';
import { recentIssues } from '../../data/adminData';

const statusStyles = {
  'Open':        'bg-red-500/15 text-red-400',
  'In Progress': 'bg-amber-400/10 text-amber-300',
  'Resolved':    'bg-emerald-500/10 text-emerald-400',
  'Escalated':   'bg-violet-400/15 text-violet-400',
};

const RecentIssues = () => (
  <div className="bg-[#1a1c1f] border border-[#2a2d32] rounded-xl p-5">
    <h2 className="text-[13px] font-semibold text-[#e8eaed] mb-3">Recent Issues</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-[#2a2d32]">
          {['#ID', 'Type · Area', 'Assigned', 'Status'].map(h => (
            <th key={h} className="pb-2 text-left text-[11px] font-medium text-[#7a7f8a] tracking-wide">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {recentIssues.map((issue, i) => (
          <tr key={issue.id} className={i < recentIssues.length - 1 ? 'border-b border-[#1e2024]' : ''}>
            <td className="py-2.5 text-[12px] text-[#4f8ef7] font-medium cursor-pointer hover:underline">
              {issue.id}
            </td>
            <td className="py-2.5 text-[12px] text-[#e8eaed]">
              {issue.type}
              <span className="text-[#7a7f8a]"> · {issue.area}</span>
            </td>
            <td className="py-2.5 text-[12px] text-[#c4c8d0]">{issue.assigned}</td>
            <td className="py-2.5">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${statusStyles[issue.status]}`}>
                {issue.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentIssues;
