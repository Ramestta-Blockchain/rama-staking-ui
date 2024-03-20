
import { Box, styled } from "@mui/material";
import Card from "../overview/card";
import Price from "../overview/price";
import Secure from "../overview/secure";
import Header from "../shared/Header";
import Footer from "../shared/footer";
import ControllerTable from "./controllerTable";
import DelegatorTable from "./delegatorTable";
import Navbar from "../shared/navbar";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: '0rem 1.5rem',
    minHeight:'100vh',
    '@media(max-width : 600px)':{
        padding: '0rem 0.5rem', 
    }
}));

const Delegatorcmp = () => {
    return (
        <>
            <StyledBox>
            <Header />
            <Navbar />
            <Secure />
            <Price />
            <Card />
            <ControllerTable />
            <DelegatorTable />
            <Footer />
            </StyledBox>
        </>
    )
}

export default Delegatorcmp;