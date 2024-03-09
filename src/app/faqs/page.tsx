'use client'
import Faqscmp from "@/ui/faq/faqscmp"
import Header from "@/ui/shared/Header"
import Footer from "@/ui/shared/footer"
import { Box, useTheme } from "@mui/material"
import { useContext } from "react"
import { ColorModeContext } from "../layout"

const Faqs = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, }}>
                <Header />
                <Faqscmp />
                <Footer />
            </Box>
        </>
    )
}

export default Faqs