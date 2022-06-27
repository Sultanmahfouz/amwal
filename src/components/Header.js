import {Text, View, StyleSheet} from 'react-native';

export default function Header(){
    return (
<View style = {styles.container}>
    <Text style = {styles.lightHeader}>Relax With</Text>
    <Text style = {styles.boldHeader}>Sultan Movies!</Text>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginBottom: 20,
        marginHorizontal: 20,
    },

    lightHeader: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
    },
    boldHeader: {
        fontSize: 35,
        color: 'grey',
        fontWeight: 'bold',
    }

})