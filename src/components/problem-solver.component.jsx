import React, { useState } from "react";
import questionsData from "cevaplar.json";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import ProblemInfo from "./problem-info.component";
import Paper from "@material-ui/core/Paper";
import Solution from "./problem-solver-speed-dialer";
import { Container, Item } from "./grid.component";
import importAll from "../importAll";
import { connect } from "react-redux";
import Slice from "../logSlice";
const { updateLog } = Slice.actions;

const mapDispatchToProps = (dispatch) => {
  return {
    updateLog: (payload) => {
      dispatch(updateLog(payload));
    },
  };
};

const images = importAll(
  require.context("../../public/img", false, /\.(png|jpe?g|svg)$/)
);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: "15px",
    width: "100%",
  },
  cozum: {
    overflow: "scroll",
  },
}));

const ProblemSolver = (props) => {
  const [cevap, setCevap] = useState(0);
  const [evalRuntime, setEvalRuntime] = useState(0);
  const [isRun, setIsRun] = useState(false);

  const handleChange = (e) => {
    setCevap(e.target.value);

    setIsRun(false);
  };

  const handleClick = () => {
    var t0 = performance.now();
    const qData = questionsData[platform].cevaplar[cevap];
    const evaluated = eval(qData);

    console.log(questionsData[platform].cevaplar[cevap]);
    //const evaluated = eval(`${questionsData[platform].cevaplar[cevap]}`);
    var t1 = performance.now();
    setEvalRuntime(t1 - t0);
    setIsRun(true);
    props.updateLog({
      log: evaluated + " ",
    });
  };

  const classes = useStyles();
  let platform = props.platform;
  return (
    <Paper className={classes.paper} elevation={3}>
      <Container>
        <Item>
          <Solution
            solution={questionsData[platform].cevaplar[cevap]}
          ></Solution>
        </Item>
        <Container justify="flex-end">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">Çözümler</InputLabel>
            <NativeSelect
              onChange={handleChange}
              defaultValue={0}
              inputProps={{
                name: "name",
                id: "uncontrolled-native",
              }}
            >
              {questionsData[platform].sorular.map((soru, id) => {
                return <option value={id}>{soru}</option>;
              })}
            </NativeSelect>
            <FormHelperText>Soru seçin</FormHelperText>
            <Button
              onClick={handleClick}
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon>send</SendIcon>}
            >
              Çalıştır
            </Button>
          </FormControl>
        </Container>

        <ProblemInfo
          runtimeMs={evalRuntime}
          cozumAciklamasi={
            <Item className={classes.cozum} md={12}>
              <img src={images[cevap]}></img>
            </Item>
          }
          isRun={isRun}
        />
      </Container>
    </Paper>
  );
};

export default connect(null, mapDispatchToProps)(ProblemSolver);
