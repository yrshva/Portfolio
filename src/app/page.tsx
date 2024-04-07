import { Box, Typography, Stack } from "@mui/material";
import React from "react";

import MainPageButtons from "../components/home-page/MainPageButtons";
import { fontSizes, codeFontFamily, mainFontFamily, colors } from "../styles";
import { containerStyles } from "../styles/projectStyles";
import WeatherApp from "../components/home-page/WeatherApp";
import DictionaryApp from "../components/home-page/DictionaryApp";
import MobileDictionary from "../components/home-page/MobileDictionary";
import TournamentApp from "../components/home-page/TournamentApp";
import ApplicationFormApp from "../components/home-page/ApplicationFormApp";

const Home = () => {
  return (
    <>
      <Box>
        <Box
          sx={{ ...containerStyles, paddingTop: "60px" }}
          bgcolor={colors.primary.main}
        >
          <Box>
            <Typography fontSize={fontSizes.L} fontFamily={codeFontFamily}>
              👋 Hi I am
            </Typography>
            <Typography
              color={colors.secondary.light}
              fontSize={{ xs: fontSizes.XXL, md: fontSizes.XXXL }}
              fontFamily={mainFontFamily}
              fontWeight={700}
            >
              Anastasiia Yershova
            </Typography>
            <Typography
              fontSize={fontSizes.L}
              fontFamily={codeFontFamily}
              sx={{ opacity: "75%" }}
            >
              Frontend Developer based in the UK
            </Typography>
            <Stack
              marginTop={1.5}
              direction="row"
              display="flex"
              justifyContent="space-evenly"
            >
              <MainPageButtons />
            </Stack>
          </Box>
        </Box>
      </Box>
      <WeatherApp />
      <DictionaryApp />
      <MobileDictionary />
      <TournamentApp />
      <ApplicationFormApp />
    </>
  );
};
export default Home;
