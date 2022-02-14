import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/player";
import { selectUser, SET_USER } from "./features/UserSlice";
import { getTokenFromURL } from "./spotifyLogic";
import spotifyWebApi from "spotify-web-api-js";
import { SET_TOKEN } from "./features/TokenSlice";
import { SET_PLAYLIST } from "./features/PlayListSlice";

const spotify = new spotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;

    if (_token) {
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
      spotify
        .getPlaylist("5ieJqeLJjjI8iJWaxeBLuK")
        .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    }
  }, [dispatch]);
  return <div className="app">{user ? <Player /> : <Login />}</div>;
}

export default App;
