import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container, Item } from "./grid.component";
import Solution from "./problem-solver-speed-dialer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Item className={classes.root} md={12}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Çözüm açıklaması" {...a11yProps(0)} />
          <Tab label="Performans analizi" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {props.cozumAciklamasi}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.isRun ? (
          <div>
            Çözümün çalışması,{" "}
            <Typography variant="span" color="secondary">
              {props.runtimeMs} MS
            </Typography>{" "}
            sürdü. <br />
            İçinde <code>console.log()</code> çağırılan çözümlerin çalışma
            süresi artıyor. Bu yüzden burada cevapları <code>return</code>{" "}
            ederken, slayt'ta <code>console.log</code> kullandım.
          </div>
        ) : (
          "Önce çalıştırın"
        )}
      </TabPanel>
    </Item>
  );
}
