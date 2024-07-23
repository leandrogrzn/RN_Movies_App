import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from "../../config/adapters/movieDB.adapter";

export const useMovies = () => {
  
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {

    initialLoad()

  }, [])

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher)
  }
  


  return{
    isLoading,
    nowPlaying
  }
}
