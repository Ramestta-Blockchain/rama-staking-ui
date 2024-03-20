"use client"
import { Box, styled, useTheme } from "@mui/material";
import Header from "../shared/Header";
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import HomeTable from "./homeTable";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Secure from "./secure";
import Price from './price';
import Card from "./card";



const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));


export default function Homepage() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();



    return (

        <>
            <StyledBox>
                <Header />
                <Navbar />
                <Secure />
                <Price />
                <Card />
                <HomeTable />
                <Footer />
            </StyledBox>
        </>

    );
}
