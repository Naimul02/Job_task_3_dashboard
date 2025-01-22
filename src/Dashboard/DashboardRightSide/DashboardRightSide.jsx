import React from 'react';
import Stat from './Stat/Stat';
import Charts from './Charts/Charts'
import SingleLineChart from './SingleLineChart/SingleLineChart';



const DashboardRightSide = () => {
    return (
        <div>
            

            <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col lg:flex-row items-center rounded-lg justify-between p-6 bg-green-200 w-full lg:w-[70%]">
                <div>
                    <h1 className="text-2xl font-bold">Welcome back 👋</h1>
                    <h1 className="text-2xl font-bold mt-2">Jaydon Frankie</h1>
                    <p className="mb-8 mt-6 text-lg">If you are going to use a passage of Lorem Ipsum , you need to be sure there isn't anything.</p>
                    <button className="btn btn-md text-white bg-green-500 hover:bg-green-600 border-none">Go Now</button>
                </div>
                <div>
                    <img src="https://i.ibb.co.com/1Mpbr9M/dashboard-removebg-preview-1.png"alt="dashboard img"/>
                </div>
            </div>
            <div className="bg-[url('https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg')] bg-no-repeat bg-center mt-3 lg:mt-0 h-[310px] bg-cover relative w-full lg:w-[30%] rounded-lg">
                <div className="space-y-1 absolute w-full bottom-0 bg-black opacity-80 rounded-lg">
                   <div className="px-3 py-2 rounded-lg ">
                   <h1 className="text-lg font-bold text-green-400">React App</h1>
                    <h2 className="text-lg font-bold text-white">Loring the Hidden  Des...</h2>
                    <p className="text-base-300">Told Oak tree stood tall and majestic. its branches...</p>
                   </div>
                </div>
            </div>
            </div>

            {/* Stat */}
            <Stat></Stat>
            {/* Charts */}
            
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-8">
            <Charts></Charts>
            <div className="shadow-lg w-full border rounded-lg py-3 px-3  mt-5">
            <SingleLineChart></SingleLineChart>
            </div>
            </div>

            
        </div>
    );
};

export default DashboardRightSide;