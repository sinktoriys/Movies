import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import SearchInput from "./components/SearchInput";
// import { movies } from "./components/movies";
import * as axios from "axios";
import MoviesService from "./MoviesService";

// k_r66ege2y

// 1. install material ui
// 2. create search input (https://mui.com/material-ui/react-text-field/)
// 3. onChange console.log what user typed in
// 4. create component for 1 movie (logo, name, year, rating)

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		MoviesService.getAll().then((result) => setMovies(result.data.items));
	}, []);

	return (
		<main>
			<SearchInput />
			{movies.map((items) => (
				<MovieCard
					title={items.title}
					year={items.year}
					image={items.image}
					crew={items.crew}
					rank={items.rank}
					key={items.title}
				/>
			))}
		</main>
	);
}

export default App;
