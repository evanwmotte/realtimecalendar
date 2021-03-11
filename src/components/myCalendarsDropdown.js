import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(13.5),
        fontWeight: theme.typography.fontWeightRegular,
    },
    close: {
        border: 'none',
        boxShadow: 'none',
        borderRadius: '12px',
        height: '11px',
        backgroundColor: '#E6E6E6'
    },
    open: {
        border: 'none',
        boxShadow: 'none',
        borderRadius: '12px',
        '&:hover': {
            backgroundColor: '#E6E6E6',
            borderRadius: '12px'
        }
    }
}));

export default function MyCalendars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion className={classes.close}>
                <AccordionSummary
                    className={classes.open}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>My Calendars</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <RadioGroup aria-label="gender" name="gender1">
                        <FormControlLabel value="Evan Motte" control={<Radio />} label="Evan Motte" />
                    </RadioGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}