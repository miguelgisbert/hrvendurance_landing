import { createTheme } from "@mui/material/styles"
import { caES, esES, enUS } from "@mui/material/locale"
import translations from "./translations.js"
import './index.css'

function createMyTheme(language, mode) {
    const locales = {
        en: enUS,
        es: esES,
        ca: caES,
    }
    const currentLocale = locales[language]

    const primaryColor = "#fefce6";
    const secondaryColor = "#18a7ad";
    const backgroundColor = mode === "dark" ? "#33332d" : "#e1e1e1";
    const headerColor = mode === "dark" ? "#33332d" : "linear-gradient(to right, #18a7ad, #33332d)";
    const cardBackgroundColor = mode === "dark" ? "#3E3E38" : "#18a7ad";

    const theme = createTheme(
      {
        palette: {
          mode: mode,
          primary: { main: primaryColor },
          secondary: { main: secondaryColor },
          background: {
            main: backgroundColor, 
            header: headerColor,
            cardBackground: cardBackgroundColor, 
          }
        },
        typography: {
          fontFamily: "'Montserrat', sans-serif",
        },
        components: {
          MuiTypography: {
            defaultProps: {
              variant: "body1",
            },
            styleOverrides: {
              root: {
                marginBottom: "1rem",
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                color: primaryColor,
              },
            },
          },
        },
      },
      currentLocale
    )
    return {theme, translations: translations[language]}
  }
  
  export default createMyTheme