import { createTheme } from '@mui/material/styles';
import { caES, esES, enUS } from '@mui/material/locale';
import translations from './translations.js';

function createMyTheme(language) {
    const locales = {
        en: enUS,
        es: esES,
        ca: caES,
    };
    const currentLocale = locales[language];
    console.log("translations", translations)
    const theme = createTheme(
      {
        palette: {
          primary: { main: '#fefce6' },
          secondary: { main: '#18a7ad' },
          background: {
            main: '#33332d', 
            alternative: "#e1e1e1",
            cardBackground: '#3E3E38', 
            cardBackgroundAlternative: "#e1e1e1"
          }
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
        components: {
          MuiTypography: {
            defaultProps: {
              variant: 'body1',
            },
            styleOverrides: {
              root: {
                marginBottom: '1rem',
              },
            },
          },
        },
      },
      currentLocale
    );
    return {theme, translations: translations[language]};
  }
  
  export default createMyTheme;