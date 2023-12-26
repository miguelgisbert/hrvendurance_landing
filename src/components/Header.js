import React, {useRef, useEffect, useState} from 'react'
import { Grid, Box, Typography, FormGroup, FormControlLabel, Card } from '@mui/material'
import {LanguageSwitch} from './languageSwitch'
import {ThemeModeSwitch} from './themeModeSwitch'
import logoPart1 from '../img/logoPart1.svg'
import logoPart2 from '../img/logoPart2.svg'

function Header ({setLanguage, theme, translations, language, themeMode, toggleThemeMode}) {

    const en = useRef()
    const es = useRef()
    const ca = useRef()
    const handleChangeLanguage = (event) => {
        let language = event.target.value
        setLanguage(language)
        event.target.checked = true
    }

    const [mainLogoBGopacity, setMainLogoBGopacity] = useState(1)
    
    const group1Ref = useRef()
    const group2Ref = useRef()
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY
          const maxScroll = 500
          const initialTop = window.innerHeight * 0.5
          const initialLeft1 = window.innerWidth * 0.2
          const initialLeft2 = window.innerWidth * 0.2
          const finalTop1 = 50
          const finalTop2 = 41
          const finalLeft1 = 50
          const finalLeft2 = 190
          const initialSize = 235
          const finalSize1 = initialSize / 2
          const finalSize2 = initialSize / 1.7
          const size1 = Math.max(finalSize1, initialSize - (scrollY / maxScroll) * initialSize)
          const size2 = Math.max(finalSize2, initialSize - (scrollY / maxScroll) * initialSize)
          const top1 = scrollY >= maxScroll ? finalTop1 : initialTop - (scrollY / maxScroll) * (initialTop - finalTop1)
          const top2 = scrollY >= maxScroll ? finalTop2 : initialTop - (scrollY / maxScroll) * (initialTop - finalTop2)
          const left1 = scrollY >= maxScroll ? finalLeft1 : initialLeft1 - (scrollY / maxScroll) * (initialLeft1 - finalLeft1)
          const left2 = scrollY >= maxScroll ? finalLeft2 : initialLeft2 - (scrollY / maxScroll) * (initialLeft2 - finalLeft2)
          const transformValue = Math.max(0, 100 - (scrollY / maxScroll) * 100)
          const BGopacity = Math.max(0, 1 -(scrollY / maxScroll))
          group1Ref.current.style.top = `${top1}px`
          group1Ref.current.style.left = `${left1}px`
          group1Ref.current.style.width = `${size1}px`
          group1Ref.current.style.transform = `translate(0, calc(-${transformValue}% - 14px))`
          group2Ref.current.style.top = `${top2}px`
          group2Ref.current.style.left = `${left2}px`
          group2Ref.current.style.width = `${size2}px`
          setMainLogoBGopacity(BGopacity)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])

    return (
        <Grid container component="header" zIndex="1000" height="150px" padding="30px 50px" position="fixed" sx={{ background: theme => theme.palette.background.header }}>
            <Grid container item xs={12} md={4} alignItems="center" justifyContent="start">
                <Box component="img" src={logoPart1} ref={group1Ref} sx={{ width:"235px", position:"fixed", zIndex:"10", top:"50%", left:"20%", transform: "translate(0, calc(-100% - 14px))" }} />
                <Box component="img" src={logoPart2} ref={group2Ref} sx={{ width:"235px", position:"fixed", zIndex:"10", top:"50%", left:"20%" }} />
                {theme.palette.mode !== "dark" && (
                  <Card sx={{ opacity: mainLogoBGopacity, width:"350px", height:"350px", position:"fixed", top: "50%", left: "20%", zIndex: 1, transform: "translate(-18%, -58%)", backgroundColor: theme => theme.palette.secondary.main}}></Card>
                )}
            </Grid>
            <Grid container item xs={12} md={4} alignItems="end" justifyContent="center">
              <Typography color={theme.palette.primary.main}>{translations.greeting}</Typography>
            </Grid>
            <Grid container item xs={12} md={4} >
              <Grid container item xs={12} alignItems="end" justifyContent="end">
                <ThemeModeSwitch
                  checked={themeMode === 'dark'}
                  onChange={toggleThemeMode}
                  themeMode={themeMode}
                  sx={{ marginRight: "80px" }}
                  classes={{ root: 'my-root' }} 
                  inputProps={{ 'aria-label': 'toggle theme' }}
                />
              </Grid>
              <Grid container item xs={12} alignItems="end" justifyContent="end">
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
        </Grid>
    )
}

export default Header