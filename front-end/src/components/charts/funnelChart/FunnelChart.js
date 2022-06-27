import React, { useState, useEffect } from "react";
import "./FunnelChart.css";
import axios from "axios";
import {
  FunnelChart as FunnelC,
  Funnel,
  LabelList,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function FunnelChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/data")
      .then((res) => {
        console.log(res);
        setData(
          res.data
            .map((e) => {
              return { ...e, fill: e.color };
            })
            .sort((a, b) => {
              return b.temperature - a.temperature;

              console.log("a", a);
              console.log("b", b);
            })
        );
      })
      .then(() => console.log("this ", data));
  }, []);

  return (
    <ResponsiveContainer width="80%" height="100%">
      <FunnelC>
        <Tooltip />
        <Funnel dataKey="temperature" data={data} isAnimationActive>
          <LabelList
            position="center"
            fill="#000"
            stroke="none"
            dataKey="time"
          />
        </Funnel>
      </FunnelC>
    </ResponsiveContainer>
  );
}
