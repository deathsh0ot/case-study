import React, { useState } from "react";
import PieChart from "../charts/pieChart/PieChart";
import ColumnChart from "../charts/columnChart/ColumnChart";
import FunnelChart from "../charts/funnelChart/FunnelChart";
import uploadIcon from "../../images/uploadIcon.png";
import deleteIcon from "../../images/deleteIcon.png";
import expandIcon from "../../images/expandIcon.png";
import collapseIcon from "../../images/collapseIcon.png";
import "./VisualizationPanel.css";

export default function VisualizationPanel({ chartType, setSelectedChart }) {
  const [type, setType] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);
  const [expand, setExpand] = useState(false);

  // function for displaying the chart if the chartType variable isn't null
  const displayChart = () => {
    if (chartType) {
      setType(chartType);
      setShowChart(true);
    }
    setSelectedChart(null);
  };

  //function for deleting the displayed chart from the panel
  const deleteChart = () => {
    setShowChart(false);
    setType(null);
  };

  return (
    <div
      className={expand ? "expandedPanel" : "graphPanel"}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => displayChart()}
    >
      {showChart ? (
        <>
          <div className="utils">
            <button
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? (
                <img src={collapseIcon} alt="exit" height="20px" width="20px" />
              ) : (
                <img src={expandIcon} alt="expand" height="20px" width="20px" />
              )}
            </button>
            {!expand ? (
              <button
                onClick={() => {
                  deleteChart();
                }}
              >
                <img src={deleteIcon} alt="delete" height="20px" width="20px" />
              </button>
            ) : null}
          </div>
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
          <img
            src={uploadIcon}
            alt="drop here"
            height={60}
            width={60}
            className="uploadSpace"
          />
          <p>
            Drag a gadget to this column or <a href="/">add a new one</a>
          </p>
          <br />
        </>
      )}
    </div>
  );
}
