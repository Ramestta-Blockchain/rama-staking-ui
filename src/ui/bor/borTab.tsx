"use client"
import * as React from 'react';
import Image from "next/image";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import prcelight from '../../icons/prcelight.svg'
import prcedark from '../../icons/prcedark.svg'
import { Slider, styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/app/layout';
import { useState } from 'react';
import ControllerTable from '../delegator/controllerTable';
import AllBlockTable from './allBlockTable';
import MissedBlock from './missedBlock';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));


const StyledSlider = styled(Slider)(
    ({ theme }) => `
    .MuiSlider-root {
        background-color: red;
        padding:5px
      }
    .MuiSlider-rail {
      background-color: #41236B;
      padding:4px
    }
    .MuiSlider-track {
      background: linear-gradient(0deg, #932AC3, #7B35D8);
      padding:4px
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #932AC3, #7B35D8);
      }
  `
);
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

export default function BorTab() {
    const [value, setValue] = useState(0);
    const [valueBor, setValueBor] = useState<number[]>([0, 100]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeBor = (event: Event, newValue: number | number[]) => {
        setValueBor(newValue as number[]);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();



    return (
        <Box sx={{ width: '100%', }} mt={4} >
            <Box  >
                <Box sx={{
                    textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap-reverse'
                }}>
                    <Tabs
                        variant="scrollable"
                        sx={{
                            flex: '30%',

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
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="All blocks" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Missed blocks" {...a11yProps(1)} />
                    </Tabs>

                    <Box sx={{ flex: '60%' }}>
                        <Box sx={{
                            display: 'flex', justifyContent: 'space-between',
                            gap: '1rem',
                            alignItems: 'center',
                            marginBottom: '1rem'
                        }}>
                            <Typography width={100} fontWeight={500}>Gas used</Typography>
                            <Typography>{valueBor}</Typography>
                            <StyledSlider
                                value={valueBor}
                                onChange={handleChangeBor}
                                aria-labelledby="range-slider"
                                min={0}
                                max={100}
                            />
                            <Typography>{valueBor}</Typography>
                        </Box>
                    </Box>

                </Box>
                <CustomTabPanel value={value} index={0}>
                    <>
                        <StyledBox >
                            <ControllerTable />
                            <AllBlockTable/>
                        </StyledBox>

                    </>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <>
                        <StyledBox>
                        <ControllerTable />
                    <    MissedBlock/>
                        </StyledBox>
                    </>
                </CustomTabPanel>


            </Box>
        </Box>
    );
}