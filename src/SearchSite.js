import React from 'react';
import MakeSearchRequst from 'MakeSearchRequest.js';
export default

function SearchSite() {

    url =
			'https://api.giphy.com/v1/stickers/search?api_key=EnVZQGlxXVqil1B9o6hgRjsimzwFMM5a&q={setSearch}&limit=25&offset=0&rating=g&lang=en';
    fetch(url)
    .then(res) => {
        return res.json();
    })
    .then(res) => {
        console.log(res);
        
    }
    }

}