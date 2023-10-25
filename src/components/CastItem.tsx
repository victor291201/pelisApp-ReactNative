import React from 'react'
import { Cast } from '../interfaces/MovieCredits';
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props{
    actor: Cast
}

export default function CastItem({actor}:Props) {
    const uri =  `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={styles.container}>
        {actor.profile_path && (
            <Image style={{width:50,height:50,borderRadius:10}} source={{uri}}/>
        )}
        <View style={styles.actorInfo}>
            <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>{actor.name}</Text>
            <Text style={{fontSize:12,opacity:0.8,color:"black"}}>{actor.character}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:"white",
        flexDirection:"row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal:5,
        marginBottom:13,
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4
    },
    actorInfo:{
        marginLeft:10
    }
})
