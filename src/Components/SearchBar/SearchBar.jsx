import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {



    function handleChange(event){
        event.preventDefault();
        // console.log(document.getElementById('searchFilter').value)
        props.alterSearch(document.getElementById('searchString').value, document.getElementById('searchFilter').value)
    }

    return (
            <div className='entry' onChange={handleChange}>
                <input type="text" id="searchString" /><select name="searchFilter" id='searchFilter' list="value">
                    <option value="all">All</option>
                    <option value="title">Song</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="genre">Genre</option>
                    <option value="releaseDate">Release Date</option>
                </select>
            </div>
    );
}

export default SearchBar;
