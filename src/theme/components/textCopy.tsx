import { Box, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";

interface props {
    text: any;
    address:any;
}
const StyledBox = styled(Box)(({ theme }) => ({
     display:'flex',
     alignItems:'center',
     gap:'10px'
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    color:'#922BC4',
}));

const TextCopy = ({ text,address }: props) => {
    const handleCopy = () => {
        copy(text);
        alert('Text copied to clipboard!');
    };

    return (
        <>
        <StyledBox>
        <StyledLink href={'#'}>
            {address}
        </StyledLink>
        <Box onClick={handleCopy}>
            <ContentCopyIcon sx={{color:'#C0C3C9',width:18}}/>
        </Box>
        </StyledBox>
        </>
    );
};

export default TextCopy;