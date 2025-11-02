import { TrackType } from "./objects";

// const numbers: number[] = [1, 2, 3, 4];
const numbers: Array<number> = [1, 2, 3, 4];

numbers.push(5);

numbers[4].toFixed();

const tracks: Array<TrackType | null> = [
  {
    title: "",
    author: {
      name: "",
      age: 12,
    },
  },
];
