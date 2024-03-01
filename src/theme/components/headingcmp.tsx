"use client"
import { styled } from "@mui/material";

 


const Heading = styled('h1')(({ theme }) => ({
    color:theme.palette.primary.contrastText,
    fontSize:'40px',
    fontWeight:500,
    '@media(max-width : 900px)':{
      textAlign:'center',
      '@media(max-width : 600px)':{
        fontSize:'24px',
      }
    }
}));

interface props {
    text: any;
}
const Headingcmp = ({ text }: props) => {
    return (
        <>
            <Heading>{text}</Heading>
        </>
    )
}

export default Headingcmp;