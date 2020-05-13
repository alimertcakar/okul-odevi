import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function SpeedDialTooltipOpen(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    handleClose();
    navigator.clipboard.writeText(props.solution);
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <pre>{props.solution}</pre>
      <SpeedDial
        ariaLabel="SpeedDial Solution"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          key={"Kopyala"}
          icon={<FileCopyIcon />}
          tooltipTitle={"Kopyala"}
          tooltipOpen
          onClick={handleSave}
        />
      </SpeedDial>
    </div>
  );
}
