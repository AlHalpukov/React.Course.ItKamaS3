import type { TrackListItemResource } from "../dal/api";

type TrackItemProps = {
  track: TrackListItemResource;
  onTrackSelect: (id: string | null) => void;
  isSelected: boolean;
};

function TrackItem({ track, onTrackSelect, isSelected }: TrackItemProps) {
  const handleClick = () => {
    onTrackSelect?.(track.id);
  };

  return (
    <li
      style={{
        backgroundColor: isSelected ? "#4e4b4bd0" : undefined,
        borderRadius: isSelected ? "15px" : undefined,
        margin: "5px",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          color: isSelected ? "green" : undefined,
          textAlign: "center",
          fontWeight: isSelected ? "bold" : undefined,
          textDecoration: isSelected ? "underline" : undefined,
        }}
      >
        {track.attributes.title}
      </div>
      <audio
        controls
        src={track.attributes.attachments[0].url}
        style={{ padding: "0 30px" }}
      ></audio>
    </li>
  );
}

export default TrackItem;
