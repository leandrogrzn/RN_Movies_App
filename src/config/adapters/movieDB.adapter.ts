import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    // api_key: '4b632beb0fd1f0389f87a24da1869c76',
    api_key: THE_MOVIE_DB_KEY ?? 'No key',
    language: 'es'
  }
})