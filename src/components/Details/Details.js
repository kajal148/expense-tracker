import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({title, className}) => {

    const classes = useStyles();

    return (
        <Card className={classes[className]}>
            <CardHeader title= {title}/>
            <CardContent>
                <Typography variant='h5'> Rs. 50 </Typography>
                {/* <Doughnut data="data"/> */}
            </CardContent>
        </Card>
    )
}

export default Details;