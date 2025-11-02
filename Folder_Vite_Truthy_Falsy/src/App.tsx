import { useActionState, useState } from "react";

function App() {
  const [tracks] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  const [selectedTrackId] = useState(3);
  const [selectedTrack] = useState({ id: 3 });

  return (
    <>
      <div>
        <h3>Details</h3>
        {!selectedTrackId && !selectedTrack && <p>No track selected</p>}
        {!selectedTrack && selectedTrackId && <p>Loading...</p>}
        {selectedTrack && <p>{selectedTrack.id}</p>}
      </div>
      <div>
        <h3>List</h3>
        {tracks.map((track) => (
          <div
            key={track.id}
            style={{
              color: track.id === selectedTrackId ? "green" : undefined,
            }}
          >
            {track.id}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
