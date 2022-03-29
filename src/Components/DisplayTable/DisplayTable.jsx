import React, { useState } from 'react';
import './DisplayTable.css'

const DisplayTable = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Song Name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {props.musicLibrary.map((entry, index) => {
                    return (
                        <tr key={index}>
                            <td> {entry.title}</td>
                            <td> {entry.artist}</td>
                            <td> {entry.album}</td>
                            <td> {entry.genre}</td>
                            <td> {entry.releaseDate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default DisplayTable;