import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Typography, LocalizationProvider } from '@mui/material';
import './App.css';
import createMyTheme from './theme.js';
import DataTable from './table'

function App() {
  const [language, setLanguage] = useState('en')
  const currentTheme = createMyTheme(language)
  function changeLanguage(language) {
    setLanguage(language);
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        <header className="App-header">
          HRV Endurance
          <Typography>{currentTheme.translations.greeting}</Typography>
          <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('es')}>Español</button>
            <button onClick={() => changeLanguage('ca')}>Català</button>
          </div>
        </header>
        <DataTable />
      </div>
    </ThemeProvider>
  );
}

export default App;