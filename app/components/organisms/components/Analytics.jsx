"use client";

import React from "react";
import DashboardCard from "../../molecules/Card/components/DashboardCard";
import CardHeading from "../../atoms/Text/components/CardHeading";

import { Chart } from "react-google-charts";

const data = [
  ["", ""],
  ["Done", 11],
  ["Progress", 2],
  ["ToDo", 2],
];

const Analytics = () => {
  return (
    <DashboardCard>
      <div>
        <CardHeading headingText="Analytics" />
      </div>
      <Chart chartType="PieChart" height="200px" data={data} />
    </DashboardCard>
  );
};

export default Analytics;
