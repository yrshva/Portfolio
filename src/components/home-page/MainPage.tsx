import { Box, Stack, Typography } from "@mui/material";
import styled, { keyframes } from "styled-components";
import {
  swing,
  bounceInUp,
  slideInDown,
  slideInRight,
  zoomIn,
} from "react-animations";
import React, { type RefObject } from "react";
import {
  codeFontFamily,
  fontSizes,
  colors,
  mainFontFamily,
} from "../../styles";
import { containerStyles } from "../../styles/projectStyles";
import MainPageButtons from "./components/MainPageButtons";

interface MainPageProps {
  projects: RefObject<HTMLDivElement>;
}

const SlideInDown = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInDown}`};
`;

const SlideInRight = styled.span`
  display: inline-block;
  animation: 1s ${keyframes`${slideInRight}`};
`;

const Name = styled.h2`
  color: ${colors.secondary.light};
  font-weight: 700;
  margin: 0;
  font-family: ${mainFontFamily};
  font-size: ${fontSizes.XXXL}px;
  animation: 1s ${keyframes`${zoomIn}`};
`;

const HandSwing = styled.div`
  display: inline-block;
  animation: 1s ${keyframes`${swing}`} infinite;
`;

const BounceIn = styled.div`
  animation: 1s ${keyframes`${bounceInUp}`};
`;

const MainPage: React.FC<MainPageProps> = ({ projects }) => {
  return (
    <Box>
      <Box sx={containerStyles} bgcolor={colors.primary.main}>
        <Box marginTop={-10}>
          <HandSwing>
            <Typography fontSize={fontSizes.L} fontFamily={codeFontFamily}>
              👋
            </Typography>
          </HandSwing>
          <SlideInDown>
            <Typography fontSize={fontSizes.L} fontFamily={codeFontFamily}>
              Hi
            </Typography>
          </SlideInDown>
          <SlideInRight>
            <Typography
              fontSize={fontSizes.L}
              fontFamily={codeFontFamily}
              ml={1}
            >
              I am
            </Typography>
          </SlideInRight>
          <Name>Anastasiia Yershova</Name>
          <Typography
            fontSize={fontSizes.L}
            fontFamily={codeFontFamily}
            sx={{ opacity: "75%" }}
          >
            <SlideInDown>Frontend Developer based in the UK</SlideInDown>
          </Typography>
          <BounceIn>
            <Stack
              marginTop={1.5}
              direction="row"
              display="flex"
              justifyContent="space-evenly"
            >
              <MainPageButtons projects={projects} />
            </Stack>
          </BounceIn>
        </Box>
      </Box>
    </Box>
  );
};
export default MainPage;
