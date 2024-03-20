 "use client"
import Heimdallcmp from "@/ui/heimdallblock/heimdallcmp"
import Header from "@/ui/shared/Header";
import Footer from "@/ui/shared/footer";
import { Box, styled } from "@mui/material"

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '0rem 1.5rem',
  minHeight:'100vh',
  '@media(max-width : 600px)':{
      padding: '0rem 0.5rem', 
  }
}));

const Heimdall = () => {
    return (
      <StyledBox>
        <Header/>
        <Heimdallcmp/>
        <Footer/>
      </StyledBox>
    )
  }
  
export default Heimdall