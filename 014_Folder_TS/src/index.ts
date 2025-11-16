let a: number = 10;
a = 100;

let firstName: string = "Aleks";

let isTrue: boolean = true;

let selectedTrackId: string | null = null;

export function run() {
  if (selectedTrackId !== null) {
    console.log(selectedTrackId.toUpperCase());
  }
}
