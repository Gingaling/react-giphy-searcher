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

const SearchResults = ({images}) => {
		console.log(images);

	// return early if there are no images
	if (images.length === 0) {
		console.log(typeof images);
		console.log(images);
		console.log(typeof images.length);
		return <h2>No Images Found!</h2>;
	}
	return <div className="gallery" id="galleria">
			{images.map(image => <div key={image.id} className="gif">
					<img alt="" src={image.images.downsized_large.url} />
				</div>)}
		</div>;
};

	return <div>
			<img id="logo" src={logo} alt="" />
			<h1 id="titleHead">Giphy Searcher</h1>
			<SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
			<SearchResults images={images} />
		</div>;
}

export default App;
