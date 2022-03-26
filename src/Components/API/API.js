import axios from "axios";
import React from 'react';

export default class MusicLibrary extends React.Component{

state = {
        music:[]
}
componentDidMount(){
    console.log("hello")
    // this.makeGetRequest();
    axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
        const music = res.data;
        this.setState({music});
    })
}



    // async makeGetRequest(){
    //     try{
    //         console.log("Hello")
    //         let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    //         console.log(response.data)
    //     }
    //     catch (ex){
    //         console.log('Error in API call!');
    //     }
    // }

render(){
    return(
        <ul>
            {this.state.music.map(song => <li key={song.id}>{song.name}</li>)}
        </ul>
    )
}
}
