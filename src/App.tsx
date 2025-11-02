import { useState } from "react";

const tracks = [
  {
    id: 1,
    selected: true,
    title: "Musicfun soundtrack",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    id: 2,
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
  {
    id: 3,
    selected: true,
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
  {
    id: 4,
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

function App() {
  const [selectedTrackId, setSelectedTrackId] = useState(3);

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
    <>
      <h1>Musicfun Player</h1>
      <button
        onClick={() => {
          setSelectedTrackId(null);
        }}
      >
        Reset selection
      </button>
      <ul>
        {tracks.map(({ id, title, url, selected }) => (
          <li
            key={id}
            className={selected ? "selected" : undefined}
            onClick={() => {
              setSelectedTrackId(id);
            }}
          >
            <div
              style={{ color: selectedTrackId === id ? "green" : undefined }}
            >
              {title}
            </div>
            <audio controls src={url}></audio>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
