import React, { useState } from 'react';
import './NewSong.css'

const NewSong = (props) => {
    function handleSubmit(event) {
        event.preventDefault()
    }

    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      function handleSubmission(event) {
          event.preventDefault()
          let Postage = {'title': document.getElementById('titlePost').value ,
          'album': document.getElementById('albumPost').value,
          'artist': document.getElementById('artistPost').value,
          'genre': document.getElementById('genrePost').value,
          'releaseDate': document.getElementById('releaseDatePost').value,
          }
        //   console.log(document.getElementById('titlePost').value)
          console.log(JSON.stringify(Postage))
          closeForm()
          props.postAPI(Postage)
      }
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup_form
    return (
        <div>
            <div>
                <button className="open-button" onClick={() => openForm()}>New Song</button>
            </div>

            <div className="form-popup" id="myForm">
                <form className="form-container">
                    <h1>Song Information</h1>
                    <label htmlFor="email"><b>Title</b></label>
                    <input type="text" placeholder="Enter Song Name" name="title" id="titlePost" required/>
                    <label htmlFor="email"><b>Album</b></label>
                    <input type="text" placeholder="Enter Album" name="album"  id="albumPost" required />
                    <label htmlFor="email"><b>Artist</b></label>
                    <input type="text" placeholder="Enter Artist" name="artist" id="artistPost" required />
                    <label htmlFor="email"><b>Genre</b></label>
                    <input type="text" placeholder="Enter Genre" name="genre" id="genrePost" required />
                    <label htmlFor="psw"><b>Release Date</b></label>
                    <input type="date" placeholder="Enter Release Date" name="releaseDate" id="releaseDatePost" required />

                        <button type="submit" className="btn" onClick={(event) => handleSubmission(event)}>Submit</button>
                        <button type="button" className="btn cancel" onClick={() => closeForm()}>Cancel</button>
                </form>
            </div>
        </div>
            );
}

            export default NewSong;