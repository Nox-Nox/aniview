
var query = `
{
  Page(page: 1, perPage: 40) {

    media(season: SPRING, type: ANIME, status: RELEASING, format:TV) {
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



var url = "https://graphql.anilist.co",
options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    query: queryTV,
  }),
};

fetch(url, options).then((response) => {
  return console.log(response.json());
})