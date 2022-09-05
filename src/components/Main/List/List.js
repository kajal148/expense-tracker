import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {

    const classes = useStyles();
    const transactions = [
        {id: 1, type: 'expense', category: 'shopping', amount: 100, date: new Date().toTimeString()},
        {id: 2, type: 'income', category: 'freelancing', amount: 1000, date: new Date().toTimeString()},
        {id: 3, type: 'expense', category: 'food', amount: 50, date: new Date().toTimeString()},
        {id: 4, type: 'income', category: 'Extrashift', amount: 100, date: new Date().toTimeString()},
        {id: 4, type: 'income', category: 'salary', amount: 10000, date: new Date().toTimeString()},
    ];

    return (
       <MUIList className={classes.list} dense={false}>
            {transactions.map((transaction) => {
                return <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'income'? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$ ${transaction.amount} ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            })}
       </MUIList>
    )
}

export default List;