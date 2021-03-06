import React from 'react'
import { Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    add, cancel, selectCount, toggle, clear
} from './features/counter/counterSlice';
import Button from '@mui/material/Button';

const tags = ["π θΏη¨", "π‘ εε", "π©βπ» εΌθ", "πΊπΈ θ±θ―­", "π¨π³ δΈ­ζ"]

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
        <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center' }}>
            <Typography>
                η­ιοΌ
            </Typography>
            <div onClick={() => {
                dispatch(toggle("remote"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('remote') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    π θΏη¨
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("startup"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('startup') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    π‘ εε
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("parttime"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('parttime') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    π©βπ» εΌθ
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("english"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('english') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    πΊπΈ θ±θ―­
                </Typography>
            </div>

            <div onClick={() => {
                dispatch(toggle("chinese"));
            }} style={{ ...mystyle, backgroundColor: filters.includes('chinese') ? '#cccccc' : '#efeeee' }}>
                <Typography fontSize='smaller'>
                    π¨π³ δΈ­ζ
                </Typography>
            </div>

            <Button sx={{ ml: '10px' }} variant="text" onClick={() => dispatch(clear())}>ζΈη©Ίη­ι</Button>
        </div >
    )
}

export default Filter
