"use client" 
import Borcmp from "@/ui/bor/borcmp"
import Header from "@/ui/shared/Header"
import Footer from "@/ui/shared/footer"
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '0rem 1.5rem',
  minHeight:'100vh',
  '@media(max-width : 600px)':{
      padding: '0rem 0.5rem', 
  }
}));

const Bor = () => {
    return (
      <StyledBox>
 <Header/>
      <Borcmp/>
      <Footer/>
      </StyledBox>
     
    )
  }
  
export default Bor