"use client"
import Image from "next/image";
import { Box, Drawer, styled, useTheme, } from "@mui/material";
import Link from "next/link";
import logo from '../../icons/logo.svg'
import logol from '../../icons/logol.svg'
import Iconbuttoncustom from "@/theme/components/iconbuttoncustom";
import switchArrow from '../../icons/switchArrow.svg'
import switchArrowd from '../../icons/switchArrowd.svg'
import GradientIconButton from "@/theme/components/gradientIconButton";
import connectwallet from '../../icons/connectwallet.svg'
import { useContext, useState } from "react";
import dark from '../../icons/dark.svg'
import darkd from '../../icons/darkd.svg'
import light from '../../icons/light.svg'
import lightd from '../../icons/lightd.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menud from '../../icons/menud.svg'
import menul from '../../icons/menul.svg'
import AppsIcon from '@mui/icons-material/Apps';
import { ColorModeContext } from "@/app/layout";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const StyledBoxOne = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    '@media(max-width : 900px)': {
        display: 'none'
    }
}));
const StyledBoxTwo = styled(Box)(({ theme }) => ({
    display: 'none',
    '@media(max-width : 900px)': {
        display: 'block'
    }
}));

const StyledLink = styled(Link)(({ theme }) => ({
    'img': {
        '@media(max-width : 600px)': {
            width: '150px'
        }
    }
}));



export default function Header() {
    const [openMob, setOpenMob] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenMob(newOpen);
    };

    const DrawerList = (
        <Box sx={{
            width: 300,
            minHeight: '100vh',
            backgroundColor: theme.palette.primary.main, p: 3,
            'a': {
                width: '100%',
                justifyContent: 'center',
                marginTop: '1rem'
            }
        }}
            role="presentation" onClick={toggleDrawer(false)}>
            <Link href={"#"}><KeyboardBackspaceIcon sx={{ color: theme.palette.primary.contrastText }} /></Link>
            <Iconbuttoncustom Text__button={"Switch to testnet"} Image__icon={theme.palette.mode === "dark" ? switchArrowd : switchArrow} />
            <GradientIconButton Gradient__Text__button={"Connect Wallet"} Gradient__Image__icon={connectwallet} />


        </Box>
    );

    return (


        <Box sx={{
            backgroundColor: theme.palette.background.paper,
            p: { xs: 1.5, sm: 2, md: 3, lg: 3, xl: 3 },

        }}>
            <StyledBox>
                <StyledBoxTwo>
                    <Box sx={{ cursor: 'pointer' }} onClick={toggleDrawer(true)}><AppsIcon /></Box>
                    <Drawer open={openMob} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>
                </StyledBoxTwo>
                <Box>
                    <StyledLink href={"#"}><Image src={theme.palette.mode === "dark" ? logol : logo} alt="logo" /></StyledLink>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            '@media(max-width : 600px)': {
                                gap: '0.5rem',
                            }
                        }}>
                        <StyledBoxOne>
                            <Iconbuttoncustom Text__button={"Switch to testnet"} Image__icon={theme.palette.mode === "dark" ? switchArrowd : switchArrow} />
                            <GradientIconButton Gradient__Text__button={"Connect Wallet"} Gradient__Image__icon={connectwallet} />
                        </StyledBoxOne>
                        <Link href={"#"} style={{
                            backgroundColor: theme.palette.secondary.light,
                            color: theme.palette.primary.contrastText,
                            padding: "0.4rem",
                            borderRadius: '8px',


                        }}
                            onClick={colorMode.toggleColorMode}>
                            {theme.palette.mode === "dark" ?

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <Image src={darkd} alt="" />
                                    <Image src={lightd} alt="" />
                                </Box>
                                :
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        'img': {
                                            '@media(max-width : 600px)': {
                                                // width: '20px'
                                            }
                                        }
                                    }}
                                > <Image src={dark} alt="" />
                                    <Image src={light} alt="" />
                                </Box>
                            }
                        </Link>
                        <Box>
                            <Button
                                sx={{
                                    backgroundColor: theme.palette.secondary.light,
                                    minWidth: '50px',
                                    padding: '6px',
                                    borderRadius: '8px',
                                    ':hover': {
                                        backgroundColor: theme.palette.secondary.light,
                                    }
                                }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {theme.palette.mode === "dark" ? <Image src={menul} alt="menu" /> : <Image src={menud} alt="menu" />}
                            </Button>
                            <Menu
                                // sx={{
                                //     '.MuiMenu-list': {
                                //         backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#1C1C20",
                                //         border: theme.palette.mode === "dark" ? "1px solid #C6C5CA" : "1px solid #5A5A5C",
                                //         color: theme.palette.mode === "dark" ? "#000" : "#fff"
                                //     }

                                // }}
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
            </StyledBox>
        </Box>

    );
}
