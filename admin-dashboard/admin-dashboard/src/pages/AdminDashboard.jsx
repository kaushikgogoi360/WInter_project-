import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StatsBar from '../components/StatsBar/StatsBar';
import RecentIssues from '../components/RecentIssues/RecentIssues';
import CategoryChart from '../components/CategoryChart/CategoryChart';
import StaffOverview from '../components/StaffOverview/StaffOverview';
import Alerts from '../components/Alerts/Alerts';

const AdminDashboard = () => {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-[#111214] text-[#e8eaed]">
      <Sidebar active={active} setActive={setActive} />

      <main className="flex-1 px-8 py-7 overflow-y-auto">

        {/* Top Bar */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-[17px] font-semibold text-[#e8eaed]">Admin Dashboard</h1>
          <span className="bg-[#1a1c1f] border border-[#2a2d32] rounded-full px-3 py-1 text-[12px] text-[#7a7f8a]">
            Mumbai Municipal Corp.
          </span>
        </div>

        {/* Stats Row */}
        <StatsBar />

        {/* Row 1: Recent Issues + Category Chart */}
        <div className="grid grid-cols-2 gap-3.5 mb-3.5">
          <RecentIssues />
          <CategoryChart />
        </div>

        {/* Row 2: Staff Overview + Alerts */}
        <div className="grid grid-cols-2 gap-3.5">
          <StaffOverview />
          <Alerts />
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;
