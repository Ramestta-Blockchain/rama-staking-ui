
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MenuItem, TextField, styled, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '@/app/layout';
import Image from 'next/image';
import StatsGraphTable from './statsGraphTable';
import Checkpoint from '../allchart/checkpoint';




const StyledBox = styled('form')(({ theme }) => ({

}));


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const currencies = [
    {
        value: 'USD',
        label: '7dyas',
    },
    {
        value: 'EUR',
        label: '14days',
    },
    {
        value: 'BTC',
        label: '1month',
    },
    {
        value: 'JPY',
        label: '3months',
    },
    {
        value: 'JPG',
        label: '1year',
    },
];

interface props {
    ImageOne: any;
    ImageTwo: any;
    text: any;
}

export default function CheckPTab({ ImageOne, ImageTwo, text }: props) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', }}>
            <Typography ml={1.5} variant='h5'>{text}</Typography>

            <Box sx={{ padding: '0rem 1rem', marginTop: '1rem', '@media(max-width : 600px)': { padding: '0rem 0.5rem', } }}>
                <Box sx={{ textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap-reverse', gap: '1rem' }}>
                    <Tabs
                        variant="scrollable"
                        sx={{
                            backgroundColor: theme.palette.secondary.contrastText,
                            display: 'inline-block',
                            padding: '5px 7px 1px 7px',
                            borderRadius: '6px',
                            '@media(max-width : 600px)': {
                                width: '100%',
                            },
                            '.MuiTabs-indicator': {
                                height: 46,
                                color: theme.palette.text.primary,
                                background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                borderRadius: '6px',
                                backgroundColor: 'transparent'

                            },
                            '.Mui-selected': {
                                color: "#fff !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Hourly" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Daily"  {...a11yProps(1)} />
                    </Tabs>
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
                                    backgroundColor: theme.palette.mode === "dark" ? "#e9e9e9" : "#2A2A30",
                                    color: theme.palette.primary.contrastText,
                                    borderRadius: '6px',

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
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box mt={2} sx={{ 'img': { width: '100%', height: 'auto' } }}>
                        <Box>{ImageOne} </Box>
                        {/* <Checkpoint /> */}
                    </Box>
                    <StatsGraphTable />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box mt={2} sx={{ 'img': { width: '100%', height: 'auto' } }}>
                         
                        <Box>{ImageTwo} </Box>
                        {/* <Checkpoint /> */}
                    </Box>
                    <StatsGraphTable />
                </CustomTabPanel>


            </Box>
        </Box>
    );
}