import React, { useState, useRef, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Grid, Typography, Card, Switch } from '@mui/material'
import createMyTheme from './theme.js'
import Header from './components/Header'
import useMediaQuery from '@mui/material/useMediaQuery'

function App() {
  const browserLang = navigator.language || navigator.userLanguage
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const [language, setLanguage] = useState(browserLang ? browserLang : 'en')
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light')

  const {theme: currentTheme, translations} = useMemo(() => {
    return createMyTheme(language, themeMode)
  }, [language, themeMode])

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }
  
  return (
    <ThemeProvider theme={currentTheme}>
        <Grid container sx={{ backgroundColor: theme => theme.palette.background.main }}>
          <Header setLanguage={setLanguage} theme={currentTheme} translations={translations} language={language} themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
          <Grid container height="100vh" alignItems="center" justifyContent="center" padding="30px" spacing="30px">
          
            <Grid container item xs={12} md={6} alignItems="center" justifyContent="center">
              
            </Grid>
            <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ color: theme => theme.palette.primary.main, height:"100%" }}>
              <Card item sx={{ maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography sx={{ color: theme => theme.palette.primary.main }}>Mide Entrena Mejora</Typography>
                <Typography sx={{ color: theme => theme.palette.primary.main }}>Mide tu estado y define tu rutina a diario según tu VFC. En vez de usar rutinas predefinidas respeta tus ciclos fisiológicos y mejora tu rendimiento con esta nueva metodología validada en numerosos ensayos científicos.</Typography>
              </Card>              
            </Grid>
          </Grid>

          <Grid container alignItems="top" justifyContent="center" padding="30px" spacing="30px" marginBottom="700px"  sx={{ color: theme => theme.palette.primary.main }}>
            <Grid item xs={4} maxWidth="350px!important">
              <Card item sx={{ maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography>Mide</Typography>
                <Typography>Mide tu Variabilidad de Frecuencia Cardíaca usando la cámara de tu móvil con máxima precisión comprobada. Evita problemas de compatibilidad con pulsómetros y gastos extra.</Typography>
              </Card>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important">
              <Card item sx={{ maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography>Entrena</Typography>
                <Typography>Recibe diariamente una planificación de tu sesión de entrenamiento de resistencia en función de tu VFC respetando así tus días más flojos y aprovechando los más fuertes.</Typography>
              </Card>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important">
              <Card item sx={{ maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography>Mejora</Typography>
                <Typography>Aprovecha la metodología de entrenamiento basado en VFC que ha demostrado obtener mayores mejoras que la planificación predefinida estándar en numerosos ensayos científicos.</Typography>
              </Card>
            </Grid>
          </Grid>
          
        </Grid>    
    </ThemeProvider>
  )
}

export default App