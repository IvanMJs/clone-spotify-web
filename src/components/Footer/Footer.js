import { Grid, Slider } from "@mui/material";
import React from "react";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import {
  FooterCenter,
  FooterContainer,
  FooterLeft,
  FooterRight,
} from "./styles";

export const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src={props.dataSong?.album?.images[0]?.url} alt="cover" />
        <div>
          <h4>{props.dataSong?.name}</h4>
          <p></p>
        </div>
      </FooterLeft>
      <FooterCenter>
        <ShuffleIcon className="shuffle" />
        <SkipPreviousIcon className="icon" />
        <PlayCircleOutlineIcon className="icon" />
        <SkipNextIcon className="icon" />
        <RepeatIcon className="repeat" />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={3}>
          <Grid item>
            <PlaylistPlayIcon className="playList" />
          </Grid>
          <Grid item>
            <VolumeDownIcon className="volume" />
          </Grid>
          <Grid item xs>
            <Slider className="slider" />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
};
