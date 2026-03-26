import React from 'react';
import { alerts } from '../../data/adminData';

const alertStyles = {
  warn: {
    wrapper: 'bg-amber-400/[0.06] border border-amber-400/20',
    icon: '⚠️',
    title: 'text-amber-300',
  },
  info: {
    wrapper: 'bg-blue-500/[0.06] border border-blue-500/20',
    icon: 'ℹ️',
    title: 'text-blue-400',
  },
};

const Alerts = () => (
  <div className="bg-[#1a1c1f] border border-[#2a2d32] rounded-xl p-5">
    <h2 className="text-[13px] font-semibold text-[#e8eaed] mb-3">Alerts</h2>
    <div className="flex flex-col gap-2.5">
      {alerts.map((alert, i) => {
        const s = alertStyles[alert.type];
        return (
          <div key={i} className={`flex items-start gap-2.5 px-3 py-2.5 rounded-lg ${s.wrapper}`}>
            <span className="text-sm mt-0.5 shrink-0">{s.icon}</span>
            <div>
              <p className={`text-[12px] font-semibold mb-0.5 ${s.title}`}>{alert.title}</p>
              <p className="text-[12px] text-[#c4c8d0] leading-snug">{alert.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Alerts;
