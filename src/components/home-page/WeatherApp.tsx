import { Box, Button, Stack, Typography } from "@mui/material";
import { type RefObject } from "react";
import Link from "next/link";

import { buttonStyle, colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";

const WeatherApp = (props: {
  current: RefObject<HTMLDivElement>;
  next: RefObject<HTMLDivElement>;
}) => {
  return (
    <Box
      ref={props.current}
      bgcolor={colors.secondary.main}
      sx={containerStyles}
    >
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="space-between"
          gap={4}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>Weather Application</Typography>
            <Typography>
              The designed product shows real-time weather forecast in over
              200,000 cities. The Weather Application was initially developed in
              React.js and later migrated into{" "}
              <strong>Next.js + Typescript</strong>. The app utilizes
              technologies like <strong>React Query</strong> and{" "}
              <strong>Material UI</strong>. Try{" "}
              <Link target="blank" href="/projects/weather-web-app">
                demo
              </Link>{" "}
              to see how it works.
            </Typography>
          </Box>
          <img
            src="/images/weather-app.png"
            alt="weather application screenshot"
            style={projectImage}
          />
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          {" "}
          <Button
            sx={buttonStyle({ color: "primary" })}
            onClick={() => {
              props.next.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Next
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default WeatherApp;
