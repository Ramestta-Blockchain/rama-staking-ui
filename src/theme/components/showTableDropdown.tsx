
import { ColorModeContext } from "@/app/layout";
import { Box, MenuItem, TextField, Typography, styled, useTheme } from "@mui/material";
import { useContext, useState } from "react";


const StyledBox = styled('form')(({ theme }) => ({

}));

const StyledInput = styled('input')(({ theme }) => ({

}));

const currencies = [
    {
        value: 'USD',
        label: '10',
    },
    {
        value: 'EUR',
        label: '20',
    },
    {
        value: 'BTC',
        label: '30',
    },
    {
        value: 'JPY',
        label: '40',
    },
    {
        value: 'JPG',
        label: '50',
    },
];

const Opations = [
    {
        value: 'EUR',
        label: 'Opations',
    },
    {
        value: 'BTC',
        label: 'Opations2',
    },
    {
        value: 'JPY',
        label: 'Opations3',
    },
    {
        value: 'JPG',
        label: 'Opations4',
    },
];


const ShowTableDropdown = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                '@media(max-width : 600px)': {
                    flexWrap: 'wrap'
                }
            }}>
                <Box>
                    <Typography color={theme.palette.primary.contrastText}>Showing 1-10 of 50 | Show :</Typography>
                </Box>

                <StyledBox
                    sx={{
                        '@media(max-width : 600px)': {
                            minWidth: '100%'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{
                            '@media(max-width : 600px)': {
                                width: '100%'
                            },
                            color: theme.palette.primary.contrastText,
                            '& .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                                border: theme.palette.info.contrastText,
                                backgroundColor: theme.palette.info.main,
                                color: theme.palette.primary.contrastText,
                            },

                            '&:hover .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                            },
                            '&.Mui-focused .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                            },
                            '& .MuiSvgIcon-root': { color: theme.palette.primary.contrastText },

                        }}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </StyledBox>

                <StyledBox
                    sx={{
                        '@media(max-width : 600px)': {
                            minWidth: '100%'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                        sx={{
                            '@media(max-width : 600px)': {
                                width: '100%'
                            },
                            color: theme.palette.primary.contrastText,
                            '& .MuiOutlinedInput-root': {

                                borderColor: theme.palette.common.white,
                                border: theme.palette.info.contrastText,
                                backgroundColor: theme.palette.info.main,
                                color: theme.palette.primary.contrastText,
                            },

                            '&:hover .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                            },
                            '&.Mui-focused .MuiOutlinedInput-root': {
                                borderColor: theme.palette.common.white,
                            },
                            '& .MuiSvgIcon-root': { color: theme.palette.primary.contrastText }
                        }}
                    >
                        {Opations.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </StyledBox>


            </Box>
        </>
    )
}

export default ShowTableDropdown;