import React, { useState } from 'react';
import './App.css';
export default function MakeSearchRequst() {
    const [search, setSearch] = useState(null);
const inputField - document.getElementById('inputField')
	return (
		<p>
			Welcome to the theis easy-to-use giphy searcher. In the search box, please
			enter your search terms.
		</p>
 
        <input type='text' id='inputField'>Enter your search terms.</input>

        {setSearch = inputField.val}
	);
}
