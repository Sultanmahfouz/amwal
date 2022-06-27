import { useState} from "react";
import { fetchMovies } from "../api";

export default () => {
  const [movies, setResults] = useState({
    data: null,
  });

  const searchMovies = async (Title) => {
    setResults({
      data: null,
    });
    try {
      const response = await fetchMovies(Title);

      setResults({
        data: response.data,
      });
    } catch (error) {
      setResults({
        data: null,
        loading: false,
        error: "Something went wrong",
      });
    }
  };

  return [movies, searchMovies];
};