import { Box, InputBase, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useContext } from "react";
import { ColorModeContext } from "@/app/layout";
 

interface props{
    placeholder_Text:any;
}

const SearchCustom = ({placeholder_Text}:props) => {
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                backgroundColor: theme.palette.info.main,
                border: theme.palette.info.contrastText,
                borderRadius:'6px',
                padding: '6px'
            }}>
                <SearchIcon sx={{ color: theme.palette.primary.contrastText, opacity: '30%' }} />
                <InputBase
                    sx={{
                        flex: 1, color: theme.palette.primary.contrastText,
                        width: '100%',

                    }}
                    placeholder={placeholder_Text}
                    type="search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Box>
        </>
    )
}

export default SearchCustom;