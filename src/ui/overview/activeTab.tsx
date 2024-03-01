
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { ColorModeContext } from '@/app/layout';
 


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

export default function activeTab() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ padding: '0rem' }}>
                <Box sx={{ textTransform: 'capitalize' }}>
                    <Tabs sx={{

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
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Active" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary }} label="Inactive" {...a11yProps(1)} />

                    </Tabs>



                </Box>
                <CustomTabPanel value={value} index={0}>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>

                </CustomTabPanel>


            </Box>
        </Box>
    );
}