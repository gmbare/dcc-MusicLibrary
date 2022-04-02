import React, { useState } from 'react';
import './DisplayTable.css'


const DisplayTable = (props) => {
    
    const [showForm,setShowForm] = useState('nodisplay')
    const [showButton,setShowButton] = useState('yesdisplay')
    function handleSubmit(event, id, num){
        event.preventDefault();
    }
    
    function swapButton(){
        setShowButton((showButton) => (showButton === 'yesdisplay'?'nodisplay':'yesdisplay'))
        setShowForm((showForm) => (showForm === 'yesdisplay'?'nodisplay':'yesdisplay'))
    }
    function handleKeyDown(event) {
        if (event.key === 'Enter'){
           console.log(`${event.target.value} AND: ${event.target.id} AND ${event.target.name}`)
           setShowButton((showButton) => (showButton === 'yesdisplay'?'nodisplay':'yesdisplay'))
           setShowForm((showForm) => (showForm === 'yesdisplay'?'nodisplay':'yesdisplay'))
        }
        else if (event.key === 'Escape'){
            console.log(`${event.target.value} AND: ${event.target.id} AND ${event.target.name}`)
            setShowForm((showForm) => (showForm === 'yesdisplay'?'nodisplay':'yesdisplay'))
            setShowButton((showButton) => (showButton === 'yesdisplay'?'nodisplay':'yesdisplay'))
         }
    }

    function handleDelete(event, id){
        console.log(`Deleting entry ID:${id} from the database`)
        swapButton()
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
                            {/* <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td> */}
                            <td><input type='button' value={JSON.stringify(entry.id)} className={`${showButton} remove_background`} id={JSON.stringify(entry.id)} name={JSON.stringify(entry.id)}onClick={swapButton}/><input type='button' defaultValue={entry.id} id={JSON.stringify(entry.id)} name='id:' className={`${showForm} titleForm deleteform`} onClick={(event) => handleDelete(event, entry.id)}/> </td>
                            {/* <td><input type='button' value={JSON.stringify(entry.id)} className='remove_background' id={JSON.stringify(entry.id)} name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td> */}
                            <td><input type='button' value={entry.title} className={`${showButton} remove_background`} id={entry.title} name={JSON.stringify(entry.id)} onClick={swapButton}/><input type='text' defaultValue={entry.title} id={JSON.stringify(entry.id)} name='title:' className={`${showForm} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.album} className={`${showButton} remove_background`} id={entry.album} name={JSON.stringify(entry.id)} onClick={swapButton}/><input type='text' defaultValue={entry.album} id={JSON.stringify(entry.id)} name='album:' className={`${showForm} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.artist} className={`${showButton} remove_background`} id={entry.artist} name={JSON.stringify(entry.id)} onClick={swapButton}/><input type='text' defaultValue={entry.artist} id={JSON.stringify(entry.id)} name='artist:' className={`${showForm} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.genre} className={`${showButton} remove_background`} id={entry.genre} name={JSON.stringify(entry.id)} onClick={swapButton}/><input type='text' defaultValue={entry.genre} id={JSON.stringify(entry.id)} name='genre:' className={`${showForm} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.releaseDate} className={`${showButton} remove_background`} id={entry.releaseDate} name={JSON.stringify(entry.id)} onClick={swapButton}/><input type='text' defaultValue={entry.releaseDate} id={JSON.stringify(entry.id)} name='releaseDate:' className={`${showForm} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            {/* <td><input type='button' value={entry.artist} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.album} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.genre} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.releaseDate} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td> */}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </form>
    );
}

export default DisplayTable;