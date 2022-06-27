import React, { useState, useEffect } from "react";
import "./ColumnChart.css";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ColumnChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/data").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        width={500}
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
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
