import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px",
    marginTop: "50px",
  },
}));
export default function (props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h6" component="h2">
        Konsol <br />
        <br />
      </Typography>
      {props.cevap}
    </Paper>
  );
}
