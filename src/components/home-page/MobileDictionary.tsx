import { Box, Link, Stack, Typography } from "@mui/material";

import { colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";

const MobileDictionary = () => {
  return (
    <Box
      bgcolor={colors.secondary.main}
      sx={containerStyles}
      id="dictionary-mobile-app"
    >
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>
              Dictionary Application for iOS/Android
            </Typography>
            <Typography>
              Dictionary application with some new features like different
              accents' pronunciation. Developed in React Native using Expo CLI
              and Typescript. See the{" "}
              <Link
                target="blank"
                href="https://github.com/yrshva/react-native-dictionary-app"
              >
                source code on GitHub
              </Link>
              .
            </Typography>
          </Box>
          <video style={{ ...projectImage, maxHeight: "70vh" }} controls muted>
            <source src="/videos/mobile-dictionary.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <PreviousButton previousId="dictionary-web-app" />
          <NextButton nextId="tournament-app" />
        </Stack>
      </Box>
    </Box>
  );
};
export default MobileDictionary;
