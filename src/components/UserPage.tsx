import React from "react";
import { UserRow } from "./Rows";
import { Grid } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { IUser } from "../globalTypes";

export default function UserPage({
  classes,
  user,
}: {
  classes: ClassNameMap;
  user: IUser;
}) {
  return (
    <div className={classes.root}>
      <Button color="primary" component={RouterLink} to="/">
        Назад
      </Button>
      <Grid>
        <Grid container item lg={12} spacing={2}>
          <Grid item lg={2}>
            {
              user?.avatar && <img className={classes.image} src={user.avatar} alt="ava" />
            }
          </Grid>
        </Grid>
        <Grid container item lg={12} spacing={2}>
          <UserRow
            classes={classes}
            nameOfAttribute="name"
            valueOfAttribute={user ? user.firstname : null}
          />
        </Grid>
        <Grid container item lg={12} spacing={2}>
          <UserRow
            classes={classes}
            nameOfAttribute="phone"
            valueOfAttribute={user ? user.phone : null}
          />
        </Grid>
      </Grid>
    </div>
  );
}
