import React from 'react'
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    add, cancel, selectCount, toggle, clear
} from './features/counter/counterSlice';
import Button from '@mui/material/Button';

const tags = ["🌎 远程", "🏡 初创", "👩‍💻 兼职", "🇺🇸 英语", "🇨🇳 中文"]

const mystyle = {
    borderRadius: '100px',
    padding: '5px 10px 5px 10px',
    marginLeft: '10px',
    cursor: 'pointer',
    userSelect: 'none'
};

function Filter() {
    const filters = useSelector(selectCount);
    const dispatch = useDispatch();
    console.log(filters);
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography>
                筛选：
            </Typography>
            <div onClick={() => {
                dispatch(toggle("remote"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('remote') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    🌎 远程
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("startup"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('startup') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    🏡 初创
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("parttime"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('parttime') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    👩‍💻 兼职
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("english"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('english') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    🇺🇸 英语
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("chinese"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('chinese') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    🇨🇳 中文
                </Typography>
            </div>

            <Button sx={{ ml: '10px' }} variant="text" onClick={() => dispatch(clear())}>清空筛选</Button>
        </div >
    )
}

export default Filter
