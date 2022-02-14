export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial
    },{});
};

const endpoint = "https://accounts.spotify.com/authorize";
const clientID = "49b15f326ed54786a485fba501bfc90c";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
const redirectUri = "https://clone-spotify-web-4wbcvn9n9-ivanjs.vercel.app/";
export const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;
