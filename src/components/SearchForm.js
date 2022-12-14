import React from 'react';

function SearchForm({ handleSubmit, handleChange, searchString }) {
	return (
		<form onSubmit={handleSubmit} className="form-horizontal">
			<input
				placeholder="What would you like to search for?"
				type="text"
				name="searchString"
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type="submit">Search</button>
		</form>
	);
}

export default SearchForm;
