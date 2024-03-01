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
import TextCopy from '@/theme/components/textCopy';

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
    backgroundColor: theme.palette.background.default, padding: '4px 10px 4px 10px', borderRadius: '6px', cursor: 'pointer'
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
) {
    return { validator, stake, daligator, fee, apr, cp, };
}



export default function StakeTable() {
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
    const textToCopy = "This is the text to be copied.";

    const rows = [
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_One><TextCopy text={textToCopy} address={"0xc...179d986a8d"} /></FlexBox_One></FlexBox>,
            <Typography>19,117,695</Typography>,
            <Typography>15 <Typography component={'span'} color={'#999'}>hrs ago</Typography></Typography>,
            <FlexBox_two><FlexBox_One><TextCopy text={textToCopy} address={"0xf...03A7Eb46d"} /></FlexBox_One><FlexBox_three><Typography>8</Typography></FlexBox_three></FlexBox_two>,
            <Typography>Reward Withdrawal</Typography>,
            <Typography>271 <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography>
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
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }}>TxHash</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Block <Box component={'span'}></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Age <Box component={'span'}></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Delegator</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Action <Box component={'span'}></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Amount <Box component={'span'}></Box></TableCell>
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
                            


                        </TableRow>
                    ))}
                </TableBody>
                {/* {isArrow && <Typography>dummytext</Typography>} */}
            </Table>
        </TableContainer>
    );
}