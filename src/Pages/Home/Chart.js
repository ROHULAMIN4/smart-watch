import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    Apple: 4000,
    Rolex: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    Apple: 3000,
    Rolex: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    Apple: 2000,
    Rolex: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    Apple: 2780,
    Rolex: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    Apple: 1890,
    Rolex: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    Apple: 2390,
    Rolex: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    Apple: 3490,
    Rolex: 4300,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <div className="row" style={{ marginTop: "100px" }}>
      <div className="col-lg-4 col-md-12 col-sm-12">
        <LineChart
          width={350}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Apple"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Rolex" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
