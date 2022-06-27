import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Movie: MovieScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(navigator);