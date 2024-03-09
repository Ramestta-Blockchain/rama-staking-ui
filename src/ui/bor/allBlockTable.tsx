'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress, Slider, Tooltip, Typography, styled, useTheme } from '@mui/material';
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
    address: any,
    reward: any,
) {
    return { validator, stake, daligator, fee, apr, address, reward };
}

const LinearProgressbar = styled(LinearProgress)(
    ({ theme }) => `
    
    .MuiLinearProgress-bar {
        background-color: #41236B;
      }
  `
);

export default function AllBlockTable() {

    const [isToggled, setIsToggled] = useState(false);
    const [isArrow, setIsArrow] = useState(false);

    const [value, setValue] = useState([20, 60]); // initial values for the slider






    const upperBoundTooltip = (
        <Tooltip title={`Gas used: 69.57%
        % of Gas Target: +39.13%`} placement="top">
            <LinearProgressbar
                sx={{
                    '&.MuiLinearProgress-root': {
                        backgroundColor: '#2A2A30',
                        height: '20px',
                        borderRadius: '20px',
                        padding: '15px 0px',

                    }
                }}

                variant="determinate"
                value={((100 - value[1]) / 100) * 100}
                style={{ width: '100%', marginTop: '-5px' }}
            />
        </Tooltip>
    );

    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    const rows = [
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

        ),
        createData(
            <Typography color={'#922BC4'}>53009746</Typography>,
            <Typography>25 <Typography component={'span'}>secs</Typography></Typography>,
            <Typography>67</Typography>,
            <Box sx={{ position: 'relative', width: '150px' }}>
                {upperBoundTooltip}
                <Typography sx={{
                    position: 'absolute',
                    top: 5,
                    left: 6,
                    fontSize: 13
                }}>20,869,681</Typography>
            </Box>,
            <FlexBox><FlexBox_One><FlexBoxFour>34</FlexBoxFour><Image src={profile} alt='' /><Link_One href={'#'}>Synclub</Link_One></FlexBox_One> </FlexBox>,
            <TextCopy text={'0x794e44D1334...'} address={'0x794e44D1334...'} />,
            <Typography_one >99.68% <Typography component={'span'} color={'#999'}>RAMA</Typography></Typography_one>,

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
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }}>Block</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Age </TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Txn </TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Gas used</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Block producer</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Signer address</TableCell>
                        <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">Block reward</TableCell>
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
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.address}</TableCell>
                            <TableCell sx={{ color: theme.palette.primary.contrastText, borderBottom: theme.palette.common.black }} align="left">{row.reward}</TableCell>



                        </TableRow>
                    ))}
                </TableBody>
                {/* {isArrow && <Typography>dummytext</Typography>} */}
            </Table>
        </TableContainer>
    );
}