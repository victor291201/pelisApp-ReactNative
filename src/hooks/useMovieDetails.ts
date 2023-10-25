import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDetails } from '../interfaces/MovieDetails';
import { Cast, Credits } from '../interfaces/MovieCredits';

interface MovieInfo{
    cast:Cast[],
    isLoading:boolean,
    movieFull?:MovieDetails
}
export default function useMovieDetails(movieId:number) {
    const [state,setState] = useState<MovieInfo>({
        isLoading:true,
        movieFull:undefined,
        cast:[]
    });
    const getMovieDetails = async()=>{
        const MovieDetails = await movieDB.get<MovieDetails>(`/${movieId}`);
        const MovieCast = await movieDB.get<Credits>(`/${movieId}/credits`);
        const[MovieDetailsResponse,MovieCastResponse]=await Promise.all([MovieDetails,MovieCast])

        setState({
            isLoading:false,
            movieFull:MovieDetailsResponse.data,
            cast:MovieCastResponse.data.cast
        })
    }
    useEffect(()=>{
        getMovieDetails()
    },[])
    return {
        ...state
    }
}
