import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  icon: {
    fontSize: 48,
  },
});

export const useWeather = () => {
  const [temprature, setTemprature] = useState<number>();
  const [windSpeed, setWindSpeed] = useState<number>();
  const [cloudPercentage, setCloudPercentage] = useState<number>();
  const [windDirection, setWindDirection] = useState<number>();

  const currentTime = new Date();
  currentTime.setMinutes(0);
  currentTime.setSeconds(0);

  useEffect(() => {
    fetch(
      "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.05&lon=9.98"
    )
      .then((response) => response.json())
      .then((data) =>
        data.properties.timeseries.forEach((t: any) => {
          if (new Date(t.time).toString() === currentTime.toString()) {
            const {
              air_temperature,
              wind_speed,
              cloud_area_fraction,
              wind_from_direction
            } = t.data.instant.details;

            setTemprature(air_temperature);
            setWindSpeed(wind_speed);
            setCloudPercentage(cloud_area_fraction);
            setWindDirection(wind_from_direction)
          }
        })
      );
  });

  return { temprature, windSpeed, cloudPercentage, windDirection };
};
