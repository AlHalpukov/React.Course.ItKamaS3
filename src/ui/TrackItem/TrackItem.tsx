import type { TrackListItemResource } from "../../dal/api";
import styles from "./TrackItem.module.css";
import clsx from "clsx";

type TrackItemProps = {
  track: TrackListItemResource;
  onTrackSelect: (id: string | null) => void;
  isSelected: boolean;
};

function TrackItem({ track, onTrackSelect, isSelected }: TrackItemProps) {
  const handleClick = () => {
    onTrackSelect?.(track.id);
  };

  console.log(styles);

  // const selectedStyles = isSelected
  //   ? styles.track + " " + styles.selected
  //   : styles.track;

  // Вместо оператора выше можно использовать библиотеку clsx
  // строковая валидация классов
  // const selectedStyles = clsx(styles.track, isSelected && styles.selected);
  // объектная валидация
  const selectedStyles = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected,
  });

  return (
    <li
      className={selectedStyles}
      // style={{
      //   backgroundColor: isSelected ? "#303030" : undefined,
      //   borderRadius: isSelected ? "15px" : undefined,
      //   margin: "5px",
      // }}
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
