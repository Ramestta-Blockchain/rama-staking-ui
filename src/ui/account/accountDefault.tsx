import ButtonText from "@/theme/components/buttonText";
import GradientButtonText from "@/theme/components/gradientButtonText";
import Headingcmp from "@/theme/components/headingcmp";
import { Box, Typography, styled } from "@mui/material";

const StyledBoxMain = styled(Box)(({ theme }) => ({
     backgroundColor:theme.palette.secondary.main,
     padding:'4rem 1rem',
     textAlign:'center',
     margin:'2rem 0rem',
     borderRadius:'12px',
     '@media(max-width : 600px)':{
        padding:'2rem 1rem',
     }
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '1.5rem',
    justifyContent:'center',
    '@media(max-width : 600px)': {
        flexWrap:'wrap'
     }
}));

const AccountDefault = () => {
    return (
        <>
            <Box>
                

                <Box  >
                <StyledBoxMain>
                    <Typography color={'#922BC4'}>POLYGON WALLET BALANCE</Typography>
                    <Headingcmp text={'0 RAMA'} />
                    <Typography>$0.00</Typography>
                    <StyledBox>
                            <GradientButtonText Gradient__button={'Become a Validator'} />
                            <ButtonText ButtonText={'Become a Delegator'} />
                        </StyledBox>
                </StyledBoxMain>
                </Box>
            </Box>
        </>
    )
}

export default AccountDefault;