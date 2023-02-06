import React, { useState } from "react";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransaction } from "../store/actions/transactions";

const ChartComponent = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "series-1",
        data: [],
      },
    ],
  });

  const transactionDetails = useSelector(
    (state) => state.getTransacion?.userInfo?.data.payload.transactions
  );
  console.log("transactionDetails", transactionDetails);

  const categories = {};
  if (transactionDetails?.length > 0) {

    transactionDetails.forEach(element => {
      element.transactionDetails.forEach(transaction => {
        if (categories[transaction.category]) {
          categories[transaction.category] += transaction.amount;
        } else {
          categories[transaction.category] = transaction.amount;
        }
      });
    });
    
  }
  const amounts = Object.values(categories);
const xaxisCategories = Object.keys(categories);
  useEffect(()=>{
  if (transactionDetails?.length) {
   
    setData({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [...new Set(xaxisCategories)],
        },
      },
      series: [
        {
          name: "series-1",
          data: amounts,
        },
      ],
    });
  }
}, [transactionDetails]);
  
  console.log("categories,amounts", categories, amounts);
  return (
    <div className="mixed-chart">
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="330"
      />
    </div>
  );
};

export default ChartComponent;
