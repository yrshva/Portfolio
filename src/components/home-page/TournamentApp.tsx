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
              The product was developed in <strong>React.js</strong> using{" "}
              <strong>Redux store</strong> for state management and Bootstrap
              for styling. The project idea is a tournament table that allows
              adding as many teams as needed, initially starting with none.
              After adding a new team, it is added to the bottom of the table
              and automatically paired with other teams (each team plays a
              single game with every team displayed on the table). For a win, a
              team gets 3 points, for a draw - 1 point, and for a loss - 0
              points. Table items are sorted by total points in ascending order.
              You can see the{" "}
              <Link target="blank" href="https://github.com/yrshva/tournament">
                source code on GitHub
              </Link>{" "}
              or try the{" "}
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
