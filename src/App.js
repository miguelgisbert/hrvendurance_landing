import React, { useState, useRef, useEffect, useMemo } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Grid, Typography, Card, Box } from '@mui/material'
import createMyTheme from './theme.js'
import Header from './components/Header'
import useMediaQuery from '@mui/material/useMediaQuery'
import ReactCardFlip from 'react-card-flip'
import { useTransition, animated } from 'react-spring'
import heart1 from './img/heart1.svg'
import runners from './img/runners.svg'
import improve from './img/improve.svg'
import { DataGrid } from '@mui/x-data-grid'
import Chip from '@mui/material/Chip'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import { useInView } from 'react-intersection-observer'

function App() {
  const browserLang = navigator.language || navigator.userLanguage
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const [language, setLanguage] = useState(browserLang ? browserLang : 'en')
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const [isFlipped, setIsFlipped] = useState(false)

  
  const {theme: currentTheme, translations} = useMemo(() => {
    return createMyTheme(language, themeMode)
  }, [language, themeMode])
  
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }
  
  const titleBoxRef = useRef()

  // Words animation
  const words = [translations.Measure, translations.Train, translations.Improve];
  const [index, setIndex] = useState(0);
  const transitions = useTransition([words[index]], {
    from: { transform: 'translate3d(0,40px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
    keys: item => item,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(state => (state + 1) % words.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  // Icons animation
  const images = [heart1, runners, improve];
  const [imageIndex, setImageIndex] = useState(0);
  const imageTransitions = useTransition([images[imageIndex]], {
    from: { transform: 'translate3d(0,40px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
    keys: item => item,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex(state => (state + 1) % images.length);
    }, 1300);
    return () => clearInterval(interval);
  }, []);

  // Data grid
  const columns = [
    {
      field: 'Day',
      headerName: translations.Day,
      width: 150,
      sortable: false,
    },
    {
      field: 'hr',
      headerName: 'HR',
      type: 'number',
      width: 80,
      editable: true,
      sortable: false,
    },
    {
      field: 'RMSSD',
      headerName: 'RMSSD',
      type: 'number',
      width: 120,
      editable: true,
      sortable: false,
    },
    {
      field: 'MRMSSD',
      headerName: 'MRMSSD',
      type: 'number',
      width: 120,
      sortable: false,
    },
    {
      field: 'lnRMSSD',
      headerName: 'lnRMSSD',
      type: 'number',
      width: 120,
      sortable: false,
    },
    {
      field: 'MlnRMSSD',
      headerName: 'MlnRMSSD',
      type: 'number',
      width: 120,
      sortable: false,
    },
    {
      field: 'Suggestion',
      headerName: translations.Suggestion,
      width: 180,
      sortable: false,
      renderCell: (params) => {
        const { color, Icon } = getChipProps(params.value)
        return (
          <Chip icon={<Icon sx={{ color: `${color} !important` }} />} label={params.value} variant="outlined" sx={{ width:150, color: color, borderColor: color }} />
        )
      },
    },
  ]

  const generateRows = () => ([
    { id: 1, Day: translations.Monday,    hr: 68, RMSSD: 46, MRMSSD: 50, lnRMSSD: 3.83, MlnRMSSD: 3.92, Suggestion: translations.Rest },
    { id: 2, Day: translations.Tuesday,   hr: 67, RMSSD: 49, MRMSSD: 50, lnRMSSD: 3.89, MlnRMSSD: 3.91, Suggestion: translations.LowIntensity },
    { id: 3, Day: translations.Wednesday, hr: 66, RMSSD: 53, MRMSSD: 50, lnRMSSD: 3.97, MlnRMSSD: 3.91, Suggestion: translations.HighIntensity },
    { id: 4, Day: translations.Thursday,  hr: 65, RMSSD: 46, MRMSSD: 49, lnRMSSD: 3.83, MlnRMSSD: 3.88, Suggestion: translations.LowIntensity },
    { id: 5, Day: translations.Friday,    hr: 69, RMSSD: 50, MRMSSD: 50, lnRMSSD: 3.91, MlnRMSSD: 3.90, Suggestion: translations.HighIntensity },
    { id: 6, Day: translations.Saturday,  hr: 61, RMSSD: 52, MRMSSD: 50, lnRMSSD: 3.95, MlnRMSSD: 3.92, Suggestion: translations.HighIntensity },
    { id: 7, Day: translations.Sunday,    hr: 71, RMSSD: 47, MRMSSD: 49, lnRMSSD: 3.85, MlnRMSSD: 3.89, Suggestion: translations.LowIntensity },
    { id: 8, Day: translations.Monday,    hr: 64, RMSSD: 49, MRMSSD: 50, lnRMSSD: 3.89, MlnRMSSD: 3.90, Suggestion: translations.Rest },
    { id: 9, Day: translations.Tuesday,   hr: 60, RMSSD: 46, MRMSSD: 49, lnRMSSD: 3.83, MlnRMSSD: 3.88, Suggestion: translations.LowIntensity },
  ])
  
  const rows = generateRows()
  const getChipProps = (label) => {
    switch (label) {
      case translations.Rest:
        return { color: '#a05555', Icon: SelfImprovementIcon };
      case translations.LowIntensity:
        return { color: '#b6970f', Icon: DirectionsWalkIcon };
      case translations.HighIntensity:
        return { color: '#4b7c2f', Icon: DirectionsRunIcon };
      default:
        return { color: 'default', Icon: SelfImprovementIcon };
    }
  };

  /* const [displayedRows, setDisplayedRows] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState({});
  const [ref, inView] = useInView({
    triggerOnce: true, 
  }); */
  /* useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        if (rows.length > displayedRows.length) {
          setDisplayedRows(prevRows => {
            const newRows = rows.slice(0, prevRows.length + 1);
            const newRowIndex = prevRows.length + 1
            setVisibleColumns(prevState => {
              const newState = { ...prevState, [newRowIndex]: ['Day', 'hr', 'RMSSD'] };
              setTimeout(() => setVisibleColumns(prevState => ({
                ...prevState,
                [newRowIndex]: ['Day', 'hr', 'RMSSD', 'MRMSSD']
              })), 200);
              setTimeout(() => setVisibleColumns(prevState => ({
                ...prevState,
                [newRowIndex]: ['Day', 'hr', 'RMSSD', 'MRMSSD', 'lnRMSSD']
              })), 400);
              setTimeout(() => setVisibleColumns(prevState => ({
                ...prevState,
                [newRowIndex]: ['Day', 'hr', 'RMSSD', 'MRMSSD', 'lnRMSSD', 'MlnRMSSD']
              })), 600);
              setTimeout(() => setVisibleColumns(prevState => ({
                ...prevState,
                [newRowIndex]: ['Day', 'hr', 'RMSSD', 'MRMSSD', 'lnRMSSD', 'MlnRMSSD', 'Suggestion']
              })), 800);
              return newState;
            });
            return newRows;
          });
        }
        console.log(visibleColumns)
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, [inView, displayedRows, language]); */

  /* useEffect(() => {
    setDisplayedRows([]);
  }, [language]); */
  
  return (
    <ThemeProvider theme={currentTheme}>
        <Grid container sx={{ backgroundColor: theme => theme.palette.background.main }}>
          <Header setLanguage={setLanguage} theme={currentTheme} translations={translations} language={language} themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
          <Grid container height="100vh" alignItems="center" justifyContent="center" padding="30px" spacing="30px">

            {/* Void space for the logo */}
            <Grid container item xs={12} md={6} alignItems="center" justifyContent="center"></Grid>

            {/* Flipping over card */}
            <Grid container item xs={12} md={6} alignItems="center" justifyContent="center" sx={{ color: theme => theme.palette.primary.main }}>
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card onMouseOver={() => setIsFlipped(true)} item sx={{ width:"300px", height:"300px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"start", textAlign:"center", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                    <Box ref={titleBoxRef} sx={{ height:"100px", width:"100%", position: 'relative', left: 20 }} >
                    {transitions((style, item) => (
                      <animated.div style={{ ...style, position: 'absolute' }}>
                        <Typography component="span" textAlign="left" style={{ color: theme => theme.palette.primary.main, fontWeight:600, fontSize:42, marginBottom:"15px" }}>
                          {item}
                        </Typography>
                      </animated.div>
                    ))}
                    </Box>
                    
                    <Box sx={{ position: 'relative', height: '100px', width: '100%' }}>
                      {imageTransitions((style, item) => (
                        <animated.div style={{ ...style, position: 'absolute', left:"50%", transform:"translateX(-50%)" }}>
                          <Box component="img" src={item} alt="Measure Train Improve" />
                        </animated.div>
                      ))}
                    </Box>
                </Card>

                <Card onMouseOut={() => setIsFlipped(false)} item sx={{ width:"300px", height:"300px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                  <Typography sx={{ color: theme => theme.palette.primary.main, maxWidth: "230px", marginBottom:0, fontWeight:600 }}>{translations.FlipCardBack1}</Typography>
                  <Typography sx={{ color: theme => theme.palette.primary.main, maxWidth: "230px", marginBottom:0, marginTop:3 }}>{translations.FlipCardBack2}</Typography>
                </Card>
              </ReactCardFlip>             
            </Grid>
          </Grid>

          <Grid container alignItems="center" justifyContent="center" padding="70px 20px 130px" spacing="30px">
            <DataGrid //ref={ref}
              rows={rows} // {displayedRows}
              columns={columns}
              /* {columns.map((column) => ({
                ...column,
                renderCell: (params) => (
                  <Box style={{
                    opacity: visibleColumns[params.row.id]?.includes(column.field) ? 1 : 0,
                    transition: 'opacity 200ms'
                  }}>
                    {params.value}
                  </Box>
                ),
              }))} */
              hideFooter
              checkboxSelection
              sx={{ maxWidth:1000, height:526 }}
            />
          </Grid>

          <Grid container alignItems="stretch" justifyContent="center" padding="30px" spacing="30px" marginBottom="700px"  sx={{ color: theme => theme.palette.primary.main }}>
            <Grid item xs={4} maxWidth="350px!important" sx={{ display:"flex" }}>
              <Card item sx={{ flex:1, maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography component="h1" sx={{ marginBottom:1, fontWeight:600, fontSize:22 }}>{translations.Measure}</Typography>
                <Typography>{translations.MeasureParagraph}</Typography>
              </Card>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important" sx={{ display:"flex" }}>
              <Card item sx={{ flex:1, maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography component="h1" sx={{ marginBottom:1, fontWeight:600, fontSize:22 }}>{translations.Train}</Typography>
                <Typography>{translations.TrainParagraph}</Typography>
              </Card>
            </Grid>
            <Grid item xs={4} maxWidth="350px!important" sx={{ display:"flex" }}>
              <Card item sx={{ flex:1, maxWidth:"300px", borderRadius:"20px", padding:"30px 20px", boxShadow:"10px 10px black", backgroundColor: theme => theme.palette.background.cardBackground }}>
                <Typography component="h1" sx={{ marginBottom:1, fontWeight:600, fontSize:22 }}>{translations.Improve}</Typography>
                <Typography>{translations.ImproveParagraph}</Typography>
              </Card>
            </Grid>
          </Grid>
          
        </Grid>    
    </ThemeProvider>
  )
}

export default App