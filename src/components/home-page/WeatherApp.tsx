import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";
import NextButton from "./NextButton";

const WeatherApp = () => {
  return (
    <Box bgcolor={colors.secondary.main} sx={containerStyles} id="weather-app">
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
              <Link href="/projects/weather-web-app">demo</Link> to see how it
              works.
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
          <NextButton nextId="dictionary-web-app" />
        </Stack>
      </Box>
    </Box>
  );
};
export default WeatherApp;
