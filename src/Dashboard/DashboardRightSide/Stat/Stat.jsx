import React from 'react';
import { BiUpArrow } from "react-icons/bi";

const Stat = () => {
    return (
        <div className="mt-6">
            
            
            
        <div className="flex gap-5">
        <div className="stat  shadow-md border rounded-lg py-8">
    <div className="stat-figure text-primary">
      <img src="https://i.ibb.co.com/tMCxpp9/graph-Chart-removebg-preview.png"className="w-16 h-16" alt="" />
    </div>
    <div className="stat-title text-lg font-semibold">Total Active Users</div>
    <div className="stat-desc text-lg my-2 font-semibold flex items-center gap-3"><BiUpArrow className="text-green-500"/>+2.6%</div>
    <div className="stat-value">18,765</div>
  </div>

  <div className="stat  shadow-md border rounded-lg py-8">
    <div className="stat-figure text-secondary">
    <img src="https://i.ibb.co.com/tMCxpp9/graph-Chart-removebg-preview.png"className="w-16 h-16" alt="" />
    </div>
    <div className="stat-title text-lg font-semibold">Total Installed</div>
    
    <div className="stat-desc text-lg my-2 font-semibold flex items-center gap-3"><BiUpArrow className="text-green-500"/>+0.2%</div>
    <div className="stat-value">4,876</div>
  </div>

  <div className="stat  shadow-md border rounded-lg py-8">
    <div className="stat-figure text-secondary">
      
      <div className="stat-figure text-secondary">
    <img src="https://i.ibb.co.com/tMCxpp9/graph-Chart-removebg-preview.png"className="w-16 h-16" alt="" />
    </div>
      
    </div>
    
    <div className="stat-title text-lg font-semibold">Total Downloads</div>
    <div className="stat-desc text-lg my-2 font-semibold flex items-center gap-3"><BiUpArrow className="text-green-500"/>+0.1%</div>
    <div className="stat-value">678</div>
  </div>
        </div>

            </div>
        
    );
};

export default Stat;