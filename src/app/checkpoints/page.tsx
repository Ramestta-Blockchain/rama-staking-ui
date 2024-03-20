"use client"
import Checkpointcmp from "@/ui/checkpointcmp/checkpointcmp"
import Header from "@/ui/shared/Header";
import Footer from "@/ui/shared/footer";
import { Box, styled } from "@mui/material"

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '0rem 1.5rem',
  minHeight: '100vh',
  '@media(max-width : 600px)': {
    padding: '0rem 0.5rem',
  }
}));

const Checkpoint = () => {
  return (
    <StyledBox>
      <Header />
      <Checkpointcmp />
      <Footer />
    </StyledBox>
  )
}

export default Checkpoint