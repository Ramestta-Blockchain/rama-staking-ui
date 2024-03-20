"use client"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '@/app/layout';
import StakeTabDetail from './stakeTabDetail';
import DelegatorTableDetail from './delegatorTableDetail';
import CheckpointTable from './checkpointTable';
import HeimdallTab from './heimdallTab';
import BorTab from './borTab';


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

export default function DetailTab() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%',marginTop:'1.5rem' }}>
            <Box sx={{   '@media(max-width : 600px)': { padding: '1rem 1.5rem', } }}>
                <Box sx={{ textTransform: 'capitalize' }}>
                    <Tabs
                        variant="scrollable"
                        sx={{

                            '.MuiTabs-flexContainer': {
                                justifyContent: 'space-between',
                                gap: '1rem'
                            },

                            '.MuiTabs-indicator': {
                                height: 46,
                                color: theme.palette.text.primary,
                                background: 'transparent',
                                borderRadius: '6px',
                                backgroundColor: 'transparent'

                            },
                            '.Mui-selected': {
                                color: "#fff !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            },



                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, width: '230px', background: value === 0 ? "linear-gradient(0deg, #932AC3, #7B35D8)" : theme.palette.secondary.main, borderRadius: '8px' }} label="Stake" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, width: '230px', background: value === 1 ? "linear-gradient(0deg, #932AC3, #7B35D8)" : theme.palette.secondary.main, borderRadius: '8px' }} label="Delegators"  {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, width: '230px', background: value === 2 ? "linear-gradient(0deg, #932AC3, #7B35D8)" : theme.palette.secondary.main, borderRadius: '8px' }} label="Checkpoints" {...a11yProps(2)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, width: '230px', background: value === 3 ? "linear-gradient(0deg, #932AC3, #7B35D8)" : theme.palette.secondary.main, borderRadius: '8px' }} label="Heimdall Blocks" {...a11yProps(3)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, width: '230px', background: value === 4 ? "linear-gradient(0deg, #932AC3, #7B35D8)" : theme.palette.secondary.main, borderRadius: '8px' }} label="Bor Blocks" {...a11yProps(4)} />

                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <StakeTabDetail />
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                    <DelegatorTableDetail />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <CheckpointTable />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <HeimdallTab />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <BorTab />
                </CustomTabPanel>

            </Box>
        </Box>
    );
}