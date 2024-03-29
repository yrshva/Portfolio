"use client";

import React, { useRef } from "react";

import MainPage from "../components/home-page/MainPage";
import WeatherApp from "../components/home-page/WeatherApp";
import DictionaryApp from "../components/home-page/DictionaryApp";
import CollectionServices from "../components/home-page/CollectionServices";
import MobileDictionary from "../components/home-page/MobileDictionary";
import TournamentApp from "../components/home-page/TournamentApp";
import ApplicationsApp from "../components/home-page/ApplicationsApp";

const Home = () => {
  const weatherApp = useRef<HTMLDivElement | null>(null);
  const dictionaryApp = useRef<HTMLDivElement | null>(null);
  const mobileDictionary = useRef<HTMLDivElement | null>(null);
  const tournamentApp = useRef<HTMLDivElement | null>(null);
  const applicationApp = useRef<HTMLDivElement | null>(null);
  const collectionServices = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <MainPage projects={weatherApp} />
      <WeatherApp current={weatherApp} next={dictionaryApp} />
      <DictionaryApp
        previous={weatherApp}
        current={dictionaryApp}
        next={mobileDictionary}
      />
      <MobileDictionary
        previous={dictionaryApp}
        current={mobileDictionary}
        next={tournamentApp}
      />
      <TournamentApp
        previous={mobileDictionary}
        current={tournamentApp}
        next={applicationApp}
      />
      <ApplicationsApp
        previous={tournamentApp}
        current={applicationApp}
        next={collectionServices}
      />
      <CollectionServices
        previous={applicationApp}
        current={collectionServices}
        next={weatherApp}
      />
    </>
  );
};
export default Home;
