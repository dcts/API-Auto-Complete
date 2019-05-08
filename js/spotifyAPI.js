console.log("hi its the SPOTIFY api call script!")
// Spotify cilent ID and Secret on Dashboard
// https://developer.spotify.com/documentation/general/guides/authorization-guide/
const clientID = "1e321e4cf1734fb88baf478fca5e6c4b";
const clientSecret = "3eb5fb170a4f451eb581640f9eb16fd6";
const bandName = "brittany spear"
// Need to encode clientID and secret together to base 64 with this format (base 64 encoded clientID:clientSecret)
// colon is a must!!!
// curl -X "POST" -H "Authorization: Basic (base 64 encoded clientID:clientSecret)" -d grant_type=client_credentials https://accounts.spotify.com/api/token
// curl -X "POST" -H "Authorization: Basic MWUzMjFlNGNmMTczNGZiODhiYWY0NzhmY2E1ZTZjNGI6M2ViNWZiMTcwYTRmNDUxZWI1ODE2NDBmOWViMTZmZDY=" -d grant_type=client_credentials https://accounts.spotify.com/api/token
// return authentication token

// fetch command for getting access token
// fetch("https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V", {
//   method: "POST",
//   headers: {
//     "Authorization": "Basic MWUzMjFlNGNmMTczNGZiODhiYWY0NzhmY2E1ZTZjNGI6M2ViNWZiMTcwYTRmNDUxZWI1ODE2NDBmOWViMTZmZDY=",
//   },
//   body: JSON.stringify({
//     grant_type: client_credentials
//   })
// }).then((response) => response.json())
// .then((data) => console.log(data)); // Need some .then bullshit

const token = "BQBLyBN6f-N8zsbGxHDl__ZPOl1vnAij__8A9bo8hlIzWVDjk-j-alijxi-5t_AbZ6q2_GlXB-psGIIwfUU"


// THIS WORKS
// curl -H "Authorization: Bearer BQBLyBN6f-N8zsbGxHDl__ZPOl1vnAij__8A9bo8hlIzWVDjk-j-alijxi-5t_AbZ6q2_GlXB-psGIIwfUU" https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V
// This grabs a static track with the token
// fetch("https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V", {
//   headers: {
//     "Authorization": "Bearer BQBLyBN6f-N8zsbGxHDl__ZPOl1vnAij__8A9bo8hlIzWVDjk-j-alijxi-5t_AbZ6q2_GlXB-psGIIwfUU"
//   }
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// This allows us to search an artist off of Spotify
fetch(`https://api.spotify.com/v1/search?q=${bandName}&type=artist`, {
  headers: {
    "Authorization": "Bearer BQBLyBN6f-N8zsbGxHDl__ZPOl1vnAij__8A9bo8hlIzWVDjk-j-alijxi-5t_AbZ6q2_GlXB-psGIIwfUU",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})
  .then((response) => response.json())
  .then((data) => console.log(data));
// https://api.spotify.com/v1/search?q=@@@ARTISTNAME@@@&type=artist" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBLyBN6f-N8zsbGxHDl__ZPOl1vnAij__8A9bo8hlIzWVDjk-j-alijxi-5t_AbZ6q2_GlXB-psGIIwfUU
