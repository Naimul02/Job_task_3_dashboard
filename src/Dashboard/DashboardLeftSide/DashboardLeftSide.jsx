import React from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { BsBank2 } from 'react-icons/bs';
import { FaFileAlt, FaShoppingBag } from 'react-icons/fa';
import { IoMdAnalytics } from "react-icons/io";
import { TbBrandBooking } from 'react-icons/tb';


const DashboardLeftSide = () => {
    return (
        <div>
           <div>
            <img src="https://st2.depositphotos.com/5142301/7765/v/450/depositphotos_77650454-stock-illustration-n-letter-with-green-leaves.jpg"className="w-16 h-16 rounded-full" alt="" />
           </div>

           <h3 className="text-lg font-semibold text-slate-400 block lg:hidden">Overview</h3> 
           <div className="space-y-3 flex flex-wrap lg:flex-col gap-3 lg:gap-0 mt-2 lg:mt-4">
                    <h3 className="text-lg hidden lg:block  font-semibold text-slate-400">Overview</h3> 

                    <div className="flex items-center gap-3">
                    <AiOutlineAppstore className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">App</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    
                    <FaShoppingBag  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">E-Commerce</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <IoMdAnalytics   className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Analytics</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <BsBank2  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Banking</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <TbBrandBooking className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Booking</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">File</h4>
                    </div>
           </div>
           <h3 className="text-lg mt-4 font-semibold text-slate-400 block lg:hidden">Management</h3> 
           <div className="space-y-3 flex flex-wrap lg:flex-col gap-4 lg:gap-0 mt-2 lg:mt-4">
                    <h3 className="text-lg hidden lg:block  font-semibold text-slate-400">Management</h3> 

                    <div className="flex items-center gap-3">
                    <AiOutlineAppstore className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">User</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    
                    <FaShoppingBag  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Product</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <IoMdAnalytics   className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Order</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <BsBank2  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Invoice</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <TbBrandBooking className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Blog</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Job</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Tour</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">File</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Manager</h4>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaFileAlt  className="text-lg text-slate-500 font-semibold" />
                        <h4 className="font-semibold text-slate-500">Mail</h4>
                    </div>
           </div>

           
        </div>
    );
};

export default DashboardLeftSide;