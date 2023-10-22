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
    const currentTranslations = translations[language];
    const theme = createTheme(
      {
        palette: {
          primary: { main: '#1976d2' },
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
        translations: currentTranslations, 
      },
      currentLocale
    );
    return theme;
  }
  
  export default createMyTheme;