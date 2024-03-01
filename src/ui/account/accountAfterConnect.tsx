"use client"
import { ColorModeContext } from "@/app/layout";
import { AccountCard } from "@/data/accountCard";
import { AccountList } from "@/data/accountList";
import ButtonText from "@/theme/components/buttonText";
import Stakebtn from "@/theme/components/stakebtn";
import TextBtn from "@/theme/components/textBtn";
import { Box, Divider, Grid, Typography, styled, useTheme } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";

const StyledBoxMain = styled(Box)(({ theme }) => ({
    '@media(max-width : 900px)': {
        margin: '1rem 0rem',
    }
}));

const StyledBoxB = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '1rem',
    borderRadius: '6px',
    margin: '1rem 0rem',
    '@media(max-width : 900px)': {
        margin: '0rem 0rem',
    }
}));
const StyledList = styled('li')(({ theme }) => ({
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0.4rem 0rem'
}));

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '8px'
}));

const StyledBoxTwo = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '1rem',justifyContent:'space-between',marginTop:'1rem',
    '@media(max-width : 900px)':{
      flexWrap:'wrap'
    },
    'a':{
        flex:'50%',
        textAlign:'center',
        '@media(max-width : 900px)':{
            width:'100%',
            textAlign:'center'
        }
    },

}));

const StyledBoxCenter = styled(Box)(({ theme }) => ({
    textAlign:'center',
    marginTop:'1rem',
    'a':{
        textAlign:'center'
    }
}));

 


const AccountAfterConnect = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
           <Box mb={2}>
           <StyledBoxMain>
                <Grid container spacing={2}>
                    {
                        AccountList.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                <StyledBoxB>
                                    <Typography variant="h6">{item.CardData}</Typography>
                                    <Typography>{item.CardTitle}</Typography>
                                </StyledBoxB>
                            </Grid>
                        ))
                    }

                </Grid>
            </StyledBoxMain>

            <StyledBoxMain>
                <Grid container spacing={2}>
                    {
                        AccountCard.map((item, index) => (
                            <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                                <Box sx={{
                                    backgroundColor: theme.palette.secondary.main,
                                    padding: '1rem',
                                    borderRadius: '12px'
                                }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <Image src={item.profile} alt="" />
                                            <Box>
                                                <Typography color={theme.palette.primary.contrastText}>{item.profileName}</Typography>
                                                <Typography>{item.Checkpoints}% Checkpoints Signed</Typography>
                                                <Typography>{item.Commission}% Commission</Typography>
                                            </Box>
                                        </Box>

                                    </Box>
                                    <Divider sx={{
                                        border: theme.palette.common.black,
                                        margin: '1rem 0rem'
                                    }} />

                                    <Box component={'ul'}
                                        sx={{
                                            margin: 0,
                                            padding: 0,
                                            listStyle: 'none'
                                        }}
                                    >

                                        <StyledList>
                                            <Typography fontSize={14} color={theme.palette.primary.contrastText}>Your Stake <Box component={'span'}></Box></Typography>
                                            <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>Reward</Typography> </StyledBox>
                                        </StyledList>

                                        <StyledList>
                                            <Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.Stake} RAMA <Box component={'span'}></Box></Typography>
                                            <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.Reward} RAMA</Typography> </StyledBox>
                                        </StyledList>

                                        <StyledList>
                                            <Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.StakeDollor} RAMA <Box component={'span'}></Box></Typography>
                                            <StyledBox ><Typography fontSize={14} color={theme.palette.primary.contrastText}>{item.RewardDollor} RAMA</Typography> </StyledBox>
                                        </StyledList>

                                        <StyledBoxTwo>
                                            <TextBtn Text={'Restake Reward'} />
                                            <Stakebtn Text={'Move Stake'} />
                                          
                                        </StyledBoxTwo>
                                        <StyledBoxCenter>
                                        <TextBtn Text={'Withdraw Rewards'} />
                                        </StyledBoxCenter>
                                        <StyledBoxTwo>
                                            <TextBtn Text={'Unbond'} />
                                            <TextBtn Text={'Stake More'} />
                                        </StyledBoxTwo>
                                    </Box>

                                </Box>

                            </Grid>
                        ))
                    }

                </Grid>
            </StyledBoxMain>
           </Box>
        </>
    )
}

export default AccountAfterConnect;