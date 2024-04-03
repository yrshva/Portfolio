"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DAYS, MONTHS } from "./helpers/dateConstants";
import { colors, fontSizes } from "../../styles";

interface LocalTimeProps {
  timezone: number;
}
const LocalTime: React.FC<LocalTimeProps> = ({ timezone }) => {
  const localTime =
    new Date().getTime() +
    (timezone + new Date().getTimezoneOffset() * 60) * 1000;

  const [date, setDate] = useState(new Date(localTime));

  const minutes = date.getMinutes(),
    hours = date.getHours(),
    seconds = date.getSeconds();

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const time = `${DAYS[date.getDay()]}, ${date.getDate()} ${
    MONTHS[date.getMonth()]
  } ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date(localTime));
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [localTime]);

  return (
    <>
      <Typography fontSize={fontSizes.M} color={colors.main.lighter}>
        Local time:
      </Typography>
      <Typography fontSize={fontSizes.M} color={colors.main.lighter}>
        {time}
      </Typography>
    </>
  );
};

export default LocalTime;
