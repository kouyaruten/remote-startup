import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tag from './Tag';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';


export default function JobCard({ job }) {
    const darkTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });
    // console.log(job.tags);
    return (
        <ThemeProvider theme={darkTheme}>
            {/* <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid> */}
            <Stack direction="row" spacing={2} style={{ justifyContent: "space-between", alignItems: 'center', marginTop: "20px", borderRadius: "12px", border: '1px solid #dddddd', boxShadow: '2px 2px 4px #efeeee' }}>
                <Grid container sx={{ alignItems: 'center', padding: '10px' }} >
                    {job.image ? <img src={job.image[0].url} style={{ width: '60px', height: '60px', marginLeft: '20px', borderRadius: '8px', border: '1px solid #dddddd' }} /> :
                        <Typography align='center' display="block" variant="h3" component="div" sx={{ width: '60px', height: '60px', marginLeft: '20px', borderRadius: '8px', border: '1px solid #dddddd', alignItems: 'center' }} >
                            💻
                        </Typography>
                    }
                    <Grid item sx={{ display: 'flex', flexDirection: 'column' }} xs={12} md={5}>

                        <CardContent sx={{ flex: '1 0 auto' }}>
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


                    </Grid>

                    <Grid item xs={10} md={4} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {(job.tags && job.tags.includes("remote")) && <Tag text="🌎 远程" />}
                        {(job.tags && job.tags.includes("startup")) && <Tag text="🏡 初创" />}
                        {(job.tags && job.tags.includes("parttime")) && <Tag text="👩‍💻 兼职" />}
                        {(job.tags && job.tags.includes("english")) && <Tag text="🇺🇸 英语" />}
                        {(job.tags && job.tags.includes("chinese")) && <Tag text="🇨🇳 中文" />}

                    </Grid>

                    <Grid item xs={6} md={2} sx={{ padding: '10px' }}>
                        <Button variant="contained" href={job.link}>
                            申请
                        </Button>
                    </Grid>
                </Grid>



            </Stack>
        </ThemeProvider>
    );
}
