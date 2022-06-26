import React, { useState } from "react";

import Gadgets from "../../components/Gadget/Gadgets";
import VisualizationPanel from "../../components/VisualizationPanel/VisualizationPanel";

export default function MainPage() {
  const [selectedChart, setSelectedChart] = useState(null);

  console.log(selectedChart);

  return (
    <div className="App">
      <VisualizationPanel
        chartType={selectedChart}
        key={"panel1"}
        setSelectedChart={setSelectedChart}
      />
      <VisualizationPanel
        chartType={selectedChart}
        key={"panel2"}
        setSelectedChart={setSelectedChart}
      />
      <Gadgets style={{ float: "left" }} setSelectedChart={setSelectedChart} />
    </div>
  );
}
