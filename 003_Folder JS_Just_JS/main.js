const tracks = [
  {
    title: "Musicfun soundtrack",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3",
  },
  {
    title: "Musicfun soundtrack instrumental",
    url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3",
  },
];

const rootElement = document.getElementById("root");

const headerElement = document.createElement("h1");
// можно сделать вот так, а можно и так как показано ниже
// headerElement.textContent = "Musicfun Player";
headerElement.append("Musicfun Player");
rootElement.append(headerElement);

const tracksElement = document.createElement("ul");
tracks.forEach(track =>{
  const trackElement = document.createElement("li");
  const trackTitleElement = document.createElement("div");
  trackTitleElement.append(track.title);
  trackElement.append(trackTitleElement);
  const trackAudioElement = document.createElement("audio");
  trackAudioElement.src = track.url;
  trackAudioElement.controls = true;
  trackElement.append(trackAudioElement);
  tracksElement.append(trackElement);
});
rootElement.append(tracksElement);
