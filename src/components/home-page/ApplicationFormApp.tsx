import { Box, Button, Link, Stack, Typography } from "@mui/material";

import { colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";
import PreviousButton from "./PreviousButton";

const ApplicationFormApp = () => {
  return (
    <Box
      bgcolor={colors.secondary.main}
      sx={containerStyles}
      gap={4}
      id="application-form-app"
    >
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>
              Application form with validation
            </Typography>
            <Typography>
              A small application in React + Typescript using REST API,
              Bootstrap, json-server. The data in the table is loaded from the
              server. All the fields contain validation, form has appropriate
              checks before submitting (disable Buttons or others) See the{" "}
              <Link
                href="https://github.com/yrshva/fake-applications"
                target="blank"
              >
                source code on GitHub
              </Link>
              .
            </Typography>
          </Box>
          <video style={projectImage} controls muted>
            <source src="/videos/applications-app.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <PreviousButton previousId="tournament-app" />
        </Stack>
      </Box>
    </Box>
  );
};
export default ApplicationFormApp;
