import React from 'react';
import { Card, CardHeader, CardContent, Typography, Divider, Grid } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {

    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardHeader title = "Expense Tracker" subheader="Powered by Speechly"/>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance Rs. 100</Typography>
            <Typography variant="subtitle1" style={{lineHeight : '1.5em',  marginTop: '20px'}}>
                {/* InfoCard */}
                Try Saving...Add income for Rs. 1000 in category salary for Monday...
            </Typography>
            <Divider />
            <Form/>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main;