import { View, ScrollView, StyleSheet, TextInput, Text} from "react-native";
import { useState, useEffect } from "react";
import { fetchMovies } from "../api/index";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import { elevation } from "../common/styles";
import {FontAwesome} from '@expo/vector-icons';

export default function HomeScreen(){


  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("All");

  const getMovies = async () => {
    setMovies( await fetchMovies(searchMovie));
    setSearchMovie("");
  };
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      {Object.keys(movies).length > 0 && (
        <View style= {{backgroundColor: 'rgb(32,32,32)'}}>
          <Header />

          {/* Search Needs to be refactored but no timing for the demo! */}

            <View style = {[styles.searchContainer, styles.elevation]}>
            <FontAwesome name="search" size={20} color= 'black'/>
                <TextInput style={styles.input}
                        placeholder = "Search Movie ..."
                        placeholderTextColor= 'black'
                        value={searchMovie}
                        onChangeText={(text) => setSearchMovie(text)}
                        onSubmitEditing= {getMovies}
                        />
        </View>

        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', margin: 10}}> Top Movies</Text>

         {/* Movies Need to be refactored but no timing for the demo! */}
         
        <ScrollView
            contentContainerStyle={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              marginVertical: 10,
            }}
          > 
            {movies.Search.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
            
          </ScrollView>
        </View>
      )}
    </>
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
