import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { elevation } from "../common/styles";

export default function MovieScreen({navigation}){

    const movie = navigation.getParam("movie");

    return (
     
        <View style={[styles.container, elevation]}>
        <Image style={styles.image} source={{uri: movie.Poster}}/>
        <View style= {styles.content}>
        <Text style= {styles.header} >{movie.Title}</Text>
            <Text style= {styles.header} >{movie.Year}</Text>
        </View>

        <Text style= {styles.description} >Longtime hit man Jimmy Conlon (Liam Neeson), best friend of mob boss Shawn Maguire (Ed Harris), has seen better days. He's haunted both by the sins of his past and a police detective who's been breathing down his neck for 30 years, and the only comfort Jimmy has is whiskey. However, when his estranged son (Joel Kinnaman) becomes a mob target, Jimmy figures that the only way to atone for his past mistakes is to make sure that his son doesn't wind up at the wrong end of a gun.</Text>
        <View style= {styles.buttonStyle}>
        <TouchableOpacity style={styles.appButtonContainer}>

        <Text style={styles.appButtonText}>Watch</Text>
        </TouchableOpacity>
        </View>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,32,32)',
        height: 1000,
    },
    image: {
        marginTop: 50,
        height: 300,
        borderRadius: 20,
    },
    content: {
        flexDirection: 'row',
        marginHorizontal: 30,
        
    },
    header: {
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 20,
        marginVertical: 30,
        marginRight: 15,
    },
    description: {
        fontWeight: 'bold',
        color: 'grey',
        marginHorizontal: 30,  
        textAlign: 'justify'
    },
    buttonStyle:{
        margin: 40
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }, 

})