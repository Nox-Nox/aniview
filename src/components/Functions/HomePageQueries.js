export function homePageQuery(season, format) {
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
