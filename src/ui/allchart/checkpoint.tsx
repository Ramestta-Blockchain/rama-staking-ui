import { ColorModeContext } from "@/app/layout";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ReferenceLine, ResponsiveContainer, BarChart, Legend, Bar } from "recharts";

const data = [
    {
        "name": "14:30",
        "pv": 3
    },
    {
        "name": "16:30",
        "pv": 2.25
    },
    {
        "name": "18:30",
        "pv": 1.5
    },
    {
        "name": "20:30",
        "pv": 0.75
    },
    {
        "name": "22:30",
        "pv": 2.25
    },
    {
        "name": "20:30",
        "pv": 2
    },

]

const Checkpoint = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box width="100%" height="385px">
            <ResponsiveContainer>
                <BarChart data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
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
                    <Bar dataKey="pv" fill="#413268" radius={4} />
                    <ReferenceLine y={3} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={2.25} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={1.5} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={0.75} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                    <ReferenceLine y={0} stroke="#ffffff05" strokeWidth={2} stopOpacity={0.8} />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default Checkpoint;
