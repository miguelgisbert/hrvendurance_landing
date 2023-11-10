import React, { useState, useRef } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Grid, Box, Typography, FormGroup, FormControlLabel } from '@mui/material'
import './App.css';
import {LanguageSwitch} from './languageSwitch'
import createMyTheme from './theme.js'
import favicon from './img/favicon.ico'
import logo from './img/logoHorizontal.svg'

function App() {
  const browserLang = navigator.language || navigator.userLanguage
  const [language, setLanguage] = useState(browserLang ? browserLang : 'en')
  const {theme: currentTheme, translations} = createMyTheme(language)
  console.log(currentTheme)
  const en = useRef()
  const es = useRef()
  const ca = useRef()
  const handleChangeLanguage = (event) => {
    let language = event.target.value
    setLanguage(language);
    event.target.checked = true
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <link rel="icon" href={favicon} />
        <Grid container height="100vh" sx={{ backgroundColor: theme => theme.palette.background.main }}>
          <Grid container height="150px" padding="20px">
            <Grid container item xs={12} md={4} alignItems="center" justifyContent="start">
              <Box component="img" src={logo} maxHeight="80px" />
            </Grid>
            <Grid container item xs={12} md={4} alignItems="end" justifyContent="center">
              <Typography color={currentTheme.palette.primary.main}>{translations.greeting}</Typography>
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
          <Grid container alignItems="center" justifyContent="end" padding="30px" spacing="30px">
            <Grid item xs={5} sx={{ color: theme => theme.palette.primary.main, height:"100%" }}>
              <Typography>Mide Entrena Mejora
                Mide tu estado y define tu rutina a diario según tu VFC.
                En vez de usar rutinas predefinidas respeta tus ciclos fisiológicos y mejora tu rendimiento con esta nueva metodología validada en numerosos ensayos científicos.</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="top" justifyContent="center" padding="30px" spacing="30px"  sx={{ color: theme => theme.palette.primary.main }}>
            <Grid item xs={4} maxWidth="350px!important">
              <Typography>Mide</Typography>
              <Typography>Mide tu Variabilidad de Frecuencia Cardíaca usando la cámara de tu móvil con máxima precisión comprobada. Evita problemas de compatibilidad con pulsómetros y gastos extra.</Typography>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important">
              <Typography>Entrena</Typography>
              <Typography>Recibe diariamente una planificación de tu sesión de entrenamiento de resistencia en función de tu VFC respetando así tus días más flojos y aprovechando los más fuertes.</Typography>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important">
              <Typography>Mejora</Typography>
              <Typography>Aprovecha la metodología de entrenamiento basado en VFC que ha demostrado obtener mayores mejoras que la planificación predefinida estándar en numerosos ensayos científicos.</Typography>
            </Grid>
          </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default App