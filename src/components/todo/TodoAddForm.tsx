import { Grid, IconButton, makeStyles, Paper, TextField } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import useTodo from '../hooks/useTodo';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 600,
    padding: '1rem 1rem',
  },
  field: {
    width: '100%',
  },
}));

const TodoAddForm = () => {
  const classes = useStyles();
  const [todoField, setTodoField] = useState('');
  const { add } = useTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoField(e.target.value);
  };

  const handleClick = () => {
    add(todoField);
    setTodoField('');
  };

  return (
    <Paper elevation={1} className={classes.root}>
      <Grid container style={{ columnGap: '1rem' }} direction="row" alignItems="center">
        <Grid item style={{ flexGrow: 1 }}>
          <TextField
            className={classes.field}
            label="Todo"
            variant="outlined"
            value={todoField}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <IconButton onClick={handleClick}>
            <AddCircle />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoAddForm;
