export type TrackDetailsOutput = { data: TrackDetailsResource };

export type TrackDetailsResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

export type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
};

export type TrackListOutput = {
  data: Array<TrackListItemResource>;
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackListItemAttributes;
};

export type TrackListItemAttributes = {
  title: string | null;
  attachments: Array<TrackAttachment>;
};

type TrackAttachment = {
  url: string;
};

export const getTrackDetailsByTrackId = (trackId: string) => {
  const promise: Promise<TrackDetailsOutput> = fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
    { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
  ).then((response) => response.json());

  return promise;
};

export const getTracks = (): Promise<TrackListOutput> => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20&sortBy=publishedAt&sortDirection=desc&paginationType=offset",
    { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
  ).then((response) => response.json());
};
