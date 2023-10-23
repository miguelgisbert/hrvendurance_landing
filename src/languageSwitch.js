import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';


export const LanguageSwitch = styled(Switch)(({ theme }) => ({
    padding: 8,
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
        content: '"ES"',
        fontSize: '12px',
        lineHeight: '15px',
        position: "absolute",
        left: 12,
      },
      '&:after': {
        content: '"ES"',
        fontSize: '12px',
        lineHeight: '15px',
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));