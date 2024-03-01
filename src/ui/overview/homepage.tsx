"use client"
import { Box, styled, useTheme } from "@mui/material";
import Header from "../shared/Header";
import HomeTab from "./homeTab";
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import HomeTable from "./homeTable";
import Footer from "../shared/footer";
 

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor:theme.palette.background.paper,
    padding:3
}));


export default function Homepage() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

     

    return (

        <>
            <StyledBox sx={{ backgroundColor: theme.palette.background.paper,}}>
                <Header />
                <HomeTab />
            </StyledBox>
        </>

    );
}
