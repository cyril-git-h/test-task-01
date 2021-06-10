import React, { useEffect } from 'react';
import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { getUsers } from './requestUsers';
import MainPage from './components/MainPage';
import UserPage from './components/UserPage';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { IUser } from './globalTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      textAlign: 'center'
    },
    image: {
      width: '80px',
      height: '80px',
    },
    paper: {
      padding: theme.spacing(1),
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function App() {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    function initializeState() {
      return (dispatch: any) => getUsers().then((data) => {
        dispatch({ type: 'ADD_USERS', payload: data })
      })
    }
    dispatch(initializeState())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const users = useSelector((state: RootStateOrAny) => state.users);
  return (
    <Router>
      <Route exact path='/'>
        <MainPage classes={classes} />
      </Route>
      <Route exact path='/user/:id'
        render={
          ({ match }) =>
            <UserPage
              classes={classes}
              user={users.filter((user: IUser) => user.id === parseInt(match.params.id))[0]}
            />
        }>
      </Route>
    </Router>
  );
}
