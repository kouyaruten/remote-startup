import * as React from 'react';
import { useState, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactGA from 'react-ga'
import Filter from './Filter';
import JobCard from './JobCard';
import About from './About';
import Hire from './Hire';
import JobsList from './JobsList';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';

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
  const url = window.location.href
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  console.log(jobs);


  return (
    // <ThemeProvider theme={darkTheme}>
    <React.Fragment>
      <CssBaseline />
      <div>


        <div style={{
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
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="我要找工作" value="1" />
                  <Tab label="我要招人" value="2" />
                  <Tab label="关于" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1"><JobsList jobs={jobs} /></TabPanel>
              <TabPanel value="2"><Hire /></TabPanel>
              <TabPanel value="3"><About /></TabPanel>
            </TabContext>
          </Box>

        </Container>
      </div>
    </React.Fragment >
    // </ThemeProvider>
  );
}
