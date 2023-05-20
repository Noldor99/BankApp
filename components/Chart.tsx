import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import moment from "moment";
import { Box } from "@mui/material";

const pdata = {
  purchases: [
    {
      id: 1,
      date: "2023-08-18",
      amount: 25.99,
      store: "ABC Store",
    },
    {
      id: 2,
      date: "2023-05-19",
      amount: 12.5,
      store: "XYZ Mart",
    },
    {
      id: 3,
      date: "2023-01-19",
      amount: 27,
      store: "Super Shop",
    },
    {
      id: 4,
      date: "2023-05-20",
      amount: 15.75,
      store: "Big Market",
    },
    {
      id: 5,
      date: "2023-05-21",
      amount: 18.99,
      store: "Discount Shop",
    },
    {
      id: 6,
      date: "2023-04-22",
      amount: 9.95,
      store: "Corner Store",
    },
    {
      id: 7,
      date: "2023-05-23",
      amount: 6.5,
      store: "Local Market",
    },
    {
      id: 8,
      date: "2023-05-24",
      amount: 11.25,
      store: "Mega Mart",
    },
    {
      id: 9,
      date: "2022-05-24",
      amount: 11.25,
      store: "Mega Mart",
    },
    {
      id: 10,
      date: "2022-11-24",
      amount: 11.25,
      store: "Mega Mart",
    },
  ],
};

const Chart = ({ selectedYear }: any) => {

  console.log(selectedYear)
  const aggregateDataByMonth = (data) => {
    const aggregatedData = {};

    data.forEach((purchase) => {
      const year = moment(purchase.date).format("YYYY");
      if (year === selectedYear) {
        const month = moment(purchase.date).format("YYYY-MM");
        if (aggregatedData[month]) {
          aggregatedData[month] += purchase.amount;
        } else {
          aggregatedData[month] = purchase.amount;
        }
      }
    });

    const formattedData = Object.keys(aggregatedData).map((month) => ({
      date: moment(month, "YYYY-MM").format("MMM YYYY"),
      amount: aggregatedData[month],
    }));

    return formattedData;
  };

  const formattedDataMonth = aggregateDataByMonth(pdata.purchases);



  const formatDate = (date) => {
    return moment(date).format("MMM");
  };

  const formattedData = formattedDataMonth.map((purchase) => {
    return {
      ...purchase,
      date: formatDate(purchase.date),
    };
  });

  const formatLabel = (value) => {
    return `$${value}`;
  };

  const getMaxAmount = () => {
    return Math.max(...formattedData.map((item) => item.amount));
  };



  return (
    <ResponsiveContainer width="100%" aspect={2} >

      <BarChart

        width={300}
        height={400}
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="date"
          axisLine={false} tickLine={false}
          tick={{ fontSize: 10 }}
          interval={0} // Відображення всіх значень місяців
        />
        <YAxis
          domain={[0, "dataMax+3"]}
          axisLine={false}
          tickLine={false}
          hide
        />
        <Tooltip />

        <Bar
          style={{ overflow: "visible" }}
          dataKey="amount"
          barSize={20}
          radius={[4, 4, 0, 0]}
          label={{
            position: "top",
            formatter: formatLabel,
          }}
        >
          {formattedData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.amount === getMaxAmount() ? "#FF0000" : "#8884d8"}
            />
          ))}
        </Bar>
      </BarChart>

    </ResponsiveContainer>
  );
};

export default Chart;
