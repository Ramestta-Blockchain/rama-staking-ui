import { ColorModeContext } from "@/app/layout";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, DialogTitle, Divider, Modal, Typography, styled, useTheme, } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import approved from '../../icons/approved.svg'
import approvel from '../../icons/approvel.svg'
import Image from "next/image";
import profile from '../../icons/profile.svg'
import TextFieldCustome from "./textFieldCustome";
import GradientButtonText from "./gradientButtonText";
import delegated from '../../icons/delegated.svg'
import delegatel from '../../icons/delegated.svg'
import compd from '../../icons/compd.svg'
import compl from '../../icons/compl.svg'
import successicon from '../../icons/successicon.svg'

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'block',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    padding: '12px 16px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: '0.5s',
    border: '1px solid #922BC4',
    margin: '-1rem 1rem 1rem 1rem',

}));
const StyledLinkTwo = styled(Link)(({ theme }) => ({
    'a': {
        width: '100%',
        justifyContent: 'center',
        marginTop: '2rem'
    }

}));
const StyledBox = styled(Box)(({ theme }) => ({
    'img': {
        width: '100%',
        height: 'auto',
        marginTop: '1rem',
        '@media(max-width : 600px)': {
            width: '100%',
        }
    }

}));
const BoxTwo = styled(Box)(({ theme }) => ({
    marginTop: '3rem',
    textAlign: 'center',
    'img': {
        width: '120px',
        height: 'auto',
        border: theme.palette.common.black,
        padding: '1rem',
        borderRadius: '100px',
    }

}));

interface Props {
    ButtonText: any;
}

const Delegators = ({ ButtonText }: Props) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const [openTwo, setOpenTwo] = useState(false);
    const [scrollTwo, setScrollTwo] = useState<DialogProps['scroll']>('paper');

    const handleClickOpenTwo = (scrollType: DialogProps['scroll']) => () => {
        setOpenTwo(true);
        setScrollTwo(scrollType);
    };

    const handleCloseTwo = () => {
        setOpenTwo(false);
    };


    const [openThree, setOpenThree] = useState(false);
    const [scrollThree, setScrollThree] = useState<DialogProps['scroll']>('paper');

    const handleClickOpenThree = (scrollType: DialogProps['scroll']) => () => {
        setOpenThree(true);
        setScrollThree(scrollType);
    };

    const handleCloseThree = () => {
        setOpenThree(false);
    };
    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }

        if (openTwo) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }

        if (openThree) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open, openTwo, openThree]);


    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledLink onClick={handleClickOpen('body')} href={"#"}>
                <Box m={0} component={'p'}>{ButtonText}</Box>
            </StyledLink>


            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    sx={{

                        backdropFilter: 'blur(1px)', // Adjust the blur intensity as needed
                        backgroundColor: 'rgba(255, 255, 255, 70%)',
                        '.css-1it3bvf-MuiPaper-root-MuiDialog-paper': {
                            backgroundColor: theme.palette.secondary.main,
                            border: theme.palette.common.black,
                            borderRadius: '12px',
                            boxShadow: 'none',
                            width:'500px'
                        }
                    }}
                >
                    <Box sx={{ padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5">Delegate</Typography>
                            <Box onClick={handleClose}><CloseIcon sx={{ color: theme.palette.primary.contrastText }} /></Box>
                        </Box>

                        <Divider sx={{ borderColor: '#606060', margin: '1rem 0rem' }} />

                        <StyledBox>
                            <Image src={theme.palette.mode === "dark" ? approvel : approved} alt={""} />
                        </StyledBox>

                        <Box textAlign={'center'} mt={2}>
                            <Image src={profile} alt={""} />
                            <Typography variant="h6">Blockops</Typography>
                            <Typography fontWeight={300}>100% Performance • 98% Commission</Typography>
                        </Box>

                        <Box position={'relative'} >
                            <Box sx={{
                                border: theme.palette.common.black,
                                borderRadius: '6px',
                                marginTop: '2rem'
                            }}>
                                <TextFieldCustome placeholder_Text={'0.00'} textType={'text'} />
                                <Box sx={{ position: 'absolute', right: '4px', top: '4px' }}>
                                    <GradientButtonText Gradient__button={'Max'} />
                                </Box>
                            </Box>
                            <Box sx={
                                {
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'
                                }
                            }>
                                <Typography color={'#999'} mt={1}></Typography>
                                <Typography color={'#999'} mt={1}>Available Balance 0 RAMA</Typography>
                            </Box>
                        </Box>

                        <StyledLinkTwo onClick={handleClickOpenTwo('body')} href={"#"}>
                            <GradientButtonText Gradient__button={'Continue'} />
                        </StyledLinkTwo>
                    </Box>

                </Dialog>
            </React.Fragment>

            <React.Fragment>
                <Dialog
                    open={openTwo}
                    onClose={handleCloseTwo}
                    scroll={scrollTwo}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    sx={{

                        backdropFilter: 'blur(1px)', // Adjust the blur intensity as needed
                        backgroundColor: 'rgba(255, 255, 255, 70%)',
                        '.css-1it3bvf-MuiPaper-root-MuiDialog-paper': {
                            backgroundColor: theme.palette.secondary.main,
                            border: theme.palette.common.black,
                            borderRadius: '12px',
                            boxShadow: 'none',
                            width:'500px'
                        }
                    }}
                >
                    <Box sx={{ padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5">Delegate</Typography>
                            <Box onClick={handleCloseTwo}><CloseIcon sx={{ color: theme.palette.primary.contrastText }} /></Box>
                        </Box>

                        <Divider sx={{ borderColor: '#606060', margin: '1rem 0rem' }} />

                        <StyledBox>
                            <Image src={theme.palette.mode === "dark" ? delegatel : delegated} alt={""} />
                        </StyledBox>

                        <BoxTwo >
                            <Image src={profile} alt={""} />

                            <Typography mt={2} fontWeight={300}>Completing this transaction will stake RAMA tokens and you will start earning rewards for the upcoming checkpoints.</Typography>
                        </BoxTwo>

                        <StyledLinkTwo onClick={handleClickOpenThree('body')} href={"#"}>
                            <GradientButtonText Gradient__button={'Delegate'} />
                        </StyledLinkTwo>
                    </Box>
                </Dialog>
            </React.Fragment>

            <React.Fragment>
                <Dialog
                    open={openThree}
                    onClose={handleCloseThree}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                    sx={{

                        backdropFilter: 'blur(1px)', // Adjust the blur intensity as needed
                        backgroundColor: 'rgba(255, 255, 255, 70%)',
                        '.css-1it3bvf-MuiPaper-root-MuiDialog-paper': {
                            backgroundColor: theme.palette.secondary.main,
                            border: theme.palette.common.black,
                            borderRadius: '12px',
                            boxShadow: 'none',
                            width:'500px'
                        }
                    }}
                >
                    <Box sx={{ padding: '1rem' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5">Transaction Done</Typography>
                            <Box onClick={handleCloseThree}><CloseIcon sx={{ color: theme.palette.primary.contrastText }} /></Box>
                        </Box>

                        <Divider sx={{ borderColor: '#606060', margin: '1rem 0rem' }} />

                        <StyledBox>
                            <Image src={theme.palette.mode === "dark" ? compl : compd} alt={""} />
                        </StyledBox>

                        <BoxTwo >
                            <Image src={successicon} alt={""} />
                            <Typography variant="h6">Delegation Submitted</Typography>
                            <Typography fontWeight={300}>Your tokens are staked successfully on validator. your delegation will take 4-5 minutes to reflect in your account.</Typography>
                        </BoxTwo>

                        <StyledLinkTwo href={"#"}>
                            <GradientButtonText Gradient__button={'View on Block Exploreer'} />
                        </StyledLinkTwo>
                    </Box>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default Delegators;