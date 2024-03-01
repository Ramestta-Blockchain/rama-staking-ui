"use client"
import { Box, styled, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


const StyledLink = styled(Link)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color:theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '16px 0px',
    borderRadius: '8px',
    transition: '0.5s',
}));

interface Props {
    text: any
    href:any
}

const Overview = ({ text,href }: Props) => {

    return (
        <>
            <StyledLink href={href}>
                <KeyboardBackspaceIcon />
                <Box m={0} component={'p'}>{text}</Box>
            </StyledLink>
        </>
    )
}

export default Overview;