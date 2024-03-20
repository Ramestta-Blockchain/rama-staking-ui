"use client"
import { Box, styled, useTheme } from "@mui/material"
import Header from "../shared/Header"
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import Checkpoint from "./checkpoint";
import Overview from "@/theme/components/overview";
import Headingcmp from "@/theme/components/headingcmp";
import ControllerTable from "../delegator/controllerTable";
import CheckpointsTable from "./checkpointsTable";
import Footer from "../shared/footer";

const StyledBox = styled(Box)(({ theme }) => ({
    
    'h1':{
        '@media(max-width : 900px)':{
            textAlign:'left'
        }
    }
}));

const Checkpointcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
         
            <StyledBox>
                <Overview text={'All RAMA validators'} href={'/'} />
                <Headingcmp text={'Checkpoints'} />
                <Checkpoint
                    boxHeading={'CHECKPOINTS TOTAL'}
                    boxData={'57,224'}
                    message={'Total amount of checkpoints on the RAMA blockchain'}
                    boxHeadingtwo={'LATEST CHECKPOINT'}
                    boxDatatwo={'20 mins ago'}
                    messagetwo={'Elapsed time since the latest checkpoints'}
                />
                <ControllerTable/>
                <CheckpointsTable/>
            </StyledBox>
             

    )
}

export default Checkpointcmp