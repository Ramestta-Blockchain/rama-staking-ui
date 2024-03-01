"use client"
import { ColorModeContext } from "@/app/layout";
import { rewardEarning } from "@/data/rewardEarning"
import HoverTool from "@/theme/components/hoverTool";
import { Box, Typography, styled, useTheme } from "@mui/material"
import { useContext } from "react";
import tooltipl from '../../icons/tooltipl.svg'
import tooltipd from '../../icons/tooltipd.svg'
import Headingcmp from "@/theme/components/headingcmp";


const StyledBox = styled('h1')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '6px',
    fontSize: '44px',
    '@media(max-width : 900px)': {
        fontSize: '30px',
        '@media(max-width : 600px)': {
            fontSize: '24px',
        }
    }
}));


const Reward = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ margin: '0', listStyle: 'none', backgroundColor: theme.palette.secondary.main, padding: '1.5rem 1.5rem 2rem 1.5rem', borderRadius: '12px' }} component={'ul'}>

                {
                    rewardEarning.map((item, index) => (
                        <>
                            <Box component={'li'} sx={{'h1':{'@media(max-width : 900px)':{textAlign:'left'}}}}>
                                <Headingcmp  text={item.TopMainTitle} />
                                <StyledBox >  {item.TopTitle && item.TopTitle} {item.TopTitle &&  'RAMA' }</StyledBox>
                                <Typography>  {item.TopData && item.TopData}</Typography>
                            </Box>
                            <Box key={index} sx={{ borderBottom: theme.palette.common.black, padding: '0.3rem 0rem', color: theme.palette.primary.contrastText }} component={'li'}>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <Box>
                                        <Typography>{item.Title}%<Box component={'span'}> <HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={item.message} /></Box></Typography>
                                    </Box>
                                    <Box>
                                        <Typography>{item.data} RAMA</Typography>
                                        <Typography textAlign={'right'} color={'#999'} fontSize={13}>${item.data2}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    ))
                }
            </Box>
        </>
    )
}

export default Reward