import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function contact() {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Filled" variant="filled" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Filled" variant="filled" />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField fullWidth label="Filled" variant="filled" />
            </Grid>
        </Grid>
    )
}
