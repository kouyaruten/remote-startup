import React from 'react'
import Typography from '@mui/material/Typography';

function Tag({ text }) {
    return (
        <div style={{ borderRadius: '100px', padding: '5px 10px 5px 10px', marginLeft: '10px', backgroundColor: '#efeeee' }}>
            <Typography fontSize='smaller'>
                {text}
            </Typography>

        </div>
    )
}

export default Tag
