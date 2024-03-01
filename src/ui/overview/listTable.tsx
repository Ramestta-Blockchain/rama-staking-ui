'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, styled, useTheme } from '@mui/material';
import tooltipd from '../../icons/tooltipd.svg'
import tooltipl from '../../icons/tooltipl.svg'
import Image from 'next/image';
import profile from '../../icons/profile.svg'
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HoverTool from '@/theme/components/hoverTool';
import { ColorModeContext } from '@/app/layout';

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', justifyContent: 'space-between'
}));

const FlexBox_One = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '10px'
}));
const FlexBox_two = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '8px'
}));
const FlexBox_three = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default, padding: '4px 10px 0px 10px', borderRadius:'6px', cursor: 'pointer'
}));
const Typography_one = styled('p')(({ theme }) => ({
    backgroundColor: theme.palette.background.default, padding: '4px 10px', borderRadius: '20px', display: 'inline-block'
}));
const Typography_two = styled('p')(({ theme }) => ({
    color: theme.palette.success.contrastText, backgroundColor: theme.palette.success.main, padding: '0.4rem 1rem', borderRadius: '20px', display: 'inline-block'
}));

const Link_One = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText, textDecoration: 'none'
}));



function createData(
    validator: any,
    stake: any,
    daligator: any,
    fee: any,
    apr: any,
    cp: any,
    heimdall: any,
    bor: any,
) {
    return { validator, stake, daligator, fee, apr, cp, heimdall, bor };
}



export default function ListTable() {
    const [isToggled, setIsToggled] = useState(false);
    const [isArrow, setIsArrow] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };


    const handleToggleArrow = () => {
        setIsArrow(!isArrow);
    };

    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    const rows = [
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),
        createData(
            <FlexBox><FlexBox_One><Typography>1</Typography><Image src={profile} alt='' /><Link_One href={'#'}>Luganodes</Link_One></FlexBox_One> <FlexBox_three onClick={handleToggleArrow}>{isArrow ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}</FlexBox_three></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Typography>104</Typography> <Typography_two >+5</Typography_two></FlexBox_two>,
            <Typography>10%</Typography>,
            <Typography>4.70%</Typography>,
            <Typography_one >99.68%</Typography_one>,
            <Typography_one>99.91%</Typography_one>,
            <FlexBox_two><Typography_one>99.89%</Typography_one><Box onClick={handleToggle}  >{isToggled ? <StarIcon sx={{ color: '#FFD600' }} /> : <StarBorderIcon sx={{ color: '#FFD600' }} />}</Box></FlexBox_two>
        ),

    ];
    return (
        <TableContainer sx={{ backgroundColor: 'transparent', boxShadow: 'inherit' }} component={Paper}>
            <Table sx={{
                minWidth: 650, backgroundColor: theme.palette.warning.main, border: theme.palette.warning.contrastText,
                boxShadow: 'inherit'
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }}>Validator</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Total Staked <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Delegators <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Fee</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">APR <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">CP <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Heimdall <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Bor <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.validator}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} component="th" scope="row">
                                {row.validator}
                            </TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.stake}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.daligator}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.fee}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.apr}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.cp}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.heimdall}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.bor}</TableCell>


                        </TableRow>
                    ))}
                </TableBody>
                {/* {isArrow && <Typography>dummytext</Typography>} */}
            </Table>
        </TableContainer>
    );
}