import {View, ScrollView} from 'react-native';
import MovieCard from './MovieCard';

export default function MoviesList({movies}){
    return (
<View >
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
    );
}
