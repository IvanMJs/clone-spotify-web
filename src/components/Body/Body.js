import React, { useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import { BodyContainer, Icons, Info, InfoText, Songs } from "./styles";
import { useSelector } from "react-redux";
import { selectPlaylist } from "../../features/PlayListSlice";
import { PlayCircleFilled } from "@mui/icons-material";
import FavoritesIcon from "@mui/icons-material/Favorite";
import Morehorizonicon from "@mui/icons-material/MoreHoriz";
import { SongRow } from "./SongRow";

const Body = ({ songToFooter }) => {
  const playlist = useSelector(selectPlaylist);

  const [childValue, setChildValue] = useState("");
  const [songSelected, setSongSelected] = useState("");

  const songOrArtist = playlist?.tracks?.items.map((item) => item.track);

  const filteredSongs = useMemo(
    () =>
      songOrArtist?.filter((track) => {
        const song = track.name
          .toLowerCase()
          .includes(childValue?.toLowerCase());
        const artist = track.artists[0].name
          .toLowerCase()
          .includes(childValue?.toLowerCase());
        return song || artist;
      }),
    [songOrArtist, childValue]
  );

  const childInputSearch = (inputChild) => {
    setChildValue(inputChild);
  };

  const dataSongSelected = (songSelected) => {
    setSongSelected(songSelected);
    songToFooter(songSelected);
  };

  return (
    <BodyContainer>
      <div className="stlyeHeaderInfo">
        <Header childInputSearch={childInputSearch} />
        <Info>
          <img src={playlist?.images[0]?.url} alt="" />

          <InfoText>
            <h4>PLAYLIST</h4>
            <h2>Discover Weekly</h2>
            <p>{playlist?.name}</p>
          </InfoText>
        </Info>
      </div>

      <Songs>
        <Icons>
          <PlayCircleFilled fontSize="large" className="playButton" />
          <FavoritesIcon fontSize="large" className="favoriteIcon" />
          <Morehorizonicon fontSize="large" className="moreHorizonIcon" />
        </Icons>

        {filteredSongs?.map((song, index) => (
          <SongRow
            track={song}
            key={index}
            dataSongSelected={dataSongSelected}
          />
        ))}
      </Songs>
    </BodyContainer>
  );
};

export default Body;
