import { useEffect, useRef } from "react";
import * as d3 from "d3";

const CannaFieldMap = ({ blocksData, onBlockSelect }) => {
  const svgRef = useRef();

  useEffect(() => {
    // const width = 600;
    // const height = 600;
    const svg = d3.select(svgRef.current);

    // Clear previous content
    svg.selectAll("*").remove();

    // Create zoom behavior
    const zoom = d3.zoom().on("zoom", (event) => {
      svg.attr("transform", event.transform);
    });

    // Apply zoom behavior to the SVG
    d3.select(svgRef.current.parentNode).call(zoom);

    const g = svg.append("g").attr("class", "rects");

    g.append("style").text(`
        .rects {
          stroke: transparent;
          stroke-width: 2px;
        }
        .rects rect:hover {
          stroke: blue;
        }
    `);
    // Render blocks
    g.selectAll("rect")
      .data(blocksData)
      .enter()
      .append("rect")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("width", 29)
      .attr("height", 29)
      .attr("fill", (d) => {
        if (d.status === "solid") return "red";
        else if (d.isSelected) return "blue";
        else return "green";
      })
      // .attr("stroke", "#000")
      .on("mouseover", function () {
        d3.select(this).attr("opaciity", 0.5);
      })
      .on("mouseout", function () {
        d3.select(this).attr("opaciity", 1);
      })
      .on("click", (event, d) => {
        if (d.status !== "solid") onBlockSelect(d.id);
      });
  }, [blocksData, onBlockSelect]);
  return (
    <svg width="600" height="600">
      <g ref={svgRef}></g>
    </svg>
  );
};

export default CannaFieldMap;
