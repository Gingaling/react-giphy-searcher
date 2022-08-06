import React from 'react';

function SearchResults({ images }) {
	// return early if there are no images
	if (images.length === 0) {
		return <h2>No Images Found!</h2>;
	}
	return (
		<div className="gallery" id="galleria">
			{images.map(image =>
				<div key={image.id} className="gif">
					<img alt="" src={image.images.downsized_large.url} />
				</div>
			)}
		</div>
	);
};

export default SearchResults;