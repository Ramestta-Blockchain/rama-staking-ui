import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography, styled, useTheme } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
import Overview from "@/theme/components/overview";
import SubHeading from "@/theme/components/subHeading";
 
const StyledBox = styled(Box)(({ theme }) => ({
     
    '@media(max-width : 600px)': {
        py: 2,
    }
}));

const Faqscmp = () => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <StyledBox>
                 
                <Overview text={'Validators'} href={'/'} />
                <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
                    <SubHeading text={'FAQs'} />
                </Box>
                <Grid container spacing={2}>
                    <Grid item lg={1.5} md={1.5} sm={12} xs={12}></Grid>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }} >
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                What is a Delegator?
                            </AccordionSummary>
                            <AccordionDetails>
                                Deploy a dApp on the widely adopted Ramestta Proof-of-Stake protocol, an EVM-compatible environment optimized for high throughput and low transaction fees.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                What is a Validator?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How should I decide which Validator to stake with?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How do I stake my RAMA?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                What happens to my RAMA when I stake it?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How long do I need to stake RAMA for?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How many rewards can I earn?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How do I see my Rewards?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How can I withdraw my RAMA?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            sx={{
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: '6px',
                                boxShadow: 'inherit',
                                marginTop: '1rem',
                                '&.Mui-expanded': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                    marginTop: '1rem',
                                    // color:'#fff'
                                },
                            }}>
                            <AccordionSummary
                                sx={{
                                    fontWeight: 700
                                }}
                                expandIcon={<SouthIcon sx={{ color: theme.palette.primary.contrastText }} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                How can I become a Validator?
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item lg={1.5} md={1.5} sm={12} xs={12}></Grid>
                </Grid>

            </StyledBox>
        </>
    )
}

export default Faqscmp