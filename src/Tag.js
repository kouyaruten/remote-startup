import React from 'react'
import Typography from '@mui/material/Typography';

function Tag({ text }) {
    return (
        <div style={{ borderRadius: '100px', border: '1px solid white', padding: '5px 10px 5px 10px', marginLeft: '10px' }}>
            <Typography fontSize='smaller'>
                {text}
            </Typography>

        </div>
    )
}

export default Tag
