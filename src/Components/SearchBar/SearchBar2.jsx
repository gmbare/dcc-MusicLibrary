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
                <table className='searchtable'>
                    <thead>
                        <tr>
                    <th><input type="text" id="searchString" name="searchString"/></th>
                    <th><select name="searchFilter" id='searchFilter' list="value">
                    <option value="all">All</option>
                    <option value="title">Song</option>
                    <option value="artist">Artist</option>
                    <option value="album">Album</option>
                    <option value="genre">Genre</option>
                    <option value="releaseDate">Release Date</option>
                </select></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th><label className='below' for='searchString'>Search</label></th>
                            <th><label className='below' for='searchFilter'>Filter</label></th>
                        </tr>
                    </tbody>


                </table>
            </div>
    );
}

export default SearchBar;
