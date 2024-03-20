'use client'
import Faqscmp from "@/ui/faq/faqscmp"
import Header from "@/ui/shared/Header"
import Footer from "@/ui/shared/footer"
import { Box, styled, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../layout"

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight: '100vh',
    '@media(max-width : 600px)': {
        padding: '0rem 0.5rem',
    }
}));

const Faqs = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                <Header />
                <Faqscmp />
                <Footer />
            </StyledBox>
        </>
    )
}

export default Faqs