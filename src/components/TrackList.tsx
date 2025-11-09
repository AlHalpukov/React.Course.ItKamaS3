import { useEffect, useState } from "react";
import { getTracks, type TrackListItemResource } from "../api/api";
import TrackItem from "./TrackItem";

type TrackListProps = {
  onTrackSelect: (id: string | null) => void;
  selectedTrackId: string | null;
};

function TrackList({ selectedTrackId, onTrackSelect }: TrackListProps) {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(
    null
  );

  useEffect(() => {
    getTracks().then((json) => setTracks(json.data));
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
