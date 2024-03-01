"use client"
import { Box, useTheme } from "@mui/material"
import HomeTab from "../overview/homeTab"
import HomeTable from "../overview/homeTable"
import Header from "../shared/Header"
import Footer from "../shared/footer"
import { useContext } from "react"
import { ColorModeContext } from "@/app/layout"

const Validatorcomp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, }}>
                  {/* <Header />  */}
                  {/* <HomeTab />  */}
                 <HomeTable />  
                  <Footer />  
</Box>
        </>
    )
}

export default Validatorcomp