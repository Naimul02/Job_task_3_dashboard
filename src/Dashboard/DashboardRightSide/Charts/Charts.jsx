import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

const Charts = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="shadow-lg mt-6 rounded-lg border w-[100%]  h-[300px] lg:w-[400px]">
      <h1 className="text-xl font-bold pl-6 pt-4">Current Download </h1>

      <div className="w-[100%]  h-[300px] lg:w-[400px]">

      <ResponsiveContainer className="w-[100%] h-[100%]">

      <PieChart  className="-mt-[90px]">
        <Pie
          data={data}
          cx={200} 
          cy={200} 
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
          
          <Label
            value="Total: 188,245"
            position="center"
            fontSize="16px" 
            fill="#333" 
          />
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
