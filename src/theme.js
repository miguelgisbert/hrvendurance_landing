import { createTheme } from "@mui/material/styles"
import { caES, esES, enUS } from "@mui/material/locale"
import translations from "./translations.js"

function createMyTheme(language, mode) {
    const locales = {
        en: enUS,
        es: esES,
        ca: caES,
    }
    const currentLocale = locales[language]
    console.log("translations", translations)
    const theme = createTheme(
      {
        palette: {
          mode: mode,
          primary: { main: "#fefce6" },
          secondary: { main: "#18a7ad" },
          background: {
            main: mode === "dark" ? "#33332d" : "#e1e1e1", 
            header: mode === "dark" ? "#33332d" : "linear-gradient(to right, #18a7ad, #33332d)",
            cardBackground: mode === "dark" ? "#3E3E38" : "#18a7ad", 
          }
        },
        typography: {
          fontFamily: "Roboto, sans-serif",
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
        },
      },
      currentLocale
    )
    return {theme, translations: translations[language]}
  }
  
  export default createMyTheme