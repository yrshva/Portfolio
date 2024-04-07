import { Box, Link, Stack, Typography } from "@mui/material";

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
              Application form with validations
            </Typography>
            <Typography>
              A small application developed in <strong>React.js</strong> +{" "}
              <strong>Typescript</strong> using Bootstrap and json-server. The
              data in the table is loaded from the server. All the fields
              contain appropriate validations. You can see the{" "}
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
