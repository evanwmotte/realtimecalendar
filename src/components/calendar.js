import React from 'react';
import { Card, makeStyles, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    display: {
        width: '100%',
        textAlign: 'center',
        height: '50px',
        fontSize: '25px',
        borderRadius: '0',
    },
    card: {
        width: '14.28%',
        float: 'left',
        textAlign: 'center',
        borderRadius: '0',
        marginBottom: '10px'
    },
    days: {
        width: '14.28%',
        float: 'left',
        textAlign: 'left',
        borderRadius: '0',
        height: '138px'
    },
    button: {
        '&:hover': {
            backgroundColor: 'gray',
        }
    }
}));

export const Calendar = () => {

    const classes = useStyles();

    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    return (
        <div>
            <Card className={classes.display}>
                <Button className={classes.button}>
                <ArrowBackIosIcon />
                </Button>
                February
                <Button className={classes.button}>
                <ArrowForwardIosIcon />
                </Button>
            </Card>
            <Card className={classes.card}>Sunday</Card>
            <Card className={classes.card}>Monday</Card>
            <Card className={classes.card}>Tuesday</Card>
            <Card className={classes.card}>Wednesday</Card>
            <Card className={classes.card}>Thursday</Card>
            <Card className={classes.card}>Friday</Card>
            <Card className={classes.card}>Saturday</Card>
            {days.map(day => <a><Card className={classes.days} onClick={() => console.log("clicked " + day)}>{day}</Card></a>)}
        </div>
    );
}