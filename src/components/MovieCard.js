import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import {withNavigation} from 'react-navigation';
import { elevation } from "../common/styles";

// Here is the movie Card

function MovieCard({movie, navigation}) {

return (
    <TouchableOpacity
    onPress={(() => navigation.navigate("Movie", {movie: movie}))}
    >
    <View style={[styles.container, elevation]}>
        <Image style={styles.image} source={{uri: movie.Poster}}/>

            <Text style= {styles.header} >{movie.Title}</Text>

    </View>
    </TouchableOpacity>
);
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32,32,32)',
        height: 250,
        width: 190,
        alignSelf: 'stretch',
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    elevation,
    
    image: {
        height: 200,
        width: 190,
        borderRadius: 20,
    },
    
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 15,
        color: 'grey',
        alignItems: 'center',
        justifyContent: 'center',

    },

})


export default withNavigation(MovieCard);
