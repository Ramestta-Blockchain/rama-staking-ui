import React, { useContext, useState } from 'react';
import { Stepper, Step, StepLabel, Button, Box, Typography, styled, useTheme, Container, Checkbox, Grid, TextField } from '@mui/material';
import ansible from '../../icons/ansible.svg'
import binaries from '../../icons/binaries.svg'
import Image from 'next/image';
import { ColorModeContext } from '@/app/layout';
import Link from 'next/link';
import GradientButtonText from '@/theme/components/gradientButtonText';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Headingcmp from '@/theme/components/headingcmp';
import shieldd from '../../icons/shieldd.svg'
import shieldl from '../../icons/shieldl.svg'
import TextFieldCustome from '@/theme/components/textFieldCustome';
import HoverTool from '@/theme/components/hoverTool';
import tooltipd from '../../icons/tooltipd.svg'
import tooltipl from '../../icons/tooltipl.svg'


const StyledBox = styled(Box)(({ theme }) => ({
    border: theme.palette.common.black,
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1.5rem'
}));
const StyledImgBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.contrastText,
    borderRadius: '8px',
}));
const StyledMainBox = styled(Box)(({ theme }) => ({
    margin: '1rem 6.5rem',
    '@media(max-width : 1200px)': {
        margin: '1rem 5rem',
        '@media(max-width : 900px)': {
            margin: '1rem 3rem',
            '@media(max-width : 600px)': {
                margin: '1rem 0rem',
            }
        }
    }
}));
const StyledBoxInput = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

}));

const steps = ['Setup Node', 'Add Node Detail', 'Add Your Stake', 'Completed'];

const BecomeSetup: React.FC = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return (
                    <StyledMainBox>
                        <Typography variant='h5'>Setup a node</Typography>
                        <Typography>You can setup your node using any of the options from below</Typography>

                        <StyledBox>
                            <StyledImgBox>
                                <Image src={ansible} alt={''} />
                            </StyledImgBox>
                            <Box>
                                <Typography fontWeight={500}>Ansible</Typography>
                                <Typography>Your Ansible playbooks for setting up RAMA Validator node</Typography>
                            </Box>
                        </StyledBox>

                        <StyledBox>
                            <StyledImgBox>
                                <Image src={binaries} alt={''} />
                            </StyledImgBox>
                            <Box>
                                <Typography fontWeight={500}>Binaries</Typography>
                                <Typography>Build from Source to setup your validator node.</Typography>
                            </Box>
                        </StyledBox>
                        <Box mt={2}>
                            <Typography>Queries? If you face any trouble during installation or syncing, do share your queries in this <Link style={{ color: '#922BC4' }} href={'#'}>forum </Link> or on our <Link style={{ color: '#922BC4' }} href={'#'}>Validator Discord channel </Link>.</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box><Checkbox
                                sx={{
                                    color: '#922BC4',
                                    '&.Mui-checked': {
                                        color: '#922BC4',
                                    },
                                }}
                            />
                            </Box>
                            <Box>
                                <Typography>I verify that my heimdall and bor nodes are fully synced.</Typography>
                            </Box>
                        </Box>
                    </StyledMainBox>
                )
            case 1:
                return (

                    <StyledMainBox>
                        <Typography variant='h5'>Add node details</Typography>
                        <Typography>Please provide your node details for better recognizability</Typography>
                        <Box>
                            <Grid container spacing={2} mt={1}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Validator logo</Typography>
                                    <StyledBoxInput>
                                        <Box sx={{ flex: '12%', 'img': { display: 'block' } }}><Image src={theme.palette.mode === "dark" ? shieldl : shieldd} alt={''} /></Box>
                                        <Box sx={{ flex: '88%', }}>
                                            <TextFieldCustome placeholder_Text={'Change'} textType={'text'} />
                                        </Box>
                                    </StyledBoxInput>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Validator Name</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Node 1'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Website</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'https://ramestta.io/'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Signer's address</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Ox3B3d8212980c47C1B82D8b4a154c7E96E26'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Typography my={1.5}>Signer's Public key <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={'Signer public key'} /></Box></Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Oxaf8ee5d10c3a49e338374da84183b0d4c08d'} textType={'text'} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </StyledMainBox>
                )
            case 2:
                return (
                    <StyledMainBox>
                        <Typography variant='h5'>Add node details</Typography>
                        <Typography>Please provide your node details for better recognizability</Typography>
                        <Box>
                            <Grid container spacing={2} mt={1}>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Validator logo</Typography>
                                    <StyledBoxInput>
                                        <Box sx={{ flex: '12%', 'img': { display: 'block' } }}><Image src={theme.palette.mode === "dark" ? shieldl : shieldd} alt={''} /></Box>
                                        <Box sx={{ flex: '88%', }}>
                                            <TextFieldCustome placeholder_Text={'Change'} textType={'text'} />
                                        </Box>
                                    </StyledBoxInput>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Validator Name</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Node 1'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Website</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'https://ramestta.io/'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Signer's address</Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Ox3B3d8212980c47C1B82D8b4a154c7E96E26'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Signer's Public key <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={'Signer public key'} /></Box></Typography>
                                    <Box>
                                        <TextFieldCustome placeholder_Text={'Oxaf8ee5d10c3a49e338374da84183b0d4c08d'} textType={'text'} />
                                    </Box>
                                </Grid>
                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                    <Typography my={1.5}>Enter the stake amount <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === "dark" ? tooltipl : tooltipd} Title={'Enter the stake amount'} /></Box></Typography>
                                    <Box position={'relative'}>
                                        <TextFieldCustome placeholder_Text={'10'} textType={'text'} />
                                        <Box sx={{ position: 'absolute', right: '4px', top: '4px' }}>
                                            <GradientButtonText Gradient__button={'Max'} />
                                        </Box>
                                        <Box sx={
                                            {
                                                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'
                                            }
                                        }>
                                            <Typography color={'#999'} mt={1}>Minimum 10 RAMA required</Typography>
                                            <Typography color={'#999'} mt={1}>Bal:200.00</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </StyledMainBox>
                )
            case 3:
                return (
                    <Box>Step 4 Content</Box>
                )
            default:
                return null;
        }
    };

    return (
        <Box>
            <Box  >
                <Headingcmp text={'Become a validator'} />
            </Box>
            <Container>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step
                            sx={{
                                '.css-z7uhs0-MuiStepConnector-line': {
                                    borderColor: '#2A2A30',
                                    borderTopWidth: '10px',
                                    marginTop: '-5px'
                                },

                            }}
                            key={label}>
                            <StepLabel
                                sx={{
                                    '.css-avnp77-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                                        color: '#8033D3'
                                    },
                                    '.css-1vyamtt-MuiStepLabel-labelContainer': {
                                        color: 'rgb(217 217 217 / 60%)'
                                    },
                                    '.css-avnp77-MuiSvgIcon-root-MuiStepIcon-root': {
                                        border: '1px solid #8033d39e',
                                        borderRadius: '20px'
                                    },

                                }}
                            >{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box>
                    {activeStep === steps.length ? (
                        <Box>
                            <p>All steps completed</p>
                        </Box>
                    ) : (
                        <Box>
                            {renderStepContent(activeStep)}
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                margin: '1rem 6.5rem 0rem 6.5rem',
                                '@media(max-width : 1200px)': {
                                    margin: '1rem 5rem 0rem 5rem',
                                    '@media(max-width : 900px)': {
                                        margin: '1rem 3rem 0rem 3rem',
                                        '@media(max-width : 600px)': {
                                            margin: '1rem 0rem 0rem 0rem',
                                        }
                                    }
                                }

                            }}>
                                <Button
                                    sx={{
                                        border: theme.palette.common.black,
                                        minWidth: '46px',
                                        minHeight: '50px',
                                        padding: '6px 0px',
                                        borderRadius: '8px',
                                        'span': {
                                            marginLeft: '1rem'
                                        }
                                    }}
                                    disabled={activeStep === 0} onClick={handleBack} startIcon={<ArrowBackIosIcon sx={{ color: activeStep === 0 ? '#999' : theme.palette.primary.contrastText }} />}>

                                </Button>
                                <Box onClick={handleNext} >
                                    <GradientButtonText Gradient__button={activeStep === steps.length - 1 ? 'Finish' : 'Next'} />
                                </Box>

                            </Box>
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
};

export default BecomeSetup;
