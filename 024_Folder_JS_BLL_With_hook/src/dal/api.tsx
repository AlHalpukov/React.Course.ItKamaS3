// api

export const getTracksViaApi = () => {
  return fetch(
    "https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageNumber=1&pageSize=20&sortBy=publishedAt&sortDirection=desc&paginationType=offset",
    { headers: { "api-key": "2128989c-130d-4766-aaf4-d0a319a66f59" } }
  ).then((response) => response.json());
};
