
"use client"
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";
import History from "./history";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));


 



const Historycmp = () => {
    return (
        <>

            <StyledBox>
                 <Header/>
                 <Navbar/>
                 <History/>
                 <Footer/>
            </StyledBox>
        </>
    )
}

export default Historycmp;