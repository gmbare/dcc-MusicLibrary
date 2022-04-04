import React, { useState } from 'react';
import './DisplayTable.css'


const DisplayTable = (props) => {
    
    function handleSubmit(event){
        event.preventDefault();
    }

    function handleMouseOver(event, id){
        document.getElementById(id).style.backgroundColor = "red";
        document.getElementById(id).value = "X";
    }
    function handleMouseLeave(id){
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).value = id;
    }
    function DeleteSong(id){
        console.log("Deleting song with ID of : " + id)
        props.deleteAPI(id)
    }

    return (
        <form onSubmit={handleSubmit}>
            <table className='displaytable'>
            <thead>
                <tr>
                    <th><input type="radio" id='id' name="sort" /> <label htmlFor='title'>id</label></th>
                    <th><input type="radio" id='title' name="sort" /> <label htmlFor='title'>Song Name</label></th>
                    <th><input type="radio" id='artist' name="sort" /> <label htmlFor='artist'>Artist</label></th>
                    <th><input type="radio" id='album' name="sort" /> <label htmlFor='album'>Album</label></th>
                    <th><input type="radio" id='genre' name="sort" /> <label htmlFor='genre'>Genre</label></th>
                    <th><input type="radio" id='releaseDate' name="sort" /> <label htmlFor='releaseDate'>Release Date</label></th>
                </tr>
            </thead>
            <tbody>
                {props.musicLibrary.map((entry, index) => {
                    return (
                        <tr key={index}>
                        <td><button type="button" className={`btn_background`} id={JSON.stringify(entry.id)} name={JSON.stringify(entry.id)} onMouseOver={(event) => handleMouseOver(event, JSON.stringify(entry.id))} onMouseLeave={() => handleMouseLeave(JSON.stringify(entry.id))} onClick={() => DeleteSong(entry.id)}>{JSON.stringify(entry.id)}</button></td>
                        <td className='remove_background'>{entry.title}</td>
                        <td className='remove_background'>{entry.album}</td>
                        <td className='remove_background'>{entry.artist}</td>
                        <td className='remove_background'>{entry.genre}</td>
                        <td className='remove_background'>{entry.releaseDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </form>
    );
}

export default DisplayTable;