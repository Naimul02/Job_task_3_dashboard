import React from 'react';
import DashboardLeftSide from './DashboardLeftSide/DashboardLeftSide';
import DashboardRightSide from './DashboardRightSide/DashboardRightSide';

const Dashboard = () => {
    return (
        <div className="mx-8 mt-10">
            <div className="flex flex-col lg:flex-row gap-6">

                <div className="lg:w-[15%] bg-base-100">
                <DashboardLeftSide></DashboardLeftSide>
                </div>
                <div className="lg:w-[85%]">
                <DashboardRightSide></DashboardRightSide>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;