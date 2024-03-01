 
import { ColorModeContext } from "@/app/layout";
import { Box, styled, useTheme, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '16px 16px',
    borderRadius: '8px',
}));


interface Props {
    Image__icon: any;
    Text__button: any;
}


const Iconbuttoncustom = ({ Image__icon, Text__button }: Props) => {

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    return (
        <>
            <StyledLink href={"#"}>
                <Image src={Image__icon} alt="icon__button" />
                <Box m={0} component={'p'}>{Text__button}</Box>
            </StyledLink>
        </>
    )
}

export default Iconbuttoncustom;