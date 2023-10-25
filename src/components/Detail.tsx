import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { Cast } from '../interfaces/MovieCredits';
import { MovieDetails } from '../interfaces/MovieDetails';
import  Icon  from 'react-native-vector-icons/Ionicons';
import currencyFormatter from "currency-formatter"
import CastItem from './CastItem';

interface Props{
    movieFull:MovieDetails,
    Cast:Cast[]
}
export default function Detail({movieFull,Cast}:Props) {
  return (
    <View>
        <View style={{flexDirection:"row"}}>
            <Icon
                name="star-outline"
                color="grey"
                size={20}/>
            <Text>
            {`${movieFull.vote_average} - ${movieFull.genres.map(g=>g.name).join(", ")}`}
            </Text>
        </View>
        <View>
            <Text style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"black"}}>
                Historia:
            </Text>
            <Text>
                {movieFull.overview}
            </Text>
        </View>
        <View>
            <Text style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"black"}}>
                Presupuesto:
            </Text>
            <Text>
                {currencyFormatter.format(movieFull.budget,{format:"USD"})}
            </Text>
        </View>
        <View>
            <Text style={{fontSize:20,marginTop:10,fontWeight:"bold",color:"black"}}>
                Casting:
            </Text>
            <View>
                <FlatList
                    data={Cast}
                    renderItem={({item}:any)=><CastItem actor={item}/>}
                    keyExtractor={(item)=>item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
        
    </View>
  )
}
