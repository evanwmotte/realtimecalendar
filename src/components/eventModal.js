import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop, Card, TextField, Paper, Typography, Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import TimeSelector from '../components/time-select';
import TaskSelector from '../components/task-select';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    addTitle: {
        marginTop: '10px',
        marginBottom: '20px',
        width: '412px'
    },
    button: {
        marginTop: '20px',
        width: '412px',
        justifyContent: 'left'
    },
    closeButton: {
        width: '480px',
        right: '32px',
        bottom: '16px',
        borderRadius: '16px 16px 0px 0px',
        backgroundColor: '#ececec',
        color: 'red',
        '&:hover': {
            backgroundColor: 'lightgray',
        }
    }
}));

export default function EventModal({ date, close }) {

    const classes = useStyles();
    const [taskType, setTaskType] = useState('')
    const [title, setTitle] = useState('')

    const eventTaskOrReminder = (type) => {
        if (type === 'Event' || '') {
            setTaskType('Event')
        }
        type === 'Task' ? setTaskType('Task') : setTaskType('Reminder')
    }

    const handleTitleInput = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    return (
        <>
            <Button className={classes.closeButton} onClick={close}>Close</Button>
            <Typography>{date}</Typography>
            <TextField
                className={classes.addTitle}
                onChange={handleTitleInput}
                variant={'outlined'}
                value={title}
                id="standard-basic"
                label="Add Title" />
            <TaskSelector setTaskType={eventTaskOrReminder} />
            <TimeSelector
                current={moment().format().split(':').splice(0, 2).join(':')}
                time='Start Time' />
            <TimeSelector
                current={moment().format().split(':').splice(0, 2).join(':')}
                time='End Time' />
            <Button className={classes.button}>Add Guests</Button>
            <Button className={classes.button}>Add Description</Button>
            <Button className={classes.button}>Add Location</Button>
        </>
    )
}