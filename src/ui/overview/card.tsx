"use client"
import { Box, Grid, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
 
import { cardHome } from "@/data/cardHome";
import Image from "next/image";
import Link from "next/link";
import { ColorModeContext } from "@/app/layout";



export default function card() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (

        <>
            <Box sx={{ marginTop: '1rem' }}>
                <Grid container spacing={2}>
                    {cardHome.map((item, index) => (
                        <Grid key={index} item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{
                                backgroundColor: theme.palette.secondary.main,
                                padding: '1rem',
                                height: '100%',
                                borderRadius:'12px',
                            }}>
                                <Link href={'#'}
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        color: '#922BC4',
                                        fontSize: '15px'
                                    }} color={'#922BC4'}>{item.CardTitle}
                                    <Typography component={'span'}><Box component={'span'}><Image src={item.arrow && item.arrow} alt="" /></Box>
                                        <Tooltip placement="right-start" title="Annualized staking reward rate">
                                            <IconButton sx={{padding:'0'}}>
                                                <Image style={{marginLeft:'10px'}} src={theme.palette.mode === "dark" ? item.TooltipForLight : item.TooltipForDark} alt="" />
                                            </IconButton>
                                        </Tooltip> </Typography>
                                </Link>
                                <Typography variant="h6" color={theme.palette.primary.contrastText}>{item.CardData}</Typography>
                                <Typography color={theme.palette.primary.contrastText}>{item.CardSmall && item.CardSmall}</Typography>
                            </Box>
                        </Grid>
                    ))}


                </Grid>
            </Box>
        </>

    );
}
