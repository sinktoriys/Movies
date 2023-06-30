import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const SeachInput = () => {
	const [title, setTitle] = useState("helo");
	// console.log(title);
	// console.log(setTitle);
	// const addNewMovies = () => {};
	// setMovies([]);
	const handleChange = (e) => {
		// console.log(e);
		setTitle(e.target.value);
		console.log(title);
	};
	return <TextField type="text" value={title} onChange={handleChange} />;
};

export default SeachInput;
