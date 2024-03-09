import { ColorModeContext } from "@/app/layout";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Grid, List, ListItem, Typography, styled, useTheme } from "@mui/material"
import { padding } from "@mui/system";
import { useContext } from "react";
import RunningSummaryTable from "./runningSummaryTable";
import CheckPTab from "./checkPTab";
import bor2d from '../../icons/bor2d.svg'
import bor2l from '../../icons/bor2l.svg'
import bord from '../../icons/bord.svg'
import borl from '../../icons/borl.svg'
import Checkpoint from "../allchart/checkpoint";
import Heimdall from "../allchart/heimdall";


const BorTab = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box mt={3}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <RunningSummaryTable text={'Bor blocks running summary'} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ backgroundColor: theme.palette.secondary.main, padding: '1rem', borderRadius: '8px' }}>
                            <CheckPTab
                                text={'Bor blocks performance stats'}
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
export default BorTab