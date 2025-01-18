import React from 'react';
import DashboardLeftSide from './DashboardLeftSide/DashboardLeftSide';
import DashboardRightSide from './DashboardRightSide/DashboardRightSide';

const Dashboard = () => {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row gap-6">

                <div className="lg:w-[20%] border">
                <DashboardLeftSide></DashboardLeftSide>
                </div>
                <div className="lg:w-[80%]">
                <DashboardRightSide></DashboardRightSide>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;