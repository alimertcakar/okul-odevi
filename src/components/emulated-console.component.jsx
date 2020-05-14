import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px",
    marginTop: "50px",
  },
}));
const EmulatedConsole = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h6" component="h2">
        Konsol <br />
        <br />
      </Typography>
      {props.log}
      eval() içerisinde çalıştırdığım için bazı fonksiyonlar burada gözükmüyor.
      Düzeltmeye üşendim, kopyalayıp kendi bilgisayarınızda çalıştırabilirsiniz.
    </Paper>
  );
};

function mapStateToProps(state) {
  return state.log;
}
const ConnectedEmulatedConsole = connect(mapStateToProps)(EmulatedConsole);
export default ConnectedEmulatedConsole;
