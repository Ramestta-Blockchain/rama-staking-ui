import { Box, styled, } from "@mui/material";
import Link from "next/link";


const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'block',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    textAlign:'center',
    transition: '0.5s',
    border:'1px solid #922BC4',
    margin:'-1rem 1rem 1rem 1rem',
    
}));

interface Props {
    ButtonText: any;
}

const Delegators = ({ ButtonText }: Props) => {
    return (
        <>
            <StyledLink href={"#"}>
                <Box m={0} component={'p'}>{ButtonText}</Box>
            </StyledLink>
        </>
    )
}

export default Delegators;