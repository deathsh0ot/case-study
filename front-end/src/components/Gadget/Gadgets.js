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
      Add a Gadget
      <div>
        <br />
        <img
          src={pieChart}
          alt="pie"
          height={60}
          width={60}
          onMouseDown={(e) => select(e, "pie")}
        />
        Pie Chart
        <br />
        <button>Add</button>
      </div>
      <div>
        <img
          src={lineChart}
          alt="line"
          height={60}
          width={60}
          onMouseDown={(e) => select(e, "line")}
        />
        Line Chart <br />
        <button>Add</button>
      </div>
      <div>
        <img
          src={funnelChart}
          alt="funnel"
          height={60}
          width={60}
          onMouseDown={(e) => select(e, "funnel")}
        />
        Funnel Chart
        <br />
        <button>Add</button>
      </div>
    </div>
  );
}
