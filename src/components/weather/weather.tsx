import { Box, Paper, Typography, Grid } from "@material-ui/core";
import { ArrowDownward, Cloud, Whatshot } from "@material-ui/icons";
import React from "react";
import { useWeather, useStyle } from "./weatherUtils";

const Weather: React.FC = () => {
  const classes = useStyle();
  const {
    temprature,
    windSpeed,
    cloudPercentage,
    windDirection,
  } = useWeather();

  return (
    <Box maxWidth={370} m={5}>
      <Paper elevation={3}>
        <Box p={2}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={3}>
              <Whatshot className={classes.icon} />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h2">{temprature}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h2">°C</Typography>
            </Grid>

            <Grid item xs={3}>
              <ArrowDownward
                style={{ transform: "rotate(" + windDirection + "deg" + ")" }}
                className={classes.icon}
              />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h2">{windSpeed}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h2">m/s</Typography>
            </Grid>

            <Grid item xs={3}>
              <Cloud className={classes.icon} />
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h2">{cloudPercentage}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h2">%</Typography>
            </Grid>
          </Grid>
          <Typography align="center">Larvik</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Weather;
