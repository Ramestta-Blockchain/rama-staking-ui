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
import flr from '../../icons/flr.svg'

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
    backgroundColor: theme.palette.background.default, padding: '4px 10px 0px 10px', borderRadius: '6px', cursor: 'pointer'
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
const FlexBoxFour = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default, padding: '4px 10px 4px 10px', borderRadius: '6px',
}));
const TypographyTwo = styled('p')(({ theme }) => ({
    backgroundColor: theme.palette.background.default, padding: '4px 10px', borderRadius: '20px', display: 'inline-block'
}));


function createData(
    validator: any,
    stake: any,
    daligator: any,
    fee: any,
    apr: any,
) {
    return { validator, stake, daligator, fee, apr, };
}



export default function HeimdallTable() {
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
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        createData(
            <Typography>17399427</Typography>,
            <Typography>25 mins <Typography component={'span'}>ago</Typography></Typography>,
            <Typography>105 / 105 <Typography component={'span'}><Image src={flr} alt={''}/></Typography></Typography>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>InfStones</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x742d13f0b2a19c823bdd362b16305e4......'} address={'0x742d13f0b2a19c823bdd362b16305e4......'} />,
        ),
        
       
    ];
    return (
        <TableContainer sx={{ backgroundColor: 'transparent', boxShadow: 'inherit', marginTop: '1rem' }} component={Paper}>
            <Table sx={{
                minWidth: 650, backgroundColor: theme.palette.warning.main, border: theme.palette.warning.contrastText,
                boxShadow: 'inherit'
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }}>Number</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Age </TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Signature rate </TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Block proposer</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Proposer address </TableCell>
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



                        </TableRow>
                    ))}
                </TableBody>
                {/* {isArrow && <Typography>dummytext</Typography>} */}
            </Table>
        </TableContainer>
    );
}