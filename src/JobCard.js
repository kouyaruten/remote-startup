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
            mode: 'light',
        },
    });
    // console.log(job.tags);
    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "20px", borderRadius: "12px", border: '1px solid #dddddd', boxShadow: '2px 2px 4px #efeeee' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {job.image ? <img src={job.image[0].url} style={{ width: '60px', height: '60px', marginLeft: '20px', borderRadius: '8px', border: '1px solid #dddddd' }} /> :
                        <Typography align='center' display="block" variant="h3" component="div" sx={{ width: '60px', height: '60px', marginLeft: '20px', borderRadius: '8px', border: '1px solid #dddddd', alignItems: 'center' }} >
                            💻
                        </Typography>
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                        <CardContent sx={{ flex: '1 0 auto', width: '25vw' }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div" >
                                {job.company}
                            </Typography>

                            <Typography component="div" variant="h6" fontWeight="700">
                                {job.jobTitle}
                            </Typography>
                            {((job.minMonthlySalary && job.maxMonthlySalary && job.numberOfMonth) || job.salary) &&
                                <div style={{ backgroundColor: '#dddddd', padding: '5px 10px 5px 10px', borderRadius: '4px', marginTop: '4px', display: 'inline-block' }}>
                                    <Typography component="div" variant="p" fontWeight="700">
                                        {(job.minMonthlySalary && job.maxMonthlySalary && job.numberOfMonth) && "💰 " + parseInt(job.minMonthlySalary / 1000) + "k - " + parseInt(job.maxMonthlySalary / 1000) + "k * " + job.numberOfMonth}
                                        {job.salary && "💰 " + parseInt(job.salary) / 10000 + "w"}
                                    </Typography>
                                </div>}
                        </CardContent>


                    </Box>
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'row', width: '40%' }}>
                    {(job.tags && job.tags.includes("remote")) && <Tag text="🌎 远程" />}
                    {(job.tags && job.tags.includes("startup")) && <Tag text="🏡 初创" />}
                    {(job.tags && job.tags.includes("parttime")) && <Tag text="👩‍💻 兼职" />}
                    {(job.tags && job.tags.includes("english")) && <Tag text="🇺🇸 英语" />}
                    {(job.tags && job.tags.includes("chinese")) && <Tag text="🇨🇳 中文" />}
                </CardContent>
                <CardContent>
                    <Button variant="contained" href={job.link}>
                        申请
                    </Button>
                </CardContent>
            </div>
        </ThemeProvider>
    );
}
