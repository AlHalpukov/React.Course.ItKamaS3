import { useEffect, useState } from "react";

function TrackDetail({ trackId }) {
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    if (!trackId) {
      setSelectedTrack(null);
      return;
    }
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
      { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
    )
      .then((response) => response.json())
      .then((json) => setSelectedTrack(json.data));
  }, [trackId]);

  return (
    <div>
      <h3>Track Detail</h3>
      {!trackId && <p> Track not selected</p>}
      {!selectedTrack && trackId && <p>Loading...</p>}
      {selectedTrack && trackId && selectedTrack.id !== trackId && (
        <p>Loading...</p>
      )}
      {selectedTrack && (
        <div>
          <h3>{selectedTrack.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{selectedTrack.attributes.lyricks ?? "No lyricks"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetail;
