import { Box, Link, Stack, Typography } from "@mui/material";

import { colors, fontSizes } from "../../styles";
import {
  containerStyles,
  desriptionStyles,
  projectImage,
} from "../../styles/projectStyles";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const TournamentApp = () => {
  return (
    <Box bgcolor={colors.primary.main} sx={containerStyles} id="tournament-app">
      <Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: 2, md: 4 }}
          gap={4}
        >
          <Box sx={desriptionStyles}>
            <Typography fontSize={fontSizes.XL}>Tournament App</Typography>
            <Typography>
              The product was developed in React using <strong>Redux</strong>,
              React Hooks, Bootstrap. System can add as many teams as needed,
              initially should start with none. After adding a new team it is
              added on the bottom of a table and automatically paired with other
              teams (all teams play one game with others). For a win, team gets
              3 points, draw - 1, lost - 0. Table is ordered according to total
              points. See the{" "}
              <Link target="blank" href="https://github.com/yrshva/tournament">
                source code on GitHub
              </Link>{" "}
              or try{" "}
              <Link target="blank" href="https://sport-tournament.netlify.app/">
                demo
              </Link>{" "}
              to see how it works.
            </Typography>
          </Box>
          <img
            src="/images/tournament-app.png"
            alt="tournament application screenshot"
            style={projectImage}
          />
        </Stack>
        <Stack
          margin={3}
          direction="row"
          display="flex"
          justifyContent="space-evenly"
        >
          <PreviousButton previousId="dictionary-mobile-app" />
          <NextButton nextId="application-form-app" />
        </Stack>
      </Box>
    </Box>
  );
};
export default TournamentApp;
