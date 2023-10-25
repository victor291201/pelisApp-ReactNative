/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text,View,Image} from "react-native";
import { Result } from '../interfaces/NowPlaying';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

    interface Props{
        movie:Result,
        width?: number,
        height?:number
    }
export default function MoviePoster({movie,width=300,height=420}:Props) {

    const navigation = useNavigation();
  const uri =  `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <TouchableOpacity  
        activeOpacity={0.8}
        onPress={()=>navigation.navigate('Details',movie)}
        style={{width,height,marginHorizontal:8,paddingBottom:20}}>
        <View style={{
            flex:1,
            borderRadius:15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.5,
            shadowRadius: 7,
            elevation: 9}}>
            <Image
            source={{uri}}
            style={{flex:1,borderRadius:15}}
            />
        </View>
    </TouchableOpacity>
  )
}
