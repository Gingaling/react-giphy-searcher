import React from 'react';


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

export default SearchResults;
