import {useEffect, useState} from 'react'
import movieDB from '../api/movieDB';
import { NowPlaying, Result } from '../interfaces/NowPlaying';

interface MoviesState{
  nowPlaying:Result[],
  popular:Result[],
  topRated:Result[],
  upcoming:Result[]
}
export const useMovies =() => {
  const [isLoading,setIsLoading]=useState(true);
  const [moviesState,setMoviesState] = useState<MoviesState>({
    nowPlaying:[],
    popular:[],
    topRated:[],
    upcoming:[]
});
  const getMovies = async ()=>{
    const cineP = movieDB.get<NowPlaying>("/now_playing")
    const popularP = movieDB.get<NowPlaying>("/popular")
    const topRatedP = movieDB.get<NowPlaying>("/top_rated")
    const upComingP = movieDB.get<NowPlaying>("/upcoming")

    const res  = await Promise.all([cineP,popularP,topRatedP,upComingP]).catch((error)=>
      console.log(error))
    console.log("llegue")
    console.log(res)
    setMoviesState({
      nowPlaying:res[0].data.results,
      popular:res[1].data.results,
      topRated:res[2].data.results,
      upcoming:res[3].data.results
    })
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  },[])
  return {...moviesState,isLoading}
}
