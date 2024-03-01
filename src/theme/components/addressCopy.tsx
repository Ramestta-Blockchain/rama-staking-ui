import { Box, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";

interface props {
    text: any;
    address: any;
    title: any;
}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'space-between',
    border:'1px solid #999',
    padding:'0.5rem 1rem',
    borderRadius:'8px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
     color:theme.palette.primary.contrastText,
     fontWeight:300
}));

const AddressCopy = ({ text, address, title }: props) => {
    const handleCopy = () => {
        copy(text);
        alert('Text copied to clipboard!');
    };

    return (
        <>
            <StyledBox>
                <Typography fontWeight={500} component={'span'}>{title} <StyledLink href={'#'}>
                    {address}
                </StyledLink></Typography>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: '#C0C3C9',width:18 }} />
                </Box>
            </StyledBox>
        </>
    );
};

export default AddressCopy;