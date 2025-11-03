// import { useEffect, useState } from "react";
// import Game from "./components/Game";
// import PageTitle from "./components/PageTitle";
// import TrackList from "./components/TrackList";

// function App() {
//   console.log("App render");
//   const [selectedTrackId, setSelectedTrackId] = useState(null);
//   const [selectedTrack, setSelectedTrack] = useState(null);

//   useEffect(() => {
//     if (!selectedTrackId) return;
//     fetch(
//       "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
//         selectedTrackId,
//       { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
//     )
//       .then((response) => response.json())
//       .then((json) => setSelectedTrack(json.data));
//   }, [selectedTrackId]);

//   return (
//     <>
//       <PageTitle />
//       <button
//         onClick={() => {
//           setSelectedTrackId(null);
//           setSelectedTrack(null);
//         }}
//       >
//         Reset selection
//       </button>
//       <div style={{ display: "flex", gap: "30px" }}>
//         {/* <TrackList /> */}
//         <div>
//           <h3>Track Detail</h3>
//           {!selectedTrackId && <p> Track not selected</p>}
//           {!selectedTrack && selectedTrackId && <p>Loading...</p>}
//           {selectedTrack &&
//             selectedTrackId &&
//             selectedTrack.id !== selectedTrackId && <p>Loading...</p>}
//           {selectedTrack && (
//             <div>
//               <h3>{selectedTrack.attributes.title}</h3>
//               <h4>Lyrics</h4>
//               <p>{selectedTrack.attributes.lyricks ?? "No lyricks"}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       <hr />
//       <Game />
//     </>
//   );
// }

// export default App;
