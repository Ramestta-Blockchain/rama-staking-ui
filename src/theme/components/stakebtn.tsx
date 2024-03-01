"use client"
import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    transition: '0.5s',
    textAlign:'center'
}));

interface Props {
    Text: any;
}

const Stakebtn = ({ Text }: Props) => {
    return (
        <>
            <StyledLink href={"#"}>
                <Box m={0} component={'p'}>{Text}</Box>
            </StyledLink>
        </>
    )
}

export default Stakebtn;