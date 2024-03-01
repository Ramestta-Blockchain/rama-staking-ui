import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    transition: '0.5s',
}));

interface Props {
    ButtonText: any;
}

const ButtonText = ({ ButtonText }: Props) => {
    return (
        <>
            <StyledLink href={"#"}>
                <Box m={0} component={'p'}>{ButtonText}</Box>
            </StyledLink>
        </>
    )
}

export default ButtonText;