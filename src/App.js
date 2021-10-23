import * as React from 'react';
import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tabs from './Tabs';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export default function App() {
  var Airtable = require('airtable');
  const [jobs, setJobs] = useState([])
  const imageNumber = getRandomInt(10)
  useEffect(() => {
    const getJobs = async () => {
      const res = await axios(`https://api.airtable.com/v0/appyjM9dHDeXhpYsi/Table%201?api_key=${process.env.REACT_APP_API_KEY}`)
      console.log(res);
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
        backgroundImage: jobs && jobs.length > 0 && `url("./images/${imageNumber}.jpg")`, backgroundSize: 'cover',
        backgroundPosition: 'bottom', height: '300px'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ height: '300px', pt: '240px', color: 'white', textShadow: '2px 2px #000000' }}>
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
