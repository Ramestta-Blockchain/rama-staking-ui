import SubHeading from "@/theme/components/subHeading"
import { Box, Grid, Typography, styled, useTheme } from "@mui/material"
import Image from "next/image"
import stakegraphd from '../../icons/stakegraphd.svg'
import stakegraphl from '../../icons/stakegraphl.svg'
import { useContext } from "react"
import { ColorModeContext } from "@/app/layout"
import { headers } from "next/headers"
import { Height } from "@mui/icons-material"
import Headingcmp from "@/theme/components/headingcmp"
import ControllerTable from "../delegator/controllerTable"
import StakeTable from "./stakeTable"
import ShowTableDropdown from "@/theme/components/showTableDropdown"
import PaginationCustome from "@/theme/components/paginationCustome"
import TotalStake from "../allchart/totalStake"

const ImageGraph = styled(Box)(({ theme }) => ({
    marginTop:'2rem',
    'img':{
        width:'100%',
        height:'auto'
    }
}));

const StakeTabDetail=()=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <>
        <Box>
        <Typography variant="h6" color={'#922BC4'}mt={2}>Total staked</Typography>
        <Typography variant="h5">381,616,837 RAMA</Typography>
        <ImageGraph>
            {/* <Image src={theme.palette.mode === 'dark' ? stakegraphl:stakegraphd} alt={""}/> */}
            <TotalStake/>
        </ImageGraph>
        <Box mt={2}>
        <Headingcmp text={"Delegation history"}/>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'2rem'}}>
        <Grid container spacing={2}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
            <ShowTableDropdown/>
      
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
           
      
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
            
        <PaginationCustome/>
            </Grid>
        </Grid>
        </Box>

        <Box mt={2}>
        <StakeTable/>
        </Box>
        </Box>
        </Box>
        </>
    )
}

export default StakeTabDetail