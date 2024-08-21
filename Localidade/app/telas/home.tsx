import { View,ImageBackground,Text,TouchableOpacity, StyleSheet, Platform } from 'react-native';
import {useRouter} from 'expo-router';


export default function LocatioHome() {
    const router = useRouter ();

    return(
        <ImageBackground source={require('./img/Fundo.png')} 
        style={styles.backgrond}>

        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    backgrond:{
        flex:1,
        width:'100%',
        height:'100%',
    }
})
