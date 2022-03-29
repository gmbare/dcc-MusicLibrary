import axios from "axios";
import { useEffect, useState } from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplayTable from "./Components/DisplayTable/DisplayTable";

export default function App() {
  //Album, Artist, Genre, ID, releaseDate, title//
  const [musicLibrary, setmusicLibrary] = useState([{}]);
  const [searchedLibrary, setSearchedLibrary] = useState([{}]);
  const musicAPI = async () => {
    let library = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
    // .then((response) => response.data)
    // .catch(err => {
    //   console.log("ERROR in API call: ")
    //   console.error(err)
    // });
    setmusicLibrary(library.data)
    setSearchedLibrary(library.data)
  }



  useEffect(() => {
    musicAPI();
  }, []);


  function alterSearch(searchTerm, searchFilter) {
    if (searchTerm == '') {
      setSearchedLibrary(musicLibrary)
    }
    else {
      searchTerm = searchTerm.toLowerCase()
      console.log(searchTerm)
      if (searchFilter == 'all') {
        // .flat 
        let tempSave = new Set([...songSearch(searchTerm), ...(artistSearch(searchTerm)), ...(albumSearch(searchTerm)), ...(genreSearch(searchTerm)), ...(releaseDateSearch(searchTerm))])
        setSearchedLibrary([...tempSave])
        // setSearchedLibrary(new Set([...songSearch(searchTerm), ...(artistSearch(searchTerm)), ...(albumSearch(searchTerm)), ...(genreSearch(searchTerm)), ...(releaseDateSearch(searchTerm))]))
        // searchArray = ([...searchArray,])
        // searchArray = ([...searchArray,])
        // searchArray = ([...searchArray])

        //Set - will only hold unique values
      }
      else if (searchFilter == 'title') {
        setSearchedLibrary(songSearch(searchTerm))
      }
      else if (searchFilter == 'artist') {
        setSearchedLibrary(artistSearch(searchTerm))
      }
      else if (searchFilter == 'album') {
        setSearchedLibrary(albumSearch(searchTerm))
      }
      else if (searchFilter == 'genre') {
        setSearchedLibrary(genreSearch(searchTerm))
      }
      else if (searchFilter == 'releaseDate') {
        setSearchedLibrary(releaseDateSearch(searchTerm))
      }
    }
  }

  function songSearch(searchTerm) {
    return (musicLibrary.filter(searchString => searchString.title.toLowerCase().includes(searchTerm)))
  }
  function artistSearch(searchTerm) {
    return (musicLibrary.filter(searchString => searchString.artist.toLowerCase().includes(searchTerm)))
  }
  function albumSearch(searchTerm) {
    return (musicLibrary.filter(searchString => searchString.album.toLowerCase().includes(searchTerm)))
  }
  function genreSearch(searchTerm) {
    return (musicLibrary.filter(searchString => searchString.genre.toLowerCase().includes(searchTerm)))
  }
  function releaseDateSearch(searchTerm) {
    return (musicLibrary.filter(searchString => searchString.releaseDate.toLowerCase().includes(searchTerm)))
  }

  // console.log(musicLibrary)

  return (
    <div className="App">
      <SearchBar alterSearch={alterSearch} />
      <DisplayTable musicLibrary={searchedLibrary}></DisplayTable>
      {/* {musicLibrary.map((song, index) => {
      return(
        <div key={index}>
          <span>{song.title},{song.artist}</span>  
        </div>
      )
    })} */}
    </div>
  )

}
// export default class MusicLibrary extends React.Component{

// state = {
//         music:[]
// }
// componentDidMount(){
//     // this.makeGetRequest();
//     axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(res => {
//         const music = res.data;
//         this.setState({music});
//     })
// }



//     // async makeGetRequest(){
//     //     try{
//     //         console.log("Hello")
//     //         let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
//     //         console.log(response.data)
//     //     }
//     //     catch (ex){
//     //         console.log('Error in API call!');
//     //     }
//     // }

// render(){
//     console.log(this.state.music)
//     console.log('Um')
//     return(
//         <ul>
//             {this.state.music.map(song => <li key={song.id}>{song.name}</li>)}
//         </ul>
//     )
// }
// }






// // import './App.css';
// // import API from './Components/API/API.js';


// // function App() {
// //   return (
// //     <div className="App">
// //       hello
// //     </div>
// //   );
// // }

// // export default App;
