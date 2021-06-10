import React from "react";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { deleteUser } from "../requestUsers";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { IUser } from "../globalTypes";

export function TitleRow({
  classes,
  setModal,
}: {
  classes: ClassNameMap;
  setModal: any;
}) {
  return (
    <>
      <Grid item lg={1}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        ></Typography>
      </Grid>
      <Grid item lg={4}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          Контактное лицо
        </Typography>
      </Grid>
      <Grid item lg={2}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          Телефон
        </Typography>
      </Grid>
      <Grid item lg={3}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          Электронная почта
        </Typography>
      </Grid>
      <Grid item lg={2}>
        <Button
          onClick={() => setModal(true)}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Добавить
        </Button>
      </Grid>
    </>
  );
}

export function FormRow({
  classes,
  user,
}: {
  classes: ClassNameMap;
  user: IUser;
}) {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    return (dispatch: any) =>
      deleteUser(id).then((_: any) => {
        dispatch({
          type: "DELETE_USER",
          payload: id,
        });
      });
  };
  return (
    <>
      <Grid item lg={1}>
        <Paper className={classes.paper}>
          { user.avatar && <img className={classes.image} src={user.avatar} alt="ava" /> }
        </Paper>
      </Grid>
      <Grid item lg={4}>
        <Paper className={classes.paper}>
          <Typography
            noWrap
          >{`${user.lastname} ${user.firstname} ${user.middlename ?? ''}`}</Typography>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper className={classes.paper}>
          <Typography noWrap>{user && user.phone}</Typography>
        </Paper>
      </Grid>
      <Grid item lg={3}>
        <Paper className={classes.paper}>
          <Typography noWrap>{user && user.email}</Typography>
        </Paper>
      </Grid>
      <Grid item lg={2}>
        <Paper className={classes.paper}>
          <Button
            variant="contained"
            startIcon={<ClearIcon />}
            onClick={() => dispatch(handleDelete(user.id))}
          >
            Удалить
          </Button>
        </Paper>
      </Grid>
    </>
  );
}

export function UserRow({
  classes,
  nameOfAttribute,
  valueOfAttribute,
}: {
  classes: ClassNameMap;
  nameOfAttribute: string | null;
  valueOfAttribute: string | null;
}) {
  return (
    <>
      <Grid item lg={2}>
        <Paper className={classes.paper}>{nameOfAttribute}</Paper>
      </Grid>
      <Grid item lg={4}>
        <Paper className={classes.paper}>{valueOfAttribute}</Paper>
      </Grid>
    </>
  );
}
