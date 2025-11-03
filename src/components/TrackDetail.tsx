import { useEffect, useState } from "react";

type TrackDetailsResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
};

type TrackDetailProps = {
  trackId: string | null;
};

function TrackDetail({ trackId }: TrackDetailProps) {
  const [selectedTrack, setSelectedTrack] =
    useState<TrackDetailsResource | null>(null);

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
          <p>{selectedTrack.attributes.lyrics ?? "No lyricks"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetail;
