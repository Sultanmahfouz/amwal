import {View, StyleSheet} from 'react-native';
import { elevation } from '../common/styles';

export default function Search(){

    // Will be used late for better refactoring


    // const [title, setTitle] = useState("")

    return (
        <View></View>
        // <View>
        //                 <View style = {[styles.searchContainer, styles.elevation]}>
        //     <FontAwesome name="search" size={20} color= 'black'/>
        //         <TextInput style={styles.input}
        //                 placeholder = "Search Movie ..."
        //                 placeholderTextColor= 'black'
        //                 value={searchMovie}
        //                 onChangeText={(text) => setSearchMovie(text)}
        //                 onSubmitEditing= {() => {
        //                     if(title) setTitle("All");
        //                     setTitle("");
        //                 }}
        //                 />
        // </View>
        // </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal: 20,
        backgroundColor: 'grey',
        borderRadius: 20,
        padding: 15,
        marginBottom: 5
    },
    elevation,
    input: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 10,
    }
  })
  