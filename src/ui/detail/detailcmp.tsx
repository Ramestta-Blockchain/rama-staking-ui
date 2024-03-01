"use client"
import { useContext } from "react";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import DetailTab from "./detailTab";
import UserProfile from "./userProfile";
import { Box, useTheme } from "@mui/material";
import { ColorModeContext } from "@/app/layout";


const Detailcmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{ backgroundColor: theme.palette.background.paper, }}>
                <Header />
                <UserProfile />
                <DetailTab />
                <Footer />
            </Box>
        </>
    )
}
export default Detailcmp;