import SubHeading from "@/theme/components/subHeading"
import { Box, Grid, Typography, styled, useTheme } from "@mui/material"
import Image from "next/image"
import stakegraphd from '../../icons/delegatorgraphd.svg'
import stakegraphl from '../../icons/delegatorgraphl.svg'
import { useContext } from "react"
import { ColorModeContext } from "@/app/layout"
import { headers } from "next/headers"
import { Height } from "@mui/icons-material"
import Headingcmp from "@/theme/components/headingcmp"
import ControllerTable from "../delegator/controllerTable"
import StakeTable from "./stakeTable"
import ShowTableDropdown from "@/theme/components/showTableDropdown"
import PaginationCustome from "@/theme/components/paginationCustome"
import DelegatorTable from "./delegatorTable"

const ImageGraph = styled(Box)(({ theme }) => ({
    'img':{
        width:'100%',
        height:'auto'
    }
}));

const DelegatorTableDetail=()=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <>
        <Box>
        <Typography variant="h6" color={'#922BC4'}mt={2}>Total delegators</Typography>
        <Typography variant="h5">130</Typography>
        <ImageGraph>
            <Image src={theme.palette.mode === 'dark' ? stakegraphl:stakegraphd} alt={""}/>
        </ImageGraph>
        <Box mt={2}>
        <Headingcmp text={"Delegators"}/>
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
         <DelegatorTable/>
        </Box>
        </Box>
        </Box>
        </>
    )
}

export default DelegatorTableDetail