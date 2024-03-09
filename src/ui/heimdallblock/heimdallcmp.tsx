"use client"
import { Box, styled, useTheme } from "@mui/material"
import Header from "../shared/Header"
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import Overview from "@/theme/components/overview";
import Headingcmp from "@/theme/components/headingcmp";
import ControllerTable from "../delegator/controllerTable";
import Footer from "../shared/footer";
import Checkpoint from "../checkpointcmp/checkpoint";
import HeimdallTable from "./heimdallTable";
import AllBlock from "./allBlock";

const StyledBox = styled(Box)(({ theme }) => ({
    padding: '0rem 1.5rem',
    'h1':{
        '@media(max-width : 900px)':{
            textAlign:'left'
        }
    }

}));

const Heimdallcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box sx={{ backgroundColor: theme.palette.background.paper, }}>
            <Header />
            <StyledBox>
                <Overview text={'All RAMA validators'} href={'/'} />
                <Headingcmp text={'Heimdall Blocks'} />
                <Checkpoint
                    boxHeading={'HEIMDALL BLOCKS TOTAL'}
                    boxData={'17,399,098'}
                    message={'Total amount of checkpoints on the RAMA blockchain'}
                    boxHeadingtwo={'AVG BLOCK INTERVAL 14D'}
                    boxDatatwo={'6.5600 secs'}
                    messagetwo={'Elapsed time since the latest checkpoints'}
                />
                <AllBlock/>
                <ControllerTable/>
                <HeimdallTable/>
            </StyledBox>
            <Footer/>
        </Box>

    )
}

export default Heimdallcmp