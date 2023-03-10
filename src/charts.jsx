import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { format } from "date-fns";
// import { CustomTooltip } from './components/CustomTooltip/CustomTooltip';

const data = [
  { date: "2022-01-01T04:00:00Z", offer: 0, vehicle: 50 },
  { date: "2022-02-01T04:00:00Z", offer: 20, vehicle: 33 },
  { date: "2022-03-01T04:00:00Z", offer: 40, vehicle: 80 },
  { date: "2022-04-01T04:00:00Z", offer: 53, vehicle: 58 },
  { date: "2022-05-01T04:00:00Z", offer: 63, vehicle: 18 },
  { date: "2022-06-01T04:00:00Z", offer: 53, vehicle: 28 },
  { date: "2022-07-01T04:00:00Z", offer: 63, vehicle: 38 },
  { date: "2022-08-01T04:00:00Z", offer: 43, vehicle: 88 },
  { date: "2022-09-01T04:00:00Z", offer: 53, vehicle: 58 },
  { date: "2022-10-01T04:00:00Z", offer: 63, vehicle: 68 },
  { date: "2022-11-01T04:00:00Z", offer: 53, vehicle: 78 },
  { date: "2022-12-01T04:00:00Z", offer: 55, vehicle: 28 },
];
const dataMobile = [
  { date: "2022-01-01T04:00:00Z", offer: 0, vehicle: 50 },
  { date: "2022-02-01T04:00:00Z", offer: 20, vehicle: 33 },
  { date: "2022-03-01T04:00:00Z", offer: 25, vehicle: 50 },
  { date: "2022-04-01T04:00:00Z", offer: 53, vehicle: 58 },
  { date: "2022-05-01T04:00:00Z", offer: 63, vehicle: 60 },
];

const initData = document.body.clientWidth < 700 ? dataMobile : data;

function Chart() {
  const graphData1 = initData;

  return (
    <div className="container">
      <div className="content">
        <h2 className="desktop">DeskTop view</h2>
        <div className="frame">
          <ResponsiveContainer width="100%" height={500}>
            <AreaChart
              data={graphData1}
              margin={{ top: 0, left: -30, right: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="firstColor" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="50%"
                    stopColor={CHART_COLORS.firstLineColor}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="100%"
                    stopColor={CHART_COLORS.firstLineColor}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="secondColor" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="50%"
                    stopColor={CHART_COLORS.secondLineColor}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="100%"
                    stopColor={CHART_COLORS.secondLineColor}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={CHART_COLORS.GridLine} strokeWidth={2} />

              <YAxis tick={AxisStyle} />

              <XAxis
                tick={AxisStyle}
                dataKey="date"
                tickLine={false}
                axisLine={true}
                tickFormatter={(str) => {
                  const date = new Date(str);
                  // debugger;
                  // console.log(date.getDate());
                  return format(date, "MMM yy");
                  // if (date.getDate() % 2 === 0) {
                  // }
                  // return '';
                }}
                // ticks={ticksData}
              />

              <Tooltip />
              {/* <Tooltip content={<CustomTooltip />} /> */}
              <Legend verticalAlign="top" height={36} />
              <Area
                type="monotone"
                dataKey="offer"
                strokeWidth={2}
                stroke={CHART_COLORS.firstLineColor}
                fillOpacity={0.2}
                fill="url(#firstColor)"
              />
              <Area
                type="monotone"
                dataKey="vehicle"
                strokeWidth={2}
                stroke={CHART_COLORS.secondLineColor}
                fillOpacity={0.2}
                fill="url(#secondColor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <h2 className="desktop">Phone view</h2>
        <div className="player desktop">
          <p>hna videoooo</p>
        </div>
      </div>
    </div>
  );
}

export default Chart;

export const CHART_COLORS = {
  firstLineColor: "#0BCBFB",
  secondLineColor: "#644AF3",
  GridLine: "#EDF2F8",
  AxisText: "#6D7988",
};
const AxisStyle = {
  fill: CHART_COLORS.AxisText,
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "14px",
};
