import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Gadgets from "../../components/Gadget/Gadgets";
import VisualizationPanel from "../../components/VisualizationPanel/VisualizationPanel";

export default function MainPage() {
  const [selectedChart, setSelectedChart] = useState(null);
  const [onDrop, setOnDrop] = useState();
  const [refresh, setRefresh] = useState(true);

  return (
    <div className="App">
      <DragDropContext
        onDragEnd={(e) => {
          setOnDrop(e.destination.droppableId);
          setRefresh(!refresh);
        }}
      >
        <VisualizationPanel
          chartType={selectedChart}
          key={"panel1"}
          setSelectedChart={setSelectedChart}
          id="VisPan1"
          onDrop={onDrop}
          refresh={refresh}
        />
        <VisualizationPanel
          chartType={selectedChart}
          key={"panel2"}
          setSelectedChart={setSelectedChart}
          id="VisPan2"
          onDrop={onDrop}
          refresh={refresh}
        />
        <Gadgets
          style={{ float: "left" }}
          setSelectedChart={setSelectedChart}
        />
      </DragDropContext>
    </div>
  );
}
