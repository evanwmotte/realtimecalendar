import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function TaskSelector({ setTaskType }) {

  const handleChange = (event) => {
    setTaskType(event.target.value)
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup defaultValue={'Event'} onChange={handleChange}>
        <FormControlLabel value="Event" control={<Radio />} label="Event" />
        <FormControlLabel value="Task" control={<Radio />} label="Task" />
        <FormControlLabel value="Reminder" control={<Radio />} label="Reminder" />
      </RadioGroup>
    </FormControl>
  );
}