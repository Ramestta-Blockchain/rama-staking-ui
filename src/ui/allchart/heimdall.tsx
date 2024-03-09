import { ColorModeContext } from "@/app/layout";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine, ResponsiveContainer, BarChart, Legend, Bar } from "recharts";

const data = [
    {
      name: '01 Feb',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '02 Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '02 Feb',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '04 Feb',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '05 Feb',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '06 Feb',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '07 Feb',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: '08 Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
  ];

const Heimdall = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box width="100%" height="385px">
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
          cursor={{ fill: 'none' }}
          contentStyle={{
              backgroundColor: theme.palette.primary.main,
              border: theme.palette.common.black,
              borderRadius: '6px'
          }}
           />
          {/* <Legend /> */}
          <Bar dataKey="pv" stackId="a" fill="#413268" />
          <Bar dataKey="uv" stackId="a" fill="#6E2043" radius={4}/>
          <ReferenceLine y={3} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={12000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={9000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={6000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={3000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={0} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
        </BarChart>
      </ResponsiveContainer>
        </Box>
    );
};

export default Heimdall;
