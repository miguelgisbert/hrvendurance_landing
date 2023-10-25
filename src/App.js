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
  const currentTheme = createMyTheme(language)
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
      <div className="App">
        <header className="App-header">
          <Grid container height="150px" padding="20px">
            <Grid container item xs={12} md={4} height="100%" alignItems="center" justifyContent="start">
              <Box component="img" src={logo} height="100%" />
            </Grid>
            <Grid container item xs={12} md={4} alignItems="end" justifyContent="center">
              <Typography color={currentTheme.palette.primary.main}>{currentTheme.translations.greeting}</Typography>
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
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App