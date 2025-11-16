import { useTracks } from "../bll/useTracks";

// ui (component) -> bll (custom hook) -> dal (api)

export function TrackList() {
  const { tracks, refresh } = useTracks();

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

  const handleRefreshClick = () => {
    refresh();
  };

  return (
    <div>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          handleRefreshClick();
        }}
      >
        Refresh
      </button>
      <ul style={{ listStyle: "none" }}>
        {tracks.map((track) => {
          return <li key={track.id}>{track.attributes.title}</li>;
        })}
      </ul>
    </div>
  );
}
