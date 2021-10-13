import { createMuiTheme } from '@material-ui/core/styles';

const white = "#fff";
const black = "#101010";
const gray = "#888";

const bg1 = "#fff";
const bg2 = "#f7f7f7";

export default createMuiTheme({
    palette: {
        common: {
            white: `${white}`,
            black: `${black}`,
            gray: `${gray}`
        },
        primary: {
            main: `${white}`
        },
        secondary: {
            main: `${black}`
        },
        background: {
            bg1: `${bg1}`,
            bg2: `${bg2}`
        },
    },
    typography: {
        h1: {
            fontFamily: "Oswald, sans-serif",
            fontSize: "30px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontWeight: 500,
            lineHeight: 1.5,
            color: black,
        },
        h2: {
            fontFamily: "Oswald, sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "5px",
            fontWeight: 400,
            lineHeight: 1.5,
            color: gray,
        },
        h3: {
            fontFamily: "Rambla, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: 1.5,
            color: black,
        },
        subtitle1: {
            fontFamily: "Rambla, sans-serif",
            fontSize: "15px",
            fontWeight: "bold",
            lineHeight: 1.75,
            color: black,
        },
        subtitle2: {
            fontFamily: "Rambla, sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.75,
            color: gray,
        },
        body1: {
            fontFamily: "Oswald",
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.5,
            color: gray,
        },
        body2: {
            fontFamily: "Rambla",
            fontSize: "2.5rem",
            fontWeight: 700,
            lineHeight: 1.5,
            color: black,
        },
    },
    overrides: {

    }
})