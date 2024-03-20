'use client'
import { Box, styled } from "@mui/material"
import AccountDefault from "./accountDefault";
import Headingcmp from "@/theme/components/headingcmp";
import AccountAfterConnect from "./accountAfterConnect";
import ControllerTable from "../delegator/controllerTable";
import Header from "../shared/Header";
import Navbar from "../shared/navbar";
import Footer from "../shared/footer";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));

const Accountcmp = () => {
    return (
        <>
            <StyledBox>
                <Header />
                <Navbar />
                <Headingcmp text={'Your Account'} />
                <ControllerTable />
                <AccountDefault />
                {/* <AccountAfterConnect /> */}
                <Footer />
            </StyledBox>
        </>
    )
}

export default Accountcmp;