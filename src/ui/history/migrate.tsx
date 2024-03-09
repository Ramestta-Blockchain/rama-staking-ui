import { ColorModeContext } from "@/app/layout";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import ControllerTable from "../delegator/controllerTable";
import MigrateTable from "./migrateTable";

const Migrate = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
        <Box>
            <Headingcmp text={'Migrate your stake'}/>
            <Typography mt={2} variant="h6">Choose New Validator</Typography>
            <Typography>Migrate your stake to a new validator from RAMA Foundation Nodes.</Typography>
            <Grid container spacing={2} mt={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box
                    sx={{
                        backgroundColor:theme.palette.secondary.main,
                        textAlign:'center',
                        padding:'3rem 1rem',
                        borderRadius:'8px'
                    }}
                    >
                        <Typography variant="h4">1241.44 RAMA</Typography>
                        <Typography color={'#999'}>Stake to move</Typography>
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <Box
                    sx={{
                        backgroundColor:theme.palette.secondary.main,
                        textAlign:'center',
                        padding:'3rem 1rem',
                        borderRadius:'8px'
                    }}
                    >
                        <Typography variant="h4">0.00 RAMA</Typography>
                        <Typography color={'#999'}>Added Rewards to your wallet</Typography>
                    </Box>
                </Grid>
            </Grid>
            <ControllerTable/>
            <MigrateTable/>
        </Box>
        </>
    )
}

export default Migrate;