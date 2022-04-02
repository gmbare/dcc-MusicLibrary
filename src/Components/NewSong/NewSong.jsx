import React, { useState } from 'react';

const NewSong = (props) => {
    function handleSubmit(event){
        event.preventDefault()
    }
    
    
    return ( 
        <form onSubmit={handleSubmit}>
            <div className='selectdiv'> 
            <button >Testing</button> <button />
            </div>
        <div className='inputdiv'>
            <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
        </div>
        </form>

     );
}
 
export default NewSong;