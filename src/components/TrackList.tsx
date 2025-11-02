import { useEffect, useState } from "react";
import TrackItem from "./TrackItem";

function TrackList({ onTrackSelect, selectedTrackId }) {
  const [tracks, setTracks] = useState(null);

  useEffect(() => {
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20&sortBy=publishedAt&sortDirection=desc&paginationType=offset",
      { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
    )
      .then((response) => response.json())
      .then((json) => setTracks(json.data));
  }, []);

  const handleResetClick = () => onTrackSelect?.(null);

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
    <div>
      <button onClick={handleResetClick}>Reset Selection</button>
      <hr />
      <ul style={{ listStyle: "none" }}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              onTrackSelect={onTrackSelect}
              isSelected={selectedTrackId === track.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TrackList;
