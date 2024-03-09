'use client'
import { ColorModeContext } from "@/app/layout"
import Faqscmp from "@/ui/faq/faqscmp"
import Header from "@/ui/shared/Header"
import Footer from "@/ui/shared/footer"
import { Box, useTheme } from "@mui/material"
import { useContext } from "react"
import BecomeSetup from "./becomeSetup"


const Becomeavalidatorcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, }}>
                <Header />
                <BecomeSetup />
                <Footer />
            </Box>
        </>
    )
}

export default Becomeavalidatorcmp;