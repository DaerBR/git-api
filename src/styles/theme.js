import { createMuiTheme } from "@material-ui/core/styles";

const themeSettings = createMuiTheme({
    palette: {
        primary: {
            light: '#bebfdd',
            main: '#91929d',
            dark: '#4b5358',
            contrastText: '#fff',
            active: '#fff',
        },
        secondary: {
            light: '#9b9b9b',
            main: '#4c4b4b',
            dark: '#000000',
            contrastText: '#ffffff',
        },
    },
});

export default themeSettings;