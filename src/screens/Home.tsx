import {ActivityIndicator,Dimensions,SafeAreaView, Text, View} from "react-native";
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import HorizontalSlider from "../components/HorizontalSlider";
import GradientBackground from "../components/GradientBackground";
import useColors from "../hooks/useColors";

export default function Home() {
  const {width} = Dimensions.get("window")
  const{nowPlaying,popular,topRated,upcoming, isLoading} = useMovies();
  /*const {colors} = useColors();*/
  /*const getPosterColors = async(index:number) =>{
    const movie = nowPlaying[index];
    const uri =  `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const colors = await ImageColors.getColors(uri,{})
    console.log(colors)
  }*/

  if(isLoading){
    return(
      <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator color="red" size={60}/>
      </SafeAreaView>
    )
  }
  else{
    return (
      <GradientBackground>
        <ScrollView>
          <View style={{height:440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}:any)=><MoviePoster movie={item}/>}
              sliderWidth={width}
              itemWidth={300}
              /*onSnapToItem={index=>getPosterColors(index)}*/
            />
          </View>
          <HorizontalSlider title={"En cartelera"} movies={nowPlaying}/>
          <HorizontalSlider title={"Populares"} movies={popular}/>
          <HorizontalSlider title={"Top Rated"} movies={topRated}/>
          <HorizontalSlider title={"Upcoming"} movies={upcoming}/>
        </ScrollView>
        
      </GradientBackground>
    )
  }
}
