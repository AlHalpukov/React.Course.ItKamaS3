import { useState, useEffect } from "react";
import {
  type TrackDetailsResource,
  getTrackDetailsByTrackId,
} from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, setTrackDetail] = useState<TrackDetailsResource | null>(
    null
  );

  useEffect(() => {
    if (!trackId) {
      setTrackDetail(null);
      return;
    }
    getTrackDetailsByTrackId(trackId).then((json) => setTrackDetail(json.data));
  }, [trackId]);

  return { trackDetails: trackDetails };
}
