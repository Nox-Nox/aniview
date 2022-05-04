export function QuerySeason(season, year) {
  var query = `
  {
    TV_media: Page(page: 1, perPage: 60) {
       media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: TV, seasonYear: ${year}) {
        studios(isMain:true)  {
          edges {
            node {
              name
            }
          }
        }

        nextAiringEpisode {
          id
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
        title {
          romaji
        }
        id
        episodes
        duration
        genres
        description
        source
        popularity
        averageScore
      }
    }
      TV_SHORT_media: Page(page: 1, perPage: 60) {
      media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: TV_SHORT, seasonYear: ${year}) {
        studios(isMain:true)  {
          edges {
            node {
              name
            }
          }
        }

        nextAiringEpisode {
          id
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
        title {
          romaji
        }
        id
        episodes
        duration
        genres
        description
        source
        popularity
        averageScore
      }
    }
      MOVIE_media: Page(page: 1, perPage: 60) {
      media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: MOVIE, seasonYear: ${year}) {
        studios(isMain:true)  {
          edges {
            node {
              name
            }
          }
        }
        id
        episodes
        nextAiringEpisode {
          id
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
        title {
          romaji
        }
        id
        episodes
        duration
        genres
        description
        source
        popularity
        averageScore
      }
    }
        OVA_media: Page(page: 1, perPage: 60) {
        media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: OVA, seasonYear: ${year}) {
          studios(isMain:true)  {
            edges {
              node {
                name
              }
            }
          }

        nextAiringEpisode {
          id
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
        title {
          romaji
        }
        id
        episodes
        duration
        genres
        description
        source
        popularity
        averageScore
      }
    }
        ONA_media: Page(page: 1, perPage: 60) {
        media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: ONA, seasonYear: ${year})  {
          studios(isMain:true)  {
            edges {
              node {
                name
              }
            }
          }

        nextAiringEpisode {
          id
          timeUntilAiring
          episode
        }
        coverImage {
          large
        }
        title {
          romaji
        }
        id
        episodes
        duration
        genres
        description
        source
        popularity
        averageScore
      }
    }
    SPECIAL_media: Page(page: 1, perPage: 60) {
      media(sort: POPULARITY_DESC, season: ${season}, type: ANIME, format: SPECIAL, seasonYear: ${year}) {
        studios(isMain:true)  {
          edges {
            node {
              name
            }
          }
        }

      nextAiringEpisode {
        id
        timeUntilAiring
        episode
      }
      coverImage {
        large
      }
      title {
        romaji
      }
      id
      episodes
      duration
      genres
      description
      source
      popularity
      averageScore
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
