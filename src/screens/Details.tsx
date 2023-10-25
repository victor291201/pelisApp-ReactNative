import {StyleSheet,Dimensions,SafeAreaView, Text, View, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { ScrollView} from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Navigation";
import Icon from "react-native-vector-icons/Ionicons"
import useMovieDetails from "../hooks/useMovieDetails";
import Detail from "../components/Detail";

const ScreenHeight = Dimensions.get("screen").height

interface Props extends StackScreenProps<RootStackParams,"Details">{}
export default function Details({route,navigation}:Props) {
    const movie = route.params;
    const uri =  `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const {isLoading, cast, movieFull} =  useMovieDetails(movie.id);
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={{uri}} style={styles.posterImage}/>
                </View>
                <View style={styles.paddingContainer}>
                     <Text style={styles.title}>{movie.title}</Text>
                     <Text style={styles.subTitle}>{movie.original_title}</Text>
                    {isLoading?
                        <ActivityIndicator size={30} color="grey" style={{marginTop:10}}/>
                        :
                        <Detail movieFull={movieFull!} Cast={cast}/>
                    }
                </View>
                <View style={{position:"absolute",margin:10}}>
                    <TouchableOpacity 
                        onPress={()=>navigation.pop()} 
                        activeOpacity={0.8}
                    >
                        <Icon
                            color="white"
                            name="arrow-back-outline"
                            size={32}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView> 
    )
}
const styles = StyleSheet.create({
    imageContainer:{
        width:"100%",
        height: ScreenHeight*0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 9,
        marginBottom:10
    },
    posterImage:{
        flex:1,
    },
    paddingContainer:{
        padding: 20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
    },
    subTitle:{
        fontSize:16,
        opacity:0.95,
        color:"gray"
    }
})
