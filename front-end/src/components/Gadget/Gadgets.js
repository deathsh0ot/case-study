import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import pieChart from "../../images/pieChart.png";
import lineChart from "../../images/lineChart.png";
import funnelChart from "../../images/funnelChart.png";
import "./Gadgets.css";

export default function Gadgets({ setSelectedChart }) {
  // function for setting the selected chart type
  const select = (e, type) => {
    //e.preventDefault();
    setSelectedChart(type);
  };

  return (
    <div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <Droppable
            droppableId="droppable-2"
            type="graph"
            className="menu__box"
          >
            {(provided, snapshot) => (
              <div
                className="rightPanel"
                ref={provided.innerRef}
                {...provided.droppableProps}
                onMouseUp={() => setSelectedChart(null)}
              >
                <p>
                  <b>Add a Gadget</b>
                </p>
                <Draggable
                  draggableId="draggable-1"
                  index={1}
                  className="menu__item"
                >
                  {(provided, snapshot) => (
                    <div
                      className="chart"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img
                        src={pieChart}
                        alt="pie"
                        height={70}
                        width={"40%"}
                        draggable="true"
                        onPointerDown={(e) => {
                          select(e, "pie");
                        }}
                      />
                      <span style={{ marginLeft: "15px " }}>Pie Chart</span>
                      <br />
                      <button className="button">Add</button>
                    </div>
                  )}
                </Draggable>
                <Draggable
                  draggableId="draggable-2"
                  index={2}
                  className="menu__item"
                >
                  {(provided, snapshot) => (
                    <div
                      className="chart"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img
                        src={lineChart}
                        alt="line"
                        height={60}
                        width={"40%"}
                        draggable="true"
                        onPointerDown={(e) => {
                          select(e, "line");
                        }}
                      />
                      <span style={{ marginLeft: "15px " }}>Line Chart</span>{" "}
                      <br />
                      <button className="button">Add</button>
                    </div>
                  )}
                </Draggable>
                <Draggable
                  draggableId="draggable-3"
                  index={3}
                  className="menu__item"
                >
                  {(provided, snapshot) => (
                    <div
                      className="chart"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img
                        src={funnelChart}
                        alt="funnel"
                        height={60}
                        width={"40%"}
                        draggable="true"
                        onPointerDown={(e) => {
                          select(e, "funnel");
                        }}
                      />
                      <span style={{ marginLeft: "15px " }}>Funnel Chart</span>
                      <br />
                      <button className="button">Add</button>
                    </div>
                  )}
                </Draggable>
              </div>
            )}
          </Droppable>
        </ul>
      </div>
    </div>
  );
}
