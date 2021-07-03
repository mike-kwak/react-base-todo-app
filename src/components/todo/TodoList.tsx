import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { AssignmentLate, ClearAll, Delete } from '@material-ui/icons';
import React from 'react';
import ITodo from '../../types/ITodo';
import useTodo from '../hooks/useTodo';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 600,
  },
  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  emptyMessageBox: {
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '0.6rem',
  },
  checkedText: {
    textDecoration: 'line-through',
  },
}));

const TodoList = () => {
  const classes = useStyles();
  const { todo, remove, done, cancel, reset } = useTodo();

  const handleToggle = (todo: ITodo) => () => {
    if (todo.isDone) {
      cancel(todo.id);
    } else {
      done(todo.id);
    }
  };

  return (
    <Paper elevation={1} className={classes.root}>
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>
            <span>할일 목록</span>
            <IconButton onClick={() => reset()}>
              <ClearAll />
            </IconButton>
          </ListSubheader>
        }
      >
        {todo.length === 0 && (
          <Box className={classes.emptyMessageBox}>
            <AssignmentLate fontSize="large" />
            <Typography variant="h6">할일 목록이 비어있습니다.</Typography>
            <Typography>할일을 입력 후 추가 버튼을 눌러보세요!</Typography>
          </Box>
        )}
        {todo.map(eachTodo => (
          <ListItem
            key={eachTodo.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(eachTodo)}
          >
            <ListItemIcon>
              <Checkbox edge="start" checked={eachTodo.isDone} tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText
              id={`todo-${eachTodo.id}`}
              primary={eachTodo.label}
              className={eachTodo.isDone ? classes.checkedText : ''}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => remove(eachTodo.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
