import { Box, Stack, Typography } from "@pankod/refine-mui";
import React from "react";
import { PieChartProps } from "interfaces/home";
import ReactApexChart from "react-apexcharts";
const PieChart = ({ title, value, series, colors }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      alignItems="center"
      justifyContent="space-between"
      mt={1}
      pl={3}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack>
        <Typography fontSize={14} color="#808191" fontFamily="Manrope">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} fontFamily="Manrope">
          {value}
        </Typography>
      </Stack>
      <ReactApexChart
        options={{
          chart: {
            type: "donut",
          },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </Box>
  );
};

export default PieChart;
