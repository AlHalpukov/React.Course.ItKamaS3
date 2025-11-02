function sum(a: number, b: number): number {
  return a + b;
}

type PropsType = {
  value: string;
  onChange: () => void;
  onSelect: (trackId: string) => void;
};

function component(props: PropsType): string {
  return "value" + props.value;
}

console.log(
  component({
    value: "Hello",
    onChange: () => {
      console.log("On Change");
    },
    onSelect: (trackId) => {
      console.log(trackId);
    },
  })
);
