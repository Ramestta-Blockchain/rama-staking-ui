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
import RunningSummary from "./runningSummary"

const ImageGraph = styled(Box)(({ theme }) => ({
    'img':{
        width:'100%',
        height:'auto'
    }
}));

const CheckpointTable=()=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <>
        <Box>
            <RunningSummary/>
        </Box>
        </>
    )
}

export default CheckpointTable