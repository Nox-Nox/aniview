export function Query(season, format) {
  var query = `
    {
      Page(page: 1, perPage: 40) {
  
        media(season: ${season}, type: ANIME, status: RELEASING, format:${format}) {
          id
          coverImage{
            large
          }
          title {
            romaji
          }
          genres
          description
          source
        }
      }
    }
    `;
  return query;
}

export function queryOptions(query) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };

  return options;
}
