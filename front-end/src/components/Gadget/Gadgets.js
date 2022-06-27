import React from "react";
import pieChart from "../../images/pieChart.png";
import lineChart from "../../images/lineChart.png";
import funnelChart from "../../images/funnelChart.png";
import "./Gadgets.css";

export default function Gadgets({ setSelectedChart }) {
  const select = (e, type) => {
    e.preventDefault();
    setSelectedChart(type);
  };
  return (
    <div className="rightPanel" onMouseUp={() => setSelectedChart(null)}>
      <p>
        <b>Add a Gadget</b>
      </p>
      <div className="chart">
        <br />
        <img
          src={pieChart}
          alt="pie"
          height={70}
          width={"40%"}
          onDrag={(e) => select(e, "pie")}
        />
        <span style={{ marginLeft: "15px " }}>Pie Chart</span>
        <br />
        <button className="button">Add</button>
      </div>
      <div className="chart">
        <img
          src={lineChart}
          alt="line"
          height={60}
          width={"40%"}
          onDrag={(e) => select(e, "line")}
        />
        <span style={{ marginLeft: "15px " }}>Line Chart</span> <br />
        <button className="button">Add</button>
      </div>
      <div className="chart">
        <img
          src={funnelChart}
          alt="funnel"
          height={60}
          width={"40%"}
          onDrag={(e) => select(e, "funnel")}
        />
        <span style={{ marginLeft: "15px " }}>Funnel Chart</span>
        <br />
        <button className="button">Add</button>
      </div>
    </div>
  );
}
