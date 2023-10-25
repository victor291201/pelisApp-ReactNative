/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text,View,Image} from "react-native";
import { Result } from '../interfaces/NowPlaying';
import MoviePoster from './MoviePoster';
import { FlatList } from 'react-native-gesture-handler';

    interface Props{
        movies:Result[],
        title:String
    }
export default function HorizontalSlider({movies, title}:Props) {
  return (
    <View style={{height:235, paddingTop:0,marginTop:0}}>
        <Text style={{fontSize:25,fontWeight:"bold", paddingTop:0,marginTop:0}}>
            {title}
        </Text>
        <FlatList
            data={movies}
            renderItem={({item}:any)=><MoviePoster movie={item} width={140} height={200}/>}
            keyExtractor={(item)=>item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
