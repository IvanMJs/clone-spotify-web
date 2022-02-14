import { useState } from "react";
import { SongInfo, SongRowContainer } from "./styles";

export const SongRow = ({ track, dataSongSelected }) => {
  const [data, setData] = useState();

  function handleData(track) {
    setData(track);
    dataSongSelected(data);
  }

  

  return (
    <SongRowContainer>
      <img src={track.album.images[0].url} alt="album" />
      <button
        onClick={() =>
          handleData(track)
        }
      >
        <SongInfo>
          <h4>{track.name}</h4>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")}
            {track.album.name}
          </p>
        </SongInfo>
      </button>
    </SongRowContainer>
  );
};
