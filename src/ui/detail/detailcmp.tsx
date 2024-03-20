"use client"
import { useContext } from "react";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import DetailTab from "./detailTab";
import UserProfile from "./userProfile";
import { Box, styled, useTheme } from "@mui/material";
import { ColorModeContext } from "@/app/layout";


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));

const Detailcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                <Header />
                <UserProfile />
                <DetailTab />
                <Footer />
            </StyledBox>
        </>
    )
}
export default Detailcmp;