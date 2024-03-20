
import Box from '@mui/material/Box';
import { Grid, MenuItem, Tab, Tabs, TextField, Typography, styled, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import ActiveTab from './activeTab';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WindowIcon from '@mui/icons-material/Window';
import ListTable from './listTable';
import TableCard from './tableCard';
import SearchCustom from '@/theme/components/searchCustom';
import { ColorModeContext } from '@/app/layout';

const StyledBox = styled('form')(({ theme }) => ({
     
  }));




const currencies = [
    {
        value: 'USD',
        label: 'Performance',
    },
    {
        value: 'EUR',
        label: 'Commission',
    },
    {
        value: 'BTC',
        label: 'Stake',
    },
    {
        value: 'JPY',
        label: 'Random',
    },
];

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

interface MediaProps {
    loading?: boolean;
  }
 
const HomeTable=(props:MediaProps)=> {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const { loading = false } = props;

    return (
        <Box>
            <Typography sx={{ margin: '1.5rem 0rem' }} color={theme.palette.primary.contrastText} variant='h5'>Validators</Typography>
            <Grid container spacing={2}>
                <Grid item lg={3} md={6} sm={6} xs={12}>
                    <ActiveTab />
                </Grid>
                <Grid item lg={5} md={5} sm={6} xs={12}>
                <SearchCustom placeholder_Text={'Search validator by name, owner, or signer address'}/>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        justifyContent: 'end'
                    }}>
                        <Box>
                            <Typography color={theme.palette.primary.contrastText}>Sort By</Typography>
                        </Box>

                        <StyledBox
                            
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-select-currency"
                                select
                                defaultValue="EUR"
                                sx={{
                                    color: theme.palette.primary.contrastText,
                                    '& .MuiOutlinedInput-root': {
                                      borderColor: theme.palette.common.white ,
                                      border:theme.palette.info.contrastText,
                                      backgroundColor: theme.palette.info.main ,
                                      color: theme.palette.primary.contrastText,
                                    },
                                    
                                    '&:hover .MuiOutlinedInput-root': {
                                      borderColor: theme.palette.common.white,
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-root': {
                                      borderColor: theme.palette.common.white ,
                                    },
                                    '& .MuiSvgIcon-root': { color:theme.palette.primary.contrastText}
                                }}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </StyledBox>

                        <Box>
                            <Box sx={{ padding: '0rem' }}>
                                <Box sx={{ textTransform: 'capitalize' }}>
                                    <Tabs sx={{


                                        '.MuiTabs-indicator': {
                                            height: 46,

                                            color: theme.palette.text.primary,
                                            background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                            borderRadius: '30px',
                                            backgroundColor: 'transparent'

                                        },
                                        '.Mui-selected': {
                                            color: "#fff !important",
                                            textTransform: 'capitalize',
                                            zIndex: '1',
                                            padding: "10px",
                                            width: 46,
                                        }
                                    }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, minWidth: '38px', minHeight: '38px', }} icon={<FormatListBulletedIcon />} {...a11yProps(0)} />
                                        <Tab sx={{ textTransform: 'capitalize', color: theme.palette.text.primary, minWidth: '38px', minHeight: '38px', }} icon={<WindowIcon />} {...a11yProps(1)} />

                                    </Tabs>
                                </Box>
                            </Box>
                        </Box>

                    </Box>


                </Grid>
            </Grid>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{padding:'1.5rem 0rem'}}>
                <ListTable />
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TableCard />
            </CustomTabPanel>
        </Box>
    );
}

export default HomeTable;