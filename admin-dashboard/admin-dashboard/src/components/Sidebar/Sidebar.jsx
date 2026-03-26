import React from 'react';

const navItems = [
  { id: 'dashboard',     icon: '📊', label: 'Dashboard' },
  { id: 'issues',        icon: '📋', label: 'All Issues' },
  { id: 'citizens',      icon: '👥', label: 'Citizens' },
  { id: 'staff',         icon: '🧑‍💼', label: 'Staff' },
  { id: 'map',           icon: '📍', label: 'Map View' },
  { id: 'announcements', icon: '📣', label: 'Announcements' },
  { id: 'settings',      icon: '⚙️',  label: 'Settings' },
];

const Sidebar = ({ active, setActive }) => (
  <aside className="w-[210px] min-h-screen bg-[#1a1c1f] border-r border-[#2a2d32] flex flex-col pt-7 shrink-0">
    <span className="px-5 pb-3 text-[10px] font-semibold tracking-widest uppercase text-[#7a7f8a]">
      Admin
    </span>
    <nav className="flex flex-col">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`flex items-center gap-2.5 px-5 py-[9px] text-[13px] text-left transition-all duration-150 border-l-2
            ${active === item.id
              ? 'text-[#e8eaed] bg-[#222427] border-[#4f8ef7] font-medium'
              : 'text-[#7a7f8a] border-transparent hover:text-[#e8eaed] hover:bg-[#222427]'
            }`}
        >
          <span className="w-[18px] text-center text-sm">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
