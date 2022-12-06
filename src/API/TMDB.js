const apiKey = "?api_key=490a9c8a065b325a7dd06b955be214d4";
const apiBase = "https://api.themoviedb.org/3";
export const imgBase = "https://image.tmdb.org/t/p/w500";

const apiEndpointUpcomingMovies = "/movie/upcoming";

const apiEndpointSearchTV = "/search/tv";

/**
 *
 * @param "&language=en-US" language - Use translated data for fields that support it default en-US
 * @param "&page=1" page - Which page to Query default 1
 * @param "&region=DE" region - get Country specific Release Date
 * @returns {   page: number,
 *              results:[
 *                          adult: boolean,
 *                          backdrop_path: String imgPath,
 *                          genre_ids: [numbers],
 *                          id: int,
 *                          original_language: "en",
 *                          original_title: String,
 *                          overview: String(description),
 *                          popularity: number,
 *                          poster_path: String,
 *                          release_date: String;
 *                          title: String,
 *                          video: boolean,
 *                          vote_average: number,
 *                          vote_count: number],
 *              total_pages: int,
 *              total_results: int}
 */
export async function getUpcomingMovies(language, page, region) {
  let url = [apiBase, apiEndpointUpcomingMovies, apiKey, language, page, region]
    .filter((element) => typeof element === "string")
    .join("");
  const res = await fetch(url);
  const data = await res.json("");
  return data;
}

/**
not done

überleg ein object zu übergeben und das zu verwenden,
ggf dynamisch genug, dass  ich eine funktion für alles verwenden kann#ifelse
 */
export async function getSearchMovies(searchOBj) {
  const apiEndpointSearchMovie = "/search/movie";
  const esc = encodeURIComponent;

  const query = Object.keys(searchOBj)
    .filter((key) => key !== "type")
    .map((key) => esc(key) + "=" + esc(searchOBj[key]))
    .join("&");
  console.log(query);
  const url = [apiBase, apiEndpointSearchMovie, apiKey, query].join("");
  console.log(url);
  const res = await fetch(url);
  return await res.json("");
}

export async function searchFunction(type, searchObj) {
  if (type === "movies") {
    return await getSearchMovies(searchObj);
  } else if (type === "upcomingMovies") {
    return await getUpcomingMovies();
  }
}
