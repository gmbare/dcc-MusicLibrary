import React, { useState } from 'react';
import './DisplayTable.css'


const DisplayTable = (props) => {
    
    let showFormal = [{}];
    let showButtonal = [{}];
    const [showForm,setShowForm] = useState([...showFormal])
    const [showButton,setShowButton] = useState([...showButtonal])

    function handleSubmit(event, id, num){
        event.preventDefault();
    }
    
    function swapButton(event,index){
        console.log(JSON.stringify(showButton))
        showButton[index] = (showButton[index] === 'yesdisplay'?'nodisplay':'yesdisplay')
        showForm[index] = (showForm[index] === 'yesdisplay'?'nodisplay':'yesdisplay')
        console.log(index)
        console.log(showButton[index])
        // setShowButton((showButton) => (showButton === 'yesdisplay'?'nodisplay':'yesdisplay'))
        // setShowForm((showForm) => (showForm === 'yesdisplay'?'nodisplay':'yesdisplay'))
    }
    function handleKeyDown(event,index, id, wherePut) {
        if (event.key === 'Enter'){
           console.log(event.target.value)
           showButton[index] = (showButton === 'yesdisplay'?'nodisplay':'yesdisplay')
           showForm[index] = (showForm === 'yesdisplay'?'nodisplay':'yesdisplay')

        //    setShowButton([(showButton) => (showButton[index] === 'yesdisplay'?'nodisplay':'yesdisplay')])
        //    setShowForm([(showForm) => (showForm[index] === 'yesdisplay'?'nodisplay':'yesdisplay')])
        }
        else if (event.key === 'Escape'){
            showButton[index] = (showButton === 'yesdisplay'?'nodisplay':'yesdisplay')
            showForm[index] = (showForm === 'yesdisplay'?'nodisplay':'yesdisplay')
        //    setShowButton((showButton) => (showButton === 'yesdisplay'?'nodisplay':'yesdisplay'))
        //    setShowForm((showForm) => (showForm === 'yesdisplay'?'nodisplay':'yesdisplay'))
        }
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
                    showButtonal[index] = 'yesdisplay';
                    showFormal[index] = 'nodisplay';
                    return (
                            <tr key={index}>
                            {/* <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td>
                            <td>{entry.id}</td> */}
                            <td><input type='button' value={JSON.stringify(entry.id)} className='remove_background' id={JSON.stringify(entry.id)} name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            {/* <td><input type='button' value={JSON.stringify(entry.id)} className='remove_background' id={JSON.stringify(entry.id)} name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td> */}
                            <td><input type='button' value={entry.title} className={`${showButton[index]} remove_background`} id={entry.title} name={JSON.stringify(entry.id)} onClick={(event) =>swapButton(event,index)}/><input type='text' defaultValue={entry.title} className={`${showForm[index]} titleForm`} onKeyDown={(event) => handleKeyDown(event,index, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.album} className={`${showButton[index]} remove_background`} id={entry.album} name={JSON.stringify(entry.id)} onClick={(event) =>swapButton(event,index)}/><input type='text' defaultValue={entry.album} className={`${showForm[index]} titleForm`} onKeyDown={(event) => handleKeyDown(event,index, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.artist} className={`${showButton[index]} remove_background`} id={entry.artist} name={JSON.stringify(entry.id)} onClick={(event) =>swapButton(event,index)}/><input type='text' defaultValue={entry.artist} className={`${showForm[index]} titleForm`} onKeyDown={(event) => handleKeyDown(event,index, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.genre} className={`${showButton[index]} remove_background`} id={entry.genre} name={JSON.stringify(entry.id)} onClick={(event) =>swapButton(event,index)}/><input type='text' defaultValue={entry.genre} className={`${showForm[index]} titleForm`} onKeyDown={(event) => handleKeyDown(event,index, entry.id, 'title:')}/></td>
                            <td><input type='button' value={entry.releaseDate} className={`${showButton[index]} remove_background`} id={entry.releaseDate} name={JSON.stringify(entry.id)} onClick={(event) =>swapButton(event,index)}/><input type='text' defaultValue={entry.releaseDate} className={`${showForm[index]} titleForm`} onKeyDown={(event) => handleKeyDown(event, entry.id, 'title:')}/></td>
                            {/* <td><input type='button' value={entry.artist} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.album} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.genre} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td>
                            <td><input type='button' value={entry.releaseDate} className='remove_background' name={JSON.stringify(entry.id)} onClick={(event) => handleSubmit(event, entry.id)}/></td> */}
                        </tr>
                    );
                })}
                {setShowButton(showButtonal)}
                {setShowForm(showButtonal)}
            </tbody>
        </table>
        </form>
    );
}

export default DisplayTable;