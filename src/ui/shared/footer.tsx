"use client"
import { Box, Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import fd from '../../icons/fd.svg'
import td from '../../icons/td.svg'
import dd from '../../icons/dd.svg'
import fl from '../../icons/fl.svg'
import tl from '../../icons/tl.svg'
import dl from '../../icons/dl.svg'
import Image from "next/image";
import { ColorModeContext } from "@/app/layout";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: 'inline-block',
    borderRadius: '6px',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    transition: '0.5s',
    '&:hover': {
        background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
    },
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '1rem 0rem',
    '@media(max-width : 600px)': {
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        py: 2,
    }
}));
const StyledP = styled('p')(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    '@media(max-width : 600px)': {
        textAlign: 'center'
    }
}));


const Footer = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                <Box><StyledP>© 2024 Ramestta Blockchain . | All rights reserved</StyledP></Box>
                <Box >
                    <Box component={'ul'} sx={{
                        margin: 0, padding: 0, listStyle: 'none',
                        display: 'flex',
                        gap: '1rem',
                    }}>
                        <Box component={'li'} >
                            <StyledLink href={'#'}>
                                <Image src={theme.palette.mode === "dark" ? fl : fd} alt="" />
                            </StyledLink>
                        </Box>
                        <Box component={'li'}>
                            <StyledLink href={'#'}>
                                <Image src={theme.palette.mode === "dark" ? tl : td} alt="" />
                            </StyledLink>
                        </Box>
                        <Box component={'li'}>
                            <StyledLink href={'#'}>
                                <Image src={theme.palette.mode === "dark" ? dl : dd} alt="" />
                            </StyledLink>
                        </Box>
                    </Box>
                </Box>
            </StyledBox>
        </>
    )
}

export default Footer;