
"use client"
import GradientButtonText from "@/theme/components/gradientButtonText";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Typography, styled } from "@mui/material";
import Migrate from "./migrate";
import Unbound from "./unbound";


const StyledBoxMain = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '4rem 1rem',
    textAlign: 'center',
    margin: '2rem 0rem',
    borderRadius: '12px',
    '@media(max-width : 600px)': {
        padding: '2rem 1rem',
    }
}));

const StyledBox = styled(Box)(({ theme }) => ({

}));

const Historycmp = () => {
    return (
        <>
            <Box>
                <Box minHeight={'100vh'}>
                    <StyledBoxMain>
                        <Headingcmp text={'Setup complete'} />
                        <Typography my={2}>Your details has been submitted, please spin up your node</Typography>
                        <GradientButtonText Gradient__button={'Go to Home Page'} />
                    </StyledBoxMain>
                    <StyledBox>
                    {/* <Migrate/> */}
                    {/* <Unbound/> */}
                    </StyledBox>
                     

                </Box>
            </Box>
        </>
    )
}

export default Historycmp;