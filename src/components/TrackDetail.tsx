import { useEffect, useState } from "react";
import {
  getTrackDetailsByTrackId,
  type TrackDetailsResource,
} from "../api/api";

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
    getTrackDetailsByTrackId(trackId).then((json) =>
      setSelectedTrack(json.data)
    );
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
