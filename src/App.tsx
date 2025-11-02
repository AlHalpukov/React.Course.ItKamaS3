import { useEffect, useState } from "react";

function App() {
  console.log("App render");
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20&sortBy=publishedAt&sortDirection=desc&paginationType=offset",
      { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
    )
      .then((response) => response.json())
      .then((json) => setTracks(json.data));
  }, []);

  useEffect(
    () => {
      if (!selectedTrackId) return;
      fetch(
        "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
          selectedTrackId,
        { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
      )
        .then((response) => response.json())
        .then((json) => setSelectedTrack(json.data));
    },
    [selectedTrackId]
  );

  if (tracks === null) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <span>Loading...</span>
      </>
    );
  }

  if (tracks.length === 0) {
    return (
      <>
        <h1>Musicfun Player</h1>
        <span>No Tracks</span>
      </>
    );
  }

  return (
    <>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
          setSelectedTrack(null);
        }}
      >
        Reset selection
      </button>
      <div style={{ display: "flex", gap: "30px" }}>
        <ul>
          {tracks.map((track) => {
            return (
              <li
                key={track.id}
                style={{
                  backgroundColor:
                    selectedTrackId === track.id ? "#4e4b4bd0" : undefined,
                }}
                onClick={() => {
                  setSelectedTrackId(track.id);
                }}
              >
                <div
                  style={{
                    color: selectedTrackId === track.id ? "green" : undefined,
                  }}
                >
                  {track.attributes.title}
                </div>
                <audio
                  controls
                  src={track.attributes.attachments[0].url}
                ></audio>
              </li>
            );
          })}
        </ul>
        <div>
          <h3>Track Detail</h3>
          {!selectedTrackId && <p> Track not selected</p>}
          {!selectedTrack && selectedTrackId && <p>Loading...</p>}
          {selectedTrack &&
            selectedTrackId &&
            selectedTrack.id !== selectedTrackId && <p>Loading...</p>}
          {selectedTrack && (
            <div>
              <h3>{selectedTrack.attributes.title}</h3>
              <h4>Lyrics</h4>
              <p>{selectedTrack.attributes.lyricks ?? "No lyricks"}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
