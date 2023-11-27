import React, {useRef, useEffect} from 'react'
import { Grid, Box, Typography, FormGroup, FormControlLabel } from '@mui/material'
import {LanguageSwitch} from './languageSwitch'
import logoPart1 from '../img/logoPart1.svg'
import logoPart2 from '../img/logoPart2.svg'

function Header ({setLanguage, theme, translations, language}) {

    const en = useRef()
    const es = useRef()
    const ca = useRef()
    const handleChangeLanguage = (event) => {
        let language = event.target.value
        setLanguage(language);
        event.target.checked = true
    }
    
    const group1Ref = useRef();
    const group2Ref = useRef();
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const maxScroll = 500;
          const initialTop = window.innerHeight * 0.5; // pixels
          const initialLeft1 = window.innerWidth * 0.2; // pixels
          const initialLeft2 = window.innerWidth * 0.2; // pixels
          const finalTop = 30; // pixels
          const finalLeft1 = 50; // pixels
          const finalLeft2 = 190; // pixels
          const initialSize = 235; // pixels
          const finalSize = initialSize / 2; // pixels
          const size = Math.max(finalSize, initialSize - (scrollY / maxScroll) * initialSize);
          const top = scrollY >= maxScroll ? finalTop : initialTop - (scrollY / maxScroll) * (initialTop - finalTop);
          const left1 = scrollY >= maxScroll ? finalLeft1 : initialLeft1 - (scrollY / maxScroll) * (initialLeft1 - finalLeft1);
          const left2 = scrollY >= maxScroll ? finalLeft2 : initialLeft2 - (scrollY / maxScroll) * (initialLeft2 - finalLeft2);
          const transformValue = Math.max(0, 100 - (scrollY / maxScroll) * 100);
          group1Ref.current.style.top = `${top}px`;
          group1Ref.current.style.left = `${left1}px`;
          group1Ref.current.style.width = `${size}px`;
          group1Ref.current.style.transform = `translate(0, calc(-${transformValue}% - 14px))`;
          group2Ref.current.style.top = `${top}px`;
          group2Ref.current.style.left = `${left2}px`;
          group2Ref.current.style.width = `${size}px`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <Grid container height="150px" padding="30px 50px" position="fixed">
            <Grid container item xs={12} md={4} alignItems="center" justifyContent="start">
                <Box component="img" src={logoPart1} ref={group1Ref} sx={{ width:"235px", position:"fixed", top:"50%", left:"20%", transform: "translate(0, calc(-100% - 14px))" }} />
                <Box component="img" src={logoPart2} ref={group2Ref} sx={{ width:"235px", position:"fixed", top:"50%", left:"20%" }} />
            </Grid>
            <Grid container item xs={12} md={4} alignItems="end" justifyContent="center">
              <Typography color={theme.palette.primary.main}>{translations.greeting}</Typography>
            </Grid>
            <Grid container item xs={12} md={4} alignItems="end" justifyContent="end">
              <FormGroup sx={{ display:"flex", flexDirection:"row" }}>
                <FormControlLabel
                  control={<LanguageSwitch ref={ca} checked={language === "ca"} language="ca" value="ca" onClick={handleChangeLanguage} />}
                  />
                <FormControlLabel
                  control={<LanguageSwitch ref={es} checked={language === "es"} language="es" value="es" onClick={handleChangeLanguage} />}
                  />
                <FormControlLabel
                  control={<LanguageSwitch ref={en} checked={language === "en"} language="en" value="en" onClick={handleChangeLanguage} />}
                  />
              </FormGroup>
            </Grid>
        </Grid>
    )
}

export default Header