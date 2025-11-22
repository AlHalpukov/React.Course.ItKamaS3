import { useTrackDetail } from "../../bll/useTrackDetail";
import styles from "./TrackDetail.module.css";

type TrackDetailProps = {
  trackId: string | null;
};

function TrackDetail({ trackId = null }: TrackDetailProps) {
  const { trackDetails } = useTrackDetail(trackId);
  return (
    <div className={styles.track}>
      <h2>Track Detail</h2>
      {!trackId && <p> Track not selected</p>}
      {!trackDetails && trackId && <p>Loading...</p>}
      {trackDetails && trackId && trackDetails.id !== trackId && (
        <p>Loading...</p>
      )}
      {trackDetails && (
        <div>
          <h2>{trackDetails.attributes.title}</h2>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "No lyricks"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetail;
