"use client"
import * as React from 'react';
import Image from "next/image";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import prcelight from '../../icons/prcelight.svg'
import prcedark from '../../icons/prcedark.svg'
import { styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/app/layout';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
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

export default function PriceTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{
                padding: '1.5rem 1.5rem 1.5rem 1.5rem',
                backgroundColor: theme.palette.secondary.main,
                borderRadius: '12px'
            }}>
                <Box sx={{ textTransform: 'capitalize', }}>
                    <Tabs
                        variant="scrollable"
                        sx={{

                            '.MuiTabs-indicator': {
                                height: 46,
                                color: theme.palette.text.primary,
                                background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                borderRadius: '8px',
                                backgroundColor: 'transparent'

                            },
                            '.Mui-selected': {
                                color: "#fff !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Price" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Total staked" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Delegators" {...a11yProps(2)} />

                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <>
                        <StyledBox >
                            <Image src={theme.palette.mode === "dark" ? prcelight : prcedark} alt="graph" style={{ width: '100%', height: 'auto' }} />
                        </StyledBox>

                    </>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <>
                        <StyledBox >
                            <Image src={theme.palette.mode === "dark" ? prcelight : prcedark} alt="graph" style={{ width: '100%', height: 'auto' }} />
                        </StyledBox>
                    </>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <>
                        <StyledBox >
                            <Image src={theme.palette.mode === "dark" ? prcelight : prcedark} alt="graph" style={{ width: '100%', height: 'auto' }} />
                        </StyledBox>
                    </>
                </CustomTabPanel>

            </Box>
        </Box>
    );
}