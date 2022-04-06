export function QuerySeason(season, status, movie_status) {
  var query = `
  {
    TV_media: Page(page: 1, perPage: 25) {
       media(season: ${season}, type: ANIME, status: ${status}, format: TV) {
        id
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
      TV_SHORT_media: Page(page: 1, perPage: 25) {
      media(season: ${season}, type: ANIME, status: ${status}, format: TV_SHORT) {
        id
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
      MOVIE_media: Page(page: 1, perPage: 25) {
      media(season: ${season}, type: ANIME, status: ${movie_status}, format: MOVIE) {
        id
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
        OVA_media: Page(page: 1, perPage: 25) {
        media(season: ${season}, type: ANIME, status: ${status}, format: OVA) {
        id
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
        ONA_media: Page(page: 1, perPage: 25) {
        media(season: ${season}, type: ANIME, status: ${status}, format: ONA) {
        id
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
