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
import rd from '../../icons/rd.svg'
import rl from '../../icons/rl.svg'
import PaginationTwoCount from '@/theme/components/paginationTwoCount';
import ShowTableDropdown from '@/theme/components/showTableDropdown';
import ShowDropList from '@/theme/components/showDropList';

const FlexBox = styled(Box)(({ theme }) => ({
    display: 'flex', alignItems: 'center', gap: '10px'
}));
const StyledMainBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '1rem',
    borderRadius: '8px'
}));





function createData(
    validator: any,
    stake: any,
    daligator: any,
    fee: any,

) {
    return { validator, stake, daligator, fee, };
}



export default function StatsGraphTable() {
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
            <Box>
                <Typography>Feb 07, 2024</Typography>
                <Typography fontSize={13} color={'#999'}>22:30:00 - 23:29:59</Typography>
            </Box>,
            <Typography>1</Typography>,
            <Typography>0</Typography>,
            <Typography>100%</Typography>,
        ),
        createData(
            <Box>
                <Typography>Feb 07, 2024</Typography>
                <Typography fontSize={13} color={'#999'}>22:30:00 - 23:29:59</Typography>
            </Box>,
            <Typography>1</Typography>,
            <Typography>0</Typography>,
            <Typography>100%</Typography>,
        ),
        createData(
            <Box>
                <Typography>Feb 07, 2024</Typography>
                <Typography fontSize={13} color={'#999'}>22:30:00 - 23:29:59</Typography>
            </Box>,
            <Typography>1</Typography>,
            <Typography>0</Typography>,
            <Typography>100%</Typography>,
        ),
        createData(
            <Box>
                <Typography>Feb 07, 2024</Typography>
                <Typography fontSize={13} color={'#999'}>22:30:00 - 23:29:59</Typography>
            </Box>,
            <Typography>1</Typography>,
            <Typography>0</Typography>,
            <Typography>100%</Typography>,
        ),
        createData(
            <Box>
                <Typography>Feb 07, 2024</Typography>
                <Typography fontSize={13} color={'#999'}>22:30:00 - 23:29:59</Typography>
            </Box>,
            <Typography>1</Typography>,
            <Typography>0</Typography>,
            <Typography>100%</Typography>,
        ),






    ];
    return (

        <TableContainer sx={{ backgroundColor: 'transparent', boxShadow: 'inherit' }} component={Paper}>
            <Table sx={{

                boxShadow: 'inherit'
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }}>Date</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Signed <Box component={'span'}></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Missed <Box component={'span'}></Box></TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Sign %</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.validator}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                        >
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black, padding: '4px 16px' }} component="th" scope="row">
                                {row.validator}
                            </TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black, padding: '4px 16px' }} align="left">{row.stake}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black, padding: '4px 16px' }} align="left">{row.daligator}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black, padding: '4px 16px' }} align="left">{row.fee}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginTop: '15px' }}>
                <ShowDropList />
                <PaginationTwoCount />

            </Box>
        </TableContainer>

    );
}