
"use client"
import { Box, Grid, Typography, useTheme, } from "@mui/material";
import PriceTab from "./priceTab";
import { priceList } from "@/data/priceList";
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";






export default function Price() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (


        <Box sx={{
            marginTop: '2rem',
        }}>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box sx={{ margin: '0', listStyle: 'none', backgroundColor: theme.palette.secondary.main, padding: '1.5rem 1.5rem 2rem 1.5rem', borderRadius: '12px' }} component={'ul'}>
                        {
                            priceList.map((item, index) => (
                                <Box key={index} sx={{ borderBottom: theme.palette.common.black, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0rem', color: theme.palette.primary.contrastText }} component={'li'}>
                                    <Typography>{item.Title}</Typography>
                                    <Typography>{item.data} {item.percentage && <Typography sx={{ color: theme.palette.success.contrastText, backgroundColor: theme.palette.success.main, padding: '0.4rem 1rem', borderRadius: '20px' }} component={'span'}>{item.percentage}</Typography>} </Typography>
                                </Box>
                            ))
                        }
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <PriceTab />
                </Grid>
            </Grid>
        </Box>

    );
}
