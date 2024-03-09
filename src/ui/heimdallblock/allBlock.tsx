import { Box, Grid, Slider, Typography, styled } from "@mui/material";
import { useState } from "react";


const StyledSlider = styled(Slider)(
    ({ theme }) => `
    .MuiSlider-root {
        background-color: red;
        padding:5px
      }
    .MuiSlider-rail {
      background-color: #41236B;
      padding:4px
    }
    .MuiSlider-track {
      background: linear-gradient(0deg, #932AC3, #7B35D8);
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #932AC3, #7B35D8);
      }
  `
);

const AllBlock = () => {
    const [value, setValue] = useState<number[]>([90,]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <>
            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item lg={2} md={2} sm={12} xs={12}>
                        <Typography variant="h5">All blocks</Typography>
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
                    <Grid item lg={1} md={1} sm={2} xs={3}>
                        <Typography fontWeight={500}>Signers</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={10} xs={9}>
                        <Box>
                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between',
                                gap: '1rem',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <StyledSlider
                                    value={value}
                                    onChange={handleChange}
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={100}
                                />
                                <Typography>{value}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


            </Box>
        </>
    )
}

export default AllBlock;