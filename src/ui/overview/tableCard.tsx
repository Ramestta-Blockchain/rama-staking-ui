"use client"
import { Box, Divider, Grid, Typography, styled, useTheme } from "@mui/material";
 
import Image from "next/image";
import { useContext, useState } from "react";
import { TableCardList } from "@/data/tableCardList";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Delegators from "@/theme/components/delegators";
import tooltipd from '../../icons/tooltipd.svg'
import tooltipl from '../../icons/tooltipl.svg'
import HoverTool from "@/theme/components/hoverTool";
import { ColorModeContext } from "@/app/layout";


const StyledList = styled('li')(({ theme }) => ({
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0.4rem 0rem'
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '8px'
}));

const Typography_one = styled('p')(({ theme }) => ({
    backgroundColor: theme.palette.background.default, color: theme.palette.primary.contrastText, padding: '4px 10px', borderRadius: '20px', display: 'inline-block', fontSize: 14,
}));

const TableCard = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ marginTop: '1rem' }}>
                <Grid container spacing={2}>
                    {TableCardList.map((item, index) => (
                        <Grid key={index} item lg={3} md={6} sm={6} xs={12}>
                            <Box sx={{
                                backgroundColor: theme.palette.secondary.main,
                                padding: '1rem 1rem 2rem 1rem',
                                borderRadius:'12px'
                            }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Image src={item.profile} alt="" />
                                        <Typography color={theme.palette.primary.contrastText}>{item.profileName}</Typography>
                                    </Box>
                                    <Box>
                                        <Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box>
                                    </Box>
                                </Box>
                                <Divider sx={{
                                    border: theme.palette.common.black,
                                    margin: '1rem 0rem'
                                }} />

                                <Box component={'ul'}
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        listStyle: 'none'
                                    }}
                                >
                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>Total Staked <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.totalStake}</Typography> <Typography fontSize={14} sx={{ color: theme.palette.success.contrastText, backgroundColor: theme.palette.success.main, padding: '0.3rem 0.5rem', borderRadius: '20px', display: 'inline-block' }}>{item.totalStake2}</Typography></StyledBox>
                                    </StyledList>

                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>Delegators <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.delegator}</Typography> <Typography fontSize={14} sx={{ color: theme.palette.success.contrastText, backgroundColor: theme.palette.success.main, padding: '0.3rem 0.5rem', borderRadius: '20px', display: 'inline-block' }}>{item.delegator2}</Typography></StyledBox>
                                    </StyledList>

                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>Fee <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.fee}%</Typography> </StyledBox>
                                    </StyledList>

                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>APR <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.apr}%</Typography> </StyledBox>
                                    </StyledList>
                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>CP <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography_one >{item.cp}%</Typography_one></StyledBox>
                                    </StyledList>

                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>Heimdall <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography_one >{item.heimdall}%</Typography_one></StyledBox>
                                    </StyledList>
                                    <StyledList>
                                        <Typography fontSize={14} color={theme.palette.primary.contrastText}>Bor <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={item.Tooltip} /></Box></Typography>
                                        <StyledBox ><Typography_one >{item.bor}%</Typography_one></StyledBox>
                                    </StyledList>
                                </Box>

                            </Box>
                            <Box>
                                <Delegators ButtonText={'Delegate'} />
                            </Box>
                        </Grid>
                    ))}


                </Grid>
            </Box>
        </>
    )
}

export default TableCard;