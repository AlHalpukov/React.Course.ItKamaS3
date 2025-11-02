import { useEffect, useState } from "react";

function TrackList() {
  const [selectedTrackId, setSelectedTrackId] = useState(null);
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20&sortBy=publishedAt&sortDirection=desc&paginationType=offset",
      { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
    )
      .then((response) => response.json())
      .then((json) => setTracks(json.data));
  }, []);

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
            <audio controls src={track.attributes.attachments[0].url}></audio>
          </li>
        );
      })}
    </ul>
  );
}

export default TrackList;
