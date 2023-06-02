import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getRequest } from "../../utils/apiCalls";

function Barchart() {
  // const [date, setDate] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const url = "http://localhost:8000/temperature";
  //     try {
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       console.log(data);
  //       setAverageTemp(data?.map((item) => item.average_temp));
  //       setDate(data?.map((item) => item.date));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getData();
  // }, []);

  const { data, loading, isError } = useQuery(["temp"], () =>
    getRequest({
      url: `https://db-kappa-nine.vercel.app/temperature`,
    })
  );

  const avgTemp = data?.data?.map((item) => item.average_temp);
  const date = data?.data?.map((item) => item.date);

  // console.log(avgTemp);

  const series = [
    //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: avgTemp,
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: "",
      // categories: date,
    },
  };

  return (
    <div className="">
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
}

export default Barchart;
