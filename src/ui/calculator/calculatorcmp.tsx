
'use client'
import { Box, styled } from "@mui/material";
import Card from "../overview/card";
import Price from "../overview/price"
import Secure from "../overview/secure"
import Footer from "../shared/footer";
import Earningcalculate from "./earningcalculate";
import Header from "../shared/Header";
import Navbar from "../shared/navbar";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));

const Calculatorcmp = () => {
    return (
        <>
            <StyledBox>
                <Header/>
                <Navbar/>
                <Secure />
            <Price />
            <Card />
            <Earningcalculate/>
            <Footer/>
            </StyledBox>
        </>
    )
}

export default Calculatorcmp;