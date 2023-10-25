import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';

interface Props{
    children: JSX.Element | JSX.Element[]
}
export default function GradientBackground({children}:Props) {
  return (
    <SafeAreaView style={{flex:1}}>
        <LinearGradient 
        colors={["#084F6A","#75CEDB","white"]}
        style={{...StyleSheet.absoluteFill}}
        start={{x:0.1,y:0.1}}
        end={{x:0.5,y:0.7}}/>
        {children}
    </SafeAreaView>
  )
}
