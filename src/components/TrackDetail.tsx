import { useEffect, useState } from "react";

function TrackDetail() {
  const [selectedTrack, setSelectedTrack] = useState(null);

  const selectedTrackId = "75e4b87d-758e-43e6-8cf7-2fa0bd2ef413";

  useEffect(() => {
    if (!selectedTrackId) return;
    fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        selectedTrackId,
      { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
    )
      .then((response) => response.json())
      .then((json) => setSelectedTrack(json.data));
  }, [selectedTrackId]);

  return (
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
  );
}

export default TrackDetail;
