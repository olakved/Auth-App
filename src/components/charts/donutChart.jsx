import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getRequest } from "../../utils/apiCalls";

function DonutChart() {
  const { data, loading, isError } = useQuery(["temp"], () =>
    getRequest({
      url: `http://localhost:3001/temperature`,
    })
  );

  const avgTemp = data?.data?.map((item) => item?.average_temp);
  const date = data?.data?.map((item) => item?.date);
  const label = data?.data?.map((item) => item?.id);

  // console.log(avgTemp);
  const donutData = {
    series: avgTemp,
    options: {
      labels: label,
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="">
      <Chart
        options={donutData?.options}
        series={donutData?.series}
        type="donut"
        width="250"
        height="auto"
      />
    </div>
  );
}

export default DonutChart;
