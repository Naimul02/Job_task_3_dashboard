import React from 'react';
import DashboardLeftSide from './DashboardLeftSide/DashboardLeftSide';
import DashboardRightSide from './DashboardRightSide/DashboardRightSide';

const Dashboard = () => {
    return (
        <div>
            <DashboardLeftSide></DashboardLeftSide>
            <DashboardRightSide></DashboardRightSide>
        </div>
    );
};

export default Dashboard;