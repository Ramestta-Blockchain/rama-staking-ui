"use client"
import { Box, styled, useTheme } from "@mui/material"
import HomeTable from "../overview/homeTable"
import Header from "../shared/Header"
import Footer from "../shared/footer"
import { useContext } from "react"
import { ColorModeContext } from "@/app/layout"
import Navbar from "../shared/navbar"


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));

const Validatorcomp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                <Header />
                <Navbar />
                <HomeTable />
                <Footer />
            </StyledBox>
        </>
    )
}

export default Validatorcomp