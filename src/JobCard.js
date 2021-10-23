import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tag from './Tag';

export default function JobCard({ job }) {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    console.log(job);
    return (
        <ThemeProvider theme={darkTheme}>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} style={{ marginTop: "20px", borderRadius: "12px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src={job.image[0].url} style={{ width: '60px', height: '60px', marginLeft: '20px', borderRadius: '8px', border: '1px solid white' }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div" >
                                {job.company}
                            </Typography>

                            <Typography component="div" variant="h5" fontWeight="700">
                                {job.jobTitle}
                            </Typography>
                            <div style={{ backgroundColor: 'gray', padding: '5px 10px 5px 10px', borderRadius: '4px', marginTop: '4px' }}>
                                <Typography component="div" variant="p" fontWeight="700">
                                    {"💰" + parseInt(job.minMonthlySalary / 1000) + "k - " + parseInt(job.maxMonthlySalary / 1000) + "k * " + job.numberOfMonth
                                        + " (" + parseInt(job.salary) / 10000 + "w)"}
                                </Typography>
                            </div>
                        </CardContent>


                    </Box>
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '30%' }}>
                    {job.remote == "yes" && <Tag text="🌎 远程" />}
                    {job.startup == "yes" && <Tag text="🏡 初创" />}
                    {job.parttime == "yes" && <Tag text="👩‍💻 兼职" />}
                </CardContent>
                <CardContent>
                    <Button variant="contained" href={job.link}>
                        申请
                    </Button>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}
