type AuthorType = {
  name: string;
  age: number;
};

export type TrackType = {
  title: string;
  author: AuthorType;
  //   {
  // name: string;
  // age: number;
  //   };
};

const track: TrackType = {
  title: "Track Title",
  author: {
    name: "Aleks",
    age: 35,
  },
};

let name = track.author.name;
