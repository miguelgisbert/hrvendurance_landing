import React, {useRef, useEffect} from 'react'
import { Grid, Box, Typography, FormGroup, FormControlLabel } from '@mui/material'
import {LanguageSwitch} from './languageSwitch'
import logo from '../img/logoHorizontal.svg'

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
            const maxScroll = 400;
            const initialTranslate = 200;
            const translate = Math.max(0, initialTranslate - (scrollY / maxScroll) * initialTranslate);
            group1Ref.current.style.transform = `translate(${translate}px, ${translate}px)`;
            group2Ref.current.style.transform = `translate(${translate}px, ${translate}px)`;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <Grid container height="150px" padding="30px 50px" position="fixed">
            <Grid container item xs={12} md={4} alignItems="center" justifyContent="start">
                <svg style={{ maxHeight: "50px", overflow: "visible" }} width="442.51" height="120.47" version="1.1" viewBox="0 0 442.51 120.47" xmlns="http://www.w3.org/2000/svg">
                    <g ref={group1Ref} transform="translate(200,200)" fill="#fefce6">
                        <path d="m52.21 60.39-51.02-29.58a0.39 0.39 0 0 1-0.19-0.33v-29.1a0.39 0.39 0 0 1 0.59-0.34l102.35 59.35a0.39 0.39 0 0 1 0 0.68l-102.34 59.31a0.39 0.39 0 0 1-0.59-0.34l-0.01-29.08a0.39 0.39 0 0 1 0.19-0.33l51.02-29.56a0.39 0.39 0 0 0 0-0.68z"/>
                        <path d="m125.44 60.38-50.99-29.56a0.4 0.4 0 0 1-0.2-0.35v-29.08a0.4 0.4 0 0 1 0.6-0.34l102.34 59.33a0.4 0.4 0 0 1 0 0.7l-102.34 59.3a0.4 0.4 0 0 1-0.6-0.34v-29.07a0.4 0.4 0 0 1 0.2-0.35l50.99-29.54a0.4 0.4 0 0 0 0-0.7z"/>
                    </g>
                    <g ref={group2Ref} transform="translate(200,200)" fill="#fefce6">
                        <path d="m226.76 48.54v29.07a0.35 0.35 0 0 1-0.35 0.35h-13.84a0.35 0.35 0 0 1-0.35-0.35v-68.8a0.35 0.35 0 0 1 0.35-0.35h13.83a0.35 0.35 0 0 1 0.35 0.35l0.01 26.99a0.35 0.35 0 0 0 0.35 0.35h29.61a0.35 0.35 0 0 0 0.35-0.35l-0.01-26.99a0.35 0.35 0 0 1 0.35-0.35h13.88a0.35 0.35 0 0 1 0.35 0.35v68.79a0.35 0.35 0 0 1-0.35 0.35l-13.87 0.01a0.35 0.35 0 0 1-0.35-0.35l-0.01-29.07a0.35 0.35 0 0 0-0.35-0.35h-29.6a0.35 0.35 0 0 0-0.35 0.35z"/>
                        <path d="m312.49 52 0.01 25.35q0.01 0.61-0.6 0.61l-13.31 0.01q-0.64 0-0.64-0.64l0.02-68.35q0-0.46 0.47-0.47 26.63-0.19 37.28 0c11.14 0.2 21.4 5.83 22.73 17.94q1.77 16.18-14.46 22.34-0.52 0.2-0.22 0.66l18.01 27.95q0.36 0.56-0.3 0.56h-15.23a0.92 0.93 74.4 0 1-0.79-0.44l-15.54-25.46a1.06 1.04 73.8 0 0-0.89-0.5l-16.1-0.01q-0.44 0-0.44 0.45zm-0.01-31.92 0.04 19.86a0.32 0.32 0 0 0 0.32 0.32l20.48-0.04a9.37 10.66 89.9 0 0 10.64-9.39v-1.76a9.37 10.66 89.9 0 0-10.68-9.35l-20.48 0.04a0.32 0.32 0 0 0-0.32 0.32z"/>
                        <path d="m410.7 65.48a0.04 0.04 0 0 0 0.08 0q8.44-28.46 17.76-56.53 0.17-0.49 0.69-0.49h13.83q0.61 0 0.4 0.57l-25.18 68.53q-0.15 0.4-0.58 0.4h-13.9q-0.44 0-0.59-0.41l-25.34-68.55q-0.2-0.54 0.38-0.54h13.94q0.48 0 0.63 0.45 9.71 28.1 17.88 56.57z"/>
                        <path d="m412.75 103.87c-1.73-3.14-5.22-4.19-8.5-3.37-7.03 1.75-7.73 12.27-2.84 16.42 3.85 3.26 9.32 2.1 11.89-2.32q0.34-0.58 0.96-0.31l1.46 0.62a0.6 0.6 0 0 1 0.26 0.88q-5.32 8-14.28 4.71c-8.99-3.31-8.92-18.96 0.7-22.17 4.59-1.53 11.08-0.37 13.34 4.6q0.23 0.51-0.3 0.69l-1.78 0.6q-0.6 0.21-0.91-0.35z"/>
                        <path d="m213.09 101.08-0.06 6.44a0.44 0.44 0 0 0 0.44 0.44h12.5a0.44 0.44 0 0 1 0.44 0.47l-0.1 1.62a0.44 0.44 0 0 1-0.44 0.41h-12.37a0.44 0.44 0 0 0-0.44 0.44v7.1a0.44 0.44 0 0 0 0.44 0.44l14.02 0.01a0.44 0.44 0 0 1 0.44 0.44l0.02 1.63a0.44 0.44 0 0 1-0.44 0.44h-17.15a0.44 0.44 0 0 1-0.44-0.44l0.01-22.01a0.44 0.44 0 0 1 0.44-0.44l16.47 0.02a0.44 0.44 0 0 1 0.44 0.44v1.67a0.44 0.44 0 0 1-0.44 0.44h-13.34a0.44 0.44 0 0 0-0.44 0.44z"/>
                        <path d="m237.94 102.66 0.04 17.8q0.01 0.51-0.51 0.51l-1.63-0.01q-0.62 0-0.62-0.63v-21.67q0-0.56 0.55-0.57l2.43-0.03q0.58 0 0.9 0.49l11.53 18.26q0.39 0.63 0.39-0.11l-0.07-17.96q0-0.74 0.74-0.69l1.52 0.09q0.54 0.03 0.54 0.56l-0.01 21.62q0 0.63-0.63 0.64l-2.56 0.01q-0.52 0-0.8-0.45l-11.3-18.01q-0.51-0.82-0.51 0.15z"/>
                        <path d="m262.24 98.47a0.39 0.39 0 0 1 0.39-0.39l8.5 0.02a10.77 10.75 0.1 0 1 10.75 10.77v1.38a10.77 10.75 0.1 0 1-10.79 10.73l-8.5-0.02a0.39 0.39 0 0 1-0.39-0.39zm3.01 2.46 0.06 17.2a0.37 0.37 0 0 0 0.37 0.37l4.94-0.02a8.08 8.13 89.8 0 0 8.1-8.1v-1.78a8.08 8.13 89.8 0 0-8.16-8.06l-4.94 0.02a0.37 0.37 0 0 0-0.37 0.37z"/>
                        <path d="m292.48 113.45c0.04 6.96 11.94 7.23 12.29 0.24q0.37-7.45 0.36-14.98 0-0.61 0.61-0.62l1.88-0.01q0.58 0 0.58 0.58c0.03 5.3 1.05 14.75-1.52 18.8-3.36 5.3-13.54 5.23-16.42-0.64-1.91-3.89-1-13.07-1.01-18.11a0.61 0.6 89.5 0 1 0.59-0.61l1.93-0.02q0.65-0.01 0.65 0.65 0.01 7.38 0.06 14.72z"/>
                        <path d="m319.52 112.06 0.02 8.25q0 0.64-0.64 0.65h-1.8q-0.63 0-0.63-0.62v-21.64q0-0.54 0.55-0.56 5.64-0.19 11.2 0.02c8.24 0.32 9.83 9.79 2.11 12.95q-0.52 0.21-0.21 0.68l5.69 8.55q0.42 0.63-0.34 0.63l-2.43-0.02a0.82 0.81 74.3 0 1-0.7-0.4l-5.38-8.64q-0.28-0.45-0.81-0.45h-6.03q-0.6 0-0.6 0.6zm-0.01-11.19 0.02 7.84a0.29 0.29 0 0 0 0.29 0.29l7.72-0.03a4.04 4.65 89.8 0 0 4.64-4.05v-0.34a4.04 4.65 89.8 0 0-4.66-4.03l-7.72 0.03a0.29 0.29 0 0 0-0.29 0.29z"/>
                        <path d="m356.77 114.26-9.34-0.01q-0.55 0-0.75 0.5l-2.18 5.61q-0.23 0.6-0.88 0.6h-1.99q-0.6 0-0.38-0.56l8.62-21.08a2.44 2.44 0 0 1 4.52 0.01l8.45 21.02q0.24 0.61-0.41 0.61l-1.96 0.01q-0.55 0-0.75-0.52l-2.22-5.7a0.77 0.79 79.7 0 0-0.73-0.49zm-0.84-2.38a0.31 0.31 0 0 0 0.29-0.42l-3.83-9.93a0.31 0.31 0 0 0-0.58 0l-3.82 9.88a0.31 0.31 0 0 0 0.29 0.42z"/>
                        <path d="m384.78 116.72-0.07-18.09q-0.01-0.62 0.6-0.58l1.53 0.09q0.65 0.04 0.65 0.69l0.01 21.62q0 0.51-0.52 0.51h-2.7a0.92 0.9 73.7 0 1-0.77-0.43l-11.42-18.19q-0.42-0.68-0.42 0.12l0.07 17.73q0 0.75-0.75 0.76l-1.51 0.02q-0.51 0.01-0.51-0.5v-21.85q0-0.6 0.59-0.58l2.46 0.07q0.56 0.02 0.86 0.49l11.5 18.24q0.4 0.64 0.4-0.12z"/>
                        <path d="m426.36 101.11-0.09 6.35a0.46 0.46 0 0 0 0.45 0.46l12.58 0.08a0.46 0.46 0 0 1 0.45 0.51l-0.16 1.52a0.46 0.46 0 0 1-0.46 0.41l-12.33 0.03a0.46 0.46 0 0 0-0.46 0.46l-0.02 7.05a0.46 0.46 0 0 0 0.46 0.46l13.99 0.08a0.46 0.46 0 0 1 0.45 0.36l0.26 1.27a0.46 0.46 0 0 1-0.44 0.55l-17.35 0.32a0.46 0.46 0 0 1-0.47-0.46v-22.04a0.46 0.46 0 0 1 0.46-0.46l16.43 0.04a0.46 0.46 0 0 1 0.46 0.47l-0.05 1.6a0.46 0.46 0 0 1-0.46 0.45l-13.24 0.04a0.46 0.46 0 0 0-0.46 0.45z"/>
                    </g>
                </svg>

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