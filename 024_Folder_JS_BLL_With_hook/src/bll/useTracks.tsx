import { useState, useEffect } from "react";
import { getTracksViaApi } from "../dal/api";

// custom hook "use..."
export function useTracks() {
  const [tracks, setTracks] = useState<Array<any> | null>(null);

  useEffect(() => {
    getTracksViaApi().then((json) => setTracks(json.data));
  }, []);

  return {
    tracks: tracks,
    refresh: () => {
      setTracks(null);
      getTracksViaApi().then((json) => setTracks(json.data));
    },
  };
}
