"use client"
import { Box, styled, useTheme } from "@mui/material"
import Header from "../shared/Header"
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import Overview from "@/theme/components/overview";
import Headingcmp from "@/theme/components/headingcmp";
import Footer from "../shared/footer";
import Checkpoint from "../checkpointcmp/checkpoint";
import BorTab from "./borTab";

const StyledBox = styled(Box)(({ theme }) => ({
     
    'h1':{
        '@media(max-width : 900px)':{
            textAlign:'left'
        }
    }

}));

const Borcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
         
            
            <StyledBox>
                <Overview text={'All RAMA validators'} href={'/'} />
                <Headingcmp text={'Bor Blocks'} />
                <Checkpoint
                    boxHeading={'BOR BLOCKS TOTAL'}
                    boxData={'53,009,734'}
                    message={'Total amount of checkpoints on the RAMA blockchain'}
                    boxHeadingtwo={'AVG BLOCK UTILIZATION 24H'}
                    boxDatatwo={'50.26%'}
                    messagetwo={'Elapsed time since the latest checkpoints'}
                />
                <Checkpoint
                    boxHeading={'BURNED FEES 24H'}
                    boxData={'27,465 RAMA'}
                    message={'Total amount of checkpoints on the RAMA blockchain'}
                    boxHeadingtwo={'AVG BLOCK INTERVAL 14D'}
                    boxDatatwo={'2.2759 sec'}
                    messagetwo={'Elapsed time since the latest checkpoints'}
                />
               <BorTab/>
                 
            </StyledBox>
            
        

    )
}

export default Borcmp