function App() {
  return (
    <div>
      {/* JSX элементы должны быть обязательно закрыты */}
      <input
        type="text"
        id="title"
        maxLength={15}
        placeholder="search"
        disabled={true}
        style={{
          color: "red",
          border: "10px solid white",
          backgroundColor: "grey",
        }}
      />
    </div>
  );
}

export default App;
