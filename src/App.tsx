// const tracks = null;
// const tracks = [];

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

const selectedTrackId = 3;

const Item = ({ id, title, url, selected }) => {
  return (
    <li className={selected ? "selected" : null}>
      <div style={{ color: selectedTrackId === id ? "green" : undefined }}>
        {title}
      </div>
      <audio controls src={url}></audio>
    </li>
  );
};

function App() {
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
      <ul>
        {tracks.map(({ id, title, url, selected }) => (
          <Item key={id} id={id} title={title} url={url} selected={selected} />
        ))}
      </ul>
    </>
  );
}

export default App;
