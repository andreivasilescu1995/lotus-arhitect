import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        "fontFamily": `"Poppins", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'rgba(0,0,0,0.5)'
                },
            },
        }
    }
});

export default theme;