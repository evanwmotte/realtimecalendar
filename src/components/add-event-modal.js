import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop, Card, TextField, Paper, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import EventModal from './eventModal';
import { db } from '../firebase'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'white',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '25%',
        height: '700px',
        justify: 'center',
        borderRadius: '17px',
        outline: 'none'
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
        marginBottom: '30px',
    },
    time: {
        marginLeft: '50px'
    },
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
                        <EventModal
                            day={day}
                            date={date}
                            close={handleClose}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}