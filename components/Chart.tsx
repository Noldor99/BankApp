import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import moment from "moment";
import { pdata } from "../data/pdata";

interface Purchase {
  date: string;
  amount: number;
}

interface AggregatedData {
  date: string;
  amount: number;
}

interface Props {
  selectedYear: string;
}

const Chart: React.FC<Props> = ({ selectedYear }) => {
  const aggregateDataByMonth = (data: Purchase[]): AggregatedData[] => {
    const aggregatedData: { [month: string]: number } = {};

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

  const formatDate = (date: string) => {
    return moment(date).format("MMM");
  };

  const formattedData = formattedDataMonth.map((purchase) => {
    return {
      ...purchase,
      date: formatDate(purchase.date),
    };
  });

  const formatLabel = (value: number) => {
    return `$${value}`;
  };

  const getMaxAmount = () => {
    return Math.max(...formattedData.map((item) => item.amount));
  };

  return (
    <ResponsiveContainer width="100%" aspect={2}>
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
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
          interval={0} // Display all month values
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
