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
import ReactGA from 'react-ga'


export default function BasicTabs({ jobs }) {
    ReactGA.initialize({ trackingId: process.env.REACT_APP_GA })
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="我要找工作" value="1" />
                        <Tab label="我要招人" value="2" onClick={() => ReactGA.event({
                            category: `Click`,
                            action: `Hire Tab Clicked`,
                        })} />
                        <Tab label="关于" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {/* <Filter /> */}
                    {
                        jobs &&
                        jobs.map((job, i) => <JobCard job={job.fields} key={job.id} />)
                    }
                </TabPanel>
                <TabPanel value="2">
                    <Hire />
                </TabPanel>
                <TabPanel value="3"><About /></TabPanel>
            </TabContext>
        </Box>
    );
}
