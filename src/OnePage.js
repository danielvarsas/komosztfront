import React from "react";
import Header from "./components/Header";
import MiEz from "./components/MiEz";
import FirstTriangle from "./components/FirstTriangle";
import IgyKomposztalj from "./components/IgyKomposztalj";
import SecondTriangle from "./components/SecondTriangle";
import ThirdTriangle from "./components/ThirdTriangle";
import Gyik from "./components/Gyik";
import LastTriangle from "./components/LastTriangle";
import FollowUs from "./components/FollowUs";

function OnePage() {
  return (
    <>
      <Header />
      <FirstTriangle />
      <MiEz />
      <SecondTriangle />
      <IgyKomposztalj />
      <ThirdTriangle />
      <Gyik />
      <LastTriangle />
      <FollowUs />
    </>
  );
}

export default OnePage;
