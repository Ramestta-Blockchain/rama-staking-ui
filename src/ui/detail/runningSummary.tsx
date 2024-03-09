import { ColorModeContext } from "@/app/layout";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Grid, List, ListItem, Typography, styled, useTheme } from "@mui/material"
import { padding } from "@mui/system";
import { useContext } from "react";
import RunningSummaryTable from "./runningSummaryTable";
import CheckPTab from "./checkPTab";
import stats2d from '../../icons/stats2d.svg'
import stats2l from '../../icons/stats2l.svg'
import statsd from '../../icons/statsd.svg'
import statsl from '../../icons/statsl.svg'
import Checkpoint from "../allchart/checkpoint";


const RunningSummary = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <RunningSummaryTable text={'Checkpoints running summary'} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: '1rem', borderRadius: '8px' }}>
                            <CheckPTab
                                text={'Checkpoints performance stats'}
                                ImageOne={<Checkpoint/>}
                                ImageTwo={<Checkpoint/>}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default RunningSummary