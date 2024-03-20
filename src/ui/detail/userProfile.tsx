"use client"
import Overview from "@/theme/components/overview";
import { Box, Grid, Slider, TextField, Typography, styled, useTheme } from "@mui/material";
import Image from "next/image";
import profile from '../../icons/profile.svg'
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/app/layout";
import Stakebtn from "@/theme/components/stakebtn";
import HoverTool from "@/theme/components/hoverTool";
import ques from '../../icons/ques.svg'
import d1 from '../../icons/d1.svg'
import { DetailCard } from "@/data/detailCard";
import tooltipd from '../../icons/tooltipd.svg'
import tooltipl from '../../icons/tooltipl.svg'
import AddressCopy from "@/theme/components/addressCopy";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Overviewlist } from "@/data/overviewlist";
import { Newest } from "@/data/newest";
import { UptimeData } from "@/data/uptimeData";

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
     
}));

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    opacity: '60%',
    fontWeight: 300
}));
const BoxOne = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
}));
const BoxTwo = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    justifyContent: 'space-between',
    flexWrap:'wrap'
}));

const BoxThree = styled(Box)(({ theme }) => ({
    padding: '1.5rem 1rem',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));
const BoxFour = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '4.6rem 1.5rem 4.6rem 1.5rem',
    borderRadius: '12px',
    textAlign: 'center'
}));
const ListBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    flexWrap:'wrap'
}));





const StyledSlider = styled(Slider)(
    ({ theme }) => `
    .MuiSlider-root {
        background-color: red;
        padding:5px
      }
    .MuiSlider-rail {
      background-color: #41236B;
      padding:10px
    }
    .MuiSlider-track {
      background: linear-gradient(0deg, #932AC3, #7B35D8);
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #932AC3, #7B35D8);
        border-radius:30px;
        width:40px;
        height:16px;
      }
  `
);


const UserProfile = () => {



    const [value, setValue] = useState<number[]>([4,]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };


    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    const less = "<";
    const greater = ">";
    return (
        <>
            <StyledBox>
                <Overview text={"Overview"} href={'/'} />
                <BoxTwo>
                    <BoxOne>
                        <Box>
                            <Image src={profile} alt="" width={70} />
                        </Box>
                        <Box>
                            <Typography variant="h5">Luganodes</Typography>
                            <StyledLink href={"#"}>https://luganodes.com/</StyledLink>
                        </Box>
                    </BoxOne>
                    <Stakebtn Text={"Become a Delegator"} />
                </BoxTwo>
                <Grid container spacing={2} mt={2}>
                    {
                        DetailCard.map((item, index) => (

                            <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                <BoxThree sx={{ backgroundColor: item.bg ? item.bg : theme.palette.secondary.main }}>
                                    <Box >
                                        <Typography sx={{ color: item.color ? item.color : "#7B35D7" }}>{item.cardTitle} <HoverTool ImageItem={item.color ? ques : theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={item.message} /></Typography>
                                        <Typography sx={{ color: item.color ? item.color : theme.palette.primary.contrastText }} mt={1} variant="h4">{item.cardData}</Typography>
                                    </Box>
                                    <Box>
                                        <Image src={item.Image} alt="" />
                                    </Box>
                                </BoxThree>
                            </Grid>

                        ))
                    }
                </Grid>

                <Box sx={{ backgroundColor: theme.palette.secondary.main, p: 1, my: 2, borderRadius: '8px' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <AddressCopy title={'Owner'} text={"0x4645...162d40"} address={'0x4645...162d40'} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <AddressCopy title={'Signer'} text={"0x4645...162d4b"} address={'0x4645...162d4b'} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <AddressCopy title={'Staking'} text={"0x4645...162d4b"} address={'0x4645...162d4b'} />
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12}>
                            <BoxTwo sx={{
                                backgroundColor: theme.palette.secondary.contrastText,
                                p: '0.7rem 1rem', border: '1px solid #999',
                                borderRadius: '8px'
                            }}>
                                <EmojiEventsIcon />
                                <Typography>Commission</Typography>
                                <Typography fontWeight={500}>98%</Typography>
                            </BoxTwo>
                        </Grid>

                    </Grid>
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ margin: '0', listStyle: 'none', backgroundColor: theme.palette.secondary.main, padding: '1.5rem 1.5rem 1.5rem 1.5rem', borderRadius: '12px' }} component={'ul'}>
                            <Typography variant="h6" fontWeight={300} color={'#922BC4'}>OVERVIEW</Typography>
                            {
                                Overviewlist.map((item, index) => (
                                    <Box key={index} sx={{ borderBottom: theme.palette.common.black, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0rem', color: theme.palette.primary.contrastText }} component={'li'}>
                                        <Typography fontSize={14}>{item.Title} <HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={item.info} /></Typography>
                                        <Typography fontSize={14} fontWeight={500}>{item.data}</Typography>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <BoxFour>
                            <Typography variant="h6" fontWeight={300} color={'#922BC4'}>Coming Soon...</Typography>

                        </BoxFour>
                        <Box sx={{ margin: '1rem 0rem 0rem 0rem', listStyle: 'none', backgroundColor: theme.palette.secondary.main, padding: '1.5rem 1.5rem 1.5rem 1.5rem', borderRadius: '12px' }} component={'ul'}>
                            <Typography variant="h6" fontWeight={300} color={'#922BC4'}>BONDED</Typography>

                            <StyledSlider
                                value={value}
                                onChange={handleChange}
                                aria-labelledby="range-slider"
                                min={0}
                                max={100}
                            />
                            <Box mt={3}>
                                <ListBox>
                                    <Typography fontWeight={300} sx={{ opacity: '60%' }} >Self Bonded</Typography>
                                    <Typography fontWeight={300} sx={{ opacity: '60%' }} >Delegated</Typography>
                                </ListBox>
                                <ListBox>
                                    <Typography my={2} fontWeight={500} variant="h5">1,000 RAMA</Typography>
                                    <Typography my={2} fontWeight={500} variant="h5">381,615,837 RAMA</Typography>
                                </ListBox>
                                <ListBox>
                                    <Typography fontWeight={300} sx={{ opacity: '60%' }} >{less}0.01%</Typography>
                                    <Typography fontWeight={300} sx={{ opacity: '60%' }} >{greater}99.99%</Typography>
                                </ListBox>
                            </Box>
                        </Box>



                    </Grid>

                </Grid>

                <Grid container spacing={2} mt={0.1}>

                    {
                        Newest.map((item, index) => (
                            <Grid key={index} item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{margin: '0', listStyle: 'none', backgroundColor: theme.palette.secondary.main, padding: '1.5rem 1.5rem 1.5rem 1.5rem', borderRadius: '12px' }}> 
                                <Box>
                                    <ListBox>
                                        <Typography variant="h6" fontWeight={300} color={'#922BC4'}>{item.Title}</Typography>
                                        <Typography>{item.data}% <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={item.info} /></Box></Typography>
                                    </ListBox>
                                    <Typography color={'#999'}>{item.small}</Typography>
                                </Box>
                                <Box component={'ul'} sx={{ m: 0, p: 0, listStyle: 'none',display: 'flex',gap:'4px',flexWrap:'wrap' }}>
                                    {
                                        UptimeData.map((item, index) => (

                                            <Box key={index} component={'li'}><HoverTool ImageItem={item.data} Title={item.Title} /></Box>

                                        ))
                                    }
                                </Box>
                                </Box>
                            </Grid>
                        ))
                    }



                </Grid>
            </StyledBox>
        </>
    )
}

export default UserProfile;