import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";
import tokenReducer from "../features/TokenSlice"
import playlistReducer from "../features/PlayListSlice"



export default configureStore({
  reducer: {
    user: userReducer, 
    token: tokenReducer,
    playlist: playlistReducer,
  },
});
