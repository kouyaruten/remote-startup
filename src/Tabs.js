import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import JobCard from './JobCard';
import About from './About';
import Hire from './Hire';
import Filter from './Filter';
import ReactGA from 'react-ga';
import Tabs from '@mui/material/Tabs';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


export default function BasicTabs({ jobs }) {
    ReactGA.initialize({ trackingId: process.env.REACT_APP_GA })
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="我要找工作" href="/home" />
                        <LinkTab label="我要招人" href="/hire" />
                        <LinkTab label="关于" href="/about" />
                    </Tabs>
                </Box>
                <Switch>
                    <Route path="/home">
                        {
                            jobs &&
                            jobs.map((job, i) => <JobCard job={job.fields} key={job.id} />)
                        }
                    </Route>
                    <Route path="/hire">
                        <Hire />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}
