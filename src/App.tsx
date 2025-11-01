const tracks = [
  {
    id: 1,
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
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
  {
    id: 4,
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

const Item = ({ id, title, url }) => {
  return (
    <li key={id}>
      <div>{title}</div>
      <audio controls src={url}></audio>
    </li>
  );
};

function App() {
  return (
    <>
      <h1>Musicfun Player</h1>
      <ul>
        {tracks.map(({ title, url }) => (
          <Item title={title} url={url} />
        ))}
      </ul>
    </>
  );
}

export default App;
