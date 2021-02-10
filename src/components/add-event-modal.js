import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop, Card, TextField, Paper, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import TimeSelector from '../components/time-select';
import TaskSelector from '../components/task-select';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '20%',
        height: '700px',
    },
    card: {
        width: '14.28%',
        float: 'left',
        textAlign: 'left',
        borderRadius: '0',
        height: '138px',
        boxShadow: '1px 1px 1px 1px gray',
    },
    addTitle: {
        marginTop: '10px',
        marginBottom: '30px'
    },
    time: {
        marginLeft: '50px'
    }
}));

export default function TransitionsModal({ day, date }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
        console.log(day)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a>
                <Card className={classes.card} onClick={handleOpen}>{day}</Card>
            </a>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography>{date}</Typography>
                        <TextField
                            className={classes.textField, classes.addTitle}
                            variant={'outlined'}
                            value={""}
                            id="standard-basic"
                            label="Add Title" />
                        <TimeSelector time='Start Time' />
                        <TimeSelector time='End Time' />
                        <TaskSelector />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}