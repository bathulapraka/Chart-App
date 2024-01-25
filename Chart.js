import React from "react";
import Chartbar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const datapointvalues=props.datapoints.map(datapoint=>datapoint.value);
    const totalmax=Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <Chartbar 
        key={datapoint.id}
        value={datapoint.value} 
        maxValue={totalmax}
        label={datapoint.label} 
        />
      ))}
    </div>
  );
};
export default Chart;
