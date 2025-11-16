import { useTrackDetail } from "../bll/useTrackDetail";

type TrackDetailProps = {
  trackId: string | null;
};

function TrackDetail({ trackId = null }: TrackDetailProps) {
  const { trackDetails } = useTrackDetail(trackId);
  return (
    <div>
      <h3>Track Detail</h3>
      {!trackId && <p> Track not selected</p>}
      {!trackDetails && trackId && <p>Loading...</p>}
      {trackDetails && trackId && trackDetails.id !== trackId && (
        <p>Loading...</p>
      )}
      {trackDetails && (
        <div>
          <h3>{trackDetails.attributes.title}</h3>
          <h4>Lyrics</h4>
          <p>{trackDetails.attributes.lyrics ?? "No lyricks"}</p>
        </div>
      )}
    </div>
  );
}

export default TrackDetail;
