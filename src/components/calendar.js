import React, { useEffect, useState } from 'react';
import { Card, makeStyles, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddEventModal from './add-event-modal';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    display: {
        width: '99.96%',
        textAlign: 'center',
        height: '50px',
        fontSize: '25px',
        borderRadius: '0',
        boxShadow: '1px 1px 1px 1px gray',
    },
    card: {
        width: '14.28%',
        float: 'left',
        textAlign: 'center',
        borderRadius: '0',
        boxShadow: '1px 1px 1px 1px gray',
    },
    days: {
        width: '14.28%',
        float: 'left',
        textAlign: 'left',
        borderRadius: '0',
        height: '138px',
        boxShadow: '1px 1px 1px 1px gray',
    },
    button: {
        '&:hover': {
            backgroundColor: 'gray',
        }
    }
}));

export const MonthView = () => {

    const [days, setDays] = useState([])
    const [dayNums, setDayNums] = useState([])
    const [month, setMonth] = useState(moment().add('month').format('MMMM'))

    const classes = useStyles();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        getDays(month)
    }, [])

    const getDays = (month) => {
        const value = moment();
        const startDay = value.month(month).clone().startOf('month').startOf('week');
        const endDay = value.month(month).clone().endOf('month').endOf('week');
        const day = startDay.clone().subtract(1, "day");
        const calendar = []
        while (day.isBefore(endDay, "day")) {
            calendar.push(
                day.add(1, "day").clone()
            )
        }
        setDays(calendar.map(day => day.format("dddd, MMMM Do YYYY").toString()))
        setDayNums(calendar.map(day => day.format("Do").toString()))
    }

    const increaseMonth = () => {
        let currentMonth = month
        if (currentMonth === 11) {
            currentMonth = 0
        }
        let newMonth = moment().month(currentMonth).add(1, 'month').format('MMMM')
        setMonth(newMonth)
        getDays(newMonth)
    }

    const decreaseMonth = () => {
        let currentMonth = month
        if (currentMonth === 0) {
            currentMonth = 11
        }
        let newMonth = moment().month(currentMonth).subtract(1, 'month').format('MMMM')
        setMonth(newMonth)
        getDays(newMonth)
    }

    return (
        <div>
            <Card className={classes.display}>
                <Button onClick={decreaseMonth} className={classes.button}>
                    <ArrowBackIosIcon />
                </Button>
                {month}
                <Button onClick={increaseMonth} className={classes.button}>
                    <ArrowForwardIosIcon />
                </Button>
            </Card>
            {daysOfWeek.map(day => <Card className={classes.card}>{day}</Card>)}
            {days.map(day =>
                <a>
                    <AddEventModal date={day} day={day.split(' ')[2]}>{day}</AddEventModal>
                </a>)}
        </div>
    );
}

export const WeekView = () => {

}