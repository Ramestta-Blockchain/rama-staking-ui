 
import { ColorModeContext } from "@/app/layout";
import { Pagination, Stack, useTheme } from "@mui/material"
import { useContext } from "react";

const PaginationTwoCount =()=>{
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return(
        <>
         <Stack spacing={2} alignItems={'center'}>
                        <Pagination 
                        sx={{
                           
                            '& .MuiPaginationItem-root': {
                                color:theme.palette.primary.contrastText, // Change the custom color here
                                backgroundColor: theme.palette.mode === "dark" ? "#E3E1EB" : "#2A2A30",
                                minWidth:'40px',
                                height:'44px',
                                lineHeight:'2.43',
                                borderRadius:'4px',
                                '@media(max-width : 600px)':{
                                    minWidth:'28px',
                                    height:'32px',
                                },
                                '&:hover': {
                                    backgroundColor:theme.palette.secondary.main,
                                  },
                              },
                              '& .Mui-selected': {
                                
                                background: 'linear-gradient(0deg, #932AC3, #7B35D8)', // Change the active background color here
                                '&:hover': {
                                    background: 'linear-gradient(0deg, #932AC3, #7B35D8)', // Change the active background color here
                                  },
                              },
                              
                        }} count={2} shape="rounded" />
                    </Stack>
        </>
    )
}

export default PaginationTwoCount;