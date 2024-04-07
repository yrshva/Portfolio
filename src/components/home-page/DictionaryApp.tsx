import { Box, Link, Stack, Typography } from "@mui/material";

import { colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

const DictionaryApp = () => {
  return (
    <Box
      bgcolor={colors.primary.main}
      sx={containerStyles}
      id="dictionary-web-app"
    >
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
          gap={4}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>
              Dictionary Application
            </Typography>
            <Typography>
              You can search for any word's definition and listen to its
              pronuncuation with the Dictionary Application. This product was
              developed in React.js using REST API, React Hooks, Bootstrap. See
              the{" "}
              <Link
                target="blank"
                href="https://github.com/yrshva/dictionary-app"
              >
                source code on GitHub
              </Link>{" "}
              or try{" "}
              <Link target="blank" href="https://wordbook-app.netlify.app/">
                demo
              </Link>{" "}
              to see how it works.
            </Typography>
          </Box>
          <img
            src="/images/dictionary-app.png"
            alt="dictionary application screenshot"
            style={projectImage}
          />
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <PreviousButton previousId="weather-app" />
          <NextButton nextId="dictionary-mobile-app" />
        </Stack>
      </Box>
    </Box>
  );
};
export default DictionaryApp;
