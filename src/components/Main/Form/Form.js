import React from 'react';
import { TextField, Typography, Button, Grid, FormControl, InputLabel,Select, MenuItem} from '@material-ui/core';

import useStyles from './styles';

const Form = () => {

    const classes = useStyles();

  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" variant="subtitle2" gutterBottom>
                {/* speech recognition */}
            </Typography>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Type</InputLabel>
                <Select>
                    <MenuItem value="income">Income</MenuItem>
                    <MenuItem value="expense">Expense</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6}>
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select>
                    <MenuItem value="travel">Travel</MenuItem>
                    <MenuItem value="salary">Salary</MenuItem>
                    <MenuItem value="food">Food</MenuItem>
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={6} fullWidth>
            <TextField type="number" label="Amount"/>
        </Grid>
        <Grid item xs={6} fullWidth>
            <TextField type="date" label="Date"/>
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth>Create</Button>
    </Grid>
  )
}

export default Form;