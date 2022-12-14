import React from 'react';
import Details from './components/Details/Details';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Main from './components/Main/Main';

const App = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent='center' style={{height:'100vh'}}>
            <Grid item xs={12} sm={4}>
                <Details title="Income" className="income"/>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Details title="Expense" className="expense"/>
            </Grid>
        </Grid>
    )
}

export default App;