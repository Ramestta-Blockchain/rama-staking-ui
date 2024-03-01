"use client"
import Box from '@mui/material/Box';
import { Grid, MenuItem, TextField, Typography, styled, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
 
import SearchCustom from '@/theme/components/searchCustom';
import PaginationCustome from '@/theme/components/paginationCustome';
import ShowTableDropdown from '@/theme/components/showTableDropdown';
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


const ControllerTable = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box>
            <Box sx={{ padding: '1rem 0rem' }}>
                <SearchCustom placeholder_Text={'Search delegator by address'} />
            </Box>
            <Grid container spacing={2} alignItems={'center'}>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    <ShowTableDropdown/>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>

                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <PaginationCustome />
                </Grid>
            </Grid>

        </Box>
    );
}

export default ControllerTable;