import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, Switch, FormGroup, FormControlLabel } from '@mui/material';
import './App.css';
import {LanguageSwitch} from './languageSwitch'
import createMyTheme from './theme.js';
import favicon from './img/favicon.ico'; 

function App() {
  const browserLang = navigator.language || navigator.userLanguage
  const [language, setLanguage] = useState(browserLang ? browserLang : 'en')
  const currentTheme = createMyTheme(language)
  function changeLanguage(language) {
    setLanguage(language);
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <link rel="icon" href={favicon} />
      <div className="App">
        <header className="App-header">
          HRV Endurance
          <Typography>{currentTheme.translations.greeting}</Typography>
        <FormGroup>
          <FormControlLabel
            control={<LanguageSwitch defaultChecked />}
            label="Android 12"
          />
        </FormGroup>
          <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('ca')}>Català</button>
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;