
import HoverTool from "@/theme/components/hoverTool";
import { Box, Grid, Typography, styled, useTheme } from "@mui/material";
import tooltipd from '../../icons/tooltipd.svg'
import tooltipl from '../../icons/tooltipl.svg'
import { ThemeContext } from "@emotion/react";
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";



const StyledBoxTwo = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '1rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    borderRadius: '8px',
}));

interface props{
    boxHeading:any;
    boxData:any;
    message:any;
    boxHeadingtwo:any;
    boxDatatwo:any;
    messagetwo:any;
}

const Checkpoint = ({boxHeading,boxData,message,boxHeadingtwo,boxDatatwo,messagetwo}:props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
                <Grid container spacing={2} mt={1}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <StyledBoxTwo>
                            <Box>
                                <Typography color={'#922BC4'}>{boxHeading}</Typography>
                                <Typography mt={1}>{boxData}</Typography>
                            </Box>
                            <Box>
                                <HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={message} />
                            </Box>
                        </StyledBoxTwo>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                    <StyledBoxTwo>
                            <Box>
                                <Typography color={'#922BC4'}>{boxHeadingtwo}</Typography>
                                <Typography mt={1}>{boxDatatwo}</Typography>
                            </Box>
                            <Box>
                                <HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={messagetwo} />
                            </Box>
                        </StyledBoxTwo>
                    </Grid>
                </Grid>
        </>
    )
}

export default Checkpoint;