export function QuerySeason(season, format) {
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

export function QueryOptions(query) {
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

export function QueryTrending(seasonyear) {
  var query = `
  {
    Page(page: 1, perPage: 40) {
      media(sort:TRENDING_DESC, type:ANIME, seasonYear:${seasonyear} ) {
        id
        popularity
        coverImage {
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
  }`;
  return query;
}
