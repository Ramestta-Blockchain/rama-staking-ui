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
import TextCopy from '@/theme/components/textCopy';
import vimg1 from '../../icons/vimg1.svg'
import vimg2 from '../../icons/vimg2.svg'
import vimg3 from '../../icons/vimg3.svg'
import vimg4 from '../../icons/vimg4.svg'
import { ColorModeContext } from '@/app/layout';

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center',
    gap: '10px'
}));

const FlexBox_One = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '10px'
}));
const FlexBox_two = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '8px'
}));
const FlexBox_three = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default, padding: '4px 10px 4px 10px', borderRadius: '6px',
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
) {
    return { validator, stake, daligator, fee };
}



export default function DelegatorTable() {
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
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
        createData(
            <FlexBox><FlexBox_three>8</FlexBox_three><FlexBox_One><TextCopy text={textToCopy} address={'0x40730F34668aFC...c3D376a444bBE44'} /></FlexBox_One></FlexBox>,
            <FlexBox_two><Typography>381.62M</Typography> <Typography_two  >+21.48M</Typography_two></FlexBox_two>,
            <FlexBox_two><Image src={vimg1} alt={''} /> <Image src={vimg2} alt={''} /><Image src={vimg3} alt={''} /><Image src={vimg4} alt={''} /> <Typography >+25</Typography></FlexBox_two>,
            <Typography>4 <Typography component={'span'} color={'#999'}>days ago</Typography></Typography>
        ),
    ];


    return (
        <TableContainer sx={{ backgroundColor: 'transparent', boxShadow: 'inherit',my:2 }} component={Paper}>
            <Table sx={{
                minWidth: 650, backgroundColor: theme.palette.warning.main, border: theme.palette.warning.contrastText,
                boxShadow: 'inherit'
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Delegator address</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Validators</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Total staked <Box component={'span'}><HoverTool ImageItem={theme.palette.mode === 'dark' ? tooltipl : tooltipd} Title={'Annualized staking reward rate'} /></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Last action</TableCell>
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


                        </TableRow>
                    ))}
                </TableBody>
                {/* {isArrow && <Typography>dummytext</Typography>} */}
            </Table>
        </TableContainer>
    );
}