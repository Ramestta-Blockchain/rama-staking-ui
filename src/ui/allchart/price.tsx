import { ColorModeContext } from "@/app/layout";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine, ResponsiveContainer } from "recharts";

const data = [
    {
        "name": "17 Jan",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": "19 Jan",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "21 Jan",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "23 Jan",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "25 Jan",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "27 Jan",
        "uv": 2390,
        "pv": 3800,
        "amt": 2500
    },
    {
        "name": "30 Jan",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
];

const Price = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box width="100%" height="210px">
            <ResponsiveContainer>
                <AreaChart

                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                    contentStyle={{
                        backgroundColor: theme.palette.primary.main,
                        border: theme.palette.common.black,
                        borderRadius: '6px'
                    }}
                    />
                    <Area type="monotone" dataKey="pv" stroke="#7542FF" fill="#8659FF" />

                    <ReferenceLine y={10000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={7500} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={5000} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={2500} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                </AreaChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Price;
