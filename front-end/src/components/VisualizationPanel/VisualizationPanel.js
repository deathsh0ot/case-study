import React from "react";
import uploadIcon from "../../images/uploadIcon.png";
import "./VisualizationPanel.css";
import PieChart from "../charts/pieChart/PieChart";
import ColumnChart from "../charts/columnChart/ColumnChart";
import FunnelChart from "../charts/funnelChart/FunnelChart";

export default function VisualizationPanel({ chartType, setSelectedChart }) {
  const [type, setType] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);

  const displayChart = () => {
    if (chartType) {
      setType(chartType);
      setShowChart(true);
    }
    setSelectedChart(null);
  };
  const deleteChart = () => {
    setShowChart(false);
    setType(null);
  };
  return (
    <div className="graphPanel" onMouseUp={(e) => displayChart()}>
      {showChart ? (
        <>
          <button>expand</button>
          <button
            onClick={() => {
              deleteChart();
            }}
          >
            delete
          </button>
          {type == "line" ? (
            <ColumnChart />
          ) : type == "pie" ? (
            <PieChart />
          ) : type == "funnel" ? (
            <FunnelChart />
          ) : null}
        </>
      ) : (
        <>
          <img src={uploadIcon} alt="drop here" height={60} width={60} />
          <br />
          Drag a gadget to this column or <a href="/">add a new one</a>
        </>
      )}
    </div>
  );
}
