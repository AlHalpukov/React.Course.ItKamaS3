import { createRoot } from "react-dom/client";
import "./index.css";
import { TrackList } from "./ui/TrackList";
import Counter from "./ui/Counter";

const rootEl = document.getElementById("root")!;
const reactRoot = createRoot(rootEl);
reactRoot.render(
  <>
    <Counter />
    <hr />
    <TrackList />
  </>
);
