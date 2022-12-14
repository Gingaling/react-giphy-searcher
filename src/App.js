import React, { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm.js';
import SearchResults from './components/SearchResults.js';
import logo from './magnifying-glass1.png';


function App() {
	const searchOptions = {
		key: process.env.REACT_APP_GIPHY_KEY,
		limit: 25,
		rating: 'G',
		api: 'https://api.giphy.com/v1/gifs',
		endpoint: '/search'
	};

	const [images, setImages] = useState([]);
	const [ searchString, setSearchString ] = useState('');
	
	function getImages() {
		/* Build a URL from the searchOptions object */
		const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
		
		fetch(url)
		.then(response => response.json())
		.then(response => {
			setImages(response.data);
		})
		.catch(console.error);
	}
	
	// useEffect(() => {
	// 	getImages();
	// }, []);

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getImages();
	}



	return <div>
			<img id="logo" src={logo} alt="" />
			<h1 id="titleHead">Giphy Searcher</h1>
			<SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
			<SearchResults images={images} />
		</div>;
}

export default App;
