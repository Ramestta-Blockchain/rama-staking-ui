import { ColorModeContext } from "@/app/layout";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Grid, List, ListItem, Typography, styled, useTheme } from "@mui/material"
import { padding } from "@mui/system";
import { useContext } from "react";
import RunningSummaryTable from "./runningSummaryTable";
import CheckPTab from "./checkPTab";
import heimdalld from '../../icons/heimdalld.svg'
import heimdalll from '../../icons/heimdalll.svg'
import heimdall2d from '../../icons/heimdall2d.svg'
import heimdall2l from '../../icons/heimdall2l.svg'
import Checkpoint from "../allchart/checkpoint";
import Heimdall from "../allchart/heimdall";


const HeimdallTab = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <RunningSummaryTable text={'Heimdall blocks running summary'} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: '1rem', borderRadius: '8px' }}>
                            <CheckPTab
                                text={'Heimdall blocks performance stats'}
                                ImageOne={<Heimdall/>}
                                ImageTwo={<Heimdall/>}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default HeimdallTab