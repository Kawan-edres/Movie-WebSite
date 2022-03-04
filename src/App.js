import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Buttons from "./components/Buttons";
import {AnimatePresence, motion} from 'framer-motion'

function App() {

  const [movies, setMovies] = useState([]);
  const [filter ,setFilter]=useState([]);
  const[active,setActive]=useState(0);
  const fetchP = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6c3f06f717c451311dfea0b892017d8f&language=en-US&page=1"
    );
    const result = await data.json();
    setMovies(result.results);
    setFilter(result.results)
    console.log(result);
  };

  useEffect(fetchP, []);

  return (
    <div className="App">
    <Buttons movies={movies} setFilter={setFilter} active={active} setActive={setActive}  />
      <motion.div layout className="popmovies">
      <AnimatePresence>
        {filter.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              path={movie.backdrop_path}
            />
          );
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
