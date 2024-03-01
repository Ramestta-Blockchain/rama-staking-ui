"use client"
import Image from "next/image";
import { Box, Grid, Typography, styled, useTheme, } from "@mui/material";
import GradientButtonText from "@/theme/components/gradientButtonText";
import ButtonText from "@/theme/components/buttonText";
import ramadollar from '../../icons/ramadollar.png'
import { useContext } from "react";
 
import SubHeading from "@/theme/components/subHeading";
import { ColorModeContext } from "@/app/layout";



const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1.5rem',
    '@media(max-width : 900px)': {
        justifyContent: 'center',
        '@media(max-width : 600px)': {
           flexWrap:'wrap'
        }
    }
}));

const StyledImage = styled(Box)(({ theme }) => ({
    marginTop: '-7rem',
    '@media(max-width : 900px)': {
        marginTop: '0rem',
    }
}));

export default function Secure() {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (


        <Box sx={{
            backgroundColor: theme.palette.secondary.main,
            padding: '2rem',
            borderRadius: '20px',
            marginTop: '2rem',
        }}>
            <Grid container spacing={2}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Box >
                        <SubHeading text={'Secure the Network and Earn'} />
                        <SubHeading text={'Reward with RAMA Staking'} />
                        <StyledBox>
                            <GradientButtonText Gradient__button={'Become a Validator'} />
                            <ButtonText ButtonText={'Become a Delegator'} />
                        </StyledBox>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <StyledImage><Image style={{ width: '100%', height: 'auto' }} src={ramadollar} alt="$rama" /></StyledImage>
                </Grid>
            </Grid>
        </Box>

    );
}
