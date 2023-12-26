import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';


export const LanguageSwitch = styled(Switch)(({ theme, language }) => ({
    padding: 8,
    color: theme.palette.primary.main,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        content: language === "ca" ? '"CA"' : language === "es" ? '"ES"': '"EN"',
        fontSize: '12px',
        lineHeight: '15px',
        position: "absolute",
        left: 12,
        color: theme.palette.secondary.main,
      },
      '&:after': {
        content: language === "ca" ? '"CA"' : language === "es" ? '"ES"': '"EN"',
        fontSize: '12px',
        lineHeight: '15px',
        right: 12,
        color: theme.palette.secondary.main,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
      backgroundColor: theme.palette.secondary.main,
    },
  }));