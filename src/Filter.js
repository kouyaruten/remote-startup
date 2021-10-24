import React from 'react'
import { Typography } from '@mui/material';

const tags = ["🌎 远程", "🏡 初创", "👩‍💻 兼职", "🇺🇸 英语"]


function Filter() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography fontSize='smaller'>
                筛选：
            </Typography>
            <div style={{ borderRadius: '100px', border: '1px solid black', padding: '5px 10px 5px 10px', marginLeft: '10px' }}>
                <Typography fontSize='smaller'>
                    🌎 远程
                </Typography>
            </div>
        </div>
    )
}

export default Filter
