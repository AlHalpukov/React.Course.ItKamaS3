import TrackItem from "./TrackItem/TrackItem";
import { useTracks } from "../bll/useTracks";

type TrackListProps = {
  onTrackSelect: (id: string | null) => void;
  selectedTrackId: string | null;
};

function TrackList({ selectedTrackId, onTrackSelect }: TrackListProps) {
  const { tracks } = useTracks();

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
      <ul style={{ listStyle: "none" }} className="tracks">
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
