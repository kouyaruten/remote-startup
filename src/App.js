import * as React from 'react';
import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from './Tabs';
import ReactGA from 'react-ga'

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export default function App() {
  ReactGA.initialize({ trackingId: process.env.REACT_APP_GA })
  ReactGA.event({
    category: `View`,
    action: `Homepage Viewed`,
  })
  var Airtable = require('airtable');
  const [jobs, setJobs] = useState([])
  const imageNumber = getRandomInt(10)
  useEffect(() => {
    const getJobs = async () => {
      const res = await axios(`https://api.airtable.com/v0/appyjM9dHDeXhpYsi/Table%201?api_key=${process.env.REACT_APP_API_KEY}`)
      setJobs(res.data.records)
    };
    getJobs()

  }, [])

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    // <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <CssBaseline />
      <div style={{
        // backgroundImage: jobs && jobs.length > 0 && `url("https://source.unsplash.com/random/1000x300/?wallpaper,landscape")`
        // backgroundImage: 'url("./images/background.svg")',
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/background.svg')"
        , backgroundRepeat: 'repeat'
        , backgroundSize: '200px 200px',
        backgroundPosition: 'bottom', height: '200px'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ height: '200px', pt: '140px', color: 'white', textShadow: '2px 2px #000000' }}>
            <b>remoteandstartup.com</b>
          </Typography>

        </Container>

      </div>
      <Container maxWidth="lg">

        <Tabs jobs={jobs} />
      </Container>
    </React.Fragment>
    // </ThemeProvider>
  );
}
