export function QueryTop6(season, year) {
  var query = `
    {
        Page(page:1, perPage:6){
            media(sort: POPULARITY_DESC, type:ANIME, format:TV, season:${season} ,seasonYear:${year}) {
              id
              title{
                romaji
              }
              bannerImage
              trending
            }
          }
    }
    `;
  return query;
}
