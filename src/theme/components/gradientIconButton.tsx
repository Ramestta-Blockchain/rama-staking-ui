import { Box, styled, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#fff',
    textDecoration: 'none',
    padding: '16px 16px',
    borderRadius: '8px',
    transition: '0.5s',
    '&:hover': {
        background: 'linear-gradient(0deg, #7B35D8,#932AC3)',
    },
}));

interface Props {
    Gradient__Image__icon: any;
    Gradient__Text__button: any
}

const GradientIconButton = ({ Gradient__Image__icon, Gradient__Text__button }: Props) => {

    return (
        <>
            <StyledLink href={"#"}>
                <Image src={Gradient__Image__icon} alt="icon__button" />
                <Box m={0} component={'p'}>{Gradient__Text__button}</Box>
            </StyledLink>
        </>
    )
}

export default GradientIconButton;