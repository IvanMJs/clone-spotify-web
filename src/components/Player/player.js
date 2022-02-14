import React, { useState } from "react";
import Body from "../Body/Body";
import { Footer } from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { SpotifyBody } from "./styles";

const Player = () => {
  const [songSelected, setSongSelected] = useState("");

  const songToFooter = (songSelected) => {
    setSongSelected(songSelected);
  };

  return (
    <>
      <SpotifyBody>
        <Sidebar />
        <Body songToFooter={songToFooter} />
      </SpotifyBody>
      <Footer dataSong={songSelected} />
    </>
  );
};

export default Player;
